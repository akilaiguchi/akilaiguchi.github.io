# Personal Portfolio

A personal portfolio website built with React, TypeScript, and Tailwind CSS. Preserves the original design's look and feel while modernizing the stack.

## Tech Stack

- **React 18** — component-based UI
- **TypeScript** — static typing
- **Tailwind CSS v3** — utility-first styling
- **Vite 5** — fast dev server and build tool

## Project Structure

```
my-github/
├── index.html                     # Vite entry point with inline theme init script
├── package.json
├── vite.config.ts
├── tsconfig.json
├── tailwind.config.js             # Custom fonts, accent colors, keyframe animations
├── postcss.config.js
├── images/
│   └── professional_headshot.jpg
└── src/
    ├── main.tsx
    ├── App.tsx                    # Theme state + top-level layout
    ├── index.css                  # Tailwind directives + gradient-text, nav underline
    ├── hooks/
    │   └── useScrollAnimation.ts  # IntersectionObserver scroll-fade hook
    └── components/
        ├── Header.tsx             # Fixed nav, glassmorphism, mobile menu, theme toggle
        ├── Hero.tsx               # Ambient blobs, animated badge, gradient heading, CTAs
        ├── About.tsx              # Bio, skills pills, headshot with gradient overlay
        ├── Projects.tsx           # 2×2 project card grid with hover effects
        ├── Experience.tsx         # Work history timeline layout
        ├── Contact.tsx            # Controlled contact form + social links
        └── Footer.tsx             # Copyright + social icon links
```

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server (http://localhost:5173)
npm run dev

# Type-check and build for production
npm run build

# Preview production build
npm run preview
```

## Design Details

### Theme System
Dark mode is the default. Theme preference is persisted in `localStorage`. An inline script in `index.html` sets the `dark` class on `<html>` before React hydrates to prevent any flash of unstyled content. Toggling calls `document.documentElement.classList.toggle('dark')` and updates state in `App.tsx`.

### Typography
Fonts are loaded from [Fontshare](https://www.fontshare.com/):
- **Clash Display** — headings and display text
- **Satoshi** — body text

### Color Palette

| Token | Dark | Light |
|---|---|---|
| Background primary | `#0D0D0D` | `#FAF8F5` |
| Background secondary | `#1A1A1A` | `#FFFFFF` |
| Background tertiary | `#242424` | `#F0EDE8` |
| Text primary | `#FAFAFA` | `#1A1A1A` |
| Text secondary | `#B8B8B8` | `#4A4A4A` |
| Text muted | `#6B6B6B` | `#8A8A8A` |
| Accent primary | `#73a0e5` | `#73a0e5` |
| Accent secondary | `#5023f2` | `#5023f2` |
| Accent tertiary | `#81B29A` | `#81B29A` |

### Animations
Custom keyframes are defined in `tailwind.config.js`:
- `animate-fade-up` — hero load-in animation with `animation-fill-mode: both`
- `animate-fade-in` — opacity fade for the scroll indicator
- `animate-float` — subtle vertical float for the status dot and scroll line
- `animate-gradient-shift` — shifting gradient on the hero "Efficient" heading

Scroll-triggered section animations use a `useScrollAnimation` hook backed by `IntersectionObserver`. All animations respect `prefers-reduced-motion`.
