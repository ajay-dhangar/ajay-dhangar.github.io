import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

export default function AboutPage(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();

  const metrics = [
    { label: 'Open-Source Projects', value: '15+' },
    { label: 'GSoC & GSSoC Repos', value: '5+' },
    { label: 'Community Contributors', value: '500+' },
    { label: 'Interactive DSA Modules', value: '100+' },
  ];

  const coreValues = [
    {
      title: 'Open Source Accessibility',
      description: 'Democratizing technical learning by building free, open-source documentation, interactive visualizers, and robust developer platforms.',
      icon: (
        <svg className="w-7 h-7 text-blue-500 dark:text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
    },
    {
      title: 'Scalable System Engineering',
      description: 'Architecting high-performance web applications, automated CI/CD pipelines, and clean component structures using Modern React & Docusaurus.',
      icon: (
        <svg className="w-7 h-7 text-blue-500 dark:text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      ),
    },
    {
      title: 'Community Leadership & Mentorship',
      description: 'Fostering inclusive open-source ecosystems like GirlScript Summer of Code (GSSoC) and Google Summer of Code (GSoC) initiatives.',
      icon: (
        <svg className="w-7 h-7 text-blue-500 dark:text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
    },
    {
      title: 'AI Multi-Agent Ecosystems',
      description: 'Exploring modern AI agent architecture, automated workflows, and developer productivity tools to shape the future of software development.',
      icon: (
        <svg className="w-7 h-7 text-blue-500 dark:text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
  ];

  const focusAreas = [
    {
      title: 'CodeHarborHub Ecosystem',
      desc: 'Building an educational platform offering developer roadmaps, interactive documentation, and beginner-to-advanced software engineering guides.',
      badge: 'Founder',
    },
    {
      title: 'Algo Platform',
      desc: 'Developing an interactive Data Structures & Algorithms visualizer platform designed to help students master core computer science concepts.',
      badge: 'Maintainer',
    },
    {
      title: 'Open Source Mentorship',
      desc: 'Managing repositories for GirlScript Summer of Code (GSSoC) and preparing community project frameworks for Google Summer of Code (GSoC).',
      badge: 'Community Lead',
    },
    {
      title: 'Enterprise & Regional Innovation',
      desc: 'Building custom software tools, Excel register modules for PACS digital transformation, and scalable frontend engines for web ventures.',
      badge: 'System Architect',
    },
  ];

  return (
    <Layout title="About Me | Ajay Dhangar" description="Founder of CodeHarborHub, Open Source Lead, and Full-Stack Software Engineer.">
      <main className="noise-bg min-h-screen transition-colors duration-300">
        
        {/* HERO SECTION */}
        <section className="section-padding container-max p-4 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Narrative */}
            <div className="lg:col-span-7 space-y-6">
              <span className="dyte-badge px-3 py-1 bg-blue-100 dark:bg-emerald-900/40 text-blue-600 dark:text-emerald-400 font-semibold rounded-full text-xs uppercase tracking-widest inline-block">
                Architect, Founder & Developer
              </span>
              <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white leading-tight">
                Hi, I'm <span className="text-primaryColor">Ajay Dhangar</span>
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                I am a B.Tech Software Engineer based in India, passionate about building high-performance web platforms, developer tools, and interactive educational environments. As the founder of <strong>CodeHarborHub</strong> and creator of the <strong>Algo</strong> project, my goal is to simplify tech learning and foster open-source growth worldwide.
              </p>
              <div className="flex flex-wrap gap-4 pt-2">
                <Link to="/docs/" className="btn-primary no-underline text-white hover:text-white">
                  Explore Documentation
                </Link>
                <a href="https://github.com/ajay-dhangar" target="_blank" rel="noopener noreferrer" className="btn-secondary no-underline flex items-center gap-2">
                  <span className="header-github-link"></span>
                  GitHub Profile
                </a>
              </div>
            </div>

            {/* Right Card */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative group w-full max-w-md">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-emerald-500 rounded-2xl blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                <div className="relative card p-6 bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700">
                  <div className="w-full h-64 bg-gradient-to-br from-blue-500 to-emerald-600 rounded-xl flex items-center justify-center text-white text-3xl font-black shadow-inner mb-6">
                    <img src="/img/og/ajay.jpeg" alt="Ajay Dhangar" className="w-full h-full object-cover rounded-xl" />
                  </div>
                  <div className="text-center">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">Ajay Dhangar</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Founder @CodeHarborHub • Open Source Lead</p>
                    <div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-700 flex justify-center space-x-3 text-xs text-gray-500 dark:text-gray-400">
                      <span>Frontend & Docusaurus</span>
                      <span>•</span>
                      <span>DSA & Multi-Agent AI</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* METRICS & IMPACT */}
        <section className="bg-gray-50/80 dark:bg-gray-800/50 py-12 border-y border-gray-200 dark:border-gray-700">
          <div className="container-max px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {metrics.map((item, idx) => (
                <div key={idx} className="space-y-1">
                  <p className="text-3xl sm:text-4xl font-extrabold text-blue-600 dark:text-emerald-400">
                    {item.value}
                  </p>
                  <p className="text-xs sm:text-sm font-medium text-gray-600 dark:text-gray-400 uppercase tracking-wider">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* MY STORY & JOURNEY */}
        <section className="section-padding container-max p-4">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="text-center">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">The Journey</h2>
              <p className="mt-2 text-gray-600 dark:text-gray-400">From writing clean code to leading open-source communities.</p>
            </div>

            <div className="card p-8 sm:p-10 border border-gray-100 dark:border-gray-800 space-y-6 text-gray-600 dark:text-gray-300 leading-relaxed">
              <p>
                My journey began with a passion for software architecture and computer science fundamentals. Over the years, I've focused on building real-world engineering solutions—ranging from modular UI themes and custom interactive code editors to full-fledged automated GitHub CI/CD pipelines.
              </p>
              <p>
                Recognizing the gap in interactive, structured engineering guides, I founded <strong>CodeHarborHub</strong> to provide accessible software developer roadmaps, interactive Data Structures and Algorithms visualizers, and comprehensive technical documentation.
              </p>
              <p>
                Today, I actively maintain open-source projects including <strong>Algo</strong>, manage community workflows for major events like <strong>GirlScript Summer of Code (GSSoC)</strong>, draft organizational frameworks for <strong>GSoC</strong>, and develop modern enterprise and rural digital transformation platforms.
              </p>
            </div>
          </div>
        </section>

        {/* WHAT I'M WORKING ON NOW */}
        <section className="section-padding bg-gray-50/60 dark:bg-gray-900/40 p-4">
          <div className="container-max">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">What I Do</h2>
              <p className="mt-2 text-gray-600 dark:text-gray-300">Active initiatives across platform engineering, AI agents, and open source.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {focusAreas.map((area, idx) => (
                <div key={idx} className="card p-6 border border-gray-100 dark:border-gray-800 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs font-semibold px-2.5 py-1 rounded bg-blue-100 text-blue-800 dark:bg-emerald-900/50 dark:text-emerald-300">
                        {area.badge}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{area.title}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{area.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CORE VALUES */}
        <section className="section-padding container-max p-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">Core Values & Vision</h2>
            <p className="mt-2 text-gray-600 dark:text-gray-300">Principles that guide my engineering choices and community projects.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {coreValues.map((val, idx) => (
              <div key={idx} className="card p-8 border border-gray-100 dark:border-gray-800 flex gap-5 items-start">
                <div className="p-3 bg-blue-50 dark:bg-gray-700/50 rounded-xl shrink-0">
                  {val.icon}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{val.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{val.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CALL TO ACTION */}
        <section id="contact" className="section-padding container-max text-center">
          <div className="card p-10 sm:p-14 bg-gradient-to-r from-blue-600 to-indigo-700 dark:from-gray-800 dark:to-gray-900 text-white rounded-3xl shadow-2xl relative overflow-hidden">
            <div className="relative z-10 max-w-2xl mx-auto space-y-6">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white">Let's Build Something Great Together</h2>
              <p className="text-blue-100 dark:text-gray-300 text-base sm:text-lg">
                Interested in collaborating on open-source initiatives, Docusaurus custom development, or developer tools?
              </p>
              <div className="pt-2 flex flex-wrap justify-center gap-4">
                <a
                  href="https://github.com/ajay-dhangar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-blue-600 hover:bg-gray-100 font-bold py-3 px-8 rounded-xl transition duration-300 shadow-md hover:shadow-xl no-underline"
                >
                  Connect on GitHub
                </a>
              </div>
            </div>
          </div>
        </section>

      </main>
    </Layout>
  );
}