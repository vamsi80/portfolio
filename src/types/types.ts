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

// types.ts
export interface ImplementationDetail {
  title: string;
  points: string[];
}

export type MediaType = "image" | "video";

export interface MediaItem {
  type: MediaType;
  src: string;
}

export interface Project {
  id: string;              // unique id for params
  caseNumber: string;
  title: string;
  // project: string;
  isFictional?: boolean;
  disclaimerText:string;
  launchUrl: string;
  leftimage: string;

  // Home page preview props
  img: string;
  thumbnail: string;
  description: string;

  // Case details
  launchName:string;
  areaOfResponsibility: string;
  development: string;
  overview: string;
  productionPeriod: string;
  implementationDetails: ImplementationDetail[];
  media: MediaItem[]
}

export const projects: Project[] = [
  {
    id: "lattice-lane",
    caseNumber: "#case_01",
    title: "LATTICE LANE",
    launchUrl: "https://latticelane.com/",
    isFictional: false,
    disclaimerText: "*E-commerce site",
    leftimage: "/projects/latticelane/faceimage.png",

    img: "/projects/latticelane/Hamper.jpg",
    thumbnail: "/projects/latticelane/Hamper1.jpg",
    description: "Brand site / Client work",

    launchName:"Launch Site",
    areaOfResponsibility: "Led the end-to-end development of the e-commerce platform on Shopify, designing and implementing custom layouts tailored to the brand’s requirements.",
    development: "Shopify (Liquid HTML, JSON, Shopify APIs) Custom theme development",
    overview:
      "Lattice Lane is a modern e-commerce platform built on Shopify, designed to provide a seamless and personalized shopping experience. The website features custom layouts, optimized performance, and scalable architecture tailored to client needs.",
    productionPeriod: "3 months",
    implementationDetails: [
      { title: "Custom Theme Development", points: ["Built the base structure from scratch using Liquid HTML and JSON templates.", "Developed modular, reusable layouts to allow flexibility across different product pages."] },
      { title: "Performance & SEO Optimization", points: ["Implemented lightweight coding practices to ensure faster load times.", "Structured metadata and semantic HTML for SEO-friendly architecture.", "Integrated responsive, mobile-first design for better user experience."] },
      { title: "Advanced Features & Customization", points: ["Created custom slideshows and banners to enhance product presentation.", "Customized billing flows for different regions and requirements.", "Applied creative problem-solving to handle tricky design and functional challenges."] },
    ],
    media: [
      { type: "image", src: "/projects/latticelane/mobile.png" },
      { type: "image", src: "/images/bg-3.png" },
      { type: "image", src: "/images/bg-3.png" },
      { type: "video", src: "/projects/latticelane/Latticelane.mp4" },
    ],
  },
  {
    id: "thinkPro",
    caseNumber: "#case_02",
    title: "THINK PRO",
    launchUrl: "https://www.thinkpro.academy/",
    isFictional: false,
    disclaimerText: "*Educational Website",
    leftimage: "/string",

    img: "/projects/thinkpro/BLUR.jpg",
    thumbnail: "/projects/thinkpro/sqare.jpg",
    description: "Educational Website / clint work",

    launchName:"Launch Site",
    areaOfResponsibility: "Developed and customized a fully responsive educational website on Wix, focusing on branding, layout design, and mobile optimization. Created dedicated pages for seasonal programs such as the Summer Camp, along with a custom registration form to collect participant data, and integrated secure payment options to streamline the registration process.",
    development: "Wix Platform (Wix Editor, Wix Bookings)  Custom Styling & Layouts  Responsive Design & Mobile Optimization  Integrated Registration & Payment Flows",
    overview: "ThinkPro is a modern educational platform built using Wix, designed for students and professionals to access and register for learning programs. The website emphasizes a clean, responsive layout with seamless navigation, providing an engaging user experience across all devices.",
    productionPeriod: "Nov 2024 – Dec 2024",
    implementationDetails: [
      { title: "Branding & Layout Design", points: ["Created a professional, education-focused layout with clear navigation.", "Optimized the design for both desktop and mobile screens."] },
      { title: "Program & Registration Setup", points: ["Built a Summer Camp program page with engaging content.", "Designed a custom registration form to securely collect participant details."] },
      { title: "Payment Integration & User Flow", points: ["Integrated a secure payment system for online registrations.", "Streamlined the onboarding process by connecting registration with payment flow."] },
    ],
    media: [
      { type: "image", src: "/projects/thinkpro/THINKPRO.png" },
      { type: "image", src: "/images/bg-3.png" },
      { type: "image", src: "/images/bg-3.png" },
      { type: "video", src: "/projects/thinkpro/thinkpro.mp4" },
    ],
  },
  {
    id: "stree",
    caseNumber: "#case_03",
    title: "THE STREE",
    launchUrl: "https://github.com/vamsi80/stree",
    isFictional: true,
    disclaimerText: "*Branding site",
    leftimage: "/projects/stree/faceimage.png",

    img: "/projects/stree/BLUR.png",
    thumbnail: "/projects/stree/IMG.png",
    description: "Corporate site / Private work",

    launchName:"GitHub Link",
    areaOfResponsibility: "Designed and developed a simple single-page advertising website from scratch using Next.js and Tailwind CSS, with a strong focus on responsive layouts across all devices, managing version control through GitHub and deploying seamlessly on Vercel.",
    development: "Next.js Tailwind CSS Responsive Design Techniques GitHub (content management), Vercel (hosting)",
    overview:
      "The Stree Co is a lightweight, single-page advertising website built with Next.js to showcase brand offerings in a simple yet effective way. The project’s main objective was to create a clean, responsive design that works smoothly across all devices while maintaining fast performance.",
    productionPeriod: "1 day",
    implementationDetails: [
      { title: "Responsive Web Design", points: ["Applied responsive techniques to ensure compatibility across mobile, tablet, and desktop.", "Designed flexible layouts to adjust content without breaking visual hierarchy."] },
      { title: "From Scratch Development", points: ["Built the entire project from the ground up using Next.js.", "Maintained version control and collaboration through GitHub."] },
      { title: "Deployment & Hosting", points: ["Published the project seamlessly on Vercel, enabling fast and reliable performance.", "Integrated smooth workflows from development to production."] },
    ],
    media: [
      { type: "image", src: "/projects/stree/mobile.png" },
      { type: "image", src: "/images/bg-3.png" },
      { type: "image", src: "/images/bg-3.png" },
      { type: "video", src: "/projects/stree/stree.mp4" },
    ],
  },
  {
    id: "unthink",
    caseNumber: "#case_04",
    title: "UNTHINK",
    launchUrl: "https://github.com/vamsi80/stree",
    isFictional: true,
    disclaimerText: "*Course Selling Website",
    leftimage: "/projects/stree/faceimage.png",

    img: "/projects/stree/BLUR.png",
    thumbnail: "/projects/stree/IMG.png",
    description: "Course Selling Website / clint work",

    launchName:"GitHub Link",
    areaOfResponsibility: "Designed and developed a simple single-page advertising website from scratch using Next.js and Tailwind CSS, with a strong focus on responsive layouts across all devices, managing version control through GitHub and deploying seamlessly on Vercel.",
    development: "Next.js Tailwind CSS Responsive Design Techniques GitHub (content management), Vercel (hosting)",
    overview:
      "The Stree Co is a lightweight, single-page advertising website built with Next.js to showcase brand offerings in a simple yet effective way. The project’s main objective was to create a clean, responsive design that works smoothly across all devices while maintaining fast performance.",
    productionPeriod: "1 day",
    implementationDetails: [
      { title: "Responsive Web Design", points: ["Applied responsive techniques to ensure compatibility across mobile, tablet, and desktop.", "Designed flexible layouts to adjust content without breaking visual hierarchy."] },
      { title: "From Scratch Development", points: ["Built the entire project from the ground up using Next.js.", "Maintained version control and collaboration through GitHub."] },
      { title: "Deployment & Hosting", points: ["Published the project seamlessly on Vercel, enabling fast and reliable performance.", "Integrated smooth workflows from development to production."] },
    ],
    media: [
      { type: "image", src: "/projects/unthink/UNTHINK.png" },
      { type: "image", src: "/images/bg-3.png" },
      { type: "image", src: "/images/bg-3.png" },
      { type: "video", src: "/projects/unthink/unthink.mp4" },
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

export const workItems: WorkItem[] = projects.map((c, index) => ({
  id: index + 1,
  leftImage: c.leftimage,
  rightImage: c.media[0].src, 
  title: c.title,
  client: `${c.caseNumber} ${c.title}`,
  detailLink: `/works/${c.id}`,
}));

export interface SkillCategory {
  id: number;
  title: string;
  skills: string[];
  description: string[];
}

export interface ExperienceCategory {
  id: number;
  monthStart: string;
  yearStart: string;
  monthEnd: string | "Now";
  yearEnd: string | null;
  role: string;
  company: string;
  description: string[];
}

export interface StrengthCategory {
  id: string;
  title: string;
  content: string;
}

export interface AboutSectionBase {
  id: number;
  sectionTitle: string;
}

export interface AboutSectionSkills extends AboutSectionBase {
  type: "skills";
  categories: SkillCategory[];
}

export interface AboutSectionExperience extends AboutSectionBase {
  type: "experience";
  categories: ExperienceCategory[];
}

export interface AboutSectionStrengths extends AboutSectionBase {
  type: "strengths";
  categories: StrengthCategory[];
}

export type AboutSection = AboutSectionSkills | AboutSectionExperience | AboutSectionStrengths;

export const aboutSections: AboutSection[] = [
  {
    id: 1,
    type: "skills",
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
          "I work with both SQL and NoSQL databases to create efficient and reliable data solutions. My experience includes relational databases such as MySQL and PostgreSQL, along with NoSQL platforms like Firebase. I focus on designing optimized schemas, improving query performance, and ensuring secure data handling.",
        ],
      },
      {
        id: 6,
        title: "Tools",
        skills: ["GitHub", "Vercel", "Illustrator", "Figma", "BrightSign"],
        description: [
          "I work with tools like GitHub for collaboration, Vercel for seamless deployment, and Figma/Illustrator for creative design. I also use BrightSign to deliver engaging digital signage solutions, helping me bring ideas to life efficiently and beautifully.",
        ],
      },
    ],
  },
  {
    id: 2,
    type: "experience",
    sectionTitle: "EXPERIENCE",
    categories: [
      {
        id: 1,
        monthStart: "05",
        yearStart: "24",
        monthEnd: "Now",
        role: "Full stack developer",
        company: "White Tusker",
        yearEnd: null,
        description: [
          "Since joining WhiteTusker, I have been involved in building and maintaining websites, successfully completing over four projects from start to finish.",
          "My work covers the entire product development cycle, including building, updating, and managing websites across multiple platforms.",
          "Additionally, I have developed SaaS applications, an area I am particularly interested in. I have also been involved in digital interaction projects for a large aerospace client.",
        ],
      },
      {
        id: 2,
        monthStart: "05",
        yearStart: "23",
        monthEnd: "06",
        yearEnd: "23",
        role: "Full stack developer Intern",
        company: "JustPic",
        description: [
          "During my internship, I built end-to-end web applications while focusing mainly on backend functionality. ",
          "I maintained the folder structure of functions and performed basic CRUD operations to support application development.",
          "Through this experience, I gained practical knowledge of working with real-time applications in a professional environment.",
        ],
      },
    ],
  },
  {
    id: 3,
    type: "strengths",
    sectionTitle: "STRENGTHS",
    categories: [
      {
        id: "1",
        title: "Strong Motivation and Continuous Learning",
        content:
          "Highly motivated to learn and adaptable, I began with no prior implementation experience but quickly took the initiative to study core web technologies and platforms. I actively gathered knowledge from blogs and tutorials, organizing my learning to build websites and applications independently. I continue to enhance my skills by exploring modern technologies like Next.js, Tailwind CSS, TypeScript, and SaaS development to stay updated with the latest trends.",
      },
      {
        id: "2",
        title: "Effective Problem-Solving and Efficient Execution",
        content:
          "I have strong problem-solving skills with a focus on understanding user needs. I quickly identify issues and efficiently implement solutions to improve processes. My ability to execute tasks promptly ensures timely delivery and smooth project progress. I am committed to creating effective and user-friendly outcomes.",
      },
      {
        id: "3",
        title: "End-to-End Development Expertise",
        content:
          "I have experience developing projects from scratch, handling everything from initial planning to final deployment. This includes designing structures, coding, and testing to build complete, functional applications.",
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
