import { useScrollAnimation } from '../hooks/useScrollAnimation'

export default function Contact() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section
      id="contact"
      ref={ref as React.RefObject<HTMLElement>}
      className={`py-24 md:py-32 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      aria-labelledby="contact-heading"
    >
      <div className="w-full max-w-[1200px] mx-auto px-6">
        {/* Section header */}
        <div className="mb-16">
          <div className="w-20 h-0.5 bg-accent-primary mb-2" />
          <h2
            id="contact-heading"
            className="font-display text-[clamp(2rem,5vw,3.5rem)] font-semibold tracking-tight text-[#1A1A1A] dark:text-[#FAFAFA] mt-1"
          >
            Contact Me
          </h2>
        </div>

        {/* Info */}
        <div className="max-w-lg">
          <div>
            <h3 className="font-display text-2xl font-semibold text-[#FAFAFA] mb-6">
              Let's get in touch!
            </h3>
            <p className="text-[#B8B8B8] mb-10">
              I'm always interested in new projects and opportunities.
              Feel free to reach out for any inquiries.
            </p>

            <nav className="flex flex-col gap-4" aria-label="Contact methods">
              {/* Email */}
              <a
                href="mailto:hello@example.com"
                className="inline-flex items-center gap-4 text-base text-[#B8B8B8] hover:text-accent-primary no-underline transition-colors"
              >
                <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                akilamauihi@gmail.com
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/akilaiguchi"
                className="inline-flex items-center gap-4 text-base text-[#B8B8B8] hover:text-accent-primary no-underline transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                </svg>
                GitHub
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/akilaiguchi/"
                className="inline-flex items-center gap-4 text-base text-[#B8B8B8] hover:text-accent-primary no-underline transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
                LinkedIn
              </a>
            </nav>
          </div>
        </div>
      </div>
    </section>
  )
}
