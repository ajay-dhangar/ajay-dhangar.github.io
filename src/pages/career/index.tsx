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
  BriefcaseBusiness,
  CheckCircle2,
  ChevronRight,
  Code2,
  Download,
  GraduationCap,
  Medal,
  Rocket,
  Sparkles,
  Target,
  Trophy,
} from "lucide-react";

type CareerSection = {
  title: string;
  description: string;
  href: string;
  icon: React.ReactNode;
  accent: string;
  items: string[];
};

const careerSections: CareerSection[] = [
  {
    title: "Career Timeline",
    description:
      "A chronological view of my education, engineering journey, open-source milestones, and major projects.",
    href: "/career/timeline",
    icon: <Rocket size={24} />,
    accent: "from-blue-500 to-cyan-500",
    items: [
      "Education & early development",
      "Full Stack engineering journey",
      "Open-source milestones",
      "Current learning & growth",
    ],
  },
  {
    title: "Experience",
    description:
      "A focused overview of my practical engineering experience, responsibilities, technologies, and project work.",
    href: "/career/experience",
    icon: <BriefcaseBusiness size={24} />,
    accent: "from-violet-500 to-blue-500",
    items: [
      "Full Stack engineering",
      "AI-enabled applications",
      "React & Next.js development",
      "Supabase & modern web stacks",
    ],
  },
  {
    title: "Education",
    description:
      "My academic background and the foundation that shaped my approach to software engineering and computer science.",
    href: "/career/education",
    icon: <GraduationCap size={24} />,
    accent: "from-emerald-500 to-cyan-500",
    items: [
      "B.Tech in Computer Science",
      "Mandsaur University",
      "Graduated in 2024",
      "Continuous technical learning",
    ],
  },
  {
    title: "Achievements",
    description:
      "Recognition, leadership, open-source contributions, community milestones, and other career highlights.",
    href: "/career/achievements",
    icon: <Trophy size={24} />,
    accent: "from-amber-500 to-orange-500",
    items: [
      "Open-source leadership",
      "GSSoC project administration",
      "Community contributions",
      "Technical milestones",
    ],
  },
  {
    title: "Certifications",
    description:
      "Selected certifications, badges, learning achievements, and technical credentials from recognized platforms.",
    href: "/career/certifications",
    icon: <Award size={24} />,
    accent: "from-pink-500 to-violet-500",
    items: [
      "Postman API Fundamentals",
      "Google Cloud / Vertex AI learning",
      "Developer programs",
      "Technical skill validation",
    ],
  },
  {
    title: "Resume",
    description:
      "A concise recruiter-friendly version of my professional profile, skills, experience, projects, and achievements.",
    href: "/career/resume",
    icon: <Code2 size={24} />,
    accent: "from-sky-500 to-blue-600",
    items: [
      "Professional summary",
      "Technical skills",
      "Experience & projects",
      "Open-source & achievements",
    ],
  },
];

const careerHighlights = [
  {
    value: "2024",
    label: "B.Tech CSE",
    description: "Computer Science graduate",
  },
  {
    value: "6+ Months",
    label: "Engineering Experience",
    description: "Full Stack engineering internship",
  },
  {
    value: "Open Source",
    label: "Builder & Maintainer",
    description: "Projects and developer communities",
  },
  {
    value: "AI + Web",
    label: "Core Direction",
    description: "Modern software engineering",
  },
];

const focusAreas = [
  "Full Stack Web Development",
  "React & Next.js",
  "TypeScript & JavaScript",
  "AI-powered applications",
  "Open-source engineering",
  "Developer education",
  "DSA & Computer Science",
  "APIs & backend systems",
];

export default function CareerPage(): JSX.Element {
  return (
    <Layout
      title="Career | Ajay Dhangar"
      description="Explore Ajay Dhangar's career journey, software engineering experience, education, achievements, certifications, open-source work, and resume."
    >
      <Head>
        <meta
          name="keywords"
          content="Ajay Dhangar career, Ajay Dhangar experience, software engineer career, full stack developer, React developer, Next.js developer, TypeScript developer, AI engineer, open source developer, developer portfolio, software engineering resume"
        />

        <meta
          property="og:title"
          content="Career | Ajay Dhangar"
        />

        <meta
          property="og:description"
          content="Explore my software engineering journey, experience, education, achievements, certifications, open-source work, and resume."
        />

        <meta
          property="og:type"
          content="profile"
        />

        <meta
          name="twitter:card"
          content="summary_large_image"
        />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfilePage",
            name: "Ajay Dhangar — Career",
            description:
              "Career profile of Ajay Dhangar covering software engineering experience, education, achievements, certifications, open-source work, and resume.",
            url: "https://ajay-dhangar.github.io/career",
            mainEntity: {
              "@type": "Person",
              name: "Ajay Dhangar",
              jobTitle: "Full Stack Developer",
              url: "https://ajay-dhangar.github.io/",
              sameAs: [
                "https://github.com/ajay-dhangar",
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
        <section className="relative overflow-hidden p-4">
          <div className="absolute inset-0 -z-10">
            <div className="absolute left-[-10%] top-[-20%] h-[420px] w-[420px] rounded-full bg-blue-500/10 blur-3xl" />
            <div className="absolute right-[-10%] top-[10%] h-[360px] w-[360px] rounded-full bg-cyan-500/10 blur-3xl" />
          </div>

          <div className="container-max section-padding pb-12 pt-20 lg:pb-20 lg:pt-28">
            <div className="mx-auto max-w-5xl text-center">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700 dark:border-blue-900/60 dark:bg-blue-950/40 dark:text-blue-300">
                <Sparkles size={16} />
                Career & Professional Journey
              </div>

              <h1 className="text-4xl font-black tracking-tight sm:text-5xl lg:text-7xl">
                Building my career through{" "}
                <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-emerald-500 bg-clip-text text-transparent">
                  code, learning & impact.
                </span>
              </h1>

              <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-gray-600 dark:text-gray-300 sm:text-lg">
                I’m Ajay Dhangar, a Computer Science graduate and Full Stack
                Developer focused on building modern web applications,
                AI-powered products, and open-source developer experiences.
              </p>

              <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-gray-500 dark:text-gray-400">
                This page brings together the major chapters of my professional
                journey — from education and engineering experience to
                open-source leadership, projects, achievements, and continuous
                learning.
              </p>

              <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
                <Link
                  to="/career/experience"
                  className="btn-primary inline-flex items-center justify-center gap-2 no-underline"
                >
                  Explore Experience
                  <ArrowRight size={18} />
                </Link>

                <Link
                  to="/career/resume"
                  className="btn-secondary inline-flex items-center justify-center gap-2 no-underline"
                >
                  View Resume
                  <Download size={18} />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            CAREER SNAPSHOT
        ========================================================== */}
        <section className="border-y border-gray-200 bg-gray-50/70 dark:border-gray-800 dark:bg-gray-900/40">
          <div className="container-max px-4 py-10 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
              {careerHighlights.map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-800 dark:bg-gray-900"
                >
                  <div className="text-2xl font-black text-blue-600 dark:text-blue-400 sm:text-3xl">
                    {item.value}
                  </div>

                  <div className="mt-1 text-sm font-bold text-gray-900 dark:text-white">
                    {item.label}
                  </div>

                  <p className="mt-1 text-xs leading-5 text-gray-500 dark:text-gray-400">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =========================================================
            CAREER NAVIGATION
        ========================================================== */}
        <section className="section-padding p-4 py-12">
          <div className="container-max">
            <div className="mx-auto mb-12 max-w-3xl text-center">
              <span className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">
                Explore my career
              </span>

              <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
                Everything in one place
              </h2>

              <p className="mt-4 text-gray-600 dark:text-gray-400">
                Each section gives a different perspective on my professional
                growth, technical background, and work.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {careerSections.map((section) => (
                <article className="card h-full overflow-hidden border border-gray-200 dark:border-gray-700">
                  <div className={`h-1 bg-gradient-to-r ${section.accent}`} />

                  <div className="p-6 sm:p-7">
                    <div className="flex items-start justify-between gap-4">
                      <div
                        className={`flex p-1 items-center justify-center rounded-xl bg-gradient-to-br ${section.accent} text-white shadow-lg`}
                      >
                        {section.icon}
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                        {section.title}
                      </h3>
                      <Link
                        to={section.href}
                        className="ml-auto text-gray-400 transition hover:text-gray-600 dark:hover:text-gray-300"
                      >
                        <ChevronRight size={20} />
                      </Link>
                    </div>

                    <p className="mt-3 text-sm leading-7 text-gray-600 dark:text-gray-400">
                      {section.description}
                    </p>

                    <ul className="mt-5 space-y-2">
                      {section.items.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-300"
                        >
                          <CheckCircle2
                            size={16}
                            className="mt-0.5 shrink-0 text-blue-500"
                          />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-6 flex">
                      <Link to={section.href} className="inline-flex items-center gap-2 no-underline">
                        Explore section
                        <ArrowRight
                          size={16}
                          className="transition-transform duration-300 group-hover:translate-x-1"
                        />
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* =========================================================
            PROFESSIONAL DIRECTION
        ========================================================== */}
        <section className="section-padding bg-gray-50 dark:bg-gray-900/50 p-4 py-12">
          <div className="container-max">
            <div className="grid items-center gap-12 lg:grid-cols-[1fr_1.1fr]">
              <div>
                <div className="mb-4 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.18em] text-blue-600 dark:text-blue-400">
                  <Target size={17} />
                  Professional Direction
                </div>

                <h2 className="text-3xl font-black tracking-tight sm:text-4xl">
                  Where I’m heading
                </h2>

                <p className="mt-5 leading-8 text-gray-600 dark:text-gray-400">
                  My goal is to grow into a high-impact software engineer who
                  can design, build, ship, and maintain reliable products at
                  scale.
                </p>

                <p className="mt-4 leading-8 text-gray-600 dark:text-gray-400">
                  I’m particularly interested in the intersection of modern
                  full-stack engineering, artificial intelligence, developer
                  tooling, and open source.
                </p>

                <div className="mt-7">
                  <Link
                    to="/career/timeline"
                    className="inline-flex items-center gap-2 font-bold text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
                  >
                    See the complete journey
                    <ArrowRight size={18} />
                  </Link>
                </div>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                {focusAreas.map((area) => (
                  <div
                    key={area}
                    className="flex items-center gap-3 rounded-xl border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-800 dark:bg-gray-950"
                  >
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-600 dark:bg-blue-950/50 dark:text-blue-400">
                      <CheckCircle2 size={17} />
                    </div>

                    <span className="text-sm font-semibold text-gray-800 dark:text-gray-200">
                      {area}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            OPEN SOURCE / BUILDER SECTION
        ========================================================== */}
        <section className="section-padding p-4">
          <div className="container-max">
            <div className="relative overflow-hidden rounded-3xl border border-blue-200 bg-gradient-to-br from-blue-50 via-white to-cyan-50 p-8 dark:border-blue-900/50 dark:from-blue-950/40 dark:via-gray-900 dark:to-cyan-950/30 sm:p-12">
              <div className="absolute right-[-80px] top-[-80px] h-56 w-56 rounded-full bg-blue-500/10 blur-3xl" />

              <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
                <div>
                  <div className="mb-4 flex items-center gap-2 text-blue-600 dark:text-blue-400">
                    <Code2 size={20} />
                    <span className="font-bold">Beyond the job title</span>
                  </div>

                  <h2 className="max-w-3xl text-3xl font-black tracking-tight sm:text-4xl">
                    I build, contribute, and share what I learn.
                  </h2>

                  <p className="mt-4 max-w-3xl leading-8 text-gray-600 dark:text-gray-300">
                    My career is not limited to professional experience. I also
                    work on open-source projects, developer education, technical
                    content, and tools that help other developers learn and
                    build.
                  </p>
                </div>

                <Link
                  to="/open-source"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-gray-950 px-6 py-3 font-bold text-white no-underline transition hover:-translate-y-0.5 hover:bg-gray-800 dark:bg-white dark:text-gray-950 dark:hover:bg-gray-200"
                >
                  Explore Open Source
                  <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            CTA
        ========================================================== */}
        <section className="section-padding p-4">
          <div className="container-max">
            <div className="rounded-3xl bg-gray-950 px-6 py-12 text-center text-white dark:bg-black sm:px-12">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-500/20 text-blue-400">
                <Medal size={28} />
              </div>

              <h2 className="mt-6 text-3xl font-black sm:text-4xl">
                Want the concise version?
              </h2>

              <p className="mx-auto mt-4 max-w-2xl leading-7 text-gray-400">
                View my resume for a recruiter-friendly overview of my
                technical skills, experience, education, projects, and
                achievements.
              </p>

              <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
                <Link
                  to="/career/resume"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3 font-bold text-gray-950 no-underline transition hover:-translate-y-0.5 hover:bg-gray-100"
                >
                  <Download size={18} />
                  View Resume
                </Link>

                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-gray-700 px-6 py-3 font-bold text-white no-underline transition hover:border-gray-500 hover:bg-white/5"
                >
                  Let's Connect
                  <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}