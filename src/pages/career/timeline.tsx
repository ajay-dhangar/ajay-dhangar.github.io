import React from "react";
// @ts-ignore
import Layout from "@theme/Layout";
// @ts-ignore
import Head from "@docusaurus/Head";
// @ts-ignore
import Link from "@docusaurus/Link";
import {
  ArrowRight,
  Award,
  BookOpen,
  BriefcaseBusiness,
  CheckCircle2,
  Code2,
  ExternalLink,
  GraduationCap,
  GitBranch,
  Github,
  Rocket,
  Sparkles,
  Trophy,
} from "lucide-react";

type TimelineItem = {
  year: string;
  period: string;
  title: string;
  organization: string;
  description: string;
  icon: React.ReactNode;
  type: string;
  highlights: string[];
  technologies?: string[];
  link?: string;
  linkLabel?: string;
};

const timeline: TimelineItem[] = [
  {
    year: "2024",
    period: "Academic Milestone",
    title: "Completed B.Tech in Computer Science",
    organization: "Mandsaur University",
    description:
      "Completed my Bachelor of Technology in Computer Science, building the academic foundation that shaped my interest in software engineering, web development, algorithms, and modern technologies.",
    icon: <GraduationCap size={22} />,
    type: "Education",
    highlights: [
      "Bachelor of Technology in Computer Science",
      "Completed in 2024",
      "Built a foundation in computer science and software development",
      "Continued learning through practical projects and open source",
    ],
  },
  {
    year: "2024",
    period: "Open Source",
    title: "Started building and contributing through open source",
    organization: "GitHub & Developer Communities",
    description:
      "Expanded my development journey beyond academic projects by working with GitHub, open-source repositories, developer communities, and collaborative software development.",
    icon: <GitBranch size={22} />,
    type: "Open Source",
    highlights: [
      "Worked with collaborative Git workflows",
      "Contributed to developer-focused projects",
      "Learned from real-world codebases",
      "Started taking greater ownership of technical projects",
    ],
    technologies: ["Git", "GitHub", "JavaScript", "TypeScript", "React"],
  },
  {
    year: "2024–2025",
    period: "Open Source Leadership",
    title: "Project Administration & Community Leadership",
    organization: "GirlScript Summer of Code",
    description:
      "Took on project administration responsibilities during GSSoC, gaining experience in open-source project coordination, contributor workflows, issue management, and community collaboration.",
    icon: <Trophy size={22} />,
    type: "Leadership",
    highlights: [
      "GSSoC'24 Project Admin — CodeHarborHub",
      "GSSoC'24 Extended Edition Project Admin — Algo",
      "Worked with contributors and project workflows",
      "Helped maintain contributor-focused open-source projects",
    ],
    link: "https://github.com/CodeHarborHub",
    linkLabel: "View CodeHarborHub",
  },
  {
    year: "2025",
    period: "Engineering Experience",
    title: "Full Stack Engineer Intern",
    organization: "OptimumAI",
    description:
      "Worked as a Full Stack Engineer Intern on an AI-enhanced human development collaborative platform, gaining practical experience building modern web application features and working with contemporary full-stack technologies.",
    icon: <BriefcaseBusiness size={22} />,
    type: "Experience",
    highlights: [
      "Worked on an AI-enhanced collaborative platform",
      "Worked with authentication and application workflows",
      "Built a Next.js dashboard prototype",
      "Worked with Supabase",
      "Developed practical full-stack engineering experience",
    ],
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "Supabase",
      "JavaScript",
    ],
  },
  {
    year: "2025–2026",
    period: "Developer Education",
    title: "Growing CodeHarborHub",
    organization: "CodeHarborHub",
    description:
      "Continued developing CodeHarborHub as an open-source developer education platform focused on helping learners build practical skills across web development, programming, computer science, AI, DevOps, security, and related technologies.",
    icon: <Rocket size={22} />,
    type: "Founder / Maintainer",
    highlights: [
      "Built and maintained the CodeHarborHub platform",
      "Developed educational content and learning structures",
      "Worked on Docusaurus-based documentation",
      "Designed developer-focused learning experiences",
      "Focused on making technical education accessible to a global audience",
    ],
    technologies: [
      "React",
      "TypeScript",
      "Docusaurus",
      "MDX",
      "Tailwind CSS",
      "GitHub",
    ],
    link: "https://codeharborhub.github.io/",
    linkLabel: "Visit CodeHarborHub",
  },
  {
    year: "2025–2026",
    period: "DSA & Computer Science",
    title: "Building Algo",
    organization: "Open Source DSA Platform",
    description:
      "Developed Algo as a learning and practice platform around data structures, algorithms, problem solving, and computer science fundamentals.",
    icon: <Code2 size={22} />,
    type: "Project",
    highlights: [
      "Created a dedicated DSA learning environment",
      "Worked on structured learning paths and practice",
      "Focused on algorithms and problem solving",
      "Applied modern web technologies to developer education",
    ],
    technologies: [
      "React",
      "TypeScript",
      "Docusaurus",
      "JavaScript",
      "GitHub",
    ],
    link: "https://ajay-dhangar.github.io/algo/",
    linkLabel: "Explore Algo",
  },
  {
    year: "2025–2026",
    period: "AI Engineering",
    title: "Exploring AI-powered Developer Experiences",
    organization: "AI Buddies",
    description:
      "Built AI Buddies as part of my continued exploration of practical AI-powered applications and developer experiences, combining modern web development with AI-focused functionality.",
    icon: <Sparkles size={22} />,
    type: "AI Project",
    highlights: [
      "Built an AI-focused web project",
      "Explored practical AI application experiences",
      "Combined frontend engineering with AI concepts",
      "Continued experimenting with modern developer tooling",
    ],
    technologies: [
      "React",
      "TypeScript",
      "JavaScript",
      "AI",
      "Web Technologies",
    ],
    link: "https://ajay-dhangar.github.io/ai-buddies/",
    linkLabel: "Explore AI Buddies",
  },
  {
    year: "2026",
    period: "Current Direction",
    title: "Deepening Full Stack + AI Engineering",
    organization: "Continuous Learning",
    description:
      "Currently focused on becoming a stronger software engineer by going deeper into full-stack architecture, AI engineering, system design, algorithms, open source, and production-quality software development.",
    icon: <Sparkles size={22} />,
    type: "Current",
    highlights: [
      "Strengthening full-stack engineering skills",
      "Deepening AI and AI application development",
      "Improving DSA and problem-solving ability",
      "Learning scalable software architecture",
      "Continuing open-source development",
    ],
    technologies: [
      "TypeScript",
      "React",
      "Next.js",
      "Node.js",
      "AI",
      "GitHub",
    ],
  },
];

const principles = [
  {
    icon: <Code2 size={20} />,
    title: "Build to learn",
    description:
      "I prefer learning technologies by building real projects rather than only consuming tutorials.",
  },
  {
    icon: <GitBranch size={20} />,
    title: "Open source mindset",
    description:
      "Collaborative development has helped me understand Git workflows, code review, contributors, and community-driven software.",
  },
  {
    icon: <Rocket size={20} />,
    title: "Keep shipping",
    description:
      "Each project is an opportunity to improve engineering quality, architecture, product thinking, and execution.",
  },
  {
    icon: <BookOpen size={20} />,
    title: "Continuous learning",
    description:
      "My career direction is driven by consistent learning across software engineering, AI, computer science, and developer tooling.",
  },
];

function TimelineCard({ item }: { item: TimelineItem }) {
  return (
    <article className="group relative">
      <div className="absolute -left-[42px] top-8 hidden h-4 w-4 rounded-full border-4 border-white bg-blue-600 shadow-md dark:border-gray-950 sm:block" />

      <div className="card overflow-hidden border border-gray-200 dark:border-gray-800">
        <div className="border-b border-gray-100 bg-gray-50/80 px-5 py-4 dark:border-gray-800 dark:bg-gray-900/70 sm:px-7">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600 dark:bg-blue-950/50 dark:text-blue-400">
                {item.icon}
              </div>

              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
                  {item.type}
                </div>

                <div className="mt-1 text-sm font-semibold text-gray-500 dark:text-gray-400">
                  {item.period}
                </div>
              </div>
            </div>

            <span className="w-fit rounded-full border border-gray-200 bg-white px-3 py-1 text-sm font-bold text-gray-700 dark:border-gray-700 dark:bg-gray-950 dark:text-gray-300">
              {item.year}
            </span>
          </div>
        </div>

        <div className="p-5 sm:p-7">
          <h2 className="text-xl font-black tracking-tight text-gray-900 dark:text-white sm:text-2xl">
            {item.title}
          </h2>

          <div className="mt-2 flex items-center gap-2 text-sm font-semibold text-gray-500 dark:text-gray-400">
            <BriefcaseBusiness size={15} />
            {item.organization}
          </div>

          <p className="mt-5 leading-8 text-gray-600 dark:text-gray-400">
            {item.description}
          </p>

          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {item.highlights.map((highlight) => (
              <div
                key={highlight}
                className="flex items-start gap-2 text-sm leading-6 text-gray-700 dark:text-gray-300"
              >
                <CheckCircle2
                  size={17}
                  className="mt-1 shrink-0 text-blue-500"
                />
                <span>{highlight}</span>
              </div>
            ))}
          </div>

          {item.technologies && item.technologies.length > 0 && (
            <div className="mt-6 flex flex-wrap gap-2">
              {item.technologies.map((technology) => (
                <span
                  key={technology}
                  className="rounded-lg border border-gray-200 bg-gray-50 px-3 py-1.5 text-xs font-semibold text-gray-600 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300"
                >
                  {technology}
                </span>
              ))}
            </div>
          )}

          {item.link && (
            <div className="mt-6 border-t border-gray-100 pt-5 dark:border-gray-800">
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-bold text-blue-600 no-underline hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
              >
                {item.linkLabel ?? "Learn more"}
                <ExternalLink size={15} />
              </a>
            </div>
          )}
        </div>
      </div>
    </article>
  );
}

export default function CareerTimelinePage(): JSX.Element {
  return (
    <Layout
      title="Career Timeline | Ajay Dhangar"
      description="Explore Ajay Dhangar's career timeline, including education, engineering experience, open-source leadership, projects, AI work, and current professional direction."
    >
      <Head>
        <meta
          name="keywords"
          content="Ajay Dhangar career timeline, Ajay Dhangar experience, software engineer timeline, full stack developer career, open source developer, AI developer, React developer, TypeScript developer, OptimumAI, CodeHarborHub, Algo"
        />

        <meta
          property="og:title"
          content="Career Timeline | Ajay Dhangar"
        />

        <meta
          property="og:description"
          content="Follow my journey through computer science education, full-stack engineering, open source, developer education, AI projects, and continuous learning."
        />

        <meta
          property="og:type"
          content="profile"
        />

        <meta
          name="twitter:card"
          content="summary_large_image"
        />

        <link
          rel="canonical"
          href="https://ajay-dhangar.github.io/career/timeline"
        />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfilePage",
            name: "Ajay Dhangar Career Timeline",
            url: "https://ajay-dhangar.github.io/career/timeline",
            description:
              "Career timeline covering Ajay Dhangar's education, engineering experience, open-source work, projects, and professional development.",
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
          <div className="absolute inset-0 -z-10">
            <div className="absolute left-[-10%] top-[-20%] h-[420px] w-[420px] rounded-full bg-blue-500/10 blur-3xl" />
            <div className="absolute right-[-8%] top-[20%] h-[380px] w-[380px] rounded-full bg-cyan-500/10 blur-3xl" />
          </div>

          <div className="container-max section-padding pb-14 pt-20 lg:pb-20 lg:pt-28">
            <div className="mx-auto max-w-4xl text-center">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-bold text-blue-700 dark:border-blue-900/60 dark:bg-blue-950/40 dark:text-blue-300">
                <GitBranch size={16} />
                Career Timeline
              </div>

              <h1 className="text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">
                The journey behind{" "}
                <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-emerald-500 bg-clip-text text-transparent">
                  the developer
                </span>
                .
              </h1>

              <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-gray-600 dark:text-gray-300 sm:text-lg">
                A chronological view of my journey through Computer Science,
                full-stack engineering, open source, developer education,
                AI-powered projects, and continuous technical growth.
              </p>
            </div>
          </div>
        </section>

        {/* =========================================================
            QUICK NAVIGATION
        ========================================================== */}
        <section className="border-y border-gray-200 bg-gray-50/70 dark:border-gray-800 dark:bg-gray-900/40">
          <div className="container-max px-4 py-5 sm:px-6 lg:px-8">
            <div className="flex flex-wrap items-center justify-center gap-2">
              <Link
                to="/career"
                className="rounded-lg px-4 py-2 text-sm font-semibold text-gray-600 no-underline transition hover:bg-white hover:text-blue-600 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-blue-400"
              >
                Career
              </Link>

              <Link
                to="/career/experience"
                className="rounded-lg px-4 py-2 text-sm font-semibold text-gray-600 no-underline transition hover:bg-white hover:text-blue-600 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-blue-400"
              >
                Experience
              </Link>

              <Link
                to="/career/education"
                className="rounded-lg px-4 py-2 text-sm font-semibold text-gray-600 no-underline transition hover:bg-white hover:text-blue-600 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-blue-400"
              >
                Education
              </Link>

              <Link
                to="/career/achievements"
                className="rounded-lg px-4 py-2 text-sm font-semibold text-gray-600 no-underline transition hover:bg-white hover:text-blue-600 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-blue-400"
              >
                Achievements
              </Link>

              <Link
                to="/career/certifications"
                className="rounded-lg px-4 py-2 text-sm font-semibold text-gray-600 no-underline transition hover:bg-white hover:text-blue-600 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-blue-400"
              >
                Certifications
              </Link>

              <Link
                to="/career/resume"
                className="rounded-lg px-4 py-2 text-sm font-semibold text-gray-600 no-underline transition hover:bg-white hover:text-blue-600 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-blue-400"
              >
                Resume
              </Link>
            </div>
          </div>
        </section>

        {/* =========================================================
            TIMELINE
        ========================================================== */}
        <section className="section-padding p-4 py-12">
          <div className="container-max">
            <div className="mx-auto max-w-4xl">
              <div className="mb-14 text-center">
                <span className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">
                  My journey
                </span>

                <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
                  From learning to building
                </h2>

                <p className="mx-auto mt-4 max-w-2xl leading-7 text-gray-600 dark:text-gray-400">
                  Every stage has added a different layer to my engineering
                  journey — academic foundations, practical development,
                  open-source collaboration, product building, and AI.
                </p>
              </div>

              <div className="relative sm:pl-10">
                <div className="absolute bottom-0 left-[7px] top-0 hidden w-px bg-gradient-to-b from-blue-500 via-cyan-500 to-emerald-500 sm:block" />

                <div className="space-y-8">
                  {timeline.map((item, index) => (
                    <div key={`${item.year}-${item.title}-${index}`}>
                      <TimelineCard item={item} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            CAREER PRINCIPLES
        ========================================================== */}
        <section className="section-padding bg-gray-50 dark:bg-gray-900/50 p-4 py-12">
          <div className="container-max">
            <div className="mx-auto mb-12 max-w-3xl text-center">
              <span className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">
                How I approach growth
              </span>

              <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
                Principles behind my journey
              </h2>

              <p className="mt-4 leading-7 text-gray-600 dark:text-gray-400">
                My career is shaped by a simple idea: keep learning, keep
                building, and use every project as an opportunity to become a
                better engineer.
              </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {principles.map((principle) => (
                <article
                  key={principle.title}
                  className="card border border-gray-200 p-6 dark:border-gray-800"
                >
                  <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600 dark:bg-blue-950/50 dark:text-blue-400">
                    {principle.icon}
                  </div>

                  <h3 className="text-lg font-bold text-gray-900 dark:text-white">
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
            CURRENT DIRECTION
        ========================================================== */}
        <section className="section-padding p-4 py-12">
          <div className="container-max">
            <div className="relative overflow-hidden rounded-3xl border border-blue-200 bg-gradient-to-br from-blue-50 via-white to-cyan-50 p-8 dark:border-blue-900/50 dark:from-blue-950/40 dark:via-gray-900 dark:to-cyan-950/30 sm:p-12">
              <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
                <div>
                  <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-[0.18em] text-blue-600 dark:text-blue-400">
                    <Rocket size={17} />
                    What comes next
                  </div>

                  <h2 className="mt-4 max-w-3xl text-3xl font-black tracking-tight sm:text-4xl">
                    The journey is still being written.
                  </h2>

                  <p className="mt-5 max-w-3xl leading-8 text-gray-600 dark:text-gray-300">
                    I’m continuing to deepen my skills in full-stack
                    engineering, AI, system design, algorithms, open source,
                    and production-quality software development.
                  </p>

                  <p className="mt-4 max-w-3xl leading-8 text-gray-600 dark:text-gray-300">
                    The long-term goal is to become an engineer capable of
                    taking complex ideas from architecture to implementation
                    and delivering reliable products that create real value.
                  </p>
                </div>

                <Link
                  to="/career/experience"
                  className="btn-primary inline-flex items-center justify-center gap-2 no-underline"
                >
                  View Experience
                  <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            FOOT CTA
        ========================================================== */}
        <section className="section-padding p-4">
          <div className="container-max">
            <div className="flex flex-col items-center justify-between gap-5 rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900 sm:flex-row sm:p-8">
              <div>
                <h2 className="text-xl font-black text-gray-900 dark:text-white">
                  Want to see the professional details?
                </h2>

                <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                  Explore my experience, achievements, certifications, or
                  recruiter-ready resume.
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                <Link
                  to="/career/experience"
                  className="inline-flex items-center gap-2 rounded-xl border border-gray-200 px-4 py-2.5 text-sm font-bold text-gray-700 no-underline transition hover:border-blue-500 hover:text-blue-600 dark:border-gray-700 dark:text-gray-300 dark:hover:text-blue-400"
                >
                  Experience
                  <ArrowRight size={15} />
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