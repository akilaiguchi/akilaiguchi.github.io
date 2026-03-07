import MaruModel from './MaruModel'

export default function Hero() {
  return (
    <section
      className="min-h-screen flex items-center pt-32 pb-20 relative overflow-hidden"
      aria-labelledby="hero-heading"
    >
      {/* Ambient blobs */}
      <div className="absolute top-[20%] -right-[10%] w-[600px] h-[600px] rounded-full bg-accent-primary opacity-[0.08] blur-[80px] pointer-events-none" />
      <div className="absolute bottom-[10%] -left-[5%] w-[400px] h-[400px] rounded-full bg-accent-tertiary opacity-[0.1] blur-[60px] pointer-events-none" />

      <div className="w-full max-w-[1200px] mx-auto px-6 relative flex items-center justify-between gap-8">
        <div className="max-w-[600px] relative z-10 flex-1">
          {/* Badge
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#F0EDE8] dark:bg-[#242424] border border-black/[0.08] dark:border-white/[0.08] rounded-full text-sm text-[#4A4A4A] dark:text-[#B8B8B8] mb-8 animate-fade-up">
            <span
              className="w-2 h-2 rounded-full bg-accent-tertiary animate-float"
              aria-hidden="true"
            />
            Available for opportunities
          </div> */}

          {/* Heading */}
          <h1
            id="hero-heading"
            className="font-display text-[clamp(2.5rem,10vw,6rem)] font-semibold leading-[1.05] tracking-[-0.03em] mb-8 animate-fade-up [animation-delay:100ms]"
          >
            <span className="block gradient-text">Akila Iguchi</span>
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-[#4A4A4A] dark:text-[#B8B8B8] max-w-[540px] mb-12 animate-fade-up [animation-delay:200ms]">
            I strive to create real, impactful products to solve complex problems.
            Always eager to learn and grow, planting my seeds of dedication now to
            pick the fruits of my labor in the future.
            Interest in backend SWE and inegration of ML in applications.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 animate-fade-up [animation-delay:300ms]">
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault()
                const el = document.querySelector('#projects')
                if (el) {
                  const h = document.querySelector('header')?.offsetHeight ?? 0
                  window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - h, behavior: 'smooth' })
                }
              }}
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#73a0e5] to-[#5023f2] text-white text-sm font-medium rounded-full shadow-[0_4px_24px_rgba(115,160,229,0.3)] hover:shadow-[0_8px_32px_rgba(115,160,229,0.4)] hover:-translate-y-0.5 transition-all no-underline"
            >
              Projects
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M7 17l9.2-9.2M17 17V7H7" />
              </svg>
            </a>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault()
                const el = document.querySelector('#contact')
                if (el) {
                  const h = document.querySelector('header')?.offsetHeight ?? 0
                  window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - h, behavior: 'smooth' })
                }
              }}
              className="inline-flex items-center gap-2 px-8 py-4 bg-transparent text-[#0f172a] dark:text-[#FAFAFA] text-sm font-medium border border-black/[0.08] dark:border-white/[0.08] rounded-full hover:bg-[#bfdbfe] dark:hover:bg-[#242424] hover:border-black/[0.16] dark:hover:border-white/[0.16] hover:-translate-y-0.5 transition-all no-underline"
            >
              Contact Me
            </a>
          </div>
        </div>

        {/* 3D Model */}
        <div
          className="hidden lg:block w-[580px] h-[580px] shrink-0 relative z-10"
          aria-hidden="true"
        >
          <MaruModel />
        </div>

        {/* Scroll indicator */}
        <div
          className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#8A8A8A] dark:text-[#6B6B6B] text-[0.75rem] uppercase tracking-widest animate-fade-in [animation-delay:800ms]"
          aria-hidden="true"
        >
          Scroll
          <span className="w-px h-10 bg-gradient-to-b from-[#8A8A8A] dark:from-[#6B6B6B] to-transparent animate-float" />
        </div>
      </div>
    </section>
  )
}
