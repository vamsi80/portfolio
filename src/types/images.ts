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