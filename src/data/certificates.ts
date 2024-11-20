export interface Certificate {
  id: string;
  title: string;
  technology: TechType[];
  description: string;
  imageUrl: string;
  link: string;
}

export type TechType =
  | "html"
  | "css"
  | "javascript"
  | "react"
  | "nextjs"
  | "typescript"
  | "nodejs"
  | "mongodb";

export const certificates: Certificate[] = [
  {
    id: "1",
    title: "Javascript Build a Calculator using HTML, CSS and Javascript",
    technology: ['html', 'css', 'javascript'],
    description: "Learn how to build a calculator using HTML, CSS and Javascript.",
    imageUrl: "https://img-c.udemycdn.com/course/480x270/2186830_20f1_2.jpg",
    link: "https://www.udemy.com/certificate/UC-a31d605a-ce97-48c2-86e1-cb1887609f1c/",
  },
  {
    id: "2",
    title: "Complete Guide in HTML & CSS - Build Responsive Website",
    technology: ['html', 'css'],
    description: "Learn how to build a responsive website using HTML and CSS.",
    imageUrl: "https://img-c.udemycdn.com/course/750x422/5641604_e106.jpg",
    link: "https://www.udemy.com/certificate/UC-3e7df4b3-3ad3-47bf-b921-87979ff56fd2/",
  },
  {
    id: "3",
    title: "Web Design for Beginners: Build Websites in HTML & CSS",
    technology: ['html', 'css'],
    description: "Learn Web Designing in HTML & CSS and Build Websites.",
    imageUrl: "https://img-c.udemycdn.com/course/240x135/4343040_3ac0_5.jpg",
    link: "https://www.udemy.com/certificate/UC-1232584b-96be-409d-a0b7-9c0aef3d1f6f/",
  },
  // {
  //   id: "",
  //   title: "",
  //   technology: ['react'],
  //   description: "",
  //   imageUrl: "#",
  //   link: "",
  // },
  // {
  //   id: "",
  //   title: "",
  //   technology: ['react'],
  //   description: "",
  //   imageUrl: "#",
  //   link: "",
  // },
  // {
  //   id: "",
  //   title: "",
  //   technology: ['react'],
  //   description: "",
  //   imageUrl: "#",
  //   link: "",
  // },
  // {
  //   id: "",
  //   title: "",
  //   technology: ['react'],
  //   description: "",
  //   imageUrl: "#",
  //   link: "",
  // },
  // {
  //   id: "",
  //   title: "",
  //   technology: ['react'],
  //   description: "",
  //   imageUrl: "#",
  //   link: "",
  // },
  // Add more certificates here
];
