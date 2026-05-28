export const profile = {
  name: "Likhit Ajeesh",
  title: "Software Engineer",
  tagline: "Building scalable platforms, AI pipelines & delightful web experiences",
  roles: [
    "Software Engineer @ Exotel",
    "Gen AI & Real-time Systems",
    "Full-Stack Developer",
    "Athlete & Creative Coder",
  ],
  location: "Bengaluru, Karnataka, India",
  email: "likhitajeesh20@gmail.com",
  links: {
    linkedin: "https://www.linkedin.com/in/likhit-ajeesh/",
    github: "https://github.com/Likkiii",
  },
  stats: [
    { value: 2, suffix: "+", label: "Yrs Experience" },
    { value: 8, suffix: "+", label: "Projects Shipped" },
    { value: 1800, suffix: "+", label: "Hackathon Reach" },
    { value: 8.75, suffix: "", label: "VIT CGPA", decimals: 2 },
  ],
  about: `I'm an SDE-1 at Exotel, where I build real-time conversation data platforms, semantic intent matching with pgvector, and LLM/ASR pipelines. Previously, I led web teams at IEEE CS-VIT and shipped event portals at ACM-VIT during my B.Tech at VIT Vellore (CSE, 8.75 CGPA).

Beyond code, I'm a national-level athlete, dancer, and someone who loves turning ideas into polished products — from hackathon-winning portals to production Kubernetes deployments.`,
};

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  location: string;
  type: string;
  highlights: string[];
  tech: string[];
}

export const experience: ExperienceItem[] = [
  {
    company: "Exotel",
    role: "Software Engineer - I",
    period: "Jul 2024 — Present",
    location: "Bengaluru, India",
    type: "Full-time",
    highlights: [
      "Built a real-time conversation data platform for ingesting, enriching, and persisting interactions.",
      "Delivered semantic intent matching with pgvector and hierarchical models for routing accuracy.",
      "Designed API-driven LLM/ASR pipelines with precheck gating and resume-on-callback.",
      "Shipped Interaction Service with webhook ingestion and batched enrichment.",
      "Automated multi-tenant DB patching via Liquibase APIs.",
      "Streamlined deployments with Kubernetes, Helm, ArgoCD, Terraform, and Ansible.",
    ],
    tech: ["Java", "Python", "PostgreSQL", "pgvector", "Kubernetes", "Terraform", "LLM/ASR"],
  },
  {
    company: "Exotel",
    role: "Tech Intern",
    period: "Jan 2024 — Jul 2024",
    location: "Bengaluru, India",
    type: "Internship",
    highlights: [
      "Designed RCS solutions for interactive messaging workflows.",
      "Built BFSI chatbot demos with loan categorization and automated follow-ups.",
      "Created dashboards with RAG scoring and OpenAI sentiment analysis for CSAT.",
    ],
    tech: ["Python", "OpenAI", "RAG", "RCS", "Analytics"],
  },
  {
    company: "IEEE Computer Society - VIT",
    role: "Web Lead",
    period: "Feb 2023 — Dec 2023",
    location: "Vellore, India",
    type: "Leadership",
    highlights: [
      "Managed a web team of 60 juniors across beginner to intermediate projects.",
      "Introduced open-source collaboration and industry-level programming standards.",
      "Conducted webinars and bootcamps on Web and ML domains.",
    ],
    tech: ["React", "Team Leadership", "Open Source"],
  },
  {
    company: "Softinfo Systems",
    role: "Frontend Developer Intern",
    period: "Jun 2022 — Jul 2022",
    location: "Remote, India",
    type: "Internship",
    highlights: [
      "Built an employee Reporting Portal with Vue.js and Tailwind CSS.",
      "Implemented authentication, dynamic UI, and Vue Datagrid integrations.",
    ],
    tech: ["Vue.js", "Tailwind CSS", "Vite", "Vue Router"],
  },
  {
    company: "ACM-VIT",
    role: "Web Developer & Event Coordinator",
    period: "Jan 2021 — Jun 2022",
    location: "Vellore, India",
    type: "Volunteer",
    highlights: [
      "Built Reverse Coding Portal, Summer Bootcamp site, and event registration platforms.",
      "Coordinated Code2Create hackathon and Forktober open-source initiative.",
    ],
    tech: ["React", "Redux", "MERN", "Tailwind CSS"],
  },
];

export const education = [
  {
    school: "Vellore Institute of Technology",
    degree: "B.Tech — Computer Science",
    period: "2020 — 2024",
    location: "Vellore, India",
    score: "CGPA: 8.75",
    activities: "ACM, IEEE CS, VIT Dance Club, Fitness & Beyond",
    achievements: ["Top 10 — Equinox'21 Hackathon (RoboVITics)"],
  },
  {
    school: "Indian School Muladha",
    degree: "CBSE — PCM + Computer Science",
    period: "2014 — 2020",
    location: "Muladha, Oman",
    score: "12th: 96.2% · 10th: 95.6%",
    activities: "National-level Athletics, Cricket, Football",
    achievements: [
      "School topper in 10th & 12th",
      "Athletics Team Captain (2019)",
      "CBSE National Athletics — 5th in 4×100m relay",
    ],
  },
];

export const skillCategories = [
  { name: "Languages", skills: ["Java", "Python", "JavaScript", "TypeScript", "C", "C++", "SQL"] },
  { name: "Frontend", skills: ["React", "Vue.js", "HTML/CSS", "Tailwind CSS", "Redux", "Responsive UI"] },
  { name: "Backend & Data", skills: ["Node.js", "PostgreSQL", "pgvector", "REST APIs", "Webhooks", "Liquibase"] },
  { name: "Cloud & DevOps", skills: ["Kubernetes", "Helm", "ArgoCD", "Terraform", "Ansible", "Docker", "CI/CD"] },
  { name: "AI & ML", skills: ["LLM Pipelines", "RAG", "OpenAI", "ASR", "Sentiment Analysis", "Semantic Search"] },
  { name: "Tools", skills: ["Git", "SonarQube", "Figma", "Socket.io", "Selenium E2E", "Postman"] },
];

export interface ProjectItem {
  title: string;
  description: string;
  period: string;
  tags: string[];
  links: { live?: string; github?: string };
  featured: boolean;
}

export const projects: ProjectItem[] = [
  {
    title: "Hermes",
    description:
      "Encrypted group chat with AES encryption, real-time sockets, and JWT sessions. MERN + Socket.io.",
    period: "Mar 2023",
    tags: ["React", "MERN", "Socket.io", "JWT", "Tailwind"],
    links: { github: "https://github.com/Likkiii" },
    featured: true,
  },
  {
    title: "Reverse Coding Portal",
    description:
      "Registration & main portal for ACM-VIT's flagship event with 1800+ participants. Redux, roulette, leaderboards.",
    period: "Jan 2022",
    tags: ["React", "Redux", "Tailwind"],
    links: { live: "https://rcpc.acmvit.in/" },
    featured: true,
  },
  {
    title: "Apptitude Portal",
    description:
      "PWA for a 36-hour app development hackathon — tracks, sponsors, and registration in one place.",
    period: "Nov 2021",
    tags: ["React", "PWA", "Tailwind"],
    links: { live: "https://apptitude-pwa.vercel.app/" },
    featured: true,
  },
  {
    title: "ACTA — Minutes of Meeting",
    description: "PWA hub for ACM chapter MoM documents. Built backend CRUD with MERN stack.",
    period: "Oct 2021",
    tags: ["MERN", "Markdown", "Tailwind"],
    links: { github: "https://github.com/ACM-VIT/minutes-of-meeting-backend" },
    featured: false,
  },
  {
    title: "Summer Bootcamp 2021",
    description:
      "Landing & registration platform for ACM-VIT's bootcamp with 500+ participants across 4 domains.",
    period: "Jul 2021",
    tags: ["React", "Registration"],
    links: { github: "https://github.com/ACM-VIT/bootcamp-2021-frontend" },
    featured: false,
  },
  {
    title: "FHOO — Social Good Portal",
    description:
      "Platform connecting NGOs with contributors for food, clothes, blood, and book donations.",
    period: "Apr 2021",
    tags: ["HTML", "CSS", "JavaScript"],
    links: { github: "https://github.com/Team-Code-Blooded/Project_FHOO__Equinox21" },
    featured: false,
  },
  {
    title: "Memeify",
    description: "Meme creator web app built with React.",
    period: "Personal",
    tags: ["React"],
    links: { github: "https://github.com/Likkiii/memeify" },
    featured: false,
  },
];

export const awards = [
  { title: "2 Gold Medals — Riviera Athletics", org: "VIT Vellore", year: "2023" },
  { title: "3rd — District Level 100m", org: "VIT Vellore", year: "2023" },
  { title: "1st — Code2Clone (GraVITas)", org: "IEEE-SSIT", year: "2022" },
  { title: "5th — CBSE National 4×100m Relay", org: "National Meet", year: "2019" },
  { title: "4 Gold Medals — CBSE Cluster Athletics", org: "Oman", year: "2019" },
  { title: "Academic Excellence — School Topper", org: "IS Muladha", year: "2019 & 2020" },
];

export const certifications = [
  "Postman Student Expert",
  "Version Control with Git — Atlassian",
  "MATLAB Onramp — MathWorks",
  "Problem Solving & Python — HackerRank",
];

export const interests = [
  "Web Development",
  "Competitive Programming",
  "Gen AI",
  "Open Source",
  "Athletics",
  "Football & Cricket",
  "Gaming",
  "Anime",
  "Music",
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
