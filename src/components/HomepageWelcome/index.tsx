import React, { useState, useEffect } from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

const TypeContentList = [
  "C odeHarborHub is a platform for developers to share their knowledge and experience with the community.",
  "C odeHarborHub provides a virtual assistant to help you with your coding problems. Get help from the best.",
  "C odeHarborHub provides usability testing for your website. Get feedback from the community and improve your website.",
  "C odeHarborHub provides a website for developers. Share your knowledge and experience with the community.",
  "C odeHarborHub provides tutorials for developers. Learn from the best and improve your coding skills.",
  "C odeHarborHub provides a platform for developers to share their knowledge and experience with the community.",
  "C odeHarborHub is a central hub for developers to share their knowledge and experience with the community.",
  "C odeHarborHub is open source. Contribute to the project and help the community. Join us today!",
  "I f you want to learn how to code, CodeHarborHub is the place for you. Join us today!", 
  "I f you have good coding skills, you can help others by sharing your knowledge and experience.",
  "O ur mission is to help developers improve their coding skills and share their knowledge with the community.",
  "O ur vision is to create a community of developers who help each other improve their coding skills.",
  "W e provide a secure and trustable platform for developers to share their knowledge and experience with the community.",
];

const typingDelay = 50; // Delay between typing each character
const itemChangeDelay = 3000; // Delay before typing the next item

export default function HomepageWelcome() {
  const [content, setContent] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    let timer;
    if (isTyping) {
      const randomIndex = Math.floor(Math.random() * TypeContentList.length);
      const currentContent = TypeContentList[randomIndex];
      let charIndex = 0;
      // Typing animation
      const typeNextChar = () => {
        if (charIndex < currentContent.length) {
          setContent(prevContent => prevContent + currentContent.charAt(charIndex));
          charIndex++;
          timer = setTimeout(typeNextChar, typingDelay);
        } else {
          setIsTyping(false);
          timer = setTimeout(() => {
            setIsTyping(true);
            setContent("");
          }, itemChangeDelay);
        }
      };
      timer = setTimeout(typeNextChar, typingDelay);
    }
    return () => clearTimeout(timer);
  }, [isTyping]);

  
  return (
    <section className={clsx(styles.heroBanner, styles.welcomeContainer)}>
      <div className={styles.content}>
        <p className={styles.subtitle}>{content}</p>
      </div>
    </section>
  );
}
