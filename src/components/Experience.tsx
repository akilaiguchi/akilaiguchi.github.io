import { useScrollAnimation } from '../hooks/useScrollAnimation'

interface ExperienceItem {
  date: string
  type: string
  title: string
  company: string
  description: string
  logo?: string
}

const EXPERIENCE: ExperienceItem[] = [
  {
    date: 'Sep 2024 — Present',
    type: 'Part-time',
    title: 'Software Student Assistant',
    company: 'Chapman University Office of Internal Audit',
    description:
      'Developed Python-based ETL pipelines with Pandas to normalize and validate operational data, centralized financial audit data into a Tableau monitoring dashboard with automated anomaly detection, and streamlined document approval workflows by integrating Microsoft 365 services using Power Automate.',
    logo: '/logos/CU.png',
  },
  {
    date: 'Feb 2024 — May 2024',
    type: 'Part-time',
    title: 'Student Sciences Lab/Tech Research Assistant',
    company: 'Keck Center for Science and Engineering',
    description:
      'Streamlined chemical inventory management across multiple independent research labs, utilizing a systematic organization framework to maintain consistent inventory records for hundreds of specialized compounds.',
    logo: '/logos/CU.png',
  },
]

export default function Experience() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section
      id="experience"
      ref={ref as React.RefObject<HTMLElement>}
      className={`py-24 md:py-32 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      aria-labelledby="experience-heading"
    >
      <div className="w-full max-w-[1200px] mx-auto px-6">
        {/* Section header */}
        <div className="mb-16">
          <div className="w-20 h-0.5 bg-accent-primary mb-2" />
          <h2
            id="experience-heading"
            className="font-display text-[clamp(2rem,5vw,3.5rem)] font-semibold tracking-tight text-[#1A1A1A] dark:text-[#FAFAFA] mt-1"
          >
            Professional Experience
          </h2>
        </div>

        {/* List */}
        <div className="flex flex-col gap-12">
          {EXPERIENCE.map((item, i) => (
            <article
              key={i}
              className={`grid gap-6 md:grid-cols-[200px_1fr] md:gap-12 pb-12 ${i < EXPERIENCE.length - 1 ? 'border-b border-black/[0.08] dark:border-white/[0.08]' : ''}`}
            >
              {/* Meta */}
              <div className="text-sm text-[#8A8A8A] dark:text-[#6B6B6B]">
                <p className="font-medium text-[#4A4A4A] dark:text-[#B8B8B8] mb-1">{item.date}</p>
                <p className="mb-4">{item.type}</p>
                {item.logo && (
                  <img
                    src={item.logo}
                    alt=""
                    className="w-16 h-16 object-contain"
                  />
                )}
              </div>

              {/* Content */}
              <div>
                <h3 className="font-display text-xl font-semibold text-[#1A1A1A] dark:text-[#FAFAFA] mb-1">
                  {item.title}
                </h3>
                <p className="text-base text-accent-primary mb-4">{item.company}</p>
                <p className="text-[#4A4A4A] dark:text-[#B8B8B8]">{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
