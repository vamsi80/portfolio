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
