import { useState } from 'react'

interface HeaderProps {
  toggleTheme: () => void
  isDark: boolean
}

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Education', href: '#education' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

function scrollToSection(href: string) {
  if (href === '#') return
  const target = document.querySelector(href)
  if (!target) return
  const headerHeight = document.querySelector('header')?.offsetHeight ?? 0
  const top = target.getBoundingClientRect().top + window.scrollY - headerHeight
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  window.scrollTo({ top, behavior: prefersReduced ? 'auto' : 'smooth' })
}

export default function Header({ toggleTheme, isDark }: HeaderProps) {
  const [mobileOpen, setMobileOpen] = useState(false)

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    scrollToSection(href)
    setMobileOpen(false)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 py-6 bg-[rgba(219,234,254,0.85)] dark:bg-[rgba(6,26,52,0.85)] backdrop-blur-md border-b border-black/[0.08] dark:border-white/[0.08] transition-colors duration-300">
      <nav
        className="w-full max-w-[1200px] mx-auto px-6 flex justify-between items-center"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <a
          href="#"
          className="font-display text-xl font-semibold tracking-tight text-[#1A1A1A] dark:text-[#FAFAFA] no-underline"
          aria-label="Home"
        >
          <span className="text-accent-primary">/</span>akilaiguchi
        </a>

        {/* Desktop nav */}
        <ul className="hidden md:flex list-none gap-10" role="list">
          {NAV_LINKS.map(({ label, href }) => (
            <li key={href}>
              <a
                href={href}
                onClick={(e) => handleNavClick(e, href)}
                className="nav-underline text-sm font-medium text-[#4A4A4A] dark:text-[#B8B8B8] hover:text-[#1A1A1A] dark:hover:text-[#FAFAFA] no-underline transition-colors duration-150"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="w-10 h-10 flex items-center justify-center rounded-full border border-black/[0.08] dark:border-white/[0.08] text-[#4A4A4A] dark:text-[#B8B8B8] hover:border-black/[0.16] dark:hover:border-white/[0.16] hover:text-[#1A1A1A] dark:hover:text-[#FAFAFA] transition-all bg-transparent cursor-pointer"
          >
            {isDark ? (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="5" />
                <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
              </svg>
            ) : (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </svg>
            )}
          </button>

          {/* Hamburger */}
          <button
            className="flex md:hidden flex-col gap-1.5 bg-transparent border-none cursor-pointer p-2"
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <span
              className={`block w-6 h-0.5 bg-[#1A1A1A] dark:bg-[#FAFAFA] rounded-full transition-transform duration-150 ${mobileOpen ? 'translate-y-2 rotate-45' : ''}`}
            />
            <span
              className={`block w-6 h-0.5 bg-[#1A1A1A] dark:bg-[#FAFAFA] rounded-full transition-opacity duration-150 ${mobileOpen ? 'opacity-0' : ''}`}
            />
            <span
              className={`block w-6 h-0.5 bg-[#1A1A1A] dark:bg-[#FAFAFA] rounded-full transition-transform duration-150 ${mobileOpen ? '-translate-y-2 -rotate-45' : ''}`}
            />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-black/[0.08] dark:border-white/[0.08] bg-[rgba(219,234,254,0.97)] dark:bg-[rgba(6,26,52,0.97)] backdrop-blur-md">
          <ul className="list-none flex flex-col py-4 px-6 gap-1" role="list">
            {NAV_LINKS.map(({ label, href }) => (
              <li key={href}>
                <a
                  href={href}
                  onClick={(e) => handleNavClick(e, href)}
                  className="block py-3 text-base font-medium text-[#4A4A4A] dark:text-[#B8B8B8] hover:text-[#1A1A1A] dark:hover:text-[#FAFAFA] no-underline transition-colors"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}
