import { useScrollAnimation } from '../hooks/useScrollAnimation'

const EDUCATION = {
  date: 'Aug 2022 — May 2026',
  degree: 'Bachelor of Science in Computer Science',
  institution: 'Chapman University',
  minor: 'Minor in Data Analytics',
  gpa: '3.9 GPA',
  logo: '/logos/CU.png',
  resumeUrl: '/resume.pdf',
}

export default function Education() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section
      id="education"
      ref={ref as React.RefObject<HTMLElement>}
      className={`py-24 md:py-32 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      aria-labelledby="education-heading"
    >
      <div className="w-full max-w-[1200px] mx-auto px-6">
        {/* Section header */}
        <div className="mb-16">
          <div className="w-20 h-0.5 bg-accent-primary mb-2" />
          <h2
            id="education-heading"
            className="font-display text-[clamp(2rem,5vw,3.5rem)] font-semibold tracking-tight text-[#1A1A1A] dark:text-[#FAFAFA] mt-1"
          >
            Education
          </h2>
        </div>

        {/* Card */}
        <div className="relative rounded-3xl border border-white/[0.08] bg-white/[0.03] overflow-hidden p-10 md:p-16 flex flex-col md:flex-row items-center md:items-start gap-10 md:gap-16">
          {/* Glow accent */}
          <div className="absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full bg-accent-primary opacity-[0.06] blur-[100px] pointer-events-none" />
          <div className="absolute -bottom-32 -right-32 w-[400px] h-[400px] rounded-full bg-accent-secondary opacity-[0.06] blur-[80px] pointer-events-none" />

          {/* Logo */}
          <div className="shrink-0 flex items-center justify-center w-28 h-28 md:w-36 md:h-36 rounded-2xl bg-white/[0.06] border border-white/[0.08] p-4">
            <img
              src={EDUCATION.logo}
              alt="Chapman University"
              className="w-full h-full object-contain"
            />
          </div>

          {/* Details */}
          <div className="flex-1 text-center md:text-left">
            <p className="text-sm text-[#8A8A8A] dark:text-[#6B6B6B] mb-2 tracking-wide uppercase">
              {EDUCATION.date}
            </p>
            <h3 className="font-display text-2xl md:text-3xl font-semibold text-[#1A1A1A] dark:text-[#FAFAFA] mb-2 leading-tight">
              {EDUCATION.degree}
            </h3>
            <p className="text-lg text-accent-primary font-medium mb-1">{EDUCATION.institution}</p>
            <p className="text-sm text-[#8A8A8A] dark:text-[#6B6B6B] mb-8">
              {EDUCATION.minor}&ensp;&middot;&ensp;{EDUCATION.gpa}
            </p>

            <a
              href={EDUCATION.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#73a0e5] to-[#5023f2] text-white text-sm font-medium rounded-full shadow-[0_4px_24px_rgba(115,160,229,0.3)] hover:shadow-[0_8px_32px_rgba(115,160,229,0.4)] hover:-translate-y-0.5 transition-all no-underline"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
