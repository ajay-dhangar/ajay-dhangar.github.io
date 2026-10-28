import React from "react";
// @ts-ignore
import Layout from "@theme/Layout";
// @ts-ignore
import Head from "@docusaurus/Head";
// @ts-ignore
import Link from "@docusaurus/Link";
import {
  ArrowRight,
  BookOpen,
  BrainCircuit,
  CheckCircle2,
  Code2,
  ExternalLink,
  GraduationCap,
  Layers3,
  Library,
  Lightbulb,
  Rocket,
  Sparkles,
  Terminal,
} from "lucide-react";

type LearningArea = {
  title: string;
  description: string;
  icon: React.ReactNode;
  topics: string[];
};

const learningAreas: LearningArea[] = [
  {
    title: "Computer Science Foundations",
    description:
      "The academic foundation behind my approach to software engineering and problem solving.",
    icon: <BrainCircuit size={22} />,
    topics: [
      "Programming fundamentals",
      "Data structures",
      "Algorithms",
      "Database concepts",
      "Computer science fundamentals",
    ],
  },
  {
    title: "Software Development",
    description:
      "Practical development skills built through projects, experimentation, and real application development.",
    icon: <Code2 size={22} />,
    topics: [
      "Web development",
      "Object-oriented programming",
      "Git & GitHub",
      "APIs",
      "Software engineering practices",
    ],
  },
  {
    title: "Modern Web Technologies",
    description:
      "Continuous hands-on learning around the technologies used to build modern web applications.",
    icon: <Layers3 size={22} />,
    topics: [
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Docusaurus",
      "Tailwind CSS",
    ],
  },
  {
    title: "AI & Emerging Technologies",
    description:
      "Expanding my engineering skills toward practical AI applications and modern developer tooling.",
    icon: <Sparkles size={22} />,
    topics: [
      "Artificial intelligence",
      "Prompt engineering",
      "AI-powered applications",
      "Developer tools",
      "Continuous experimentation",
    ],
  },
];

const learningPrinciples = [
  {
    number: "01",
    title: "Fundamentals first",
    description:
      "Strong fundamentals make it easier to understand frameworks, libraries, architectures, and new technologies.",
  },
  {
    number: "02",
    title: "Learn by building",
    description:
      "I turn concepts into practical projects to understand how technologies behave outside of tutorials and theory.",
  },
  {
    number: "03",
    title: "Learn in public",
    description:
      "Open-source projects, documentation, and developer education give me a way to share knowledge while improving my own understanding.",
  },
  {
    number: "04",
    title: "Keep adapting",
    description:
      "Technology changes quickly, so continuous learning is an important part of my engineering career.",
  },
];

const educationMilestones = [
  {
    year: "2024",
    title: "B.Tech in Computer Science",
    description:
      "Completed my Bachelor of Technology in Computer Science at Mandsaur University.",
    icon: <GraduationCap size={20} />,
  },
  {
    year: "2024+",
    title: "Practical Software Engineering",
    description:
      "Continued learning through software projects, internships, open source, technical experimentation, and developer communities.",
    icon: <Code2 size={20} />,
  },
  {
    year: "2025+",
    title: "AI & Modern Web Engineering",
    description:
      "Expanded my focus toward AI-powered applications, full-stack development, developer tooling, and modern software architecture.",
    icon: <Sparkles size={20} />,
  },
  {
    year: "Now",
    title: "Continuous Engineering Growth",
    description:
      "Currently deepening my skills in full-stack engineering, AI, system design, DSA, open source, and production-quality software.",
    icon: <Rocket size={20} />,
  },
];

export default function EducationPage(): JSX.Element {
  return (
    <Layout
      title="Education | Ajay Dhangar"
      description="Explore Ajay Dhangar's educational background, B.Tech in Computer Science from Mandsaur University, technical learning journey, computer science foundations, and continuous learning."
    >
      <Head>
        <meta
          name="keywords"
          content="Ajay Dhangar education, Ajay Dhangar B.Tech, Ajay Dhangar Computer Science, Mandsaur University, software engineer education, full stack developer education, computer science graduate, AI developer"
        />

        <meta property="og:title" content="Education | Ajay Dhangar" />

        <meta
          property="og:description"
          content="My Computer Science education, technical foundations, practical learning journey, and continuous development as a software engineer."
        />

        <meta
          property="og:type"
          content="profile"
        />

        <meta
          property="og:url"
          content="https://ajay-dhangar.github.io/career/education"
        />

        <meta name="twitter:card" content="summary_large_image" />

        <link
          rel="canonical"
          href="https://ajay-dhangar.github.io/career/education"
        />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfilePage",
            name: "Ajay Dhangar — Education",
            url: "https://ajay-dhangar.github.io/career/education",
            description:
              "Educational background and technical learning journey of Ajay Dhangar.",
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
            <div className="absolute left-[-8%] top-[-15%] h-[420px] w-[420px] rounded-full bg-blue-500/10 blur-3xl" />

            <div className="absolute right-[-8%] top-[15%] h-[400px] w-[400px] rounded-full bg-cyan-500/10 blur-3xl" />
          </div>

          <div className="container-max section-padding pb-14 pt-20 lg:pb-20 lg:pt-28">
            <div className="mx-auto max-w-5xl text-center">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-bold text-blue-700 dark:border-blue-900/60 dark:bg-blue-950/40 dark:text-blue-300">
                <GraduationCap size={17} />
                Education & Learning
              </div>

              <h1 className="text-4xl font-black tracking-tight sm:text-5xl lg:text-7xl">
                Built on{" "}
                <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-emerald-500 bg-clip-text text-transparent">
                  Computer Science
                </span>
                , driven by curiosity.
              </h1>

              <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-gray-600 dark:text-gray-300 sm:text-lg">
                My formal education gave me the foundation. Projects, open
                source, engineering experience, and continuous learning have
                helped me turn that foundation into practical software
                engineering skills.
              </p>

              <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                <Link
                  to="/career/timeline"
                  className="btn-primary inline-flex items-center justify-center gap-2 no-underline"
                >
                  View Career Timeline
                  <ArrowRight size={18} />
                </Link>

                <Link
                  to="/career/certifications"
                  className="btn-secondary inline-flex items-center justify-center gap-2 no-underline"
                >
                  Certifications
                  <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            EDUCATION SNAPSHOT
        ========================================================== */}
        <section className="border-y border-gray-200 bg-gray-50/70 dark:border-gray-800 dark:bg-gray-900/40">
          <div className="container-max px-4 py-8 sm:px-6 lg:px-8">
            <div className="grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600 dark:bg-blue-950/50 dark:text-blue-400">
                  <GraduationCap size={21} />
                </div>

                <div className="mt-5 text-2xl font-black text-gray-950 dark:text-white">
                  B.Tech
                </div>

                <p className="mt-1 text-sm font-bold text-blue-600 dark:text-blue-400">
                  Computer Science
                </p>

                <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                  Completed in 2024
                </p>
              </div>

              <div className="rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-50 text-cyan-600 dark:bg-cyan-950/50 dark:text-cyan-400">
                  <Library size={21} />
                </div>

                <div className="mt-5 text-2xl font-black text-gray-950 dark:text-white">
                  Mandsaur
                </div>

                <p className="mt-1 text-sm font-bold text-cyan-600 dark:text-cyan-400">
                  University
                </p>

                <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                  Academic foundation in Computer Science
                </p>
              </div>

              <div className="rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600 dark:bg-emerald-950/50 dark:text-emerald-400">
                  <BookOpen size={21} />
                </div>

                <div className="mt-5 text-2xl font-black text-gray-950 dark:text-white">
                  Continuous
                </div>

                <p className="mt-1 text-sm font-bold text-emerald-600 dark:text-emerald-400">
                  Learning
                </p>

                <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                  Practical learning beyond formal education
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            FORMAL EDUCATION
        ========================================================== */}
        <section className="section-padding p-4 py-12">
          <div className="container-max">
            <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:items-start">
              {/* Left */}
              <div>
                <span className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">
                  Academic Foundation
                </span>

                <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
                  Bachelor of Technology
                </h2>

                <p className="mt-2 text-lg font-bold text-blue-600 dark:text-blue-400">
                  Computer Science
                </p>

                <p className="mt-5 leading-8 text-gray-600 dark:text-gray-400">
                  I completed my B.Tech in Computer Science from Mandsaur
                  University in 2024. This gave me the academic foundation for
                  understanding programming, algorithms, databases, software
                  development, and broader computer science concepts.
                </p>

                <div className="mt-7">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600 dark:bg-blue-950/50 dark:text-blue-400">
                      <CheckCircle2 size={19} />
                    </div>

                    <div>
                      <p className="text-sm font-bold text-gray-900 dark:text-white">
                        Completed
                      </p>

                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        2024
                      </p>
                    </div>
                  </div>
                </div>

                <a
                  href="https://meu.edu.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-blue-600 no-underline hover:text-blue-700 dark:text-blue-400"
                >
                  Mandsaur University
                  <ExternalLink size={15} />
                </a>
              </div>

              {/* Right */}
              <div className="relative overflow-hidden rounded-[2rem] border border-gray-200 bg-gradient-to-br from-gray-50 via-white to-blue-50 p-7 shadow-lg dark:border-gray-800 dark:from-gray-900 dark:via-gray-950 dark:to-blue-950/30 sm:p-10">
                <div className="absolute right-[-80px] top-[-80px] h-60 w-60 rounded-full bg-blue-500/10 blur-3xl" />

                <div className="relative">
                  <div className="flex items-start justify-between gap-5">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-lg shadow-blue-600/20">
                      <GraduationCap size={27} />
                    </div>

                    <span className="rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-bold text-blue-700 dark:border-blue-900/60 dark:bg-blue-950/40 dark:text-blue-300">
                      2024
                    </span>
                  </div>

                  <h3 className="mt-7 text-2xl font-black text-gray-950 dark:text-white sm:text-3xl">
                    Mandsaur University
                  </h3>

                  <p className="mt-2 font-semibold text-blue-600 dark:text-blue-400">
                    Bachelor of Technology — Computer Science
                  </p>

                  <div className="mt-7 grid gap-3 sm:grid-cols-2">
                    {[
                      "Computer Science foundation",
                      "Programming & software development",
                      "Algorithms & problem solving",
                      "Database concepts",
                      "Technical project work",
                      "Engineering fundamentals",
                    ].map((item) => (
                      <div
                        key={item}
                        className="flex items-start gap-2 rounded-xl border border-gray-200 bg-white/80 p-3 text-sm font-semibold text-gray-700 dark:border-gray-800 dark:bg-gray-900/70 dark:text-gray-300"
                      >
                        <CheckCircle2
                          size={16}
                          className="mt-0.5 shrink-0 text-blue-500"
                        />

                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            EDUCATION → ENGINEERING
        ========================================================== */}
        <section className="section-padding bg-gray-50 dark:bg-gray-900/50 p-4 py-12">
          <div className="container-max">
            <div className="mx-auto max-w-4xl text-center">
              <span className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">
                From theory to practice
              </span>

              <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
                Education gave me the foundation.
                <br className="hidden sm:block" />
                Building gave it context.
              </h2>

              <p className="mx-auto mt-5 max-w-3xl leading-8 text-gray-600 dark:text-gray-400">
                My development journey continued beyond university. I use
                projects, open-source work, internships, documentation, and
                technical experimentation to turn concepts into practical
                engineering knowledge.
              </p>
            </div>

            <div className="mx-auto mt-12 max-w-5xl">
              <div className="relative">
                <div className="absolute left-5 top-6 hidden h-[calc(100%-3rem)] w-px bg-gradient-to-b from-blue-500 via-cyan-500 to-emerald-500 md:block" />

                <div className="space-y-6">
                  {educationMilestones.map((milestone) => (
                    <div
                      key={`${milestone.year}-${milestone.title}`}
                      className="relative md:pl-16"
                    >
                      <div className="absolute left-0 top-5 hidden h-10 w-10 items-center justify-center rounded-xl border-4 border-white bg-blue-600 text-white shadow-lg dark:border-gray-900 md:flex">
                        {milestone.icon}
                      </div>

                      <article className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-gray-800 dark:bg-gray-950">
                        <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                          <div>
                            <span className="text-xs font-black uppercase tracking-[0.18em] text-blue-600 dark:text-blue-400">
                              {milestone.year}
                            </span>

                            <h3 className="mt-2 text-xl font-black text-gray-900 dark:text-white">
                              {milestone.title}
                            </h3>
                          </div>

                          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600 dark:bg-blue-950/50 dark:text-blue-400 md:hidden">
                            {milestone.icon}
                          </div>
                        </div>

                        <p className="mt-3 max-w-3xl text-sm leading-7 text-gray-600 dark:text-gray-400">
                          {milestone.description}
                        </p>
                      </article>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            TECHNICAL LEARNING
        ========================================================== */}
        <section className="section-padding">
          <div className="container-max">
            <div className="mx-auto mb-12 max-w-3xl text-center">
              <span className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">
                Technical Learning
              </span>

              <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
                What I continue to learn
              </h2>

              <p className="mt-4 leading-7 text-gray-600 dark:text-gray-400">
                Formal education is one part of my learning journey. I
                continuously expand my skills through hands-on development,
                documentation, open source, and technical experimentation.
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              {learningAreas.map((area) => (
                <article
                  key={area.title}
                  className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-300 hover:shadow-xl dark:border-gray-800 dark:bg-gray-950 dark:hover:border-blue-800"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600 transition group-hover:scale-105 dark:bg-blue-950/50 dark:text-blue-400">
                      {area.icon}
                    </div>

                    <div>
                      <h3 className="text-lg font-black text-gray-900 dark:text-white">
                        {area.title}
                      </h3>

                      <p className="mt-2 text-sm leading-7 text-gray-600 dark:text-gray-400">
                        {area.description}
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {area.topics.map((topic) => (
                      <span
                        key={topic}
                        className="rounded-lg border border-gray-200 bg-gray-50 px-3 py-1.5 text-xs font-semibold text-gray-600 dark:border-gray-800 dark:bg-gray-900 dark:text-gray-400"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* =========================================================
            LEARNING PHILOSOPHY
        ========================================================== */}
        <section className="section-padding bg-gray-50 dark:bg-gray-900/50 p-4 py-12">
          <div className="container-max">
            <div className="mx-auto mb-12 max-w-3xl text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600 text-white shadow-lg">
                <Lightbulb size={23} />
              </div>

              <h2 className="mt-5 text-3xl font-black tracking-tight sm:text-4xl">
                My learning philosophy
              </h2>

              <p className="mt-4 leading-7 text-gray-600 dark:text-gray-400">
                I don't see education as something that ends with a degree.
                Software engineering requires continuous learning.
              </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {learningPrinciples.map((principle) => (
                <article
                  key={principle.number}
                  className="relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-950"
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
            OPEN SOURCE EDUCATION
        ========================================================== */}
        <section className="section-padding p-4 py-12">
          <div className="container-max">
            <div className="relative overflow-hidden rounded-[2rem] bg-gray-950 p-8 text-white sm:p-12 dark:bg-black">
              <div className="absolute right-[-100px] top-[-100px] h-72 w-72 rounded-full bg-blue-500/20 blur-3xl" />

              <div className="relative grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">
                <div>
                  <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-[0.18em] text-blue-400">
                    <Terminal size={17} />
                    Learning by building
                  </div>

                  <h2 className="mt-4 max-w-3xl text-3xl font-black tracking-tight sm:text-4xl">
                    CodeHarborHub is part of my learning journey.
                  </h2>

                  <p className="mt-5 max-w-3xl leading-8 text-gray-400">
                    Building CodeHarborHub has allowed me to combine software
                    engineering with developer education, documentation,
                    open-source collaboration, and practical learning
                    experiences.
                  </p>
                </div>

                <a
                  href="https://codeharborhub.github.io/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3 font-bold text-gray-950 no-underline transition hover:-translate-y-0.5 hover:bg-gray-100"
                >
                  Explore CodeHarborHub
                  <ExternalLink size={16} />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            FINAL CTA
        ========================================================== */}
        <section className="section-padding pt-0">
          <div className="container-max">
            <div className="flex flex-col items-center justify-between gap-5 border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900 sm:flex-row sm:p-8">
              <div>
                <h2 className="text-xl font-black text-gray-900 dark:text-white">
                  Explore the rest of my career
                </h2>

                <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                  See my professional experience, achievements, certifications,
                  and resume.
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
                  to="/career/certifications"
                  className="inline-flex items-center gap-2 rounded-xl border border-gray-200 px-4 py-2.5 text-sm font-bold text-gray-700 no-underline transition hover:border-blue-500 hover:text-blue-600 dark:border-gray-700 dark:text-gray-300 dark:hover:text-blue-400"
                >
                  Certifications
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