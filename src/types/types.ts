export interface BgImage {
  id: number;
  img: string;
  title: string;
  project: string;
  description: string;
  thumbnail: string;
}

export const bgimages: BgImage[] = [
  {
    id: 1,
    img: "/images/bg-1.png",
    title: "#case_01",
    project: "FURYU",
    description: "Brand site / Client work",
    thumbnail: "/images/thum-1.png",
  },
  {
    id: 2,
    img: "/images/bg-2.png",
    title: "#case_02",
    project: "PORTFOLIO",
    description: "Portfolio site / Private work",
    thumbnail: "/images/thum-2.png",
  },
  {
    id: 3,
    img: "/images/bg-3.png",
    title: "#case_03",
    project: "GREEN ENERGY",
    description: "Corporate site / Private work",
    thumbnail: "/images/thum-3.png",
  },
];

export interface skilsText {
  id: number;
  title: string;
  description: string;
  keywords: string[];
}

export const skilsText: skilsText[] = [
  {
    id: 1,
    title: "# Development & Frameworks",
    description: "I specialize in building scalable, high-performance websites and applications. From custom solutions in Next.js to rapid, no-code sites on Wix, I adapt to project needs. My Shopify expertise helps businesses thrive in e-commerce, while Python and APIs enable me to create powerful, data-driven functionality that seamlessly connects systems.",
    keywords: ["Next.js", "Shopify", "Wix", "Python", "APIs"],
  },
  {
    id: 2,
    title: "# Tools & Collaboration",
    description: "I believe great projects are built on strong workflows. Using GitHub, I manage and collaborate on projects efficiently. With Firebase, I integrate real-time databases, authentication, and cloud services. And with Vercel, I deploy lightning-fast web applications with smooth CI/CD pipelines—ensuring every project is reliable, scalable, and production-ready.",
    keywords: ["GitHub", "Firebase", "Vercel"],
  },
  {
    id: 3,
    title: "# Design & Digital Experience",
    description: "A strong visual identity is as important as the technology behind it. Using Figma and Illustrator, I craft intuitive designs and user interfaces that align with brand identity. With BrightSign, I create impactful digital signage solutions, merging creativity with technology to deliver engaging experiences for audiences.",
    keywords: ["Illustrator", "Figma", "BrightSign"],
  },
];

export interface ImplementationDetail {
  title: string;
  points: string[];
}

export interface CaseDetail {
  id: string;
  caseNumber: string;
  isFictional?: boolean;
  title: string;
  launchUrl: string;
  areaOfResponsibility: string;
  development: string;
  overview: string;
  productionPeriod: string;
  implementationDetails: ImplementationDetail[];
  images: string[];
}

export const caseDetails: CaseDetail[] = [
  {
    id: "green-energy",
    caseNumber: "# case_03",
    isFictional: true,
    title: "Green Energy",
    launchUrl: "https://example.com",
    areaOfResponsibility: "Design/Implementation",
    development: "HTML/CSS(Sass) JavaScript PHP Swiper GSAP WordPress",
    overview:
      "We designed and implemented the corporate website for an environmental energy company to convey the impression of reliability and honesty.",
    productionPeriod: "2 months",
    implementationDetails: [
      {
        title: "Implementation details 1",
        points: ["WORKS", "ABOUT"],
      },
      {
        title: "Implementation details 2",
        points: ["WORKS", "ABOUT"],
      },
      {
        title: "Implementation details 3",
        points: ["WORKS", "ABOUT"],
      },
    ],
    images: [
      "/images/bg-1.png",
      "/images/bg-1.png",
      "/images/bg-1.png",
      "/images/bg-1.png",
    ],
  },
  {
    id: "lattice-lane",
    caseNumber: "# case_03",
    isFictional: true,
    title: "lattice lane",
    launchUrl: "https://example.com",
    areaOfResponsibility: "Design/Implementation",
    development: "HTML/CSS(Sass) JavaScript PHP Swiper GSAP WordPress",
    overview:
      "We designed and implemented the corporate website for an environmental energy company to convey the impression of reliability and honesty.",
    productionPeriod: "2 months",
    implementationDetails: [
      {
        title: "Implementation details 1",
        points: ["WORKS", "ABOUT"],
      },
      {
        title: "Implementation details 2",
        points: ["WORKS", "ABOUT"],
      },
      {
        title: "Implementation details 3",
        points: ["WORKS", "ABOUT"],
      },
    ],
    images: [
      "/images/bg-1.png",
      "/images/bg-1.png",
      "/images/bg-1.png",
      "/images/bg-1.png",
    ],
  },
];

export interface WorkItem {
  id: number;
  leftImage: string;
  rightImage: string;
  title: string;
  client: string;
  detailLink?: string;
}

export const workItems: WorkItem[] = caseDetails.map((c, index) => ({
  id: index + 1,
  leftImage: "/images/bg-1.png",
  rightImage: "/images/bg-1.png",
  title: c.title,
  client: `${c.caseNumber} ${c.title}`,
  detailLink: `/works/${c.id}`,
}));

export interface AboutCategory {
  id: number;
  title: string;
  skills: string[];
  description: string[];
}

export interface AboutSection {
  id: number;
  sectionTitle: string;
  categories: AboutCategory[];
}

export interface AboutStrengths {
  id: string;
  title: string;
  content: string;
}

export const aboutSections: AboutSection[] = [
  {
    id: 1,
    sectionTitle: "SKILLS",
    categories: [
      {
        id: 1,
        title: "Development Languages",
        skills: ["HTML/CSS", "Python", "JavaScript", "TypeScript"],
        description: [
          "I used HTML and CSS to create responsive layouts and visually appealing user interfaces.",
          "I applied JavaScript to develop interactive features and scalable web applications.",
          "I used Python in projects to build backends, create APIs, and develop data-driven solutions.",
        ],
      },
      {
        id: 2,
        title: "Library",
        skills: ["React", "GSAP"],
        description: [
          "We can use React to build dynamic and reusable user interfaces. It works by using a virtual DOM and component-based architecture to update pages efficiently without reloading.",
          "We can use GSAP for creating smooth, high-performance animations. It works by controlling timelines and elements with precise motion, making interactions more engaging and responsive.s",
        ],
      },
      {
        id: 3,
        title: "Frameworks / CMS",
        skills: ["Next.js", "TailwindCSS", "Shopify", "Wix"],
        description: [
          "I work with a range of frameworks and CMS platforms, selecting the right one based on project requirements. Whether it’s building scalable web applications with Next.js,designing responsive and modern UI with TailwindCSS,setting up robust e-commerce stores on Shopify, or delivering fast and efficient websites with Wix, I ensure that every solution is optimized for performance, scalability, and user experience.",
        ],
      },
      {
        id: 4,
        title: "APIs & Services",
        skills: ["REST APIs", "RESTful APIs", "Postman"],
        description: [
          "I design and develop my own APIs and endpoints, implementing REST and RESTful principles. By connecting databases with structured endpointsI enable smooth communication between client and server, ensuring data is delivered securely and efficiently.I also use Postman to test and validate APIs, making sure they work as intended before deployment.",
        ],
      },
      {
        id: 5,
        title: "Databases",
        skills: ["NoSQL", "Firebase (Database & Auth)", "PostgreSQL"],
        description: [
          "I work with both SQL and NoSQL databases, enabling efficient data storage, retrieval, and integration into scalable applications.",
        ],
      },
      {
        id: 6,
        title: "Tools",
        skills: ["GitHub", "Vercel", "Illustrator", "Figma", "BrightSign"],
        description: [
          "I use tools that support efficient collaboration, deployment, and design workflows—helping me deliver production-ready solutions seamlessly.",
        ],
      },
    ],
  },
  {
    id: 2,
    sectionTitle: "EXPERIENCE",
    categories: [
      {
        id: 1,
        title: "Justpic (Internship)",
        skills: ["Web Development", "Full-time"],
        description: [
          "Worked for 2 months as a full-time web developer intern.",
          "Built and deployed 2 real-world projects.",
        ],
      },
      {
        id: 2,
        title: "Smart India Hackathon",
        skills: ["Teamwork", "Problem Solving"],
        description: [
          "Participated in Smart India Hackathon with a 36-hour continuous coding challenge.",
          "Developed solutions around traffic signal control for ambulances.",
        ],
      },
    ],
  },
];

export interface AboutStrengths {
  id: string;
  title: string;
  content: string;
}

export const AboutStrengths: AboutStrengths[] = [
  {
    id: "1",
    title: "What makes Origin UI different?",
    content:
      "Origin UI focuses on developer experience and performance. Built with TypeScript, it offers excellent type safety, follows accessibility standards, and provides comprehensive documentation with regular updates.",
  },
  {
    id: "2",
    title: "How can I customize the components?",
    content:
      "Use our CSS variables for global styling, or className and style props for component-specific changes. We support CSS modules, Tailwind, and dark mode out of the box.",
  },
  {
    id: "3",
    title: "Is Origin UI optimized for performance?",
    content:
      "Yes, with tree-shaking, code splitting, and minimal runtime overhead. Most components are under 5KB gzipped.",
  },
  {
    id: "4",
    title: "How accessible are the components?",
    content:
      "All components follow WAI-ARIA standards, featuring proper ARIA attributes, keyboard navigation, and screen reader support. Regular testing ensures compatibility with NVDA, VoiceOver, and JAWS.",
  },
]
