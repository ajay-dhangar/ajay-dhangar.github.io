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
  | "bootstrap"
  | "jquery"
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
  {
    id: "4",
    title: "Web Development Wizardry: HTML & CSS Course for Beginners.",
    technology: ['html', 'css'],
    description: "Learn HTML & CSS to create a website from scratch. Absolutely perfect for beginners.",
    imageUrl: "https://img-c.udemycdn.com/course/750x422/4550210_d97b_4.jpg",
    link: "https://www.udemy.com/certificate/UC-86a6a565-9ab9-44b1-a86e-68b3932e5a21/",
  },
  {
    id: "5",
    title: "Complete Portfolio Website Using HTML CSS NETLIFY Project",
    technology: ['html', 'css'],
    description: "Learn to create a portfolio website using HTML, CSS and deploy it using Netlify.",
    imageUrl: "https://img-c.udemycdn.com/course/750x422/6064327_f790.jpg",
    link: "https://www.udemy.com/certificate/UC-53758eb0-bbfb-4df4-ae5a-2dc4333cc8ca/",
  },
  {
    id: "6",
    title: "Complete Responsive Web Development: 4 courses in 1",
    technology: ['html', 'css', 'javascript', 'bootstrap', 'jquery'],
    description: "Learn HTML, CSS, Responsive Design, Flexbox & Grid, Bootstrap, Javascript, jQuery and more!",
    imageUrl: "https://img-c.udemycdn.com/course/750x422/1426718_abb7_2.jpg",
    link: "https://www.udemy.com/certificate/UC-585cbea3-9319-44aa-938b-cf46ec99eca0/",
  },
  {
    id: "7",
    title: "Full Stack Development Course for Beginners",
    technology: ['html', 'css', 'javascript', 'react', 'nodejs', 'mongodb'],
    description: "Master Web Development Foundations with Board Infinity: Dive into MERN, HTML, CSS, & JS Essentials",
    imageUrl: "https://img-c.udemycdn.com/course/750x422/5458112_e6fd_2.jpg",
    link: "https://www.udemy.com/course/full-stack-development-course-for-beginners/",
  },
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
