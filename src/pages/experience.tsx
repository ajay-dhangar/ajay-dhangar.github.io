
import React, { useMemo, useState } from "react";
// @ts-ignore
import Layout from "@theme/Layout";
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  BriefcaseBusiness,
  Building2,
  CalendarDays,
  CheckCircle2,
  Code2,
  ExternalLink,
  Github,
  GraduationCap,
  Layers3,
  Lightbulb,
  MapPin,
  Network,
  Rocket,
  Sparkles,
  Terminal,
  Users,
  Workflow,
} from "lucide-react";

type ExperienceCategory =
  | "All"
  | "Professional"
  | "Leadership"
  | "Engineering";

type ExperienceItem = {
  id: string;
  role: string;
  organization: string;
  type: string;
  period: string;
  location: string;
  category: Exclude<ExperienceCategory, "All">;
  description: string;
  responsibilities: string[];
  technologies: string[];
  href?: string;
  featured?: boolean;
  current?: boolean;
  icon: React.ElementType;
};

const categories: ExperienceCategory[] = [
  "All",
  "Professional",
  "Leadership",
  "Engineering",
];

const experiences: ExperienceItem[] = [
  {
    id: "pacs",
    role: "Computer Operator",
    organization: "PACS Gujarda",
    type: "Banking & Cooperative Operations",
    period: "Current",
    location: "Gujarda, Mandsaur, Madhya Pradesh, India",
    category: "Professional",
    description:
      "Supporting day-to-day cooperative society operations through digital record management, data processing, and computer-based administrative workflows.",
    responsibilities: [
      "Manage and update relevant digital records and operational data.",
      "Support Public Distribution System (PDS) related computer operations.",
      "Handle Kisan Credit Card (KCC) data and related documentation workflows.",
      "Support fertilizer-related records and other cooperative society operations.",
      "Use computer applications to help maintain organized and accurate information.",
    ],
    technologies: ["Computer Operations", "Data Management", "Digital Records"],
    featured: true,
    current: true,
    icon: Building2,
  },
  {
    id: "codeharborhub",
    role: "Founder & Lead Maintainer",
    organization: "CodeHarborHub",
    type: "Open-Source Education Platform",
    period: "May 2024 – Present",
    location: "Remote · Global Community",
    category: "Leadership",
    description:
      "Building an open-source learning ecosystem designed to make programming, computer science, and modern development technologies accessible to learners at every stage.",
    responsibilities: [
      "Lead the development and ongoing maintenance of an open-source developer education platform.",
      "Build and organize tutorials, technical documentation, learning paths, and developer resources.",
      "Work with Docusaurus, React, TypeScript, and MDX to create structured learning experiences.",
      "Support contributors through project organization, documentation improvements, and open-source workflows.",
      "Improve usability, responsive layouts, discoverability, and the overall learning experience.",
    ],
    technologies: [
      "React",
      "TypeScript",
      "Docusaurus",
      "MDX",
      "Tailwind CSS",
      "GitHub Actions",
    ],
    href: "https://codeharborhub.github.io/",
    featured: true,
    current: true,
    icon: Network,
  },
  {
    id: "algo",
    role: "Project Admin & Maintainer",
    organization: "Algo",
    type: "Open-Source DSA Education",
    period: "2026 · GSSoC",
    location: "Remote · Open Source",
    category: "Leadership",
    description:
      "Contributing to an educational platform focused on data structures, algorithms, problem-solving, and practical programming examples.",
    responsibilities: [
      "Maintain and improve educational documentation and repository organization.",
      "Help coordinate contributor participation and open-source improvements.",
      "Work on clear explanations, algorithm resources, and learning-focused content.",
      "Support an approachable contribution process for developers with different experience levels.",
    ],
    technologies: [
      "TypeScript",
      "Docusaurus",
      "MDX",
      "Git",
      "GitHub",
      "Data Structures & Algorithms",
    ],
    href: "https://ajay-dhangar.github.io/algo/",
    featured: true,
    current: true,
    icon: Code2,
  },
  {
    id: "optimumai",
    role: "Full Stack Engineer Intern",
    organization: "OptimumAI",
    type: "Software Engineering Internship",
    period: "Internship",
    location: "Remote / Hybrid · Verify details",
    category: "Engineering",
    description:
      "Prior engineering experience involving full-stack web development and the implementation of web interfaces and application features.",
    responsibilities: [
      "Contribute to frontend development and responsive user interfaces.",
      "Work with web application components and backend integration.",
      "Practice maintainable code, collaborative development, and software engineering workflows.",
    ],
    technologies: ["JavaScript", "React", "Web Development", "Git"],
    featured: false,
    icon: Workflow,
  },
  {
    id: "ai-buddies",
    role: "Creator & Developer",
    organization: "AI Buddies",
    type: "AI Learning Project",
    period: "Ongoing Project",
    location: "Open Source · Online",
    category: "Engineering",
    description:
      "Developing an AI-focused learning project that brings together practical AI learning resources, interactive experiences, and community-driven development.",
    responsibilities: [
      "Develop and maintain the project's learning experience and documentation.",
      "Explore ways to integrate AI capabilities into practical developer learning workflows.",
      "Build project features using a modern React and Docusaurus-based ecosystem.",
      "Encourage open-source participation and continuous product improvement.",
    ],
    technologies: [
      "React",
      "Docusaurus",
      "TypeScript",
      "AI",
      "MDX",
      "GitHub",
    ],
    href: "https://ajay-dhangar.github.io/ai-buddies/",
    featured: true,
    current: true,
    icon: Sparkles,
  },
];

const skillGroups = [
  {
    title: "Frontend Engineering",
    icon: Code2,
    description: "Building responsive, accessible web experiences.",
    skills: ["HTML", "CSS", "JavaScript", "React", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "Full Stack Development",
    icon: Layers3,
    description: "Connecting user interfaces with application logic.",
    skills: ["Node.js", "Express.js", "MongoDB", "REST APIs", "Next.js"],
  },
  {
    title: "Documentation & Open Source",
    icon: Github,
    description: "Creating useful resources and collaborative workflows.",
    skills: ["Docusaurus", "MDX", "Git", "GitHub", "GitHub Actions"],
  },
  {
    title: "AI & Problem Solving",
    icon: Lightbulb,
    description: "Exploring intelligent applications and computer science.",
    skills: ["AI Projects", "Python", "DSA", "Problem Solving", "Prompt Design"],
  },
];

function ExperienceCard({
  item,
  index,
}: {
  item: ExperienceItem;
  index: number;
}) {
  const Icon = item.icon;

  return (
    <article
      className="group relative grid gap-5 md:grid-cols-[64px_minmax(0,1fr)]"
      style={{ animationDelay: `${index * 90}ms` }}
    >
      {/* Timeline marker */}
      <div className="relative hidden md:flex md:justify-center">
        <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-2xl border border-slate-200 bg-white text-slate-700 shadow-sm transition duration-300 group-hover:border-blue-400 group-hover:text-blue-600 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:group-hover:border-blue-500 dark:group-hover:text-blue-400">
          <Icon size={21} />
        </div>
      </div>

      {/* Experience card */}
      <div
        className={`rounded-3xl border p-6 transition duration-300 sm:p-8 ${
          item.featured
            ? "border-blue-200/80 bg-gradient-to-br from-blue-50/80 via-white to-white shadow-sm hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-950/5 dark:border-blue-900/70 dark:from-blue-950/30 dark:via-slate-950 dark:to-slate-950"
            : "border-slate-200 bg-white hover:-translate-y-1 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900/70"
        }`}
      >
        <div className="flex flex-wrap items-center gap-2">
          <span className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-600 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300">
            {item.category}
          </span>

          {item.current && (
            <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700 dark:bg-emerald-950/50 dark:text-emerald-400">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-500" />
              Active
            </span>
          )}

          <span className="ml-auto inline-flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400">
            <CalendarDays size={14} />
            {item.period}
          </span>
        </div>

        <div className="mt-5">
          <h3 className="text-xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-2xl">
            {item.role}
          </h3>

          <div className="mt-2 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm font-semibold text-[var(--ifm-color-primary)]">
            {item.organization}
            <span className="text-slate-400">/</span>
            <span className="font-normal text-slate-500 dark:text-slate-400">
              {item.type}
            </span>
          </div>

          <p className="mt-3 flex items-start gap-2 text-xs text-slate-500 dark:text-slate-400">
            <MapPin size={14} className="mt-0.5 shrink-0" />
            {item.location}
          </p>

          <p className="mt-5 max-w-3xl text-sm leading-7 text-slate-600 dark:text-slate-300 sm:text-base">
            {item.description}
          </p>
        </div>

        <div className="mt-6">
          <h4 className="text-xs font-bold uppercase tracking-[0.16em] text-slate-500 dark:text-slate-400">
            Responsibilities & Contributions
          </h4>

          <ul className="mt-4 space-y-3">
            {item.responsibilities.map((responsibility) => (
              <li
                key={responsibility}
                className="flex items-start gap-3 text-sm leading-6 text-slate-600 dark:text-slate-300"
              >
                <CheckCircle2
                  size={17}
                  className="mt-1 shrink-0 text-blue-600"
                />
                <span>{responsibility}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-6 flex flex-wrap gap-2">
          {item.technologies.map((technology) => (
            <span
              key={technology}
              className="rounded-lg border border-slate-200/80 bg-slate-50 px-2.5 py-1.5 text-xs font-medium text-slate-600 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300"
            >
              {technology}
            </span>
          ))}
        </div>

        {item.href && (
          <div className="mt-7 border-t border-slate-200/80 pt-5 dark:border-slate-800">
            <a
              href={item.href}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--ifm-color-primary)] no-underline transition hover:gap-3 hover:text-blue-800 dark:hover:text-blue-300"
            >
              Explore {item.organization}
              <ArrowUpRight size={16} />
            </a>
          </div>
        )}
      </div>
    </article>
  );
}

export default function ExperiencePage(): JSX.Element {
  const [activeCategory, setActiveCategory] =
    useState<ExperienceCategory>("All");

  const [showAll, setShowAll] = useState(false);

  const filteredExperiences = useMemo(() => {
    if (activeCategory === "All") return experiences;

    return experiences.filter(
      (experience) => experience.category === activeCategory,
    );
  }, [activeCategory]);

  const visibleExperiences = showAll
    ? filteredExperiences
    : filteredExperiences.filter((experience) => experience.featured);

  return (
    <Layout
      title="Experience"
      description="Explore Ajay Dhangar's professional experience, open-source leadership, full-stack development work, and AI projects."
    >
      <main className="min-h-screen overflow-hidden bg-white text-slate-900 dark:bg-slate-950 dark:text-white">
        {/* Hero */}
        <section className="relative isolate border-b border-slate-200/80 dark:border-slate-800">
          <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
            <div className="absolute -top-40 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-blue-500/10 blur-3xl" />
            <div className="absolute right-0 top-24 h-64 w-64 rounded-full bg-cyan-400/10 blur-3xl" />

            <div
              className="absolute inset-0 opacity-[0.035] dark:opacity-[0.06]"
              style={{
                backgroundImage:
                  "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",
                backgroundSize: "36px 36px",
              }}
            />
          </div>

          <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28 lg:px-12">
            <div className="max-w-4xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-[var(--ifm-color-primary)] dark:border-blue-900 dark:bg-blue-950/50 dark:text-blue-300">
                <BriefcaseBusiness size={15} />
                Professional Journey
              </div>

              <h1 className="mt-7 text-4xl font-black leading-tight tracking-tight sm:text-6xl lg:text-7xl">
                Experience that
                <span className="block bg-gradient-to-r from-blue-600 via-cyan-500 to-indigo-500 bg-clip-text text-transparent">
                  turns ideas into impact.
                </span>
              </h1>

              <p className="mt-7 max-w-2xl text-base leading-8 text-slate-600 dark:text-slate-300 sm:text-lg">
                I’m Ajay Dhangar — a developer, open-source maintainer, and
                technology enthusiast. My journey combines hands-on digital
                operations, full-stack development, developer education, and
                building tools that help people learn and create.
              </p>

              <div className="mt-9 flex flex-wrap gap-3">
                <a
                  href="#experience-timeline"
                  className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3.5 text-sm font-semibold text-white no-underline shadow-lg shadow-blue-600/20 transition hover:-translate-y-0.5 hover:bg-[var(--ifm-color-primary)]"
                >
                  Explore my experience
                  <ArrowDownRight size={17} />
                </a>

                <a
                  href="https://www.linkedin.com/in/ajay-dhangar/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-5 py-3.5 text-sm font-semibold text-slate-700 no-underline transition hover:border-blue-400 dark:border-slate-700 dark:bg-slate-900 dark:text-white"
                >
                  <ExternalLink size={16} />
                  Connect on LinkedIn
                </a>
              </div>

              <div className="mt-12 flex flex-wrap gap-x-6 gap-y-3 text-sm text-slate-500 dark:text-slate-400">
                <span className="inline-flex items-center gap-2">
                  <MapPin size={16} />
                  Madhya Pradesh, India
                </span>
                <span className="inline-flex items-center gap-2">
                  <Code2 size={16} />
                  Full Stack Development
                </span>
                <span className="inline-flex items-center gap-2">
                  <Users size={16} />
                  Open-Source Community
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Career snapshot */}
        <section className="mx-auto max-w-7xl px-5 py-12 sm:px-8 lg:px-12">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: Building2,
                title: "Digital Operations",
                detail: "Cooperative society workflows",
              },
              {
                icon: Rocket,
                title: "Platform Building",
                detail: "CodeHarborHub ecosystem",
              },
              {
                icon: Github,
                title: "Open Source",
                detail: "Projects and collaboration",
              },
              {
                icon: Sparkles,
                title: "AI Exploration",
                detail: "AI Buddies and learning tools",
              },
            ].map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="rounded-2xl border border-slate-200 bg-slate-50/70 p-5 dark:border-slate-800 dark:bg-slate-900/50"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-100 text-[var(--ifm-color-primary)] dark:bg-blue-950">
                    <Icon size={20} />
                  </div>
                  <h2 className="mt-4 text-sm font-bold">{item.title}</h2>
                  <p className="mt-1 text-xs leading-5 text-slate-500 dark:text-slate-400">
                    {item.detail}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Experience timeline */}
        <section
          id="experience-timeline"
          className="mx-auto max-w-7xl scroll-mt-20 px-5 py-12 sm:px-8 sm:py-16 lg:px-12"
        >
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600">
                Career timeline
              </p>

              <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
                Where I build, learn & contribute
              </h2>

              <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-600 dark:text-slate-400 sm:text-base">
                A selection of my professional responsibilities, leadership
                activities, and engineering projects.
              </p>
            </div>

            <a
              href="https://github.com/ajay-dhangar"
              target="_blank"
              rel="noreferrer"
              className="inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-slate-700 no-underline hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-400"
            >
              <Github size={18} />
              Explore my GitHub
              <ArrowUpRight size={16} />
            </a>
          </div>

          {/* Category filters */}
          <div className="mt-9 flex flex-wrap gap-2">
            {categories.map((category) => {
              const isActive = activeCategory === category;

              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => {
                    setActiveCategory(category);
                    setShowAll(false);
                  }}
                  aria-pressed={isActive}
                  className={`rounded-full border px-4 py-2.5 text-sm font-semibold transition ${
                    isActive
                      ? "border-blue-600 bg-blue-600 text-white shadow-md shadow-blue-600/15"
                      : "border-slate-200 bg-white text-slate-600 hover:border-blue-300 hover:text-[var(--ifm-color-primary)] dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300 dark:hover:text-blue-400"
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>

          <div className="relative mt-8 space-y-6 md:space-y-8">
            <div className="absolute bottom-6 left-[23px] top-6 hidden w-px bg-gradient-to-b from-blue-500/60 via-slate-300 to-transparent dark:via-slate-700 md:block" />

            {visibleExperiences.length > 0 ? (
              visibleExperiences.map((item, index) => (
                <ExperienceCard key={item.id} item={item} index={index} />
              ))
            ) : (
              <div className="rounded-2xl border border-dashed border-slate-300 p-8 text-center dark:border-slate-700">
                <p className="text-sm text-slate-500">
                  No featured entries in this category yet.
                </p>
                <button
                  type="button"
                  onClick={() => setShowAll(true)}
                  className="mt-3 text-sm font-semibold text-blue-600 hover:underline"
                >
                  Show all entries
                </button>
              </div>
            )}
          </div>

          {filteredExperiences.length > visibleExperiences.length && (
            <div className="mt-8 text-center">
              <button
                type="button"
                onClick={() => setShowAll(true)}
                className="inline-flex items-center gap-2 rounded-xl border border-slate-300 px-5 py-3 text-sm font-semibold transition hover:border-blue-400 hover:text-blue-600 dark:border-slate-700 dark:hover:text-blue-400"
              >
                View all experience
                <ArrowRight size={16} />
              </button>
            </div>
          )}
        </section>

        {/* Skills */}
        <section className="border-y border-slate-200 bg-slate-50/70 dark:border-slate-800 dark:bg-slate-900/30">
          <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-12">
            <div className="max-w-2xl">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600">
                Technical toolkit
              </p>
              <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
                Skills I bring to the table
              </h2>
              <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-400 sm:text-base">
                Technologies and areas I work with across web development,
                documentation, open-source projects, and AI exploration.
              </p>
            </div>

            <div className="mt-9 grid gap-5 sm:grid-cols-2">
              {skillGroups.map((group) => {
                const Icon = group.icon;

                return (
                  <div
                    key={group.title}
                    className="rounded-2xl border border-slate-200 bg-white p-6 transition hover:border-blue-300 dark:border-slate-800 dark:bg-slate-950"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-[var(--ifm-color-primary)] dark:bg-blue-950">
                        <Icon size={21} />
                      </div>
                      <div>
                        <h3 className="font-bold">{group.title}</h3>
                        <p className="mt-1 text-sm leading-6 text-slate-500 dark:text-slate-400">
                          {group.description}
                        </p>
                      </div>
                    </div>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {group.skills.map((skill) => (
                        <span
                          key={skill}
                          className="rounded-lg bg-slate-100 px-3 py-2 text-xs font-medium text-slate-700 dark:bg-slate-800 dark:text-slate-300"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Education */}
        <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-12">
          <div className="grid gap-8 md:grid-cols-[1fr_1.4fr] md:items-center">
            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-[var(--ifm-color-primary)] dark:bg-blue-950">
                <GraduationCap size={24} />
              </div>
              <p className="mt-5 text-xs font-bold uppercase tracking-[0.2em] text-blue-600">
                Education
              </p>
              <h2 className="mt-3 text-3xl font-black tracking-tight">
                Building on strong foundations
              </h2>
              <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-400">
                My computer science education supports my interest in software
                engineering, problem-solving, and building practical technology.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 dark:border-slate-800 dark:bg-slate-900">
              <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-start">
                <div>
                  <h3 className="text-xl font-bold">
                    B.Tech in Computer Science & Engineering
                  </h3>
                  <p className="mt-2 text-sm font-medium text-[var(--ifm-color-primary)]">
                    Mandsaur University
                  </p>
                </div>
                <span className="inline-flex w-fit items-center gap-2 rounded-full bg-slate-100 px-3 py-1.5 text-xs font-semibold text-slate-600 dark:bg-slate-800 dark:text-slate-300">
                  <GraduationCap size={14} />
                  Completed · 2024
                </span>
              </div>
              <p className="mt-5 text-sm leading-7 text-slate-600 dark:text-slate-400">
                Computer science foundations, programming, software development,
                and the continued application of technical knowledge through
                projects and open-source collaboration.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="px-5 pb-20 sm:px-8 lg:px-12">
          <div className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl bg-slate-950 px-6 py-12 text-white sm:px-10 sm:py-16 lg:px-14">
            <div className="pointer-events-none absolute -right-20 -top-24 h-72 w-72 rounded-full bg-blue-600/30 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-28 left-1/3 h-64 w-64 rounded-full bg-cyan-500/20 blur-3xl" />

            <div className="relative grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
              <div className="max-w-2xl">
                <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-cyan-300">
                  <Terminal size={16} />
                  Let’s build something meaningful
                </div>

                <h2 className="mt-5 text-3xl font-black tracking-tight sm:text-4xl">
                  Have a project, opportunity, or idea?
                </h2>

                <p className="mt-4 text-sm leading-7 text-slate-300 sm:text-base">
                  I’m interested in connecting with engineering teams,
                  collaborating on open-source projects, and exploring
                  opportunities to build useful software.
                </p>
              </div>

              <div className="flex flex-wrap gap-3 md:flex-col">
                <a
                  href="https://www.linkedin.com/in/ajay-dhangar/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-bold text-slate-950 no-underline transition hover:bg-cyan-100"
                >
                  Let’s connect
                  <ArrowUpRight size={17} />
                </a>

                <a
                  href="https://github.com/ajay-dhangar"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 px-5 py-3 text-sm font-semibold text-white no-underline transition hover:border-white/50 hover:bg-white/5"
                >
                  <Github size={17} />
                  View GitHub
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
