# Vikas Sharma - Portfolio Website

A modern, responsive personal portfolio website built with React.js and Tailwind CSS.

## Live Demo

[View Portfolio](https://vikassharma.dev)

## Features

- Modern Design: Dark theme with purple/indigo gradient accents
- Glassmorphism Effects: Beautiful glass-like UI components
- Smooth Animations: Typing effect, hover animations, floating elements
- Fully Responsive: Works seamlessly on all devices
- Single Page Application: Smooth scrolling between sections
- Dynamic Content: Easy to update portfolio data from a single file

## Tech Stack

- **React.js 18** - UI Library
- **Vite** - Build Tool
- **Tailwind CSS 3** - Styling
- **PostCSS** - CSS Processing

## Sections

1. **Hero** - Animated introduction with typing effect
2. **About** - Personal info, education, and stats
3. **Skills** - Technical skills with proficiency bars
4. **Experience** - Work history timeline
5. **Projects** - Filterable project showcase
6. **Contact** - Contact form and social links
7. **Footer** - Quick links and additional info

## Project Structure

```
vikas-portfolio/
├── public/
│   ├── favicon.svg
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Experience.jsx
│   │   ├── Projects.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── data/
│   │   └── portfolioData.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── vite.config.js
└── README.md
```

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/Vikas85109/vikas-portfolio.git
cd vikas-portfolio

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Customization

Edit `src/data/portfolioData.js` to update your personal information, skills, experience, and projects.

---

## Complete Source Code

Below is the complete source code for all files in this portfolio project.

---

### package.json

```json
{
  "name": "vikas-portfolio",
  "private": true,
  "version": "1.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "lint": "eslint .",
    "preview": "vite preview"
  },
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0"
  },
  "devDependencies": {
    "@vitejs/plugin-react": "^4.2.1",
    "autoprefixer": "^10.4.16",
    "eslint": "^8.55.0",
    "eslint-plugin-react": "^7.33.2",
    "eslint-plugin-react-hooks": "^4.6.0",
    "eslint-plugin-react-refresh": "^0.4.5",
    "postcss": "^8.4.32",
    "tailwindcss": "^3.4.0",
    "vite": "^5.0.8"
  }
}
```

---

### index.html

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="Vikas Sharma - Frontend Developer specializing in React.js, building high-performance and scalable UIs" />
    <meta name="keywords" content="Vikas Sharma, Frontend Developer, React Developer, JavaScript, Next.js, Web Developer, Portfolio" />
    <meta name="author" content="Vikas Sharma" />
    <meta property="og:type" content="website" />
    <meta property="og:title" content="Vikas Sharma | Frontend Developer" />
    <meta property="og:description" content="Passionate frontend developer building high-performance and scalable UIs with React.js" />
    <meta property="og:url" content="https://vikassharma.dev" />
    <meta name="theme-color" content="#6366f1" />
    <title>Vikas Sharma | Frontend Developer</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
```

---

### vite.config.js

```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
})
```

---

### tailwind.config.js

```javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#6366f1",
        secondary: "#8b5cf6",
        dark: "#0f172a",
        darker: "#020617",
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'slide-up': 'slideUp 0.5s ease-out',
        'fade-in': 'fadeIn 0.5s ease-out',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(99, 102, 241, 0.5)' },
          '100%': { boxShadow: '0 0 40px rgba(139, 92, 246, 0.8)' },
        },
        slideUp: {
          '0%': { transform: 'translateY(100px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
```

---

### postcss.config.js

```javascript
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
```

---

### src/main.jsx

```jsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
```

---

### src/App.jsx

```jsx
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
```

---

### src/index.css

```css
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Fira+Code:wght@400;500&display=swap');

@tailwind base;
@tailwind components;
@tailwind utilities;

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  font-family: 'Inter', sans-serif;
  background: linear-gradient(135deg, #0f172a 0%, #1e1b4b 50%, #0f172a 100%);
  min-height: 100vh;
  color: #e2e8f0;
  overflow-x: hidden;
}

/* Custom Scrollbar */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: #1e293b;
}

::-webkit-scrollbar-thumb {
  background: linear-gradient(180deg, #6366f1, #8b5cf6);
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: linear-gradient(180deg, #818cf8, #a78bfa);
}

/* Gradient Text */
.gradient-text {
  background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #d946ef 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* Glass Effect */
.glass {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

/* Glow Effect */
.glow {
  box-shadow: 0 0 20px rgba(99, 102, 241, 0.3),
              0 0 40px rgba(139, 92, 246, 0.2),
              0 0 60px rgba(217, 70, 239, 0.1);
}

/* Card Hover Effect */
.card-hover {
  transition: all 0.3s ease;
}

.card-hover:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 40px rgba(99, 102, 241, 0.3);
}

/* Typing Animation */
.typing-cursor::after {
  content: '|';
  animation: blink 1s infinite;
}

@keyframes blink {
  0%, 50% { opacity: 1; }
  51%, 100% { opacity: 0; }
}

/* Background Decoration */
.bg-gradient-radial {
  background: radial-gradient(circle at center, rgba(99, 102, 241, 0.15) 0%, transparent 70%);
}

/* Code Block Style */
code {
  font-family: 'Fira Code', monospace;
}
```

---

### src/data/portfolioData.js

```javascript
// Portfolio Data - Easy to update and maintain
export const personalInfo = {
  name: "Vikas Sharma",
  role: "Frontend Developer",
  specialization: "React.js",
  experience: "3.5+ Years",
  email: "vikassharma85109@gmail.com",
  phone: "+91 8510928039",
  location: "Gurgaon, India",
  linkedin: "https://linkedin.com/in/vikas-sharma-4bb27418a",
  github: "https://github.com/Vikas85109",
  summary: "Passionate frontend developer building high-performance and scalable UIs. Specialized in React.js ecosystem with expertise in creating modern, responsive web applications.",
  resumeLink: "#",
};

export const skills = [
  { name: "React.js", level: 95, icon: "⚛️", category: "Frontend" },
  { name: "JavaScript", level: 90, icon: "📜", category: "Frontend" },
  { name: "Next.js", level: 85, icon: "▲", category: "Frontend" },
  { name: "Redux", level: 85, icon: "🔄", category: "State Management" },
  { name: "Tailwind CSS", level: 90, icon: "🎨", category: "Styling" },
  { name: "HTML/CSS", level: 95, icon: "🌐", category: "Frontend" },
  { name: "Node.js", level: 75, icon: "🟢", category: "Backend" },
  { name: "Express.js", level: 70, icon: "🚂", category: "Backend" },
  { name: "MongoDB", level: 70, icon: "🍃", category: "Database" },
  { name: "Git/GitHub", level: 85, icon: "🔀", category: "Tools" },
  { name: "Bootstrap", level: 85, icon: "🅱️", category: "Styling" },
  { name: "Material UI", level: 80, icon: "🎯", category: "UI Library" },
];

export const experience = [
  {
    id: 1,
    company: "Sov Technologies",
    role: "React Developer",
    duration: "Sep 2022 - Present",
    location: "Ghaziabad, India",
    description: [
      "Working on Blockchain Project as a React Developer",
      "Integrated multiple APIs and handled complex design implementations",
      "Built decentralized application interfaces with Web3 integration",
      "Collaborated with backend teams for seamless API integration",
    ],
    techStack: ["React.js", "Web3", "JavaScript", "CSS", "API Integration"],
    projectLink: "https://swap.shibnobi.com/#/swap",
  },
  {
    id: 2,
    company: "Pepcoding Education Pvt Ltd",
    role: "Product Engineer (Intern)",
    duration: "Jan 2022 - Jun 2022",
    location: "Noida, India",
    description: [
      "Assisted students with doubt support for web development questions",
      "Developed projects using HTML, CSS, React.js, and Node.js",
      "Worked with various courses like Nados, Core team, etc.",
      "Contributed to educational content and course materials",
    ],
    techStack: ["React.js", "Node.js", "HTML", "CSS", "JavaScript"],
  },
  {
    id: 3,
    company: "Delhivery Pvt Ltd",
    role: "C2C Partner (Intern)",
    duration: "Feb 2021 - Dec 2021",
    location: "Gurgaon, India",
    description: [
      "Worked as a Salesforce Admin for logistics operations",
      "Managed day-to-day customer relationship management services",
      "Handled e-commerce supply chain coordination",
    ],
    techStack: ["Salesforce", "CRM", "Logistics Management"],
  },
];

export const personalProjects = [
  {
    id: 1,
    title: "Fashionista E-commerce",
    description: "A full-featured e-commerce platform for fashion products with modern UI, cart management, and seamless shopping experience.",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=400&fit=crop",
    techStack: ["React.js", "JavaScript", "CSS", "Context API"],
    liveLink: "https://fashionista-ecommerce-react.netlify.app",
    features: ["Product Catalog", "Shopping Cart", "Responsive Design", "Filter & Search"],
    type: "personal",
  },
  {
    id: 2,
    title: "Job Portal",
    description: "A comprehensive job portal connecting job seekers with employers. Features job listings, applications, and user profiles.",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&h=400&fit=crop",
    techStack: ["React.js", "JavaScript", "CSS", "REST API"],
    liveLink: "https://job-portal-reactt.netlify.app",
    features: ["Job Listings", "User Authentication", "Application System", "Search & Filter"],
    type: "personal",
  },
  {
    id: 3,
    title: "Booking Portal",
    description: "A modern booking portal UI for travel and accommodation services with intuitive interface and booking management.",
    image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=600&h=400&fit=crop",
    techStack: ["React.js", "JavaScript", "Tailwind CSS"],
    liveLink: "https://booking-portal-ui.netlify.app",
    features: ["Booking System", "Date Selection", "Property Listings", "Modern UI"],
    type: "personal",
  },
  {
    id: 4,
    title: "YouTube Clone",
    description: "A YouTube clone application replicating core features like video browsing, search functionality, and responsive video player.",
    image: "https://images.unsplash.com/photo-1611162616475-46b635cb6868?w=600&h=400&fit=crop",
    techStack: ["React.js", "YouTube API", "CSS", "JavaScript"],
    liveLink: "https://youtubee-clone-react.netlify.app",
    features: ["Video Player", "Search", "Channel View", "Responsive Design"],
    type: "personal",
  },
];

export const companyProjects = [
  {
    id: 5,
    title: "TuVozNow",
    description: "A professional platform built with modern web technologies, featuring dynamic content and interactive user experience.",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&h=400&fit=crop",
    techStack: ["React.js", "JavaScript", "API Integration"],
    liveLink: "https://www.tuvoznow.com/",
    features: ["Dynamic Content", "User Interface", "API Integration", "Responsive"],
    type: "company",
  },
  {
    id: 6,
    title: "Vijaya Books",
    description: "An e-commerce platform for books with comprehensive catalog, cart management, and seamless checkout experience.",
    image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=600&h=400&fit=crop",
    techStack: ["React.js", "E-commerce", "Payment Gateway"],
    liveLink: "https://beta.vijayabooks.in/",
    features: ["Book Catalog", "Shopping Cart", "User Accounts", "Payment Integration"],
    type: "company",
  },
  {
    id: 7,
    title: "Krishna Travel Services",
    description: "A travel services website with booking capabilities, tour packages, and comprehensive travel information.",
    image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=600&h=400&fit=crop",
    techStack: ["React.js", "CSS", "Booking System"],
    liveLink: "https://krishnatravelservices.com/",
    features: ["Tour Packages", "Booking System", "Gallery", "Contact Forms"],
    type: "company",
  },
];

export const education = [
  {
    degree: "B.Tech in Computer Science & Engineering",
    institution: "Gurgaon Institute of Technology and Management",
    duration: "2015 - 2019",
  },
];

export const interests = ["Digital Games", "Playing Cricket", "Music"];

export const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/Vikas85109",
    icon: "github",
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/vikas-sharma-4bb27418a",
    icon: "linkedin",
  },
  {
    name: "Email",
    url: "mailto:vikassharma85109@gmail.com",
    icon: "email",
  },
];
```

---

### src/components/Navbar.jsx

```jsx
import { useState, useEffect } from 'react';
import { personalInfo } from '../data/portfolioData';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = navLinks.map(link => link.href.substring(1));
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-slate-900/95 backdrop-blur-md shadow-lg shadow-purple-500/10'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="text-2xl font-bold gradient-text hover:opacity-80 transition-opacity"
          >
            {personalInfo.name.split(' ')[0]}
            <span className="text-purple-400">.</span>
          </a>

          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  activeSection === link.href.substring(1)
                    ? 'text-white bg-gradient-to-r from-indigo-500 to-purple-500'
                    : 'text-gray-300 hover:text-white hover:bg-white/10'
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>

          <a
            href={personalInfo.resumeLink}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg text-white font-medium hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300 hover:-translate-y-0.5"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Resume
          </a>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-gray-300 hover:text-white hover:bg-white/10 transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        <div className={`md:hidden transition-all duration-300 overflow-hidden ${isMobileMenuOpen ? 'max-h-96 pb-4' : 'max-h-0'}`}>
          <div className="flex flex-col space-y-1 pt-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                  activeSection === link.href.substring(1)
                    ? 'text-white bg-gradient-to-r from-indigo-500 to-purple-500'
                    : 'text-gray-300 hover:text-white hover:bg-white/10'
                }`}
              >
                {link.name}
              </a>
            ))}
            <a
              href={personalInfo.resumeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mx-4 mt-2 px-4 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg text-white font-medium text-center"
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
```

---

### src/components/Hero.jsx

```jsx
import { useEffect, useState } from 'react';
import { personalInfo, socialLinks } from '../data/portfolioData';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const roles = ['Frontend Developer', 'React.js Expert', 'UI/UX Enthusiast', 'Problem Solver'];

  useEffect(() => {
    const handleTyping = () => {
      const currentRole = roles[loopNum % roles.length];
      const updatedText = isDeleting
        ? currentRole.substring(0, displayText.length - 1)
        : currentRole.substring(0, displayText.length + 1);

      setDisplayText(updatedText);

      if (!isDeleting && updatedText === currentRole) {
        setTimeout(() => setIsDeleting(true), 2000);
        setTypingSpeed(50);
      } else if (isDeleting && updatedText === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setTypingSpeed(150);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, loopNum, typingSpeed]);

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial"></div>

        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-purple-400/30 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 5}s`,
            }}
          ></div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left space-y-6 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full border border-white/10 backdrop-blur-sm">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
              <span className="text-sm text-gray-300">Available for opportunities</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              Hi, I'm <span className="gradient-text">{personalInfo.name}</span>
            </h1>

            <div className="h-16 flex items-center justify-center lg:justify-start">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl text-gray-300">
                <span className="text-purple-400">&lt;</span>
                <span className="typing-cursor">{displayText}</span>
                <span className="text-purple-400">/&gt;</span>
              </h2>
            </div>

            <p className="text-lg text-gray-400 max-w-xl mx-auto lg:mx-0">
              {personalInfo.summary}
            </p>

            <div className="flex items-center justify-center lg:justify-start gap-4 text-gray-400">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>{personalInfo.location}</span>
              </div>
              <div className="w-1 h-1 bg-gray-500 rounded-full"></div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>{personalInfo.experience} Experience</span>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-4">
              <button
                onClick={scrollToContact}
                className="group px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl text-white font-semibold hover:shadow-xl hover:shadow-purple-500/30 transition-all duration-300 hover:-translate-y-1"
              >
                <span className="flex items-center gap-2">
                  Get In Touch
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </button>
              <button
                onClick={scrollToProjects}
                className="px-8 py-4 border-2 border-purple-500/50 rounded-xl text-white font-semibold hover:bg-purple-500/10 hover:border-purple-400 transition-all duration-300 hover:-translate-y-1"
              >
                View Projects
              </button>
            </div>

            <div className="flex items-center justify-center lg:justify-start gap-4 pt-6">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 glass rounded-xl hover:bg-white/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-purple-500/20"
                  title={social.name}
                >
                  {social.icon === 'github' && (
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  )}
                  {social.icon === 'linkedin' && (
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  )}
                  {social.icon === 'email' && (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  )}
                </a>
              ))}
            </div>
          </div>

          <div className="relative flex justify-center lg:justify-end animate-fade-in">
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 blur-xl opacity-50 animate-pulse"></div>
              <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-1 animate-float">
                <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center overflow-hidden">
                  <div className="text-center p-8">
                    <div className="text-6xl sm:text-7xl lg:text-8xl font-bold gradient-text">
                      {personalInfo.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div className="mt-4 text-gray-400 font-mono text-sm">
                      <span className="text-purple-400">const</span> developer = <span className="text-green-400">"awesome"</span>;
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute -top-4 -right-4 px-4 py-2 glass rounded-lg animate-float" style={{ animationDelay: '0.5s' }}>
                <span className="text-2xl">⚛️</span>
                <span className="ml-2 text-sm font-medium">React.js</span>
              </div>
              <div className="absolute -bottom-4 -left-4 px-4 py-2 glass rounded-lg animate-float" style={{ animationDelay: '1s' }}>
                <span className="text-2xl">📜</span>
                <span className="ml-2 text-sm font-medium">JavaScript</span>
              </div>
              <div className="absolute top-1/2 -right-8 px-4 py-2 glass rounded-lg animate-float" style={{ animationDelay: '1.5s' }}>
                <span className="text-2xl">🎨</span>
                <span className="ml-2 text-sm font-medium">Tailwind</span>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="flex flex-col items-center gap-2 text-gray-400">
            <span className="text-sm">Scroll Down</span>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
```

---

### src/components/About.jsx

```jsx
import { personalInfo, education, interests } from '../data/portfolioData';

const About = () => {
  const stats = [
    { label: 'Years Experience', value: '3.5+' },
    { label: 'Projects Completed', value: '15+' },
    { label: 'Technologies', value: '12+' },
    { label: 'Happy Clients', value: '10+' },
  ];

  return (
    <section id="about" className="py-20 lg:py-32 relative">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-purple-500/5 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <h2 className="text-sm uppercase tracking-wider text-purple-400 font-semibold mb-4">
            Get To Know Me
          </h2>
          <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            About <span className="gradient-text">Me</span>
          </h3>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="relative">
            <div className="relative">
              <div className="glass rounded-2xl p-8 glow">
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  <span className="ml-4 text-gray-400 text-sm font-mono">about-me.js</span>
                </div>

                <div className="font-mono text-sm space-y-3">
                  <div>
                    <span className="text-purple-400">const</span>{' '}
                    <span className="text-blue-400">developer</span>{' '}
                    <span className="text-white">=</span>{' '}
                    <span className="text-yellow-400">{'{'}</span>
                  </div>
                  <div className="pl-4">
                    <span className="text-green-400">name</span>
                    <span className="text-white">:</span>{' '}
                    <span className="text-orange-400">"{personalInfo.name}"</span>
                    <span className="text-white">,</span>
                  </div>
                  <div className="pl-4">
                    <span className="text-green-400">role</span>
                    <span className="text-white">:</span>{' '}
                    <span className="text-orange-400">"{personalInfo.role}"</span>
                    <span className="text-white">,</span>
                  </div>
                  <div className="pl-4">
                    <span className="text-green-400">experience</span>
                    <span className="text-white">:</span>{' '}
                    <span className="text-orange-400">"{personalInfo.experience}"</span>
                    <span className="text-white">,</span>
                  </div>
                  <div className="pl-4">
                    <span className="text-green-400">location</span>
                    <span className="text-white">:</span>{' '}
                    <span className="text-orange-400">"{personalInfo.location}"</span>
                    <span className="text-white">,</span>
                  </div>
                  <div className="pl-4">
                    <span className="text-green-400">isAvailable</span>
                    <span className="text-white">:</span>{' '}
                    <span className="text-purple-400">true</span>
                    <span className="text-white">,</span>
                  </div>
                  <div>
                    <span className="text-yellow-400">{'}'}</span>
                    <span className="text-white">;</span>
                  </div>
                </div>
              </div>

              <div className="absolute -top-6 -left-6 w-24 h-24 border-2 border-purple-500/30 rounded-2xl"></div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 border-2 border-indigo-500/30 rounded-2xl"></div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="space-y-4">
              <h4 className="text-2xl font-bold text-white">
                Passionate Frontend Developer Based in India
              </h4>
              <p className="text-gray-400 leading-relaxed">
                {personalInfo.summary}
              </p>
              <p className="text-gray-400 leading-relaxed">
                With {personalInfo.experience} of hands-on experience, I specialize in building
                modern web applications using React.js and its ecosystem. I love turning complex
                problems into simple, beautiful, and intuitive designs.
              </p>
            </div>

            <div className="glass rounded-xl p-6">
              <h5 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                <svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                </svg>
                Education
              </h5>
              {education.map((edu, index) => (
                <div key={index}>
                  <p className="text-white font-medium">{edu.degree}</p>
                  <p className="text-gray-400 text-sm">{edu.institution}</p>
                  <p className="text-purple-400 text-sm">{edu.duration}</p>
                </div>
              ))}
            </div>

            <div>
              <h5 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                <svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
                Interests
              </h5>
              <div className="flex flex-wrap gap-3">
                {interests.map((interest, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 glass rounded-lg text-sm text-gray-300 hover:text-white hover:bg-white/10 transition-colors"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-20">
          {stats.map((stat, index) => (
            <div key={index} className="glass rounded-2xl p-6 text-center card-hover">
              <div className="text-3xl sm:text-4xl font-bold gradient-text mb-2">
                {stat.value}
              </div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
```

---

*Note: The remaining components (Skills.jsx, Experience.jsx, Projects.jsx, Contact.jsx, Footer.jsx) follow similar patterns. See the source files in the `src/components/` directory for complete code.*

---

## Deployment

### Deploy to Netlify

1. Build: `npm run build`
2. Drag `dist` folder to Netlify or connect GitHub repo

### Deploy to Vercel

```bash
npm i -g vercel
vercel
```

## License

MIT License

## Contact

**Vikas Sharma**
- Email: vikassharma85109@gmail.com
- LinkedIn: [Vikas Sharma](https://linkedin.com/in/vikas-sharma-4bb27418a)
- GitHub: [Vikas85109](https://github.com/Vikas85109)
