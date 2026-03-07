import { useScrollAnimation } from '../hooks/useScrollAnimation'

interface Project {
  number: string
  tags: string[]
  title: string
  description: string
  href: string
  image?: string
}

const PROJECTS: Project[] = [
  {
    number: '01',
    tags: ['Python', 'FastAPI', 'MySQL', 'Telegram', 'Celery', 'Redis'],
    title: 'SwellCheck',
    description:
      'Automated asynchronous swell information system that scrapes maritime buoy data and delivers real-time updates via a Telegram bot, built on a containerized microservices architecture.',
    href: 'https://github.com/akilaiguchi/SwellCheck',
    image: './public/images/swellcheck.png',
  },
  {
    number: '02',
    tags: ['Python', 'OpenCV', 'MediaPipe', 'TensorFlow'],
    title: 'Gesture Classification',
    description:
      'Real-time hand gesture recognition system that captures hand movements from live video, extracts hand landmark data, and classifies complex gestures to enable interactive gesture-based control.',
    href: 'https://github.com/akilaiguchi/hand_gesture_recognition',
    image: './public/images/gesture_classification.png',
  },
  {
    number: '03',
    tags: ['Python', 'Pandas', 'Numpy', 'Matplotlib', 'Scikit-Learn', 'XGBoost'],
    title: 'Hotel Retention Prediction',
    description:
      'ML system that analyzes large-scale hotel booking data to predict guest stay duration, identify behavioral patterns across property types, and generate insights to support revenue and retention strategies.',
    href: 'https://github.com/akilaiguchi/MGSC310_capstone',
    image: './public/images/hotel_retention.png',
  },
  {
    number: '04',
    tags: ['C++'],
    title: 'University Student-Faculty Database',
    description:
      'CLI student-faculty database system that stores academic records in a self-balancing binary search tree, enabling efficient lookup, full CRUD operations, and persistent storage across sessions.',
    href: 'https://github.com/akilaiguchi/student-faculty-database',
    image: './public/images/c++.png',
  },
  {
    number: '05',
    tags: ['JavaScript', 'React', 'Mapbox', 'Node.js', 'Express', 'MySQL'],
    title: 'Accessibility Reporting Website',
    description: 'Campus infrastructure reporting platform that allows users to submit location-based reports on an interactive map and collaboratively prioritize repairs through community voting and discussion.',
    href: 'https://github.com/akilaiguchi/chapman-accessibility-site',
    image: './public/images/accessibility_site.png',
  },
  {
    number: '06',
    tags: ['Java'],
    title: 'Egyptian Rat Screw',
    description:'Interactive CLI simulation of the card game Egyptian Rat Screw that models players, decks, and game rules to autonomously run and manage full rounds of gameplay.',
    href: 'https://github.com/akilaiguchi/Egyptian-Rat-Screw',
    image: './public/images/java.png',
  },
]

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="relative bg-white/[0.03] border border-white/[0.08] rounded-2xl overflow-hidden hover:-translate-y-1 hover:border-white/[0.16] transition-all duration-300">
      <div className="aspect-[16/10] bg-white/[0.05] relative overflow-hidden">
        {project.image ? (
          <img
            src={project.image}
            alt={`${project.title} preview`}
            className="absolute inset-0 w-full h-full object-cover"
          />
        ) : (
          <span className="absolute top-4 left-4 font-display text-[2.5rem] font-bold text-[#FAFAFA] opacity-[0.12]">
            {project.number}
          </span>
        )}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#061a34] opacity-60 pointer-events-none" />
      </div>

      {/* Content */}
      <div className="p-8">
        <div className="flex flex-wrap gap-2 mb-3">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs font-medium text-accent-primary uppercase tracking-[0.05em]"
            >
              {tag}
            </span>
          ))}
        </div>
        <h3 className="font-display text-xl font-semibold text-[#FAFAFA] mb-2">
          {project.title}
        </h3>
        <p className="text-sm text-[#B8B8B8] mb-6">{project.description}</p>
        <a
          href={project.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`View ${project.title} on GitHub`}
          className="group inline-flex items-center gap-2 text-sm font-medium text-[#FAFAFA] hover:text-accent-primary no-underline transition-colors"
        >
          View Project
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
            className="transition-transform group-hover:translate-x-1"
          >
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </a>
      </div>
    </article>
  )
}

export default function Projects() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section
      id="projects"
      ref={ref as React.RefObject<HTMLElement>}
      className={`py-24 md:py-32 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      aria-labelledby="projects-heading"
    >
      <div className="w-full max-w-[1200px] mx-auto px-6">
        {/* Section header */}
        <div className="mb-16">
          <div className="w-20 h-0.5 bg-accent-primary mb-2" />
          <h2
            id="projects-heading"
            className="font-display text-[clamp(2rem,5vw,3.5rem)] font-semibold tracking-tight text-[#1A1A1A] dark:text-[#FAFAFA] mt-1"
          >
            Projects
          </h2>
        </div>

        {/* Grid */}
        <div className="grid gap-6 md:grid-cols-2">
          {PROJECTS.map((project) => (
            <ProjectCard key={project.number} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}
