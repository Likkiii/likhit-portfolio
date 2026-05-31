export const profile = {
  name: "Likhit Ajeesh",
  title: "Software Engineer",
  tagline: "Software engineer by day. Sprinter, dancer, and K-pop enthusiast the rest of the time.",
  roles: [
    "Software Engineer",
    "Full-Stack Developer",
    "National-level Athlete",
    "Dancer & Fitness Enthusiast",
  ],
  location: "Bengaluru, India",
  email: "likhitajeesh20@gmail.com",
  links: {
    linkedin: "https://www.linkedin.com/in/likhit-ajeesh/",
    github: "https://github.com/Likkiii",
    leetcode: "https://leetcode.com/u/likkiii/",
    resume: "/Likhit_Ajeesh_Resume.pdf",
  },
  stats: [
    { value: 2, suffix: "+", label: "Yrs Experience" },
    { value: 5, suffix: "+", label: "Production Services" },
    { value: 1800, suffix: "+", label: "Event Users Served" },
    { value: 3, suffix: "×", label: "Faster Releases" },
  ],
  about: `Software engineer who loves building things end to end — from backend systems handling millions of events to frontends that people actually enjoy using. I work on real-time platforms, infrastructure automation, and everything in between.

Outside of code, I'm a national-level sprinter, a dancer, and someone who's always chasing the next thing to learn. I like clean architecture, fast deploys, and solving hard problems with simple solutions.`,
};

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  location: string;
  type: string;
  highlights: string[];
  tech: string[];
  badge?: { label: string; image: string };
}

export const experience: ExperienceItem[] = [
  {
    company: "Exotel",
    role: "Software Engineer - I",
    period: "Jul 2024 — Present",
    location: "Bengaluru",
    type: "Full-time",
    highlights: [
      "Built real-time multi-tenant conversation platforms handling millions of daily events.",
      "Automated zero-downtime schema migrations across 100+ tenant databases.",
      "Standardized Kubernetes deployments with GitOps — accelerated release cycles 3×.",
      "Awarded Medallion of Honor for high test coverage across microservices.",
    ],
    tech: ["Java", "Spring Boot", "Python", "PostgreSQL", "Kafka", "Kubernetes", "Docker"],
    badge: { label: "Medallion of Honor — View Certificate", image: "/medallion-of-honor.png" },
  },
  {
    company: "Exotel",
    role: "Software Engineer Intern",
    period: "Jan 2024 — Jul 2024",
    location: "Bengaluru",
    type: "Internship",
    highlights: [
      "Built RCS messaging workflows and chatbot automation for BFSI clients.",
      "Automated knowledge-base workflows, cutting manual support intervention by ~60%.",
      "Shipped dashboards for ticket analytics and customer sentiment monitoring.",
    ],
    tech: ["Python", "FastAPI", "OpenAI", "React", "Analytics"],
  },
  {
    company: "Softinfo Systems",
    role: "Frontend Developer Intern",
    period: "May 2022 — Jul 2022",
    location: "Remote",
    type: "Internship",
    highlights: [
      "Built a reporting portal in Vue.js + Tailwind CSS, adopted by 200+ employees.",
      "Implemented auth flows, dynamic dashboards, and responsive UI.",
    ],
    tech: ["Vue.js", "Tailwind CSS", "Vite"],
  },
];

export const education = [
  {
    school: "Vellore Institute of Technology",
    degree: "B.Tech — Computer Science & Engineering",
    period: "2020 — 2024",
    location: "Vellore, India",
  },
  {
    school: "Indian School Muladha",
    degree: "Grade XII (CBSE) — Science",
    period: "2019 — 2020",
    location: "Muladha, Oman",
  },
];

export const skillCategories = [
  {
    name: "Languages & Frameworks",
    skills: ["Java", "Spring Boot", "Python", "FastAPI", "Celery", "JavaScript", "TypeScript", "React", "Next.js", "Vue", "Node.js", "Kafka", "Redux", "Tailwind CSS"],
  },
  {
    name: "Databases & Infrastructure",
    skills: ["PostgreSQL", "pgvector", "TimescaleDB", "MySQL", "MongoDB", "Redis", "Docker", "Kubernetes", "Helm", "ArgoCD", "Terraform", "Ansible", "AWS", "ECR"],
  },
  {
    name: "Practices & Tools",
    skills: ["System Design", "Microservices", "CI/CD", "GitOps", "REST APIs", "E2E Testing", "Selenium", "SonarQube", "Liquibase", "Jenkins", "SQL"],
  },
];

export interface ProjectItem {
  title: string;
  description: string;
  period: string;
  tags: string[];
  links: { live?: string; github?: string; githubBackend?: string };
  featured: boolean;
  image?: string;
}

export const projects: ProjectItem[] = [
  {
    title: "Reverse Coding Portal",
    description:
      "Portal for ACM-VIT's flagship coding event — 1800+ participants, roulette-based assignments, and live leaderboards.",
    period: "2022",
    tags: ["React", "Redux", "Tailwind"],
    links: {
      live: "https://rcpc.acmvit.in/",
      github: "https://github.com/ACM-VIT/reverse-coding-2022-dashboard",
    },
    featured: true,
    image: "/projects/project-reverse-coding.jpg",
  },
  {
    title: "Hermes",
    description:
      "End-to-end encrypted group chat with AES, real-time sockets, and JWT sessions.",
    period: "2023",
    tags: ["MERN", "Socket.io", "JWT", "AES"],
    links: {
      github: "https://github.com/Likkiii/Hermes",
      githubBackend: "https://github.com/Likkiii/Hermes-Backend",
    },
    featured: true,
    image: "/projects/project-hermes.jpg",
  },
  {
    title: "ACTA — MoM App",
    description:
      "PWA for managing Minutes of Meeting docs — auth, CRUD, and team collaboration for 60+ members.",
    period: "2021",
    tags: ["MERN", "PWA"],
    links: { github: "https://github.com/ACM-VIT/minutes-of-meeting-backend" },
    featured: true,
    image: "/projects/project-acta.jpg",
  },
];

export const awards = [
  {
    title: "Medallion of Honor — Collaboration Award",
    org: "Exotel · Q3 FY25-26",
    year: "2025",
    highlight: true,
  },
  {
    title: "National-level Athlete",
    org: "CBSE Nationals — 100m, 200m, 4×100m Relay",
    year: "2019",
    highlight: false,
  },
  {
    title: "School Topper — Science (96.2%)",
    org: "Indian School Muladha",
    year: "2020",
    highlight: false,
  },
];

export interface InterestItem {
  emoji: string;
  label: string;
}

export const interests: InterestItem[] = [
  { emoji: "💻", label: "Tech" },
  { emoji: "🏃", label: "Sprinting" },
  { emoji: "💃", label: "Dancing" },
  { emoji: "⚽", label: "Football" },
  { emoji: "🏏", label: "Cricket" },
  { emoji: "🏸", label: "Badminton" },
  { emoji: "🚴", label: "Cycling" },
  { emoji: "🎮", label: "Gaming" },
  { emoji: "🇰🇷", label: "Korean Culture" },
  { emoji: "🎬", label: "Anime" },
  { emoji: "☕", label: "Coffee" },
  { emoji: "✈️", label: "Travel" },
];

export const navLinks = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];
