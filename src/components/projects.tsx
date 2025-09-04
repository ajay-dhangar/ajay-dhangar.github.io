import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ExternalLink, Github } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A modern e-commerce solution with React, Node.js, and Stripe integration. Features include real-time inventory, advanced search, and responsive design.',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      github: '#',
      live: '#',
      gradient: 'from-blue-500 to-purple-600'
    },
    {
      title: 'Task Management App',
      description: 'A collaborative task management tool with real-time updates, drag-and-drop functionality, and team collaboration features.',
      image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Next.js', 'TypeScript', 'Supabase', 'Tailwind'],
      github: '#',
      live: '#',
      gradient: 'from-emerald-500 to-cyan-600'
    },
    {
      title: 'AI-Powered Analytics',
      description: 'A data visualization dashboard with AI-driven insights, interactive charts, and predictive analytics for business intelligence.',
      image: 'https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Python', 'Django', 'TensorFlow', 'D3.js'],
      github: '#',
      live: '#',
      gradient: 'from-purple-500 to-pink-600'
    },
    {
      title: 'Social Media Dashboard',
      description: 'A comprehensive social media management platform with scheduling, analytics, and multi-platform integration.',
      image: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Vue.js', 'Express', 'PostgreSQL', 'Redis'],
      github: '#',
      live: '#',
      gradient: 'from-orange-500 to-red-600'
    },
    {
      title: 'Cryptocurrency Tracker',
      description: 'A real-time cryptocurrency tracking application with portfolio management, price alerts, and market analysis.',
      image: 'https://images.pexels.com/photos/844124/pexels-photo-844124.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React Native', 'Firebase', 'CoinGecko API', 'Chart.js'],
      github: '#',
      live: '#',
      gradient: 'from-yellow-500 to-orange-600'
    },
    {
      title: 'Learning Management System',
      description: 'An educational platform with course creation, progress tracking, video streaming, and interactive quizzes.',
      image: 'https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Angular', 'NestJS', 'MySQL', 'AWS S3'],
      github: '#',
      live: '#',
      gradient: 'from-indigo-500 to-blue-600'
    }
  ];

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    gsap.fromTo('.projects-title', 
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: section,
          start: 'top 80%',
        }
      }
    );

    gsap.fromTo('.project-card', 
      { opacity: 0, y: 50, scale: 0.9 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        stagger: 0.2,
        scrollTrigger: {
          trigger: section,
          start: 'top 60%',
        }
      }
    );
  }, []);

  return (
    <div ref={sectionRef} className="py-20 px-6 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto"> 
        <h1 className="heading text-4xl text-center lg:text-6xl mb-20">
        Featured{" "}
        <span className="text-primaryColor">Projects</span>
      </h1>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="project-card group bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105"
            >
              <div className="relative overflow-hidden h-48">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-90 transition-opacity duration-300 flex items-center justify-center`}>
                  <div className="flex space-x-4">
                    <a
                      href={project.github}
                      className="p-3 bg-white/20 backdrop-blur-md rounded-full hover:bg-white/30 transition-all duration-300 hover:scale-110"
                    >
                      <Github className="w-6 h-6 text-white" />
                    </a>
                    <a
                      href={project.live}
                      className="p-3 bg-white/20 backdrop-blur-md rounded-full hover:bg-white/30 transition-all duration-300 hover:scale-110"
                    >
                      <ExternalLink className="w-6 h-6 text-white" />
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-500 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;