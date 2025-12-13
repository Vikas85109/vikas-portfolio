// Portfolio Data - Easy to update and maintain
export const personalInfo = {
  name: "Vikas Sharma",
  role: "Frontend Engineer",
  specialization: "React.js",
  experience: "3.5+ Years",
  email: "vikassharma85109@gmail.com",
  phone: "+91 8510928039",
  location: "Gurgaon, India",
  linkedin: "https://linkedin.com/in/vikassharma",
  github: "https://github.com/Vikas85109",
  summary: "Frontend Developer with 3.5+ years of experience building responsive, scalable, and user-friendly web applications using React.js, JavaScript (ES6+), Redux, and modern UI frameworks. Strong in component-based architecture, API integration, performance optimization, and writing clean, maintainable code.",
  resumeLink: "/vikas_resume.pdf",
};

export const skills = [
  { name: "React.js", level: 95, icon: "⚛️", category: "Frontend" },
  { name: "JavaScript", level: 90, icon: "📜", category: "Frontend" },
  // { name: "Next.js", level: 85, icon: "▲", category: "Frontend" },
  { name: "Redux", level: 85, icon: "🔄", category: "State Management" },
  { name: "Tailwind CSS", level: 90, icon: "🎨", category: "Styling" },
  { name: "HTML/CSS", level: 95, icon: "🌐", category: "Frontend" },
  { name: "Git/GitHub", level: 85, icon: "🔀", category: "Tools" },
  { name: "Bootstrap", level: 85, icon: "🅱️", category: "Styling" },
  { name: "Material UI", level: 80, icon: "🎯", category: "UI Library" },
];

export const experience = [
  {
    id: 1,
    company: "BindassDeal Digital Private Limited",
    role: "React Developer",
    duration: "March 2022 - Present",
    location: "Remote",
    description: [
      "TuVozNow — Developed complete frontend for a video platform similar to YouTube using React.js with video playback, upload, likes, views, and user interaction features",
      "Vijaya Publications / Vijaya Books — Built book listing UI, filters, dashboards, and content modules using React.js and Tailwind CSS",
      "Krishna Travel Services — Developed booking forms, travel package UI sections, and mobile-optimized responsive layouts",
      "Optimized API calls, improved performance, and designed fully responsive UI for all devices",
    ],
    techStack: ["React.js", "Tailwind CSS", "JavaScript", "REST API", "Responsive Design"],
  },
  {
    id: 2,
    company: "Pepcoding Education Private Limited",
    role: "Product Engineer Intern",
    duration: "June 2021 - March 2022",
    location: "Noida, India",
    description: [
      "Resolved frontend development queries in HTML, CSS, JavaScript, and React.js",
      "Developed UI components and mini-applications for learning platforms (Nados, Core)",
      "Built hands-on practice projects using React.js to enhance learning outcomes",
    ],
    techStack: ["React.js", "HTML", "CSS", "JavaScript"],
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
    degree: "B.Tech in Computer Science and Engineering",
    institution: "GITM Gurgaon, MDU Rohtak, Gurugram",
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
    url: "https://linkedin.com/in/vikassharma",
    icon: "linkedin",
  },
  {
    name: "Email",
    url: "mailto:vikassharma85109@gmail.com",
    icon: "email",
  },
];
