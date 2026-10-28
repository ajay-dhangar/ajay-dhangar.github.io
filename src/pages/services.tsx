
import React from "react";
import Layout from "@theme/Layout";
import Head from "@docusaurus/Head";

const profile = {
  name: "Ajay Dhangar",
  website: "https://ajay-dhangar.github.io/",
  github: "https://github.com/ajay-dhangar",
  linkedin: "https://www.linkedin.com/in/ajay-dhangar/",
  codeHarborHub: "https://codeharborhub.github.io/",
  aiBuddies: "https://ajay-dhangar.github.io/ai-buddies/",
  algo: "https://ajay-dhangar.github.io/algo/",
};

const services = [
  {
    number: "01",
    icon: "◈",
    category: "Web development",
    title: "Modern websites that work for your business.",
    description:
      "Responsive, accessible websites built around your goals, your audience, and a clear user experience.",
    features: [
      "Business and personal websites",
      "Developer portfolios and landing pages",
      "Responsive layouts for mobile and desktop",
      "SEO-friendly page structure",
    ],
    technologies: ["React", "TypeScript", "Tailwind CSS", "Docusaurus"],
    featured: true,
  },
  {
    number: "02",
    icon: "⌘",
    category: "Frontend engineering",
    title: "Interfaces people enjoy using.",
    description:
      "Transform ideas and design references into polished interfaces with consistent layouts and useful interactions.",
    features: [
      "Reusable React components",
      "Interactive dashboards and UI elements",
      "Dark and light themes",
      "Accessibility and responsive improvements",
    ],
    technologies: ["React", "TypeScript", "Tailwind CSS", "JavaScript"],
    featured: false,
  },
  {
    number: "03",
    icon: "⟷",
    category: "Full-stack applications",
    title: "From a promising idea to a working product.",
    description:
      "Build the foundations of a web application, connecting the user interface with APIs, data, and application logic.",
    features: [
      "MVP and prototype development",
      "REST API integration",
      "Database and application architecture",
      "Forms, validation, and error handling",
    ],
    technologies: ["Node.js", "Express", "MongoDB", "REST APIs"],
    featured: false,
  },
  {
    number: "04",
    icon: "✳",
    category: "AI-powered applications",
    title: "Make your product smarter with AI.",
    description:
      "Explore practical AI features that help users learn, create, search, and complete tasks more efficiently.",
    features: [
      "AI assistant and chatbot interfaces",
      "LLM API integration",
      "Prompt-driven product workflows",
      "AI feature prototypes and MVPs",
    ],
    technologies: ["React", "JavaScript", "AI APIs", "Node.js"],
    featured: true,
  },
  {
    number: "05",
    icon: "▤",
    category: "Documentation & EdTech",
    title: "Make technical knowledge easier to learn.",
    description:
      "Create structured documentation and learning experiences for developer tools, courses, and technical communities.",
    features: [
      "Documentation websites",
      "Tutorial and curriculum organization",
      "Code examples and learning resources",
      "Developer-focused navigation",
    ],
    technologies: ["Docusaurus", "MDX", "Markdown", "React"],
    featured: false,
  },
  {
    number: "06",
    icon: "⌁",
    category: "Open-source collaboration",
    title: "Improve projects that developers rely on.",
    description:
      "Contribute to developer-focused projects through practical improvements, documentation, UI work, and maintainable code.",
    features: [
      "UI and documentation improvements",
      "Bug fixes and component refactoring",
      "Contributor-friendly project structure",
      "Feature implementation and reviews",
    ],
    technologies: ["Git", "GitHub", "React", "Open source"],
    featured: false,
  },
];

const projects = [
  {
    name: "CodeHarborHub",
    type: "Developer education platform",
    description:
      "A community-focused platform for tutorials, technical learning, and open-source collaboration.",
    tags: ["EdTech", "Docusaurus", "Open source"],
    href: profile.codeHarborHub,
    label: "Explore platform",
    mark: "CH",
  },
  {
    name: "AI Buddies",
    type: "AI-focused project",
    description:
      "An exploration of AI-powered experiences and practical ways to bring AI into developer projects.",
    tags: ["AI", "React", "Experimentation"],
    href: profile.aiBuddies,
    label: "Explore project",
    mark: "AI",
  },
  {
    name: "Algo",
    type: "Data structures & algorithms",
    description:
      "A learning-focused project for exploring algorithms, coding concepts, and developer contributions.",
    tags: ["DSA", "Learning", "Community"],
    href: profile.algo,
    label: "Explore project",
    mark: "AG",
  },
];

const process = [
  {
    number: "01",
    title: "Understand the goal",
    description:
      "We discuss your idea, audience, requirements, timeline, and what success should look like.",
  },
  {
    number: "02",
    title: "Define the solution",
    description:
      "I help identify the essential features, technical approach, and a realistic implementation scope.",
  },
  {
    number: "03",
    title: "Build and refine",
    description:
      "Development happens in clear steps, with opportunities to review the work and share feedback.",
  },
  {
    number: "04",
    title: "Deliver and improve",
    description:
      "We review the result, address agreed refinements, and discuss any next steps or handover needs.",
  },
];

const engagementOptions = [
  {
    title: "Project-based work",
    description:
      "For a website, feature, prototype, or clearly defined technical task.",
    icon: "↗",
  },
  {
    title: "Freelance collaboration",
    description:
      "For teams or founders who need help moving a web project forward.",
    icon: "⌘",
  },
  {
    title: "Internship & full-time roles",
    description:
      "For teams looking for a developer interested in building, learning, and contributing.",
    icon: "＋",
  },
  {
    title: "Open-source partnerships",
    description:
      "For maintainers and communities working on useful developer tools and learning resources.",
    icon: "◎",
  },
];

function ArrowIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M7 17 17 7" />
      <path d="M7 7h10v10" />
    </svg>
  );
}

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[var(--ifm-color-emphasis-300)] bg-[var(--ifm-background-surface-color)] px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-[var(--ifm-color-primary)]">
      <span className="h-1.5 w-1.5 rounded-full bg-[var(--ifm-color-primary)]" />
      {children}
    </div>
  );
}

function SectionHeading({
  eyebrow,
  title,
  description,
  centered = false,
}: {
  eyebrow: string;
  title: string;
  description: string;
  centered?: boolean;
}) {
  return (
    <div className={`mb-10 max-w-2xl ${centered ? "mx-auto text-center" : ""}`}>
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 className="mb-4 text-3xl font-bold tracking-tight text-[var(--ifm-font-color-base)] sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      <p className="text-base leading-8 text-[var(--ifm-color-emphasis-700)] sm:text-lg">
        {description}
      </p>
    </div>
  );
}

export default function ServicesPage(): React.JSX.Element {
  return (
    <Layout
      title="Services"
      description="Explore web development, frontend engineering, full-stack applications, AI-powered features, documentation, and open-source collaboration services by Ajay Dhangar."
    >
      <Head>
        <meta property="og:title" content="Services | Ajay Dhangar" />
        <meta
          property="og:description"
          content="Web development, modern frontend experiences, AI-powered applications, and developer education."
        />
        <meta property="og:type" content="website" />
        <meta
          name="keywords"
          content="Ajay Dhangar, web development services, React developer, full stack developer, Tailwind CSS, AI applications, Docusaurus, frontend engineering"
        />
      </Head>

      <main className="services-page overflow-hidden text-[var(--ifm-font-color-base)]">
        {/* Hero */}
        <section className="relative border-b border-[var(--ifm-color-emphasis-200)]">
          <div className="pointer-events-none absolute inset-0 opacity-60">
            <div className="absolute -right-24 -top-28 h-80 w-80 rounded-full bg-[var(--ifm-color-primary)] opacity-[0.10] blur-3xl" />
            <div className="absolute -left-24 top-48 h-64 w-64 rounded-full bg-[var(--ifm-color-primary)] opacity-[0.07] blur-3xl" />
          </div>

          <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 py-8 sm:px-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16 lg:px-10">
            <div>
              <Eyebrow>Services & collaboration</Eyebrow>

              <h1 className="max-w-3xl text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-4xl lg:text-7xl">
                Ideas into products.
                <span className="mt-2 block text-[var(--ifm-color-primary)]">
                  Built with purpose.
                </span>
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-8 text-[var(--ifm-color-emphasis-700)] sm:text-lg">
                I’m Ajay Dhangar, a developer and open-source founder focused
                on building useful web experiences, exploring AI-powered
                products, and making technology easier to use and learn.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#services-list"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-[var(--ifm-color-primary)] px-6 py-3 font-semibold text-white shadow-lg shadow-black/10 transition hover:-translate-y-0.5 hover:opacity-90 hover:text-white hover:no-underline"
                >
                  Explore services
                </a>
                <a
                  href="#contact"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-[var(--ifm-color-emphasis-300)] px-6 py-3 font-semibold transition hover:border-[var(--ifm-color-primary)] hover:bg-[var(--ifm-color-emphasis-100)] hover:no-underline"
                >
                  Discuss a project
                  <ArrowIcon className="h-4 w-4" />
                </a>
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-3 text-sm text-[var(--ifm-color-emphasis-700)]">
                <span className="inline-flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-[var(--ifm-color-primary)]" />
                  Web & application development
                </span>
                <span className="inline-flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-[var(--ifm-color-primary)]" />
                  AI & open source
                </span>
              </div>
            </div>

            {/* Developer profile card */}
            <div className="relative mx-auto w-full max-w-lg">
              <div className="absolute -inset-3 rounded-[2rem] border border-[var(--ifm-color-primary)] opacity-20" />

              <div className="relative overflow-hidden rounded-3xl border border-[var(--ifm-color-emphasis-300)] bg-[var(--ifm-background-surface-color)] shadow-2xl shadow-black/10">
                <div className="flex items-center justify-between border-b border-[var(--ifm-color-emphasis-200)] px-5 py-4">
                  <div className="flex items-center gap-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
                    <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
                    <span className="h-2.5 w-2.5 rounded-full bg-green-400" />
                  </div>
                  <span className="font-mono text-xs text-[var(--ifm-color-emphasis-600)]">
                    developer.profile
                  </span>
                </div>

                <div className="p-6 sm:p-8">
                  <div className="flex items-start gap-4">
                    <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-[var(--ifm-color-primary)] text-xl font-black text-white shadow-lg">
                      <img src="/img/profile.jpeg" alt="Ajay" className="w-auto h-full" />
                    </div>
                    <div className="min-w-0">
                      <h2 className="mb-1 text-xl font-bold">
                        {profile.name}
                      </h2>
                      <p className="text-sm leading-6 text-[var(--ifm-color-emphasis-700)]">
                        Full Stack Developer · AI Builder · Open-Source Founder
                      </p>
                      <p className="mt-2 text-xs text-[var(--ifm-color-emphasis-600)]">
                        Madhya Pradesh, India
                      </p>
                    </div>
                  </div>

                  <div className="my-6 rounded-2xl border border-[var(--ifm-color-emphasis-200)] bg-[var(--ifm-background-color)] p-4 font-mono text-sm leading-7">
                    <p>
                      <span className="text-[var(--ifm-color-primary)]">
                        const
                      </span>{" "}
                      developer = {"{"}
                    </p>
                    <p className="pl-4">
                      focus:{" "}
                      <span className="text-[var(--ifm-color-primary)]">
                        "building useful products"
                      </span>
                      ,
                    </p>
                    <p className="pl-4">
                      mindset:{" "}
                      <span className="text-[var(--ifm-color-primary)]">
                        "learn, build, improve"
                      </span>
                      ,
                    </p>
                    <p className="pl-4">
                      approach:{" "}
                      <span className="text-[var(--ifm-color-primary)]">
                        "user-first engineering"
                      </span>
                    </p>
                    <p>{"}"}</p>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <a
                      href={profile.github}
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-xl border border-[var(--ifm-color-emphasis-300)] p-3 transition hover:border-[var(--ifm-color-primary)] hover:bg-[var(--ifm-color-emphasis-100)] hover:no-underline"
                    >
                      <span className="block text-sm font-semibold">
                        GitHub
                      </span>
                      <span className="mt-1 block text-xs text-[var(--ifm-color-emphasis-600)]">
                        Code & projects
                      </span>
                    </a>
                    <a
                      href={profile.linkedin}
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-xl border border-[var(--ifm-color-emphasis-300)] p-3 transition hover:border-[var(--ifm-color-primary)] hover:bg-[var(--ifm-color-emphasis-100)] hover:no-underline"
                    >
                      <span className="block text-sm font-semibold">
                        LinkedIn
                      </span>
                      <span className="mt-1 block text-xs text-[var(--ifm-color-emphasis-600)]">
                        Professional profile
                      </span>
                    </a>
                  </div>
                </div>
              </div>            
            </div>
          </div>
        </section>

        {/* Services */}
        <section
          id="services-list"
          className="scroll-mt-24 mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-24 lg:px-10"
        >
          <SectionHeading
            eyebrow="What I can help with"
            title="Services built around real needs."
            description="Choose the type of support that fits your project. Scope, timeline, and deliverables are discussed before work begins."
          />

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service) => (
              <article
                key={service.number}
                className={`group flex h-full flex-col rounded-2xl border p-6 transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/5 sm:p-7 ${
                  service.featured
                    ? "border-[var(--ifm-color-primary)] bg-[var(--ifm-color-primary)]/[0.045]"
                    : "border-[var(--ifm-color-emphasis-300)] bg-[var(--ifm-background-surface-color)]"
                }`}
              >
                <div className="mb-6 flex items-center justify-between">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--ifm-color-primary)]/10 text-2xl text-[var(--ifm-color-primary)]">
                    {service.icon}
                  </span>
                  <span className="font-mono text-sm text-[var(--ifm-color-emphasis-500)]">
                    / {service.number}
                  </span>
                </div>

                <p className="mb-2 text-xs font-bold uppercase tracking-[0.14em] text-[var(--ifm-color-primary)]">
                  {service.category}
                </p>

                <h3 className="mb-3 text-xl font-bold leading-snug tracking-tight sm:text-2xl">
                  {service.title}
                </h3>

                <p className="mb-6 text-sm leading-7 text-[var(--ifm-color-emphasis-700)]">
                  {service.description}
                </p>

                <ul className="mb-7 space-y-3">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-3 text-sm leading-6 text-[var(--ifm-font-color-base)]"
                    >
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[var(--ifm-color-primary)]/10 text-xs font-bold text-[var(--ifm-color-primary)]">
                        ✓
                      </span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-auto border-t border-[var(--ifm-color-emphasis-200)] pt-5">
                  <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-[var(--ifm-color-emphasis-600)]">
                    Technologies & focus
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {service.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="rounded-lg border border-[var(--ifm-color-emphasis-300)] px-2.5 py-1.5 text-xs text-[var(--ifm-color-emphasis-800)]"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>
                  <a
                    href="#contact"
                    className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[var(--ifm-color-primary)] no-underline transition group-hover:gap-3 hover:no-underline"
                  >
                    Discuss this service
                    <span aria-hidden="true">→</span>
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Why work with me */}
        <section className="border-y border-[var(--ifm-color-emphasis-200)] bg-[var(--ifm-background-surface-color)]">
          <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-2 lg:items-center lg:gap-20 lg:px-10">
            <div>
              <SectionHeading
                eyebrow="How I approach projects"
                title="Good work starts with understanding the problem."
                description="My focus is not simply adding features. It is helping create a solution that is useful, maintainable, and appropriate for the people who use it."
              />
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 font-semibold text-[var(--ifm-color-primary)] no-underline hover:no-underline"
              >
                Explore my work on GitHub
                <ArrowIcon className="h-4 w-4" />
              </a>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                {
                  title: "User-first thinking",
                  description:
                    "Prioritize clarity, accessibility, responsive behavior, and meaningful interactions.",
                  icon: "◎",
                },
                {
                  title: "Maintainable code",
                  description:
                    "Prefer reusable components, clear naming, and understandable project structure.",
                  icon: "⌘",
                },
                {
                  title: "Practical problem-solving",
                  description:
                    "Choose tools and features that fit the actual requirements instead of adding complexity.",
                  icon: "↗",
                },
                {
                  title: "Continuous improvement",
                  description:
                    "Use feedback, testing, and iteration to make the result better over time.",
                  icon: "↻",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-[var(--ifm-color-emphasis-300)] bg-[var(--ifm-background-color)] p-5 sm:p-6"
                >
                  <span className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--ifm-color-primary)]/10 text-xl text-[var(--ifm-color-primary)]">
                    {item.icon}
                  </span>
                  <h3 className="mb-2 text-lg font-bold">{item.title}</h3>
                  <p className="text-sm leading-7 text-[var(--ifm-color-emphasis-700)]">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Work samples */}
        <section
          id="selected-work"
          className="scroll-mt-24 mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-24 lg:px-10"
        >
          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <SectionHeading
              eyebrow="Selected work"
              title="Explore projects behind the practice."
              description="A few projects that demonstrate my interests in developer education, AI, and open-source learning."
            />
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="mb-10 inline-flex shrink-0 items-center gap-2 font-semibold text-[var(--ifm-color-primary)] no-underline hover:no-underline"
            >
              More on GitHub
              <ArrowIcon className="h-4 w-4" />
            </a>
          </div>

          <div className="grid gap-5 lg:grid-cols-3">
            {projects.map((project) => (
              <article
                key={project.name}
                className="group overflow-hidden rounded-2xl border border-[var(--ifm-color-emphasis-300)] bg-[var(--ifm-background-surface-color)] transition duration-300 hover:-translate-y-1 hover:border-[var(--ifm-color-primary)] hover:shadow-xl hover:shadow-black/5"
              >
                <div className="relative flex h-40 items-center justify-center overflow-hidden border-b border-[var(--ifm-color-emphasis-200)] bg-[var(--ifm-color-emphasis-100)]">
                  <div className="absolute h-32 w-32 rounded-full border border-[var(--ifm-color-primary)] opacity-30" />
                  <div className="absolute h-24 w-24 rounded-full border border-[var(--ifm-color-primary)] opacity-40" />
                  <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl bg-[var(--ifm-color-primary)] text-xl font-black text-white shadow-lg transition duration-300 group-hover:rotate-3 group-hover:scale-105">
                    {project.mark}
                  </div>
                  <span className="absolute right-4 top-4 rounded-full border border-[var(--ifm-color-emphasis-300)] bg-[var(--ifm-background-surface-color)] px-3 py-1 text-xs font-medium">
                    Project
                  </span>
                </div>

                <div className="p-6">
                  <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-[var(--ifm-color-primary)]">
                    {project.type}
                  </p>
                  <h3 className="mb-3 text-xl font-bold">{project.name}</h3>
                  <p className="mb-5 min-h-[5rem] text-sm leading-7 text-[var(--ifm-color-emphasis-700)]">
                    {project.description}
                  </p>
                  <div className="mb-6 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-lg bg-[var(--ifm-color-emphasis-200)] px-2.5 py-1.5 text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--ifm-color-primary)] no-underline hover:no-underline"
                  >
                    {project.label}
                    <ArrowIcon className="h-4 w-4" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Process */}
        <section
          id="process"
          className="scroll-mt-24 border-y border-[var(--ifm-color-emphasis-200)] bg-[var(--ifm-background-surface-color)]"
        >
          <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-24 lg:px-10">
            <SectionHeading
              eyebrow="The process"
              title="A straightforward path from idea to delivery."
              description="A transparent workflow helps keep expectations clear and makes collaboration easier."
              centered
            />

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {process.map((step) => (
                <div
                  key={step.number}
                  className="relative rounded-2xl border border-[var(--ifm-color-emphasis-300)] bg-[var(--ifm-background-color)] p-6"
                >
                  <span className="mb-6 block font-mono text-3xl font-bold text-[var(--ifm-color-primary)]">
                    {step.number}
                  </span>
                  <h3 className="mb-3 text-lg font-bold">{step.title}</h3>
                  <p className="text-sm leading-7 text-[var(--ifm-color-emphasis-700)]">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Engagement options */}
        <section
          id="engagement"
          className="scroll-mt-24 mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-24 lg:px-10"
        >
          <SectionHeading
            eyebrow="Ways to work together"
            title="Let's find the right kind of collaboration."
            description="Whether you have a defined project or are exploring a longer-term opportunity, we can start with a conversation."
          />

          <div className="grid gap-4 sm:grid-cols-2">
            {engagementOptions.map((option) => (
              <div
                key={option.title}
                className="flex gap-4 rounded-2xl border border-[var(--ifm-color-emphasis-300)] bg-[var(--ifm-background-surface-color)] p-5 transition hover:border-[var(--ifm-color-primary)] sm:p-6"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[var(--ifm-color-primary)]/10 text-2xl text-[var(--ifm-color-primary)]">
                  {option.icon}
                </span>
                <div>
                  <h3 className="mb-2 text-lg font-bold">{option.title}</h3>
                  <p className="text-sm leading-7 text-[var(--ifm-color-emphasis-700)]">
                    {option.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="border-t border-[var(--ifm-color-emphasis-200)]">
          <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20 lg:px-10">
            <div>
              <Eyebrow>Quick answers</Eyebrow>
              <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
                Before we get started.
              </h2>
              <p className="leading-8 text-[var(--ifm-color-emphasis-700)]">
                Every project is different. Here are a few things to clarify
                before we discuss the details.
              </p>
            </div>

            <div className="space-y-3">
              {[
                {
                  question: "How do we start a project?",
                  answer:
                    "Send a short description of your idea, your main goals, and any relevant references. We can then discuss the scope and possible next steps.",
                },
                {
                  question: "Do you work with existing projects?",
                  answer:
                    "Yes, we can discuss improvements to existing websites, UI components, documentation, integrations, or selected application features.",
                },
                {
                  question: "How are timelines and pricing decided?",
                  answer:
                    "They depend on the scope, complexity, requirements, and expected deliverables. These details should be agreed upon before work begins.",
                },
                {
                  question: "Can I contact you about a job or internship?",
                  answer:
                    "Yes. Use LinkedIn to share the role, team, requirements, and any relevant application details.",
                },
              ].map((faq) => (
                <details
                  key={faq.question}
                  className="group rounded-xl border border-[var(--ifm-color-emphasis-300)] bg-[var(--ifm-background-surface-color)] p-5"
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold">
                    {faq.question}
                    <span className="text-xl text-[var(--ifm-color-primary)] transition group-open:rotate-45">
                      +
                    </span>
                  </summary>
                  <p className="mb-0 mt-4 text-sm leading-7 text-[var(--ifm-color-emphasis-700)]">
                    {faq.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section
          id="contact"
          className="scroll-mt-24 px-5 pb-16 pt-8 sm:px-8 sm:pb-24 lg:px-10"
        >
          <div className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl bg-[var(--ifm-color-primary)] px-6 py-12 text-white sm:px-10 sm:py-16 lg:px-16 lg:py-20">
            <div className="pointer-events-none absolute -right-20 -top-24 h-72 w-72 rounded-full border border-white/20" />
            <div className="pointer-events-none absolute -right-8 -top-12 h-48 w-48 rounded-full border border-white/20" />
            <div className="pointer-events-none absolute -bottom-32 left-1/3 h-64 w-64 rounded-full bg-black/10 blur-2xl" />

            <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
              <div className="max-w-3xl">
                <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-white/80">
                  Have something in mind?
                </p>
                <h2 className="mb-5 text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl lg:text-6xl">
                  Let's build something useful together.
                </h2>
                <p className="max-w-2xl text-base leading-8 text-white/85 sm:text-lg">
                  Tell me what you are working on, what problem you want to
                  solve, and how I can help. Let's explore the next step.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-white px-6 py-3 font-bold text-slate-900 no-underline transition hover:-translate-y-0.5 hover:bg-slate-100 hover:no-underline"
                >
                  Contact on LinkedIn
                  <ArrowIcon className="h-4 w-4" />
                </a>
                <a
                  href={`${profile.github}?tab=repositories`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-white/40 px-6 py-3 font-semibold text-white hover:text-white hover:no-underline no-underline transition hover:bg-white/10"
                >
                  View GitHub projects
                  <ArrowIcon className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
