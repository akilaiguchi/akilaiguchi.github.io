export default function Footer() {
  return (
    <footer className="py-12 border-t border-black/[0.08] dark:border-white/[0.08]">
      <div className="w-full max-w-[1200px] mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <p className="text-sm text-[#8A8A8A] dark:text-[#6B6B6B]">
            © 2026 akilaiguchi.
          </p>

          <nav className="flex gap-4" aria-label="Social media links">
            {/* GitHub */}
            <a
              href="https://github.com/akilaiguchi"
              className="w-10 h-10 flex items-center justify-center border border-black/[0.08] dark:border-white/[0.08] rounded-full text-[#4A4A4A] dark:text-[#B8B8B8] hover:border-accent-primary hover:text-accent-primary hover:bg-[rgba(115,160,229,0.1)] no-underline transition-all"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <svg className="w-[18px] h-[18px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
              </svg>
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/akilaiguchi/"
              className="w-10 h-10 flex items-center justify-center border border-black/[0.08] dark:border-white/[0.08] rounded-full text-[#4A4A4A] dark:text-[#B8B8B8] hover:border-accent-primary hover:text-accent-primary hover:bg-[rgba(115,160,229,0.1)] no-underline transition-all"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <svg className="w-[18px] h-[18px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect x="2" y="9" width="4" height="12" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>
          </nav>
        </div>
      </div>
    </footer>
  )
}
