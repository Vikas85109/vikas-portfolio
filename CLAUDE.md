# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Build and Development Commands

```bash
npm run dev      # Start development server with hot module reloading
npm run build    # Build for production (outputs to dist/)
npm run lint     # Run ESLint checks
npm run preview  # Preview production build locally
```

No test framework is configured in this project.

## Architecture Overview

This is a single-page React 18 portfolio website built with Vite and styled with Tailwind CSS.

### Data-Driven Design

All portfolio content is centralized in `src/data/portfolioData.js`. This file contains:
- personalInfo (name, title, contact, bio)
- skills (categorized with proficiency levels)
- experience (work history)
- projects (filterable by category)
- education, interests, socialLinks

Components read from this data file rather than having hardcoded content. To update portfolio content, modify `portfolioData.js` rather than individual components.

### Component Structure

`src/components/` contains 8 section components that compose the single-page layout:
- **Navbar.jsx** - Scroll-aware navigation with mobile menu toggle
- **Hero.jsx** - Typing animation effect for introduction
- **About.jsx** - Personal info with statistics display
- **Skills.jsx** - Categorized skills with proficiency bars
- **Experience.jsx** - Timeline layout for work history
- **Projects.jsx** - Filterable project cards (personal/company filter)
- **Contact.jsx** - Form with validation
- **Footer.jsx** - Links and closing content

`App.jsx` orchestrates all sections in order.

### Styling Approach

- Tailwind CSS with custom theme extensions in `tailwind.config.js`
- Custom color palette: primary (indigo), secondary (purple), dark theme
- Custom animations defined: float, glow, slide-up, fade-in
- Glass morphism effects with backdrop blur
- Dark theme only (no light mode toggle)
- Global custom utilities in `src/index.css`
