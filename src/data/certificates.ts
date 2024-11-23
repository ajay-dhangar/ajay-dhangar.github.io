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
  | "python"
  | "jquery"
  | "react"
  | "nextjs"
  | "typescript"
  | "nodejs"
  | "express"
  | "ChatGPT"
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
  {
    id: "8",
    title: "Javascript Practicals Crash Course",
    technology: ['javascript'],
    description: "Learn javascript Concepts With Javascript Practical Demonstrations and Exercises.",
    imageUrl: "https://img-c.udemycdn.com/course/750x422/4200228_c917_2.jpg",
    link: "#",
  },
  {
    id: "9",
    title: "Practical CSS3 Mastery Course",
    technology: ['css', 'html'],
    description: "Learn CSS3 Flexbox, CSS3 Grid, CSS3 Transitions, CSS3 Animations, CSS3 Responsive Design, and so much more!",
    imageUrl: "https://img-c.udemycdn.com/course/750x422/4281352_1712.jpg",
    link: "https://www.udemy.com/certificate/UC-c7930bb3-2d2b-476b-912f-29b79532ff45/",
  },
  {
    id: "10",
    title: "ChatGPT for Mastering Compelling Content",
    technology: ['ChatGPT'],
    description: "Learn how to use OpenAI's ChatGPT to generate compelling content for your blog, website, or social media.",
    imageUrl: "https://img-c.udemycdn.com/course/750x422/5672298_c693_2.jpg",
    link: "https://www.udemy.com/certificate/UC-9474eb80-bcd9-4afb-bcc6-977155e26144/",
  },
  {
    id: "11",
    title: "Fullstack MERN Web-Development",
    technology: ['react', 'nodejs', 'mongodb', 'express'],
    description: "Learn MERN stack web development by building production ready social network with React, Node, Express, MongoDB and SocketIO",
    imageUrl: "https://img-c.udemycdn.com/course/240x135/4656608_c525.jpg",
    link: "https://www.udemy.com/course/fullstack-mern-web-development-free-content/",
  },
  {
    id: "12",
    title: "Python Quick Start 40-Minute Beginner's Guide",
    technology: ['python'],
    description: "Learn Python basics in 40 minutes! This is the perfect Python quick start guide for beginners.",
    imageUrl: "https://img-c.udemycdn.com/course/480x270/6243407_9eb3.jpg",
    link: "https://www.udemy.com/course/python-quick-start-40-minute-beginners-guide/",
  },
  {
    id: "13",
    title: "ChatGPT - The Complete Beginner Course on How to Use ChatGPT",
    technology: ['ChatGPT'],
    description: "Learn how to use OpenAI's ChatGPT to generate compelling content for your blog, website, or social media.",
    imageUrl: "https://img-c.udemycdn.com/course/750x422/5033810_a59c_4.jpg",
    link: "https://www.udemy.com/certificate/UC-c269cb98-956d-42ff-9cf0-16a148a271c5/",
  },
  {
    id: "14",
    title: "CSS Complete Course For Beginners",
    technology: ['html', 'css'],
    description: "Learn CSS for the first time or brush up your CSS skills and dive in even deeper. EVERY web developer has to know CSS.",
    imageUrl: "https://img-c.udemycdn.com/course/480x270/4280734_2d17.jpg",
    link: "https://www.udemy.com/certificate/UC-81a8f5c8-9ac2-496c-8d05-19dfdbc96609/",
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
  // Add more certificates here
];
