import React from "react";
// @ts-ignore
import Head from "@docusaurus/Head";
// @ts-ignore
import Layout from "@theme/Layout";
// @ts-ignore
import Link from "@docusaurus/Link";
import {
  ArrowDownToLine,
  ArrowLeft,
  ArrowRight,
  BriefcaseBusiness,
  CheckCircle2,
  Code2,
  Download,
  ExternalLink,
  FileText,
  Github,
  GraduationCap,
  Mail,
  MapPin,
  Printer,
  Rocket,
  Sparkles,
  Terminal,
  UserRound,
} from "lucide-react";

const skills = {
  Languages: [
    "JavaScript",
    "TypeScript",
    "Python",
    "HTML",
    "CSS",
  ],
  Frontend: [
    "React",
    "Next.js",
    "Docusaurus",
    "Tailwind CSS",
    "Responsive UI",
  ],
  Backend: [
    "Node.js",
    "REST APIs",
    "Supabase",
    "Authentication",
    "Database Integration",
  ],
  "Developer Tools": [
    "Git",
    "GitHub",
    "Postman",
    "VS Code",
    "GitHub Pages",
  ],
  "AI & Data": [
    "Generative AI",
    "Prompt Engineering",
    "AI Applications",
    "Machine Learning Fundamentals",
  ],
  "Computer Science": [
    "Data Structures",
    "Algorithms",
    "OOP",
    "DBMS",
    "Problem Solving",
  ],
};

const experience = [
  {
    role: "Full Stack Engineer Intern",
    company: "OptimumAI",
    period: "6+ Months",
    type: "Engineering Internship",
    description:
      "Worked on an AI-enhanced human development collaborative platform, contributing to modern full-stack application development and product workflows.",
    responsibilities: [
      "Developed and refined full-stack web application functionality.",
      "Worked with React, Next.js, TypeScript, JavaScript, and Supabase.",
      "Contributed to authentication and application workflows.",
      "Worked on a Next.js dashboard prototype.",
      "Used Git and GitHub for collaborative engineering workflows.",
    ],
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Supabase",
      "Git",
    ],
  },
];

const projects = [
  {
    name: "CodeHarborHub",
    type: "Open Source Developer Education Platform",
    description:
      "An open-source developer education platform focused on practical programming, web development, computer science, AI, and modern developer skills.",
    technologies: [
      "Docusaurus",
      "React",
      "TypeScript",
      "MDX",
      "Tailwind CSS",
      "GitHub",
    ],
    link: "https://codeharborhub.github.io/",
    github: "https://github.com/CodeHarborHub/codeharborhub.github.io",
  },
  {
    name: "Algo",
    type: "Open Source DSA Learning Platform",
    description:
      "An open-source learning and practice platform focused on Data Structures and Algorithms, problem solving, roadmaps, and developer learning.",
    technologies: [
      "Docusaurus",
      "React",
      "TypeScript",
      "JavaScript",
      "GitHub",
    ],
    link: "https://ajay-dhangar.github.io/algo/",
    github: "https://github.com/ajay-dhangar/algo",
  },
  {
    name: "AI Buddies",
    type: "AI-Powered Developer Project",
    description:
      "An AI-focused project exploring practical user-facing experiences around AI-powered assistance and modern web application development.",
    technologies: [
      "React",
      "JavaScript",
      "AI",
      "Web Development",
      "GitHub Pages",
    ],
    link: "https://ajay-dhangar.github.io/ai-buddies/",
    github: "https://github.com/Ajay-Dhangar/ai-buddies",
  },
];

const achievements = [
  "GSSoC'24 Project Admin — CodeHarborHub",
  "GSSoC'24 Extended Edition Project Admin — Algo",
  "Postman API Fundamentals Student Expert",
  "Vertex AI Prompt Design Lab — 100% completion",
];

const resumeHighlights = [
  {
    value: "2024",
    label: "B.Tech CSE",
    description: "Mandsaur University",
  },
  {
    value: "6+ Mo.",
    label: "Engineering Internship",
    description: "Full Stack Engineering",
  },
  {
    value: "Open",
    label: "Source Builder",
    description: "Developer-focused projects",
  },
  {
    value: "AI + Web",
    label: "Core Direction",
    description: "Modern software engineering",
  },
];

export default function ResumePage(): JSX.Element {
  const pageUrl = "https://ajay-dhangar.github.io/career/resume";

  return (
    <Layout
      title="Resume | Ajay Dhangar — Full Stack Developer"
      description="View the professional resume of Ajay Dhangar, a Full Stack Developer focused on React, Next.js, TypeScript, open source, AI applications, and software engineering."
    >
      <Head>
        <link rel="canonical" href={pageUrl} />

        <meta
          name="keywords"
          content="Ajay Dhangar resume, Full Stack Developer resume, React Developer India, Next.js Developer, TypeScript Developer, Software Engineer, AI Engineer, Open Source Developer"
        />

        <meta
          property="og:title"
          content="Ajay Dhangar — Full Stack Developer Resume"
        />
        <meta
          property="og:description"
          content="Professional resume and engineering profile of Ajay Dhangar, focused on full-stack development, AI applications, and open source."
        />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:type" content="profile" />

        <meta
          name="twitter:title"
          content="Ajay Dhangar — Full Stack Developer Resume"
        />
        <meta
          name="twitter:description"
          content="Full Stack Developer focused on React, Next.js, TypeScript, AI, and open source."
        />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfilePage",
            name: "Ajay Dhangar — Resume",
            url: pageUrl,
            mainEntity: {
              "@type": "Person",
              name: "Ajay Dhangar",
              jobTitle: "Full Stack Developer",
              url: "https://ajay-dhangar.github.io/",
              sameAs: [
                "https://github.com/Ajay-Dhangar",
                "https://www.linkedin.com/in/ajay-dhangar/",
                "https://x.com/CodesWithAjay",
              ],
              alumniOf: {
                "@type": "CollegeOrUniversity",
                name: "Mandsaur University",
              },
              knowsAbout: [
                "Full Stack Development",
                "React",
                "Next.js",
                "TypeScript",
                "JavaScript",
                "AI Applications",
                "Open Source",
                "Data Structures and Algorithms",
                "Software Engineering",
              ],
            },
          })}
        </script>

        <style>{`
          @media print {
            .resume-no-print,
            nav,
            footer,
            .navbar,
            .theme-doc-breadcrumbs {
              display: none !important;
            }

            body {
              background: white !important;
            }

            .resume-print-surface {
              max-width: 100% !important;
              padding: 0 !important;
            }

            .resume-section {
              break-inside: avoid;
            }

            a {
              color: inherit !important;
              text-decoration: none !important;
            }
          }
        `}</style>
      </Head>

      <main className="bg-white dark:bg-gray-950">
        {/* =========================================================
            HERO / RESUME HEADER
        ========================================================== */}
        <section className="relative overflow-hidden border-b border-gray-200/70 dark:border-gray-800">
          <div className="absolute inset-0 -z-10">
            <div className="absolute left-[-8%] top-[-20%] h-[500px] w-[500px] rounded-full bg-blue-500/10 blur-[110px]" />
            <div className="absolute right-[-8%] top-[5%] h-[420px] w-[420px] rounded-full bg-cyan-400/10 blur-[110px]" />
            <div className="absolute bottom-[-30%] left-[35%] h-[350px] w-[350px] rounded-full bg-emerald-400/10 blur-[100px]" />
          </div>

          <div className="container-max p-4">
            <div className="mx-auto">
              {/* Top utility bar */}
              <div className="resume-no-print mb-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <Link
                  to="/career"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-gray-600 transition-colors hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400"
                >
                  <ArrowLeft size={16} />
                  Back to Career
                </Link>

                <div className="flex flex-wrap gap-3">
                  <button
                    type="button"
                    onClick={() => window.print()}
                    className="inline-flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-4 py-2.5 text-sm font-semibold text-gray-700 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300"
                  >
                    <Printer size={16} />
                    Print
                  </button>

                  <a
                    href="/resume.pdf"
                    download
                    className="btn-primary inline-flex items-center gap-2 !rounded-xl !py-2.5 !px-4 text-sm"
                  >
                    <Download size={16} />
                    Download Resume
                  </a>
                </div>
              </div>

              <div className="grid items-center gap-12 lg:grid-cols-[1.3fr_0.7fr]">
                {/* Candidate */}
                <div>
                  <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-sm font-semibold text-emerald-700 dark:border-emerald-900/60 dark:bg-emerald-950/30 dark:text-emerald-300">
                    <span className="relative flex h-2.5 w-2.5">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                      <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
                    </span>
                    Open to Software Engineering Opportunities
                  </div>

                  <p className="mb-3 text-sm font-bold uppercase tracking-[0.22em] text-blue-600 dark:text-blue-400">
                    Professional Resume
                  </p>

                  <h1 className="text-5xl font-black tracking-[-0.04em] text-gray-950 dark:text-white sm:text-6xl lg:text-7xl mb-4">
                    Ajay Dhangar
                  </h1>

                  {/* <p className="mt-4 text-lg text-gray-700 dark:text-gray-300 italic">
                    Full Stack Developer | React · Next.js · TypeScript | Open Source | AI Applications...
                  </p>                 */}

                  <p className="mt-2 max-w-3xl text-lg leading-8 text-gray-600 dark:text-gray-300">
                    B.Tech Computer Science graduate and Full Stack Engineer
                    with practical experience building modern web applications,
                    AI-powered products, and open-source developer platforms.
                    Focused on writing maintainable software, learning deeply,
                    and turning ideas into useful products.
                  </p>

                  <div className="mt-7 flex flex-wrap gap-x-5 gap-y-3 text-sm text-gray-600 dark:text-gray-400">
                    <span className="inline-flex items-center gap-2">
                      <MapPin size={16} className="text-blue-500" />
                      India
                    </span>

                    <a
                      href="https://github.com/Ajay-Dhangar"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 transition-colors hover:text-blue-600 dark:hover:text-blue-400"
                    >
                      <Github size={16} />
                      GitHub
                    </a>

                    <a
                      href="https://www.linkedin.com/in/ajay-dhangar/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 transition-colors hover:text-blue-600 dark:hover:text-blue-400"
                    >
                      <UserRound size={16} />
                      LinkedIn
                    </a>

                    <a
                      href="https://ajay-dhangar.github.io/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 transition-colors hover:text-blue-600 dark:hover:text-blue-400"
                    >
                      <ExternalLink size={16} />
                      Portfolio
                    </a>
                  </div>
                </div>

                {/* Resume identity card */}
                <div className="relative">
                  <div className="rounded-[2rem] border border-gray-200 bg-white/80 p-6 shadow-2xl shadow-blue-500/5 backdrop-blur-xl dark:border-gray-700 dark:bg-gray-900/80">
                    <div className="mb-6 flex items-center justify-between">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 text-white shadow-lg shadow-blue-500/20">
                        <FileText size={24} />
                      </div>

                      <span className="rounded-full bg-gray-100 px-3 py-1.5 text-xs font-bold text-gray-600 dark:bg-gray-800 dark:text-gray-300">
                        RESUME
                      </span>
                    </div>

                    <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                      Engineering Profile
                    </h2>

                    <p className="mt-2 text-sm leading-6 text-gray-500 dark:text-gray-400">
                      Full-stack engineering, AI applications, open source,
                      and computer science fundamentals.
                    </p>

                    <div className="mt-6 space-y-3">
                      {[
                        "B.Tech Computer Science — 2024",
                        "6+ months engineering internship",
                        "Open-source project leadership",
                        "React · Next.js · TypeScript",
                        "AI + modern web engineering",
                      ].map((item) => (
                        <div
                          key={item}
                          className="flex items-start gap-3 text-sm text-gray-700 dark:text-gray-300"
                        >
                          <CheckCircle2
                            size={17}
                            className="mt-0.5 shrink-0 text-emerald-500"
                          />
                          {item}
                        </div>
                      ))}
                    </div>

                    <div className="mt-4 border-t border-gray-100 pt-5 dark:border-gray-800">
                      <a
                        href="/resume.pdf"
                        download
                        className="flex w-full items-center justify-center gap-2 rounded-xl bg-gray-950 px-5 py-3.5 text-sm font-bold text-white transition-all hover:-translate-y-0.5 hover:shadow-xl dark:bg-white dark:text-gray-950"
                      >
                        <ArrowDownToLine size={17} />
                        Download PDF Resume
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            QUICK STATS
        ========================================================== */}
        <section className="resume-no-print border-b border-gray-200/70 bg-gray-50/70 dark:border-gray-800 dark:bg-gray-900/30">
          <div className="container-max px-4 py-7 sm:px-6 lg:px-8">
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {resumeHighlights.map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl border border-gray-200 bg-white px-5 py-4 dark:border-gray-700 dark:bg-gray-900"
                >
                  <p className="text-2xl font-black text-gray-950 dark:text-white">
                    {item.value}
                  </p>
                  <p className="mt-1 text-sm font-bold text-gray-800 dark:text-gray-200">
                    {item.label}
                  </p>
                  <p className="mt-0.5 text-xs text-gray-500 dark:text-gray-500">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =========================================================
            RESUME CONTENT
        ========================================================== */}
        <section className="section-padding resume-print-surface p-4 py-12">
          <div className="container-max">
            <div className="grid gap-10 lg:grid-cols-[1fr_340px]">
              {/* LEFT COLUMN */}
              <div className="min-w-0 space-y-12">
                {/* Summary */}
                <section className="resume-section">
                  <SectionHeading
                    eyebrow="Profile"
                    title="Professional Summary"
                    icon={UserRound}
                  />

                  <div className="rounded-3xl border border-gray-200 bg-white p-7 shadow-sm dark:border-gray-700 dark:bg-gray-900 sm:p-8">
                    <p className="text-base leading-8 text-gray-600 dark:text-gray-300">
                      I am a Computer Science graduate and Full Stack Developer
                      interested in building reliable, maintainable, and
                      user-focused software. My experience spans modern
                      frontend development, full-stack applications, APIs,
                      cloud-connected data workflows, AI-powered applications,
                      and open-source developer education.
                    </p>

                    <p className="mt-5 text-base leading-8 text-gray-600 dark:text-gray-300">
                      I enjoy working across the stack, understanding systems
                      end-to-end, and learning through real projects. My
                      long-term direction is toward high-impact software
                      engineering with strong foundations in system design,
                      algorithms, AI, and scalable application development.
                    </p>
                  </div>
                </section>

                {/* Experience */}
                <section className="resume-section">
                  <SectionHeading
                    eyebrow="Experience"
                    title="Engineering Experience"
                    icon={BriefcaseBusiness}
                  />

                  <div className="space-y-6">
                    {experience.map((item) => (
                      <article
                        key={`${item.role}-${item.company}`}
                        className="relative overflow-hidden rounded-3xl border border-gray-200 bg-white p-7 shadow-sm dark:border-gray-700 dark:bg-gray-900 sm:p-8"
                      >
                        <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-blue-500 via-cyan-500 to-emerald-500" />

                        <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
                          <div>
                            <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-600 dark:text-blue-400">
                              {item.type}
                            </p>

                            <h3 className="mt-2 text-2xl font-black text-gray-950 dark:text-white">
                              {item.role}
                            </h3>

                            <p className="mt-1 font-semibold text-gray-600 dark:text-gray-300">
                              {item.company}
                            </p>
                          </div>

                          <span className="w-fit rounded-full border border-gray-200 bg-gray-50 px-3 py-1.5 text-xs font-bold text-gray-600 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300">
                            {item.period}
                          </span>
                        </div>

                        <p className="mt-6 leading-7 text-gray-600 dark:text-gray-300">
                          {item.description}
                        </p>

                        <div className="mt-7">
                          <p className="mb-3 text-sm font-bold text-gray-900 dark:text-white">
                            Responsibilities
                          </p>

                          <ul className="space-y-2.5">
                            {item.responsibilities.map((responsibility) => (
                              <li
                                key={responsibility}
                                className="flex gap-3 text-sm leading-6 text-gray-600 dark:text-gray-400"
                              >
                                <CheckCircle2
                                  size={17}
                                  className="mt-1 shrink-0 text-emerald-500"
                                />
                                {responsibility}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="mt-7 flex flex-wrap gap-2 border-t border-gray-100 pt-5 dark:border-gray-800">
                          {item.technologies.map((technology) => (
                            <span
                              key={technology}
                              className="rounded-lg bg-gray-100 px-2.5 py-1.5 text-xs font-semibold text-gray-600 dark:bg-gray-800 dark:text-gray-300"
                            >
                              {technology}
                            </span>
                          ))}
                        </div>
                      </article>
                    ))}
                  </div>
                </section>

                {/* Projects */}
                <section className="resume-section">
                  <SectionHeading
                    eyebrow="Selected Work"
                    title="Projects"
                    icon={Rocket}
                  />

                  <div className="space-y-5">
                    {projects.map((project) => (
                      <article
                        key={project.name}
                        className="group rounded-3xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-gray-700 dark:bg-gray-900 sm:p-7"
                      >
                        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                          <div>
                            <div className="flex flex-wrap items-center gap-3">
                              <h3 className="text-xl font-black text-gray-950 dark:text-white">
                                {project.name}
                              </h3>

                              <span className="rounded-full bg-blue-50 px-2.5 py-1 text-xs font-semibold text-blue-700 dark:bg-blue-950/40 dark:text-blue-300">
                                {project.type}
                              </span>
                            </div>

                            <p className="mt-3 leading-7 text-gray-600 dark:text-gray-400">
                              {project.description}
                            </p>
                          </div>

                          <div className="resume-no-print flex shrink-0 gap-2">
                            <a
                              href={project.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              aria-label={`Open ${project.name}`}
                              className="flex h-10 w-10 items-center justify-center rounded-xl border border-gray-200 text-gray-600 transition-all hover:border-blue-300 hover:text-blue-600 dark:border-gray-700 dark:text-gray-400 dark:hover:border-blue-700 dark:hover:text-blue-400"
                            >
                              <ExternalLink size={17} />
                            </a>

                            <a
                              href={project.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              aria-label={`${project.name} GitHub repository`}
                              className="flex h-10 w-10 items-center justify-center rounded-xl border border-gray-200 text-gray-600 transition-all hover:border-blue-300 hover:text-blue-600 dark:border-gray-700 dark:text-gray-400 dark:hover:border-blue-700 dark:hover:text-blue-400"
                            >
                              <Github size={17} />
                            </a>
                          </div>
                        </div>

                        <div className="mt-5 flex flex-wrap gap-2">
                          {project.technologies.map((technology) => (
                            <span
                              key={technology}
                              className="rounded-lg border border-gray-200 px-2.5 py-1.5 text-xs font-medium text-gray-600 dark:border-gray-700 dark:text-gray-400"
                            >
                              {technology}
                            </span>
                          ))}
                        </div>
                      </article>
                    ))}
                  </div>
                </section>

                {/* Achievements */}
                <section className="resume-section">
                  <SectionHeading
                    eyebrow="Recognition"
                    title="Achievements"
                    icon={Sparkles}
                  />

                  <div className="rounded-3xl border border-gray-200 bg-white p-7 shadow-sm dark:border-gray-700 dark:bg-gray-900 sm:p-8">
                    <div className="grid gap-4 sm:grid-cols-2">
                      {achievements.map((achievement) => (
                        <div
                          key={achievement}
                          className="flex gap-3 rounded-2xl bg-gray-50 p-4 dark:bg-gray-800/70"
                        >
                          <CheckCircle2
                            size={18}
                            className="mt-0.5 shrink-0 text-emerald-500"
                          />
                          <span className="text-sm leading-6 text-gray-700 dark:text-gray-300">
                            {achievement}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </section>
              </div>

              {/* RIGHT COLUMN */}
              <aside className="space-y-6">
                {/* Contact */}
                <div className="resume-section rounded-3xl border border-gray-200 bg-gray-950 p-6 text-white shadow-xl dark:border-gray-700 dark:bg-white dark:text-gray-950">
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-300 dark:text-blue-600">
                    Contact
                  </p>

                  <h2 className="mt-3 text-xl font-black">
                    Let&apos;s build something useful.
                  </h2>

                  <div className="mt-6 space-y-4">
                    <a
                      href="https://github.com/Ajay-Dhangar"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-sm text-gray-300 transition-colors hover:text-white dark:text-gray-600 dark:hover:text-gray-950"
                    >
                      <Github size={17} />
                      github.com/Ajay-Dhangar
                    </a>

                    <a
                      href="https://www.linkedin.com/in/ajay-dhangar/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-sm text-gray-300 transition-colors hover:text-white dark:text-gray-600 dark:hover:text-gray-950"
                    >
                      <UserRound size={17} />
                      LinkedIn Profile
                    </a>

                    <a
                      href="https://ajay-dhangar.github.io/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-sm text-gray-300 transition-colors hover:text-white dark:text-gray-600 dark:hover:text-gray-950"
                    >
                      <ExternalLink size={17} />
                      ajay-dhangar.github.io
                    </a>
                  </div>
                </div>

                {/* Skills */}
                <div className="resume-section rounded-3xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-900">
                  <div className="mb-6 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600 dark:bg-blue-950/40 dark:text-blue-400">
                      <Terminal size={19} />
                    </div>

                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.15em] text-gray-500">
                        Toolkit
                      </p>
                      <h2 className="font-black text-gray-900 dark:text-white">
                        Technical Skills
                      </h2>
                    </div>
                  </div>

                  <div className="space-y-6">
                    {Object.entries(skills).map(([category, items]) => (
                      <div key={category}>
                        <h3 className="mb-2.5 text-xs font-bold uppercase tracking-[0.14em] text-gray-500 dark:text-gray-400">
                          {category}
                        </h3>

                        <div className="flex flex-wrap gap-2">
                          {items.map((skill) => (
                            <span
                              key={skill}
                              className="rounded-lg border border-gray-200 bg-gray-50 px-2.5 py-1.5 text-xs font-semibold text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Education */}
                <div className="resume-section rounded-3xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-900">
                  <div className="mb-5 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-50 text-violet-600 dark:bg-violet-950/40 dark:text-violet-400">
                      <GraduationCap size={20} />
                    </div>

                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.15em] text-gray-500">
                        Education
                      </p>
                      <h2 className="font-black text-gray-900 dark:text-white">
                        Academic Foundation
                      </h2>
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                    B.Tech in Computer Science
                  </h3>

                  <p className="mt-1 font-medium text-gray-600 dark:text-gray-300">
                    Mandsaur University
                  </p>

                  <div className="mt-4 flex items-center justify-between text-sm">
                    <span className="text-gray-500 dark:text-gray-400">
                      Completed
                    </span>

                    <span className="rounded-full bg-gray-100 px-3 py-1 font-bold text-gray-700 dark:bg-gray-800 dark:text-gray-300">
                      2024
                    </span>
                  </div>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {[
                      "Programming",
                      "Algorithms",
                      "DBMS",
                      "Software Development",
                      "Computer Science",
                    ].map((item) => (
                      <span
                        key={item}
                        className="rounded-lg bg-gray-50 px-2.5 py-1.5 text-xs font-medium text-gray-600 dark:bg-gray-800 dark:text-gray-400"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Career Direction */}
                <div className="resume-section rounded-3xl border border-blue-200 bg-blue-50/70 p-6 dark:border-blue-900/60 dark:bg-blue-950/20">
                  <div className="flex items-center gap-3">
                    <Sparkles
                      size={20}
                      className="text-blue-600 dark:text-blue-400"
                    />

                    <h2 className="font-black text-gray-900 dark:text-white">
                      Career Direction
                    </h2>
                  </div>

                  <p className="mt-4 text-sm leading-7 text-gray-600 dark:text-gray-300">
                    Growing toward high-impact software engineering roles with
                    deeper expertise in full-stack architecture, AI
                    applications, system design, algorithms, and scalable
                    products.
                  </p>

                  <Link
                    to="/career/experience"
                    className="resume-no-print mt-5 inline-flex items-center gap-2 text-sm font-bold text-blue-600 hover:text-blue-700 dark:text-blue-400"
                  >
                    Explore experience
                    <ArrowRight size={15} />
                  </Link>
                </div>
              </aside>
            </div>
          </div>
        </section>

        {/* =========================================================
            RECRUITER CTA
        ========================================================== */}
        <section className="resume-no-print border-t border-gray-200/70 dark:border-gray-800 p-4 py-12">
          <div className="container-max section-padding">
            <div className="relative overflow-hidden rounded-[2rem] bg-gray-950 p-8 text-white dark:bg-white dark:text-gray-950 sm:p-10 lg:p-12">
              <div className="absolute right-[-10%] top-[-80%] h-[400px] w-[400px] rounded-full bg-blue-500/20 blur-[100px]" />

              <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
                <div className="max-w-2xl">
                  <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.15em] text-gray-300 dark:border-gray-900/10 dark:bg-gray-900/5 dark:text-gray-600">
                    <BriefcaseBusiness size={14} />
                    Recruiter / Hiring Manager
                  </div>

                  <h2 className="text-3xl font-black tracking-tight sm:text-4xl">
                    Looking for a developer who likes to build?
                  </h2>

                  <p className="mt-4 leading-7 text-gray-400 dark:text-gray-600">
                    Explore my engineering experience, projects, open-source
                    work, and technical background—or download the resume for a
                    concise overview.
                  </p>
                </div>

                <div className="flex flex-col gap-3 sm:flex-row lg:shrink-0">
                  <a
                    href="/resume.pdf"
                    download
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-5 py-3.5 text-sm font-bold text-gray-950 transition-all hover:-translate-y-0.5 hover:shadow-xl dark:bg-gray-950 dark:text-white"
                  >
                    <Download size={17} />
                    Download Resume
                  </a>

                  <Link
                    to="/career/experience"
                    className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 px-5 py-3.5 text-sm font-bold text-white transition-all hover:bg-white/10 dark:border-gray-900/20 dark:text-gray-950 dark:hover:bg-gray-900/10"
                  >
                    View Experience
                    <ArrowRight size={17} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer navigation */}
        <section className="resume-no-print border-t border-gray-200/70 dark:border-gray-800">
          <div className="container-max px-4 py-8 sm:px-6 lg:px-8">
            <div className="flex flex-col gap-4 text-sm sm:flex-row sm:items-center sm:justify-between">
              <Link
                to="/career"
                className="inline-flex items-center gap-2 font-semibold text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400"
              >
                <ArrowLeft size={16} />
                Career Overview
              </Link>

              <div className="flex flex-wrap gap-5">
                <Link
                  to="/career/timeline"
                  className="text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400"
                >
                  Timeline
                </Link>

                <Link
                  to="/career/experience"
                  className="text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400"
                >
                  Experience
                </Link>

                <Link
                  to="/career/education"
                  className="text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400"
                >
                  Education
                </Link>

                <Link
                  to="/career/achievements"
                  className="text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400"
                >
                  Achievements
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}

function SectionHeading({
  eyebrow,
  title,
  icon: Icon,
}: {
  eyebrow: string;
  title: string;
  icon: React.ElementType;
}) {
  return (
    <div className="mb-6 flex items-end justify-between gap-5">
      <div>
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">
          {eyebrow}
        </p>

        <h2 className="mt-2 text-2xl font-black tracking-tight text-gray-950 dark:text-white sm:text-3xl">
          {title}
        </h2>
      </div>

      <div className="hidden h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-300 sm:flex">
        <Icon size={20} />
      </div>
    </div>
  );
}