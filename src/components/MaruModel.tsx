import { useRef, Suspense, useMemo, useEffect } from 'react'
import { Canvas, useFrame, useLoader } from '@react-three/fiber'
import { Environment, Lightformer } from '@react-three/drei'
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js'
import * as THREE from 'three'

const chromeMaterial = new THREE.MeshStandardMaterial({
  color: new THREE.Color(0xffffff),
  metalness: 1.0,
  roughness: 0.2,
})

function Model({ scrollY }: { scrollY: React.MutableRefObject<number> }) {
  const ref = useRef<THREE.Group>(null)
  const obj = useLoader(OBJLoader, '/3d/maru.obj')

  const chrome = useMemo(() => {
    const clone = obj.clone()
    clone.traverse((child: THREE.Object3D) => {
      if ((child as THREE.Mesh).isMesh) {
        (child as THREE.Mesh).material = chromeMaterial
      }
    })
    return clone
  }, [obj])

  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y = Math.PI * 0 + scrollY.current * 0.008
    }
  })

  return <primitive ref={ref} object={chrome} scale={1.2} />
}

export default function MaruModel() {
  const scrollY = useRef(0)

  useEffect(() => {
    const onScroll = () => { scrollY.current = window.scrollY }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <Canvas
      camera={{ position: [0, 0, 2.5], fov: 60 }}
      gl={{ alpha: true, antialias: true }}
      style={{ background: 'transparent' }}
    >
      <Suspense fallback={null}>
        <Environment resolution={2048}>
          <mesh scale={100}>
            <sphereGeometry />
            <meshBasicMaterial color="#111820" side={THREE.BackSide} />
          </mesh>
          {/* Strong key light — creates the bright chrome highlight */}
          <Lightformer form="circle" intensity={6} position={[3, 3, 4]} scale={14} color="#ffffff" />
          {/* Soft fills — just enough to prevent pure black, not enough to wash out */}
          <Lightformer form="circle" intensity={0.8} position={[-8, 1, 0]} scale={14} color="#aabbdd" />
          <Lightformer form="circle" intensity={0.8} position={[0, 1, -8]} scale={14} color="#aabbdd" />
          <Lightformer form="circle" intensity={0.6} position={[-6, 1, 6]} scale={12} color="#8899bb" />
          <Lightformer form="circle" intensity={0.6} position={[6, 1, -6]} scale={12} color="#8899bb" />
          <Lightformer form="circle" intensity={0.5} position={[0, 8, 0]} scale={14} color="#ffffff" />
          <Lightformer form="circle" intensity={0.3} position={[0, -8, 0]} scale={14} color="#223344" />
        </Environment>
        <Model scrollY={scrollY} />
      </Suspense>
    </Canvas>
  )
}
