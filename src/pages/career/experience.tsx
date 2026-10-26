import React from "react";
// @ts-ignore
import Layout from "@theme/Layout";
// @ts-ignore
import Head from "@docusaurus/Head";
// @ts-ignore
import Link from "@docusaurus/Link";
import {
  ArrowDownRight,
  ArrowRight,
  BriefcaseBusiness,
  CheckCircle2,
  ChevronRight,
  Code2,
  ExternalLink,
  GitBranch,
  Github,
  Layers3,
  Rocket,
  Sparkles,
  Terminal,
  Users,
  Workflow,
} from "lucide-react";

type Experience = {
  role: string;
  company: string;
  period: string;
  location: string;
  type: string;
  description: string;
  website?: string;
  websiteLabel?: string;
  technologies: string[];
  responsibilities: string[];
  highlights: string[];
};

const experiences: Experience[] = [
  {
    role: "Full Stack Engineer Intern",
    company: "OptimumAI",
    period: "6+ Months",
    location: "Remote / Engineering",
    type: "Internship",
    description:
      "Worked on an AI-enhanced human development collaborative platform, contributing to modern full-stack application development and product workflows.",
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Supabase",
      "Git",
      "GitHub",
    ],
    responsibilities: [
      "Worked on full-stack web application development.",
      "Contributed to an AI-enhanced collaborative platform.",
      "Worked with authentication and application workflows.",
      "Built and refined a Next.js dashboard prototype.",
      "Worked with Supabase-backed application functionality.",
      "Collaborated around modern development and Git workflows.",
    ],
    highlights: [
      "6+ months of practical engineering experience.",
      "Worked across frontend and backend-facing application concerns.",
      "Gained experience with modern React and Next.js development.",
      "Applied engineering concepts in a real product environment.",
    ],
  },
];

const engineeringAreas = [
  {
    icon: <Layers3 size={22} />,
    title: "Frontend Engineering",
    description:
      "Building responsive, accessible, component-driven interfaces with modern React and TypeScript.",
    technologies: ["React", "Next.js", "TypeScript", "JavaScript"],
  },
  {
    icon: <Workflow size={22} />,
    title: "Backend & Data",
    description:
      "Working with application logic, APIs, authentication, databases, and backend-connected product workflows.",
    technologies: ["Supabase", "APIs", "Authentication", "Databases"],
  },
  {
    icon: <Sparkles size={22} />,
    title: "AI Applications",
    description:
      "Exploring practical AI-powered experiences and integrating AI concepts into modern web applications.",
    technologies: ["AI", "LLM Applications", "Prompt Engineering", "AI Tools"],
  },
  {
    icon: <GitBranch size={22} />,
    title: "Engineering Workflow",
    description:
      "Using Git, GitHub, collaborative workflows, documentation, and open-source practices to ship software.",
    technologies: ["Git", "GitHub", "Open Source", "Documentation"],
  },
];

const engineeringPrinciples = [
  {
    number: "01",
    title: "Understand before building",
    description:
      "I start by understanding the user problem, requirements, existing architecture, and expected outcome before jumping into implementation.",
  },
  {
    number: "02",
    title: "Build reusable systems",
    description:
      "I prefer component-driven architectures, reusable patterns, clear interfaces, and maintainable code over one-off implementations.",
  },
  {
    number: "03",
    title: "Ship and iterate",
    description:
      "I believe practical engineering improves through implementation, feedback, debugging, iteration, and continuous refinement.",
  },
  {
    number: "04",
    title: "Keep learning",
    description:
      "I continuously strengthen fundamentals while exploring modern technologies that can improve the products I build.",
  },
];

const currentFocus = [
  "Scalable full-stack architecture",
  "Advanced TypeScript",
  "React & Next.js",
  "AI-powered applications",
  "Backend & API engineering",
  "Data structures & algorithms",
  "System design",
  "Open-source engineering",
];

function ExperienceCard({ experience }: { experience: Experience }) {
  return (
    <article className="relative overflow-hidden rounded-[2rem] border border-gray-200 bg-white shadow-xl shadow-gray-200/40 dark:border-gray-800 dark:bg-gray-900 dark:shadow-black/20">
      {/* Top accent */}
      <div className="h-1.5 bg-gradient-to-r from-blue-600 via-cyan-500 to-emerald-500" />

      <div className="p-6 sm:p-8 lg:p-10">
        {/* Header */}
        <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
          <div className="flex gap-4">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-lg shadow-blue-600/20">
              <BriefcaseBusiness size={27} />
            </div>

            <div>
              <div className="mb-2 inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-bold uppercase tracking-wider text-blue-700 dark:border-blue-900/60 dark:bg-blue-950/40 dark:text-blue-300">
                {experience.type}
              </div>

              <h2 className="text-2xl font-black tracking-tight text-gray-950 dark:text-white sm:text-3xl">
                {experience.role}
              </h2>

              <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm font-semibold text-gray-500 dark:text-gray-400">
                <span className="text-blue-600 dark:text-blue-400">
                  {experience.company}
                </span>

                <span className="hidden sm:inline">•</span>

                <span>{experience.period}</span>

                <span className="hidden sm:inline">•</span>

                <span>{experience.location}</span>
              </div>
            </div>
          </div>

          {experience.website && (
            <a
              href={experience.website}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-fit items-center gap-2 rounded-xl border border-gray-200 px-4 py-2.5 text-sm font-bold text-gray-700 no-underline transition hover:-translate-y-0.5 hover:border-blue-500 hover:text-blue-600 dark:border-gray-700 dark:text-gray-300 dark:hover:text-blue-400"
            >
              {experience.websiteLabel ?? "Company"}
              <ExternalLink size={15} />
            </a>
          )}
        </div>

        {/* Description */}
        <div className="mt-8 max-w-4xl">
          <p className="text-base leading-8 text-gray-600 dark:text-gray-300 sm:text-lg">
            {experience.description}
          </p>
        </div>

        {/* Main grid */}
        <div className="mt-10 grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
          {/* Responsibilities */}
          <div>
            <div className="mb-5 flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-50 text-blue-600 dark:bg-blue-950/50 dark:text-blue-400">
                <CheckCircle2 size={19} />
              </div>

              <h3 className="text-lg font-black text-gray-900 dark:text-white">
                What I worked on
              </h3>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {experience.responsibilities.map((item) => (
                <div
                  key={item}
                  className="group flex gap-3 rounded-xl border border-gray-100 bg-gray-50/80 p-4 transition hover:border-blue-200 hover:bg-blue-50/50 dark:border-gray-800 dark:bg-gray-950/50 dark:hover:border-blue-900 dark:hover:bg-blue-950/20"
                >
                  <CheckCircle2
                    size={17}
                    className="mt-0.5 shrink-0 text-blue-500"
                  />

                  <span className="text-sm leading-6 text-gray-700 dark:text-gray-300">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Technologies */}
          <div>
            <div className="mb-5 flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-cyan-50 text-cyan-600 dark:bg-cyan-950/50 dark:text-cyan-400">
                <Terminal size={19} />
              </div>

              <h3 className="text-lg font-black text-gray-900 dark:text-white">
                Technology stack
              </h3>
            </div>

            <div className="flex flex-wrap gap-2.5">
              {experience.technologies.map((technology) => (
                <span
                  key={technology}
                  className="rounded-xl border border-gray-200 bg-white px-3.5 py-2 text-sm font-semibold text-gray-700 shadow-sm dark:border-gray-700 dark:bg-gray-950 dark:text-gray-300"
                >
                  {technology}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Highlights */}
        <div className="mt-10 border-t border-gray-100 pt-8 dark:border-gray-800">
          <div className="mb-5 flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600 dark:bg-emerald-950/50 dark:text-emerald-400">
              <Rocket size={19} />
            </div>

            <h3 className="text-lg font-black text-gray-900 dark:text-white">
              Career highlights
            </h3>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {experience.highlights.map((highlight) => (
              <div
                key={highlight}
                className="rounded-xl border border-gray-200 bg-gray-50 p-4 dark:border-gray-800 dark:bg-gray-950"
              >
                <p className="text-sm font-semibold leading-6 text-gray-700 dark:text-gray-300">
                  {highlight}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}

export default function ExperiencePage(): JSX.Element {
  return (
    <Layout
      title="Experience | Ajay Dhangar"
      description="Explore Ajay Dhangar's software engineering experience, full-stack development work, AI application development, technologies, responsibilities, and engineering focus."
    >
      <Head>
        <meta
          name="keywords"
          content="Ajay Dhangar experience, Ajay Dhangar software engineer, Full Stack Developer experience, React developer, Next.js developer, TypeScript developer, AI engineer, OptimumAI internship, software engineering portfolio"
        />

        <meta
          property="og:title"
          content="Experience | Ajay Dhangar"
        />

        <meta
          property="og:description"
          content="Explore my full-stack engineering experience, technical responsibilities, technologies, AI work, and current engineering direction."
        />

        <meta property="og:type" content="profile" />

        <meta
          property="og:url"
          content="https://ajay-dhangar.github.io/career/experience"
        />

        <meta name="twitter:card" content="summary_large_image" />

        <link
          rel="canonical"
          href="https://ajay-dhangar.github.io/career/experience"
        />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfilePage",
            name: "Ajay Dhangar — Experience",
            url: "https://ajay-dhangar.github.io/career/experience",
            description:
              "Professional software engineering experience and technical background of Ajay Dhangar.",
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
            },
          })}
        </script>
      </Head>

      <main className="min-h-screen bg-white text-gray-900 dark:bg-gray-950 dark:text-white">
        {/* =========================================================
            HERO
        ========================================================== */}
        <section className="relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute left-[-8%] top-[-15%] h-[420px] w-[420px] rounded-full bg-blue-500/10 blur-3xl" />
            <div className="absolute right-[-8%] top-[15%] h-[400px] w-[400px] rounded-full bg-cyan-500/10 blur-3xl" />
          </div>

          <div className="container-max section-padding pb-14 pt-20 lg:pb-20 lg:pt-28">
            <div className="mx-auto max-w-5xl text-center">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-bold text-blue-700 dark:border-blue-900/60 dark:bg-blue-950/40 dark:text-blue-300">
                <BriefcaseBusiness size={16} />
                Professional Experience
              </div>

              <h1 className="text-4xl font-black tracking-tight sm:text-5xl lg:text-7xl">
                Engineering experience built through{" "}
                <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-emerald-500 bg-clip-text text-transparent">
                  real projects.
                </span>
              </h1>

              <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-gray-600 dark:text-gray-300 sm:text-lg">
                A focused look at my practical software engineering experience,
                technologies I have worked with, responsibilities I have taken
                on, and the engineering direction I am building toward.
              </p>

              <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                <Link
                  to="/career/resume"
                  className="btn-primary inline-flex items-center justify-center gap-2 no-underline"
                >
                  View Resume
                  <ArrowRight size={18} />
                </Link>

                <Link
                  to="/projects"
                  className="btn-secondary inline-flex items-center justify-center gap-2 no-underline"
                >
                  Explore Projects
                  <ArrowDownRight size={18} />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            EXPERIENCE SNAPSHOT
        ========================================================== */}
        <section className="border-y border-gray-200 bg-gray-50/70 dark:border-gray-800 dark:bg-gray-900/40">
          <div className="container-max px-4 py-8 sm:px-6 lg:px-8">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-gray-900">
                <div className="text-3xl font-black text-blue-600 dark:text-blue-400">
                  6+
                </div>
                <p className="mt-1 text-sm font-bold text-gray-900 dark:text-white">
                  Months
                </p>
                <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                  Practical engineering internship experience
                </p>
              </div>

              <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-gray-900">
                <div className="text-3xl font-black text-cyan-600 dark:text-cyan-400">
                  Full Stack
                </div>
                <p className="mt-1 text-sm font-bold text-gray-900 dark:text-white">
                  Engineering
                </p>
                <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                  Frontend, backend-connected workflows and product features
                </p>
              </div>

              <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-gray-900">
                <div className="text-3xl font-black text-emerald-600 dark:text-emerald-400">
                  AI
                </div>
                <p className="mt-1 text-sm font-bold text-gray-900 dark:text-white">
                  Product Focus
                </p>
                <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                  Experience with AI-enhanced application concepts
                </p>
              </div>

              <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-gray-900">
                <div className="text-3xl font-black text-violet-600 dark:text-violet-400">
                  OSS
                </div>
                <p className="mt-1 text-sm font-bold text-gray-900 dark:text-white">
                  Open Source
                </p>
                <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                  Building and maintaining developer-focused projects
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            EXPERIENCE
        ========================================================== */}
        <section className="section-padding p-4 py-12">
          <div className="container-max">
            <div className="mx-auto mb-12 max-w-3xl text-center">
              <span className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">
                Work Experience
              </span>

              <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
                Where I’ve applied my skills
              </h2>

              <p className="mt-4 leading-7 text-gray-600 dark:text-gray-400">
                My professional experience has helped me move from learning
                technologies to applying them in real development environments.
              </p>
            </div>

            <div className="mx-auto space-y-8">
              {experiences.map((experience) => (
                <ExperienceCard
                  key={`${experience.company}-${experience.role}`}
                  experience={experience}
                />
              ))}
            </div>
          </div>
        </section>

        {/* =========================================================
            ENGINEERING CAPABILITIES
        ========================================================== */}
        <section className="section-padding bg-gray-50 dark:bg-gray-900/50 p-4 py-12">
          <div className="container-max">
            <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
              <div className="lg:sticky lg:top-24">
                <span className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">
                  Engineering Capabilities
                </span>

                <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
                  What I bring to a team
                </h2>

                <p className="mt-5 leading-8 text-gray-600 dark:text-gray-400">
                  My strongest direction is modern full-stack development,
                  supported by a growing foundation in AI, backend systems,
                  computer science, and open-source engineering.
                </p>

                <div className="mt-7 rounded-2xl border border-blue-200 bg-blue-50 p-5 dark:border-blue-900/50 dark:bg-blue-950/20">
                  <div className="flex items-start gap-3">
                    <Sparkles className="mt-0.5 shrink-0 text-blue-600 dark:text-blue-400" />

                    <div>
                      <p className="font-bold text-gray-900 dark:text-white">
                        Engineering mindset
                      </p>

                      <p className="mt-1 text-sm leading-6 text-gray-600 dark:text-gray-400">
                        Focus on maintainable code, practical problem solving,
                        continuous learning, and shipping useful software.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                {engineeringAreas.map((area) => (
                  <article
                    key={area.title}
                    className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-300 hover:shadow-xl dark:border-gray-800 dark:bg-gray-950 dark:hover:border-blue-800"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600 transition group-hover:scale-105 dark:bg-blue-950/50 dark:text-blue-400">
                      {area.icon}
                    </div>

                    <h3 className="mt-5 text-lg font-black text-gray-900 dark:text-white">
                      {area.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-gray-600 dark:text-gray-400">
                      {area.description}
                    </p>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {area.technologies.map((technology) => (
                        <span
                          key={technology}
                          className="rounded-lg bg-gray-100 px-2.5 py-1 text-xs font-semibold text-gray-600 dark:bg-gray-900 dark:text-gray-400"
                        >
                          {technology}
                        </span>
                      ))}
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            ENGINEERING PRINCIPLES
        ========================================================== */}
        <section className="section-padding p-4 py-12">
          <div className="container-max">
            <div className="mx-auto mb-12 max-w-3xl text-center">
              <span className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">
                How I work
              </span>

              <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
                Principles that guide my engineering
              </h2>
            </div>

            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {engineeringPrinciples.map((principle) => (
                <article
                  key={principle.number}
                  className="relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900"
                >
                  <span className="text-5xl font-black text-blue-500/10 dark:text-blue-400/10">
                    {principle.number}
                  </span>

                  <h3 className="mt-2 text-lg font-black text-gray-900 dark:text-white">
                    {principle.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-gray-600 dark:text-gray-400">
                    {principle.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* =========================================================
            CURRENT FOCUS
        ========================================================== */}
        <section className="section-padding bg-gray-50 dark:bg-gray-900/50 p-4 py-12">
          <div className="container-max">
            <div className="mx-auto">
              <div className="rounded-[2rem] border border-gray-200 bg-white p-7 shadow-lg dark:border-gray-800 dark:bg-gray-950 sm:p-10">
                <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
                  <div className="max-w-xl">
                    <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-[0.18em] text-blue-600 dark:text-blue-400">
                      <Rocket size={17} />
                      Current Focus
                    </div>

                    <h2 className="mt-4 text-3xl font-black tracking-tight">
                      Where I’m investing my next level of growth
                    </h2>

                    <p className="mt-4 leading-7 text-gray-600 dark:text-gray-400">
                      I’m continuing to strengthen both fundamentals and
                      production-oriented engineering skills while exploring
                      the intersection of full-stack development and AI.
                    </p>
                  </div>

                  <div className="grid gap-2 sm:grid-cols-2">
                    {currentFocus.map((focus) => (
                      <div
                        key={focus}
                        className="flex items-center gap-2 rounded-lg border border-gray-200 px-3 py-2.5 text-sm font-semibold text-gray-700 dark:border-gray-800 dark:text-gray-300"
                      >
                        <CheckCircle2
                          size={15}
                          className="shrink-0 text-blue-500"
                        />
                        {focus}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            OPEN SOURCE EXPERIENCE
        ========================================================== */}
        <section className="section-padding p-4 py-12">
          <div className="container-max">
            <div className="relative overflow-hidden rounded-[2rem] bg-gray-950 p-8 text-white sm:p-12 dark:bg-black">
              <div className="absolute right-[-100px] top-[-100px] h-72 w-72 rounded-full bg-blue-500/20 blur-3xl" />
              <div className="absolute bottom-[-120px] left-[-80px] h-64 w-64 rounded-full bg-cyan-500/10 blur-3xl" />

              <div className="relative grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">
                <div>
                  <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-[0.18em] text-blue-400">
                    <GitBranch size={17} />
                    Beyond employment
                  </div>

                  <h2 className="mt-4 max-w-3xl text-3xl font-black tracking-tight sm:text-4xl">
                    Open source is part of my engineering experience.
                  </h2>

                  <p className="mt-5 max-w-3xl leading-8 text-gray-400">
                    Alongside professional work, I build and maintain
                    developer-focused projects such as CodeHarborHub and Algo.
                    These projects have given me experience with project
                    ownership, documentation, collaboration, developer
                    education, and shipping software independently.
                  </p>
                </div>

                <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
                  <a
                    href="https://github.com/CodeHarborHub"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-bold text-gray-950 no-underline transition hover:-translate-y-0.5 hover:bg-gray-100"
                  >
                    <GitBranch size={17} />
                    CodeHarborHub
                    <ExternalLink size={14} />
                  </a>

                  <a
                    href="https://github.com/Ajay-Dhangar"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-xl border border-gray-700 px-5 py-3 text-sm font-bold text-white no-underline transition hover:border-gray-500 hover:bg-white/5"
                  >
                    <Github size={17} />
                    GitHub Profile
                    <ExternalLink size={14} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            FINAL CTA
        ========================================================== */}
        <section className="section-padding p-4">
          <div className="container-max">
            <div className="flex flex-col items-center justify-between gap-5 rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900 sm:flex-row sm:p-8">
              <div>
                <h2 className="text-xl font-black text-gray-900 dark:text-white">
                  Want the complete career picture?
                </h2>

                <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                  Continue with my timeline, achievements, certifications, or
                  recruiter-ready resume.
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                <Link
                  to="/career/timeline"
                  className="inline-flex items-center gap-2 rounded-xl border border-gray-200 px-4 py-2.5 text-sm font-bold text-gray-700 no-underline transition hover:border-blue-500 hover:text-blue-600 dark:border-gray-700 dark:text-gray-300 dark:hover:text-blue-400"
                >
                  Timeline
                  <ChevronRight size={15} />
                </Link>

                <Link
                  to="/career/achievements"
                  className="inline-flex items-center gap-2 rounded-xl border border-gray-200 px-4 py-2.5 text-sm font-bold text-gray-700 no-underline transition hover:border-blue-500 hover:text-blue-600 dark:border-gray-700 dark:text-gray-300 dark:hover:text-blue-400"
                >
                  Achievements
                  <ChevronRight size={15} />
                </Link>

                <Link
                  to="/career/resume"
                  className="btn-primary inline-flex items-center gap-2 px-4 py-2.5 text-sm no-underline"
                >
                  Resume
                  <ArrowRight size={15} />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}