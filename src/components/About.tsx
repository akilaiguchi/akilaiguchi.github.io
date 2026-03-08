import { useScrollAnimation } from '../hooks/useScrollAnimation'

const SKILL_GROUPS = [
  {
    label: 'Programming Languages',
    skills: ['Python', 'C/C++', 'Java', 'SQL', 'JavaScript', 'TypeScript', 'HTML/CSS'],
  },
  {
    label: 'Frameworks & Libraries',
    skills: ['React', 'FastAPI', 'Node.js', 'Express'],
  },
  {
    label: 'AI / ML',
    skills: ['TensorFlow', 'Scikit-Learn', 'XGBoost', 'OpenCV'],
  },
  {
    label: 'Tools & Technical',
    skills: ['Git/Github', 'Unix/Linux', 'Docker', 'Redis', 'MySQL', 'Tableau'],
  },
]

export default function About() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section
      id="about"
      ref={ref as React.RefObject<HTMLElement>}
      className={`py-24 md:py-32 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      aria-labelledby="about-heading"
    >
      <div className="w-full max-w-[1200px] mx-auto px-6">
        {/* Section header */}
        <div className="mb-16">
          <div className="w-20 h-0.5 bg-accent-primary mb-2" />
          <h2
            id="about-heading"
            className="font-display text-[clamp(2rem,5vw,3.5rem)] font-semibold tracking-tight text-[#1A1A1A] dark:text-[#FAFAFA] mt-1"
          >
            Curious. Driven. Passionate.
          </h2>
        </div>

        {/* Grid */}
        <div className="grid gap-16 md:grid-cols-2 md:gap-20">
          {/* Content */}
          <div>
            <p className="text-lg text-[#4A4A4A] dark:text-[#B8B8B8] mb-6">
              Software Engineer with a passion for learning, committed to the endless pursuit of perfection.
              I learn fast and efficiently, quickly applying knowledge to engineer solutions.
            </p>
            <p className="text-lg text-[#4A4A4A] dark:text-[#B8B8B8] mb-10">
              Originally from Maui, Hawaii and currently living in Orange, California. In my free time I like to
              surf, lift, hike, and spending time outdoors with friends and family. Fun fact I am also
              conversationally fluent in Japanese.
            </p>

            <div className="flex flex-col gap-6">
              {SKILL_GROUPS.map((group) => (
                <div key={group.label}>
                  <h3 className="text-xs font-semibold uppercase tracking-widest text-[#8A8A8A] dark:text-[#6B6B6B] mb-2">
                    {group.label}
                  </h3>
                  <ul className="flex flex-wrap gap-2 list-none" role="list">
                    {group.skills.map((skill) => (
                      <li
                        key={skill}
                        className="px-4 py-2 bg-black/[0.04] dark:bg-white/[0.06] border border-black/[0.08] dark:border-white/[0.08] rounded-full text-sm text-[#4A4A4A] dark:text-[#B8B8B8] hover:border-accent-primary hover:text-accent-primary transition-all cursor-default"
                      >
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <figure className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-[#bfdbfe] dark:bg-[#1A1A1A] m-0">
            <img
              src="/images/professional_headshot.jpg"
              alt="Akila Iguchi"
              loading="lazy"
              className="w-full h-full object-cover object-top"
            />
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#73a0e5] to-[#5023f2] opacity-[0.15] z-10 pointer-events-none" />
          </figure>
        </div>
      </div>
    </section>
  )
}
