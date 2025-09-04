import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Code, Palette, Zap, Heart } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    gsap.fromTo(
      ".about-title",
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          end: "bottom 20%",
        },
      }
    );

    gsap.fromTo(
      ".about-text",
      { opacity: 0, x: -50 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        delay: 0.3,
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          end: "bottom 20%",
        },
      }
    );

    gsap.fromTo(
      ".about-card",
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
        scrollTrigger: {
          trigger: section,
          start: "top 60%",
          end: "bottom 20%",
        },
      }
    );
  }, []);

  const highlights = [
    {
      icon: Code,
      title: "Development",
      description: "Expertise in modern web technologies and frameworks",
    },
    {
      icon: Palette,
      title: "Design",
      description: "Creating beautiful and intuitive user interfaces",
    },
    {
      icon: Zap,
      title: "Performance",
      description: "Optimized solutions for speed and efficiency",
    },
    {
      icon: Heart,
      title: "Passion",
      description: "Dedicated to crafting exceptional digital experiences",
    },
  ];

  return (
    <div ref={sectionRef} className="py-10 px-4 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-6xl mx-auto">
        <h1 className="heading text-4xl text-center lg:text-6xl mb-16">
          About <span className="text-primaryColor">Me</span>
        </h1>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="about-text">
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              I'm a passionate full-stack developer with over 5 years of
              experience in creating digital solutions that combine beautiful
              design with robust functionality. My journey in tech started with
              a curiosity about how things work, which evolved into a love for
              building applications that make people's lives easier.
            </p>

            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
              When I'm not coding, you'll find me exploring the latest design
              trends, contributing to open-source projects, or mentoring
              aspiring developers. I believe in the power of technology to solve
              real-world problems and am always excited to take on new
              challenges.
            </p>

            <div className="flex flex-wrap gap-3">
              {[
                "React",
                "TypeScript",
                "Node.js",
                "Python",
                "AWS",
                "Docker",
              ].map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="about-card bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <item.icon className="w-10 h-10 text-blue-500 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
