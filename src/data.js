export const PERSONAL = {
  name: "Devansh Nirmal",
  initials: "DN",
  roles: [
    "Software Engineer",
    "Full Stack Developer",
    "Backend Engineer",
    "Cloud & AI Enthusiast",
  ],
  bio: "I build scalable backend systems, data pipelines, and AI-powered applications. Passionate about clean architecture, cloud-native solutions, and leveraging technology to solve real problems.",
  email: "dvnshnirmal001@gmail.com",
  phone: "+91 6351909456",
  location: "Ahmedabad, Gujarat, India",
  linkedin: "https://linkedin.com/in/devansh1412",
  github: "https://github.com/Devansh141202",
  instagram: "https://www.instagram.com/devansh_nirmal_3?igsh=cjNiMDl5YmU2Nmd0&utm_source=qr",
  leetcode: "https://leetcode.com/u/devansh_14/",
  photo: null,
};

export const EXPERIENCE = [
  {
    company: "Infocusp Innovations",
    role: "Software Engineer",
    period: "Nov 2024 – Present",
    location: "Ahmedabad, India",
    current: true,
    points: [
      "Developed scalable backend APIs and data pipelines using Python, Django, FastAPI, React, and PostgreSQL for a multi-tier analytics platform.",
      "Leveraged AI-assisted development tools such as Claude Code to significantly improve development efficiency.",
      "Designed and deployed containerized applications using Docker, Kubernetes, and CI/CD pipelines on GCP, improving system reliability.",
      "Developed an internal Employee Management System to streamline workflows and manage records for 300+ employees.",
    ],
  },
  {
    company: "Optimized Solutions Limited",
    role: "Software Engineer",
    period: "Jan 2024 – Nov 2024",
    location: "Ahmedabad, India",
    current: false,
    points: [
      "Developed a Work Order Management System using the MERN stack and AWS cloud, enhancing operational efficiency.",
      "Contributed to multiple client projects, improving security and feature delivery across various applications.",
    ],
  },
  {
    company: "Valuenaire.ai",
    role: "Software Intern",
    period: "May 2023 – Jul 2023",
    location: "Remote",
    current: false,
    points: [
      "Developed a Finance domain product using the PERN stack and TypeScript.",
      "Created RESTful APIs with Prisma ORM, improving database query performance by 30%.",
    ],
  },
];

export const PROJECTS = [
  {
    title: "Appelion",
    subtitle: "Doctor's Appointment System",
    tech: ["React.js", "Node.js", "MongoDB", "Express", "GCP"],
    description:
      "Led a team of 4 to build a full-featured portal where patients can schedule appointments with healthcare providers. Includes real-time availability, ratings, and 24/7 access. Deployed on Google Cloud Platform for robust, scalable infrastructure.",
    github: null,
    live: null,
    featured: true,
  },
  {
    title: "AI FAQ Chatbot",
    subtitle: "Intelligent Website Assistant",
    tech: ["FastAPI", "ReactJS", "OpenAI", "Python"],
    description:
      "AI-powered FAQ assistant that answers user queries using contextual business information. Implemented prompt-based contextual retrieval for improved response relevance and integrated into a responsive web interface.",
    github: null,
    live: null,
    featured: true,
  },
  {
    title: "Workorder Management System",
    subtitle: "Enterprise Operations Platform",
    tech: ["React.js", "Node.js", "MongoDB", "Express", "AWS"],
    description:
      "Comprehensive work order system with Maintenance, Workshop & Drawing, and Project modules. Reduced task completion time by 40% with role-based auth, data encryption, and access controls.",
    github: null,
    live: null,
    featured: false,
  },
];

export const EDUCATION = [
  {
    degree: "B.Tech – Computer Engineering",
    institution: "Charotar University of Science and Technology",
    shortName: "CHARUSAT",
    period: "Aug 2020 – May 2024",
    location: "Anand, India",
    gpa: "9.33 / 10.00",
    coursework: [
      "Advanced Algorithms",
      "Data Structures & Algorithms",
      "Operating Systems",
      "Database Management Systems",
      "Object Oriented Programming",
      "Functional Programming",
    ],
    activities: [
      "Conducted a hands-on NodeJS workshop for 30+ students",
      "Coordinated CodePie coding competition at CHARUSAT – 2023",
    ],
  },
];

export const CERTIFICATIONS = [
  {
    name: "AWS Cloud Practitioner",
    code: "CLF-C01",
    issuer: "Amazon Web Services",
    color: "#FF9900",
    abbr: "AWS",
  },
  {
    name: "Azure Fundamentals",
    code: "AZ-900",
    issuer: "Microsoft Azure",
    color: "#0078D4",
    abbr: "AZ",
  },
  {
    name: "Design & Analysis of Algorithms",
    code: "NPTEL",
    issuer: "NPTEL – IIT",
    color: "#22d3ee",
    abbr: "DSA",
  },
];

export const ACHIEVEMENTS = [
  {
    title: "GFG – Solving For India Hackathon 2023",
    org: "GeeksForGeeks",
    description:
      "Won the institutional round and were selected in the top 300 teams among 900+ competing teams nationwide.",
    badge: "Top 300 / 900+ Teams",
    icon: "🏆",
  },
  {
    title: "CodePie 2.0",
    org: "CHARUSAT University",
    description:
      "Ranked 4th place in a university-level competitive coding competition among 180+ teams.",
    badge: "Rank #4 / 180+ Teams",
    icon: "🥇",
  },
];

export const SKILLS = {
  Languages: ["Python", "JavaScript", "TypeScript", "C++", "SQL"],
  Frameworks: ["FastAPI", "Django", "React.js", "Node.js", "Express.js"],
  Databases: ["PostgreSQL", "MongoDB", "Prisma ORM"],
  "Cloud & DevOps": ["Docker", "Kubernetes", "GCP", "AWS", "CI/CD"],
  "AI / LLM": [
    "LLM Applications",
    "AI Integrations",
    "Prompt Engineering",
    "OpenAI",
  ],
  Tools: ["GitHub", "Postman", "Jira", "Docker", "Mongo Compass"],
};

export const WHAT_I_DO = [
  {
    icon: "⚡",
    title: "Backend Engineering",
    desc: "Building high-performance APIs and data pipelines with Python, FastAPI, Django, and Node.js.",
  },
  {
    icon: "🌐",
    title: "Full Stack Development",
    desc: "Crafting end-to-end web applications using React.js, PostgreSQL, and MongoDB.",
  },
  {
    icon: "☁️",
    title: "Cloud & DevOps",
    desc: "Deploying containerized apps with Docker, Kubernetes on GCP and AWS with CI/CD pipelines.",
  },
  {
    icon: "🤖",
    title: "AI Integration",
    desc: "Building LLM-powered products, AI chatbots, and intelligent automation with OpenAI APIs.",
  },
];
