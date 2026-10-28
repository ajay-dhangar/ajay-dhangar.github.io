
import React, { useMemo, useState } from "react";
import Layout from "@theme/Layout";
import Head from "@docusaurus/Head";

type AchievementCategory =
  | "All"
  | "Open Source"
  | "Projects"
  | "Education"
  | "Community";

type Achievement = {
  id: string;
  title: string;
  category: Exclude<AchievementCategory, "All">;
  organization: string;
  description: string;
  status: "Ongoing" | "Completed" | "Project milestone";
  date: string;
  icon: "trophy" | "code" | "users" | "graduation" | "rocket" | "book";
  featured?: boolean;
  href?: string;
  linkLabel?: string;
  tags: string[];
};

const PROFILE = {
  name: "Ajay Dhangar",
  role: "Full Stack Developer · Open-Source Founder · AI Builder",
  location: "Madhya Pradesh, India",
  portfolio: "https://ajay-dhangar.github.io/",
  github: "https://github.com/ajay-dhangar",
  linkedin: "https://www.linkedin.com/in/ajay-dhangar/",
  codeHarborHub: "https://codeharborhub.github.io/",
  codeHarborHubRepo:
    "https://github.com/CodeHarborHub/codeharborhub.github.io",
  algo: "https://ajay-dhangar.github.io/algo/",
  aiBuddies: "https://ajay-dhangar.github.io/ai-buddies/",
};

const categories: AchievementCategory[] = [
  "All",
  "Open Source",
  "Projects",
  "Education",
  "Community",
];

const achievements: Achievement[] = [
  {
    id: "codeharborhub",
    title: "Founded CodeHarborHub",
    category: "Open Source",
    organization: "CodeHarborHub",
    description:
      "Started an open-source educational initiative focused on making programming tutorials, developer documentation, and learning resources more accessible.",
    status: "Ongoing",
    date: "Ongoing",
    icon: "rocket",
    featured: true,
    href: PROFILE.codeHarborHub,
    linkLabel: "Explore platform",
    tags: ["Founder", "Developer education", "Open source"],
  },
  {
    id: "algo",
    title: "Built and maintained an algorithm learning project",
    category: "Projects",
    organization: "Algo",
    description:
      "Developed an educational resource focused on data structures, algorithms, programming concepts, and opportunities for community contributions.",
    status: "Ongoing",
    date: "Ongoing",
    icon: "code",
    featured: true,
    href: PROFILE.algo,
    linkLabel: "Explore Algo",
    tags: ["DSA", "Learning resources", "Development"],
  },
  {
    id: "ai-buddies",
    title: "Developed the AI Buddies project",
    category: "Projects",
    organization: "AI Buddies",
    description:
      "Started an AI-focused project exploring accessible AI-powered experiences and practical applications built around a web-based interface.",
    status: "Ongoing",
    date: "Ongoing",
    icon: "rocket",
    featured: true,
    href: PROFILE.aiBuddies,
    linkLabel: "Explore AI Buddies",
    tags: ["AI", "Web development", "Product building"],
  },
  {
    id: "btech",
    title: "Completed a B.Tech degree",
    category: "Education",
    organization: "Mandsaur University",
    description:
      "Completed a Bachelor of Technology in Computer Science and Engineering, building the academic foundation for a career in software and technology.",
    status: "Completed",
    date: "2024",
    icon: "graduation",
    featured: true,
    tags: ["B.Tech", "Computer Science", "Engineering"],
  },
  {
    id: "community",
    title: "Contributed to developer learning and open-source collaboration",
    category: "Community",
    organization: "Open-source projects",
    description:
      "Worked on public developer resources and community-oriented projects, with an emphasis on maintainable documentation and collaborative development workflows.",
    status: "Ongoing",
    date: "Ongoing",
    icon: "users",
    href: PROFILE.github,
    linkLabel: "View GitHub",
    tags: ["Collaboration", "Documentation", "GitHub"],
  },
  {
    id: "web-development",
    title: "Built a portfolio of public web projects",
    category: "Projects",
    organization: "Independent development",
    description:
      "Created and maintained public-facing websites and developer resources using modern web development tools and documentation frameworks.",
    status: "Ongoing",
    date: "Ongoing",
    icon: "code",
    href: PROFILE.portfolio,
    linkLabel: "View portfolio",
    tags: ["React", "Docusaurus", "Web development"],
  },
];

const featuredInitiatives = [
  {
    name: "CodeHarborHub",
    label: "Education & open source",
    description:
      "A learning platform for programming tutorials, documentation, and developer resources.",
    url: PROFILE.codeHarborHub,
    repository: PROFILE.codeHarborHubRepo,
    icon: "CH",
  },
  {
    name: "Algo",
    label: "Computer science learning",
    description:
      "An educational project for data structures, algorithms, and programming practice.",
    url: PROFILE.algo,
    repository: "https://github.com/ajay-dhangar/algo",
    icon: "AG",
  },
  {
    name: "AI Buddies",
    label: "AI & product development",
    description:
      "An ongoing project exploring practical AI experiences through a web interface.",
    url: PROFILE.aiBuddies,
    repository: "https://github.com/ajay-dhangar/ai-buddies",
    icon: "AI",
  },
];

function Icon({
  name,
  size = 20,
}: {
  name:
    | "trophy"
    | "code"
    | "users"
    | "graduation"
    | "rocket"
    | "book"
    | "arrow"
    | "external"
    | "github"
    | "filter"
    | "search"
    | "check"
    | "sparkles";
  size?: number;
}) {
  const common = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true as const,
  };

  switch (name) {
    case "trophy":
      return (
        <svg {...common}>
          <path d="M8 21h8M12 17v4M7 4h10v5a5 5 0 0 1-10 0V4Z" />
          <path d="M7 6H4v2a4 4 0 0 0 4 4M17 6h3v2a4 4 0 0 1-4 4" />
        </svg>
      );
    case "code":
      return (
        <svg {...common}>
          <path d="m8 17-5-5 5-5M16 7l5 5-5 5M14 4l-4 16" />
        </svg>
      );
    case "users":
      return (
        <svg {...common}>
          <path d="M16 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2M10 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM20 8v6M23 11h-6" />
        </svg>
      );
    case "graduation":
      return (
        <svg {...common}>
          <path d="m2 10 10-5 10 5-10 5-10-5Z" />
          <path d="M6 12v5c3.5 3 8.5 3 12 0v-5M22 10v6" />
        </svg>
      );
    case "rocket":
      return (
        <svg {...common}>
          <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09Z" />
          <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6.05 11A22 22 0 0 1 12 15Z" />
          <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
        </svg>
      );
    case "book":
      return (
        <svg {...common}>
          <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2Z" />
        </svg>
      );
    case "arrow":
      return (
        <svg {...common}>
          <path d="M7 17 17 7M7 7h10v10" />
        </svg>
      );
    case "external":
      return (
        <svg {...common}>
          <path d="M14 3h7v7M10 14 21 3" />
          <path d="M19 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h6" />
        </svg>
      );
    case "github":
      return (
        <svg {...common}>
          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
        </svg>
      );
    case "filter":
      return (
        <svg {...common}>
          <path d="M4 7h16M7 12h10m-7 5h4" />
        </svg>
      );
    case "search":
      return (
        <svg {...common}>
          <circle cx="11" cy="11" r="8" />
          <path d="m21 21-4.35-4.35" />
        </svg>
      );
    case "check":
      return (
        <svg {...common}>
          <path d="m5 12 4 4L19 6" />
        </svg>
      );
    case "sparkles":
      return (
        <svg {...common}>
          <path d="m12 3 1.9 5.8L20 11l-6.1 2.2L12 19l-1.9-5.8L4 11l6.1-2.2L12 3Z" />
          <path d="m19 14 1.1 2.9L23 18l-2.9 1.1L19 22l-1.1-2.9L15 18l2.9-1.1L19 14Z" />
        </svg>
      );
  }
}

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="mb-7">
      <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-[var(--ifm-color-primary)]">
        {eyebrow}
      </p>
      <h2 className="mb-2 text-2xl font-black tracking-tight sm:text-3xl">
        {title}
      </h2>
      {description && (
        <p className="mb-0 max-w-2xl text-sm leading-7 opacity-70">
          {description}
        </p>
      )}
    </div>
  );
}

export default function AchievementsPage(): React.ReactElement {
  const [activeCategory, setActiveCategory] =
    useState<AchievementCategory>("All");
  const [search, setSearch] = useState("");
  const [featuredOnly, setFeaturedOnly] = useState(false);

  const filteredAchievements = useMemo(() => {
    const query = search.trim().toLowerCase();

    return achievements.filter((achievement) => {
      const categoryMatch =
        activeCategory === "All" || achievement.category === activeCategory;
      const featuredMatch = !featuredOnly || achievement.featured;

      const searchable = [
        achievement.title,
        achievement.category,
        achievement.organization,
        achievement.description,
        achievement.status,
        ...achievement.tags,
      ]
        .join(" ")
        .toLowerCase();

      return (
        categoryMatch &&
        featuredMatch &&
        (!query || searchable.includes(query))
      );
    });
  }, [activeCategory, search, featuredOnly]);

  const completedCount = achievements.filter(
    (item) => item.status === "Completed",
  ).length;

  const ongoingCount = achievements.filter(
    (item) => item.status === "Ongoing",
  ).length;

  const renderIcon = (name: Achievement["icon"], size = 22) => {
    const iconMap = {
      trophy: "trophy",
      code: "code",
      users: "users",
      graduation: "graduation",
      rocket: "rocket",
      book: "book",
    } as const;

    return <Icon name={iconMap[name]} size={size} />;
  };

  return (
    <Layout
      title="Achievements"
      description="Explore Ajay Dhangar's milestones in open-source development, developer education, software projects, and computer science."
    >
      <Head>
        <meta
          property="og:title"
          content="Ajay Dhangar | Achievements & Impact"
        />
        <meta
          property="og:description"
          content="A collection of my software development projects, open-source initiatives, education, and ongoing milestones."
        />
        <meta property="og:type" content="profile" />
        <meta
          property="og:url"
          content="https://ajay-dhangar.github.io/achievements/"
        />
        <meta
          name="keywords"
          content="Ajay Dhangar achievements, CodeHarborHub founder, open-source developer, software projects, AI Buddies, Algo, computer science engineer"
        />
      </Head>

      <main className="achievements-page">
        <style>{`
          .achievements-page {
            --achievement-border: var(--ifm-color-emphasis-200);
            --achievement-surface: var(--ifm-background-surface-color);
            color: var(--ifm-font-color-base);
          }

          .achievements-page * {
            box-sizing: border-box;
          }

          .achievements-page .achievement-card {
            border: 1px solid var(--achievement-border);
            border-radius: 20px;
            background: var(--achievement-surface);
            transition:
              transform 180ms ease,
              border-color 180ms ease,
              box-shadow 180ms ease;
          }

          .achievements-page .achievement-card:hover {
            border-color: color-mix(
              in srgb,
              var(--ifm-color-primary) 60%,
              var(--achievement-border)
            );
          }

          .achievements-page .achievement-button {
            display: inline-flex;
            min-height: 42px;
            align-items: center;
            justify-content: center;
            gap: 8px;
            border-radius: 12px;
            padding: 10px 15px;
            font-size: 13px;
            font-weight: 700;
            transition: opacity 160ms ease, transform 160ms ease;
          }

          .achievements-page .achievement-button:hover {
            opacity: .9;
            transform: translateY(-1px);
            text-decoration: none;
          }

          .achievements-page .achievement-primary {
            color: white;
            background: var(--ifm-color-primary);
          }

          .achievements-page .achievement-secondary {
            border: 1px solid var(--achievement-border);
            color: var(--ifm-font-color-base);
          }

          .achievements-page .achievement-filter {
            border: 1px solid var(--achievement-border);
            border-radius: 999px;
            padding: 8px 13px;
            font-size: 12px;
            font-weight: 700;
            white-space: nowrap;
            transition: background 150ms ease, color 150ms ease;
          }

          .achievements-page .achievement-filter:hover,
          .achievements-page .achievement-filter.active {
            border-color: var(--ifm-color-primary);
            background: color-mix(
              in srgb,
              var(--ifm-color-primary) 12%,
              transparent
            );
            color: var(--ifm-color-primary);
          }

          .achievements-page .achievement-tag {
            display: inline-flex;
            align-items: center;
            border: 1px solid var(--achievement-border);
            border-radius: 8px;
            padding: 5px 8px;
            font-size: 11px;
            line-height: 1.4;
          }

          .achievements-page .achievement-anchor {
            scroll-margin-top: 90px;
          }

          .achievements-page .achievement-search:focus-within {
            border-color: var(--ifm-color-primary);
            box-shadow: 0 0 0 3px color-mix(
              in srgb,
              var(--ifm-color-primary) 12%,
              transparent
            );
          }

          @media (prefers-reduced-motion: reduce) {
            .achievements-page *,
            .achievements-page *::before,
            .achievements-page *::after {
              transition-duration: 0.01ms !important;
              scroll-behavior: auto !important;
            }
          }
        `}</style>

        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
          {/* Hero */}
          <section className="achievement-card relative mb-8 overflow-hidden p-6 sm:p-10 lg:p-12">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-20 -top-24 h-72 w-72 rounded-full opacity-20 blur-3xl"
              style={{
                background:
                  "radial-gradient(circle, var(--ifm-color-primary), transparent 70%)",
              }}
            />

            <div className="relative grid gap-8 lg:grid-cols-[1fr_280px] lg:items-center">
              <div>
                <div className="mb-5 inline-flex items-center gap-2 rounded-full border px-3 py-2 text-xs font-bold" style={{ borderColor: "var(--achievement-border)" }}>
                  <Icon name="trophy" size={15} />
                  ACHIEVEMENTS & IMPACT
                </div>

                <h1 className="mb-5 max-w-3xl text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">
                  Progress worth{" "}
                  <span style={{ color: "var(--ifm-color-primary)" }}>
                    building on.
                  </span>
                </h1>

                <p className="mb-6 max-w-2xl text-sm leading-8 opacity-75 sm:text-base">
                  I'm Ajay Dhangar, a developer and founder of CodeHarborHub.
                  This page highlights my journey in software development,
                  open-source education, project building, and computer science.
                  I focus on creating useful projects, learning continuously,
                  and making technology more accessible.
                </p>

                <div className="flex flex-wrap gap-3">
                  <a
                    href="#achievement-list"
                    className="achievement-button achievement-primary"
                  >
                    Explore milestones <Icon name="arrow" size={15} />
                  </a>
                  <a
                    href={PROFILE.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="achievement-button achievement-secondary"
                  >
                    <Icon name="github" size={16} />
                    GitHub profile
                  </a>
                </div>

                <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-xs opacity-60">
                  <span>{PROFILE.role}</span>
                  <span>{PROFILE.location}</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div
                  className="col-span-2 rounded-2xl border p-5"
                  style={{
                    borderColor: "var(--achievement-border)",
                    background:
                      "color-mix(in srgb, var(--ifm-color-primary) 6%, var(--achievement-surface))",
                  }}
                >
                  <div
                    className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl"
                    style={{
                      color: "var(--ifm-color-primary)",
                      background:
                        "color-mix(in srgb, var(--ifm-color-primary) 13%, transparent)",
                    }}
                  >
                    <Icon name="rocket" size={23} />
                  </div>
                  <p className="mb-1 text-lg font-black">Build with purpose</p>
                  <p className="mb-0 text-xs leading-6 opacity-65">
                    Projects, learning resources, and open-source initiatives.
                  </p>
                </div>
                <div className="rounded-2xl border p-4" style={{ borderColor: "var(--achievement-border)" }}>
                  <p className="mb-1 text-2xl font-black" style={{ color: "var(--ifm-color-primary)" }}>
                    {achievements.length}
                  </p>
                  <p className="mb-0 text-xs opacity-65">Listed milestones</p>
                </div>
                <div className="rounded-2xl border p-4" style={{ borderColor: "var(--achievement-border)" }}>
                  <p className="mb-1 text-2xl font-black" style={{ color: "var(--ifm-color-primary)" }}>
                    2024
                  </p>
                  <p className="mb-0 text-xs opacity-65">B.Tech graduation</p>
                </div>
              </div>
            </div>
          </section>

          {/* Impact overview */}
          <section className="mb-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: "rocket" as const,
                value: "01",
                title: "Founder initiative",
                description: "CodeHarborHub",
              },
              {
                icon: "code" as const,
                value: "03",
                title: "Featured projects",
                description: "Education, algorithms, and AI",
              },
              {
                icon: "graduation" as const,
                value: "2024",
                title: "Academic milestone",
                description: "B.Tech in Computer Science",
              },
              {
                icon: "users" as const,
                value: "Open",
                title: "Community focus",
                description: "Public projects and collaboration",
              },
            ].map((item) => (
              <article key={item.title} className="achievement-card p-5">
                <div className="mb-4 flex items-center justify-between">
                  <span
                    className="flex h-10 w-10 items-center justify-center rounded-xl"
                    style={{
                      color: "var(--ifm-color-primary)",
                      background:
                        "color-mix(in srgb, var(--ifm-color-primary) 12%, transparent)",
                    }}
                  >
                    <Icon name={item.icon} size={20} />
                  </span>
                  <span className="text-xs font-bold opacity-40">
                    {item.value}
                  </span>
                </div>
                <h2 className="mb-1 text-sm font-bold">{item.title}</h2>
                <p className="mb-0 text-xs leading-6 opacity-65">
                  {item.description}
                </p>
              </article>
            ))}
          </section>

          {/* Featured initiatives */}
          <section className="mb-14">
            <SectionHeading
              eyebrow="01 / Featured work"
              title="Milestones through projects"
              description="Some of the most meaningful parts of my developer journey are the projects I build and maintain."
            />

            <div className="grid gap-4 lg:grid-cols-3">
              {featuredInitiatives.map((project) => (
                <article key={project.name} className="achievement-card flex flex-col p-6">
                  <div className="mb-5 flex items-center justify-between">
                    <div
                      className="flex h-12 w-12 items-center justify-center rounded-2xl text-sm font-black"
                      style={{
                        color: "var(--ifm-color-primary)",
                        background:
                          "color-mix(in srgb, var(--ifm-color-primary) 12%, transparent)",
                      }}
                    >
                      {project.icon}
                    </div>
                    <a
                      href={project.repository}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${project.name} GitHub repository`}
                      className="opacity-60 hover:opacity-100"
                    >
                      <Icon name="github" size={21} />
                    </a>
                  </div>

                  <p className="mb-2 text-xs font-bold uppercase tracking-wider text-[var(--ifm-color-primary)]">
                    {project.label}
                  </p>
                  <h3 className="mb-3 text-lg font-bold">{project.name}</h3>
                  <p className="mb-6 flex-1 text-sm leading-7 opacity-70">
                    {project.description}
                  </p>

                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-bold text-[var(--ifm-color-primary)] hover:underline"
                  >
                    Explore project <Icon name="arrow" size={15} />
                  </a>
                </article>
              ))}
            </div>
          </section>

          {/* Achievement explorer */}
          <section id="achievement-list" className="achievement-anchor mb-14">
            <SectionHeading
              eyebrow="02 / Journey"
              title="Achievements & milestones"
              description="Filter the milestones by category or search for a project, skill, or accomplishment."
            />

            <div className="achievement-card p-4 sm:p-6">
              <div className="mb-5 flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
                <label className="achievement-search flex min-h-12 flex-1 items-center gap-3 rounded-xl border px-4" style={{ borderColor: "var(--achievement-border)" }}>
                  <Icon name="search" size={18} />
                  <input
                    type="search"
                    value={search}
                    onChange={(event) => setSearch(event.target.value)}
                    placeholder="Search achievements..."
                    aria-label="Search achievements"
                    className="min-w-0 flex-1 bg-transparent py-3 text-sm outline-none"
                  />
                  {search && (
                    <button
                      type="button"
                      onClick={() => setSearch("")}
                      className="text-xs font-bold opacity-60"
                    >
                      Clear
                    </button>
                  )}
                </label>

                <div className="flex flex-wrap gap-2">
                  <button
                    type="button"
                    onClick={() => setFeaturedOnly((value) => !value)}
                    aria-pressed={featuredOnly}
                    className={`achievement-filter ${featuredOnly ? "active" : ""}`}
                  >
                    <span className="inline-flex items-center gap-2">
                      <Icon name="filter" size={14} />
                      Featured only
                    </span>
                  </button>
                </div>
              </div>

              <div className="mb-6 flex flex-wrap gap-2">
                {categories.map((category) => {
                  const count =
                    category === "All"
                      ? achievements.length
                      : achievements.filter(
                          (item) => item.category === category,
                        ).length;

                  return (
                    <button
                      key={category}
                      type="button"
                      onClick={() => setActiveCategory(category)}
                      aria-pressed={activeCategory === category}
                      className={`achievement-filter ${activeCategory === category ? "active" : ""}`}
                    >
                      {category} <span className="ml-1 opacity-60">{count}</span>
                    </button>
                  );
                })}
              </div>

              <div className="mb-4 text-xs opacity-60">
                Showing {filteredAchievements.length} of {achievements.length}{" "}
                milestones
              </div>

              {filteredAchievements.length > 0 ? (
                <div className="space-y-4">
                  {filteredAchievements.map((item, index) => (
                    <article
                      key={item.id}
                      className="achievement-card p-5 sm:p-6"
                    >
                      <div className="flex flex-col gap-4 sm:flex-row">
                        <div
                          className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl"
                          style={{
                            color: "var(--ifm-color-primary)",
                            background:
                              "color-mix(in srgb, var(--ifm-color-primary) 12%, transparent)",
                          }}
                        >
                          {renderIcon(item.icon)}
                        </div>

                        <div className="min-w-0 flex-1">
                          <div className="mb-2 flex flex-wrap items-center gap-2">
                            <span className="text-xs font-bold opacity-40">
                              {String(index + 1).padStart(2, "0")}
                            </span>
                            <span className="achievement-tag">
                              {item.category}
                            </span>
                            {item.featured && (
                              <span
                                className="achievement-tag"
                                style={{
                                  color: "var(--ifm-color-primary)",
                                  borderColor:
                                    "color-mix(in srgb, var(--ifm-color-primary) 40%, var(--achievement-border))",
                                }}
                              >
                                Featured
                              </span>
                            )}
                          </div>

                          <h3 className="mb-1 text-lg font-bold">
                            {item.title}
                          </h3>
                          <p className="mb-3 text-xs opacity-60">
                            {item.organization} · {item.date}
                          </p>
                          <p className="mb-4 text-sm leading-7 opacity-75">
                            {item.description}
                          </p>

                          <div className="mb-4 flex flex-wrap gap-2">
                            {item.tags.map((tag) => (
                              <span key={tag} className="achievement-tag">
                                {tag}
                              </span>
                            ))}
                          </div>

                          <div className="flex flex-wrap items-center justify-between gap-3 border-t pt-4" style={{ borderColor: "var(--achievement-border)" }}>
                            <span className="inline-flex items-center gap-2 text-xs opacity-65">
                              <span
                                className="h-2 w-2 rounded-full"
                                style={{
                                  background:
                                    item.status === "Completed"
                                      ? "#22a06b"
                                      : "var(--ifm-color-primary)",
                                }}
                              />
                              {item.status}
                            </span>

                            {item.href && (
                              <a
                                href={item.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 text-sm font-bold text-[var(--ifm-color-primary)] hover:underline"
                              >
                                {item.linkLabel ?? "Learn more"}
                                <Icon name="external" size={14} />
                              </a>
                            )}
                          </div>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              ) : (
                <div className="rounded-2xl border border-dashed p-10 text-center" style={{ borderColor: "var(--achievement-border)" }}>
                  <div className="mb-3 flex justify-center opacity-40">
                    <Icon name="search" size={28} />
                  </div>
                  <h3 className="mb-2 text-base font-bold">
                    No matching milestones
                  </h3>
                  <p className="mb-4 text-sm opacity-65">
                    Try another search term or reset the filters.
                  </p>
                  <button
                    type="button"
                    className="achievement-button achievement-secondary"
                    onClick={() => {
                      setSearch("");
                      setActiveCategory("All");
                      setFeaturedOnly(false);
                    }}
                  >
                    Reset filters
                  </button>
                </div>
              )}
            </div>
          </section>

          {/* Education */}
          <section className="mb-14">
            <SectionHeading
              eyebrow="03 / Foundation"
              title="Education & growth"
              description="The academic foundation behind my technology and software development journey."
            />

            <article className="achievement-card p-6 sm:p-8">
              <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
                <div
                  className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl"
                  style={{
                    color: "var(--ifm-color-primary)",
                    background:
                      "color-mix(in srgb, var(--ifm-color-primary) 12%, transparent)",
                  }}
                >
                  <Icon name="graduation" size={26} />
                </div>
                <div className="flex-1">
                  <div className="mb-3 flex flex-wrap items-center gap-2">
                    <span className="achievement-tag">Completed</span>
                    <span className="achievement-tag">2024</span>
                  </div>
                  <h3 className="mb-1 text-xl font-black">
                    Bachelor of Technology
                  </h3>
                  <p className="mb-2 text-sm font-semibold opacity-75">
                    Computer Science and Engineering
                  </p>
                  <p className="mb-0 text-sm opacity-65">
                    Mandsaur University
                  </p>
                </div>
              </div>
            </article>
          </section>

          {/* Philosophy */}
          <section className="achievement-card mb-10 overflow-hidden p-6 sm:p-9">
            <div className="grid gap-8 md:grid-cols-[1fr_0.8fr] md:items-center">
              <div>
                <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-[var(--ifm-color-primary)]">
                  04 / My philosophy
                </p>
                <h2 className="mb-4 text-2xl font-black sm:text-3xl">
                  Build useful things. Share what you learn.
                </h2>
                <p className="mb-5 text-sm leading-8 opacity-70">
                  I believe meaningful progress comes from consistent practice,
                  building real projects, learning from the developer community,
                  and sharing knowledge. My focus is to keep improving my
                  engineering skills while contributing to useful products
                  and educational resources.
                </p>
                <a
                  href={PROFILE.portfolio}
                  className="achievement-button achievement-primary"
                >
                  Explore my portfolio <Icon name="arrow" size={15} />
                </a>
              </div>

              <div className="space-y-4">
                {[
                  {
                    title: "Learn continuously",
                    text: "Turn new concepts into practical experiments.",
                  },
                  {
                    title: "Build in public",
                    text: "Maintain projects and share accessible resources.",
                  },
                  {
                    title: "Grow through collaboration",
                    text: "Learn from contributors and the wider developer community.",
                  },
                ].map((item, index) => (
                  <div key={item.title} className="flex gap-3">
                    <span
                      className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl text-xs font-black"
                      style={{
                        color: "var(--ifm-color-primary)",
                        background:
                          "color-mix(in srgb, var(--ifm-color-primary) 12%, transparent)",
                      }}
                    >
                      0{index + 1}
                    </span>
                    <div>
                      <h3 className="mb-1 text-sm font-bold">{item.title}</h3>
                      <p className="mb-0 text-xs leading-6 opacity-65">
                        {item.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA */}
          <section
            className="rounded-3xl p-7 text-white sm:p-10"
            style={{ background: "var(--ifm-color-primary)" }}
          >
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div className="max-w-2xl">
                <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-white/75">
                  What's next?
                </p>
                <h2 className="mb-3 text-2xl font-black sm:text-3xl">
                  The journey continues.
                </h2>
                <p className="mb-0 text-sm leading-7 text-white/85">
                  I'm open to relevant software development opportunities,
                  meaningful projects, and open-source collaboration.
                </p>
              </div>

              <div className="flex shrink-0 flex-wrap gap-3">
                <a
                  href="/contact"
                  className="achievement-button bg-white text-[#174f75]"
                >
                  Get in touch <Icon name="arrow" size={15} />
                </a>
                <a
                  href={PROFILE.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="achievement-button border border-white/40 text-white hover:text-white"
                >
                  LinkedIn <Icon name="external" size={14} />
                </a>
              </div>
            </div>
          </section>
        </div>
      </main>
    </Layout>
  );
}
