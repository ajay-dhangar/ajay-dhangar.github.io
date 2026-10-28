
import React, { useMemo, useState } from "react";
import Layout from "@theme/Layout";
import Head from "@docusaurus/Head";
import Link from "@docusaurus/Link";

type Tool = {
  name: string;
  category: string;
  description: string;
  purpose: string;
  icon: string;
  url?: string;
  status?: "Daily driver" | "Project tool" | "Exploring";
  tags: string[];
};

const categories = [
  "All",
  "Development",
  "Frontend",
  "Backend",
  "AI & Learning",
  "Productivity",
  "Open Source",
];

const tools: Tool[] = [
  {
    name: "Visual Studio Code",
    category: "Development",
    description:
      "A flexible code editor for building, debugging, and maintaining software projects.",
    purpose: "Primary coding environment",
    icon: "⌘",
    status: "Daily driver",
    tags: ["Editor", "Extensions", "Debugging"],
    url: "https://code.visualstudio.com/",
  },
  {
    name: "Git",
    category: "Development",
    description:
      "Version control for tracking changes, maintaining branches, and collaborating on code.",
    purpose: "Source control",
    icon: "⑂",
    status: "Daily driver",
    tags: ["Version control", "CLI", "Workflow"],
    url: "https://git-scm.com/",
  },
  {
    name: "GitHub",
    category: "Open Source",
    description:
      "The home for repositories, issues, pull requests, documentation, and community collaboration.",
    purpose: "Code hosting and collaboration",
    icon: "⌘",
    status: "Daily driver",
    tags: ["Repositories", "Issues", "Pull requests"],
    url: "https://github.com/",
  },
  {
    name: "React",
    category: "Frontend",
    description:
      "A component-based library for building interactive user interfaces and web applications.",
    purpose: "Interactive UI development",
    icon: "⚛",
    status: "Daily driver",
    tags: ["Components", "UI", "JavaScript"],
    url: "https://react.dev/",
  },
  {
    name: "TypeScript",
    category: "Frontend",
    description:
      "Adds static types to JavaScript to make application code easier to understand and maintain.",
    purpose: "Safer application development",
    icon: "TS",
    status: "Daily driver",
    tags: ["Types", "JavaScript", "Maintainability"],
    url: "https://www.typescriptlang.org/",
  },
  {
    name: "Tailwind CSS",
    category: "Frontend",
    description:
      "A utility-first CSS framework for building consistent, responsive interfaces efficiently.",
    purpose: "UI styling",
    icon: "✳",
    status: "Daily driver",
    tags: ["CSS", "Responsive", "Design systems"],
    url: "https://tailwindcss.com/",
  },
  {
    name: "Docusaurus",
    category: "Development",
    description:
      "A documentation framework for creating structured learning resources, guides, and project websites.",
    purpose: "Docs and learning platforms",
    icon: "D",
    status: "Daily driver",
    tags: ["Documentation", "MDX", "React"],
    url: "https://docusaurus.io/",
  },
  {
    name: "Node.js",
    category: "Backend",
    description:
      "A JavaScript runtime for building server-side applications, APIs, and developer tooling.",
    purpose: "JavaScript backend development",
    icon: "JS",
    status: "Project tool",
    tags: ["JavaScript", "Runtime", "APIs"],
    url: "https://nodejs.org/",
  },
  {
    name: "MongoDB",
    category: "Backend",
    description:
      "A document database for applications that need flexible, JSON-like data models.",
    purpose: "NoSQL data storage",
    icon: "M",
    status: "Project tool",
    tags: ["Database", "NoSQL", "Data"],
    url: "https://www.mongodb.com/",
  },
  {
    name: "ChatGPT",
    category: "AI & Learning",
    description:
      "An AI assistant for exploring ideas, learning concepts, reviewing approaches, and accelerating development workflows.",
    purpose: "AI-assisted learning and ideation",
    icon: "✧",
    status: "Project tool",
    tags: ["AI", "Research", "Problem solving"],
    url: "https://chatgpt.com/",
  },
  {
    name: "MDN Web Docs",
    category: "AI & Learning",
    description:
      "A trusted reference for HTML, CSS, JavaScript, browser APIs, and modern web development.",
    purpose: "Technical documentation",
    icon: "M",
    status: "Daily driver",
    tags: ["Reference", "Web standards", "Learning"],
    url: "https://developer.mozilla.org/",
  },
  {
    name: "Vercel",
    category: "Productivity",
    description:
      "A deployment platform for publishing web projects and previewing changes during development.",
    purpose: "Deployment and previews",
    icon: "▲",
    status: "Project tool",
    tags: ["Hosting", "Deployments", "Previews"],
    url: "https://vercel.com/",
  },
  {
    name: "GitHub Pages",
    category: "Open Source",
    description:
      "Static site hosting for developer portfolios, project websites, and documentation.",
    purpose: "Publishing open-source projects",
    icon: "↗",
    status: "Daily driver",
    tags: ["Static hosting", "Portfolio", "Documentation"],
    url: "https://pages.github.com/",
  },
  {
    name: "Figma",
    category: "Productivity",
    description:
      "A collaborative design tool for exploring layouts, interface ideas, and design systems.",
    purpose: "UI planning and design",
    icon: "◈",
    status: "Exploring",
    tags: ["UI/UX", "Prototyping", "Design"],
    url: "https://www.figma.com/",
  },
];

const projects = [
  {
    name: "CodeHarborHub",
    type: "Learning platform",
    description:
      "A community-driven initiative focused on accessible programming education and developer resources.",
    url: "https://codeharborhub.github.io/",
    icon: "⌘",
    accent: "blue",
  },
  {
    name: "Algo",
    type: "DSA learning",
    description:
      "A learning project centered on data structures, algorithms, practice, and community contributions.",
    url: "https://ajay-dhangar.github.io/algo/",
    icon: "⟡",
    accent: "purple",
  },
  {
    name: "AI Buddies",
    type: "AI project",
    description:
      "An AI-focused project exploring helpful learning experiences and interactive features.",
    url: "https://ajay-dhangar.github.io/ai-buddies/",
    icon: "✧",
    accent: "green",
  },
];

function ArrowIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="16"
      height="16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M7 17 17 7M7 7h10v10" />
    </svg>
  );
}

function ToolIcon({ children }: { children: React.ReactNode }) {
  return <span className="uses-tool-icon" aria-hidden="true">{children}</span>;
}

export default function UsesPage(): React.JSX.Element {
  const [activeCategory, setActiveCategory] = useState("All");
  const [search, setSearch] = useState("");
  const [activeOnly, setActiveOnly] = useState(false);

  const filteredTools = useMemo(() => {
    const query = search.trim().toLowerCase();

    return tools.filter((tool) => {
      const matchesCategory =
        activeCategory === "All" || tool.category === activeCategory;

      const matchesSearch =
        !query ||
        [
          tool.name,
          tool.category,
          tool.description,
          tool.purpose,
          ...tool.tags,
        ]
          .join(" ")
          .toLowerCase()
          .includes(query);

      const matchesActive =
        !activeOnly || tool.status === "Daily driver";

      return matchesCategory && matchesSearch && matchesActive;
    });
  }, [activeCategory, search, activeOnly]);

  return (
    <Layout
      title="Uses — Developer Tools & Setup"
      description="Explore the development tools, technologies, resources, and workflows behind Ajay Dhangar's web development and open-source projects."
    >
      <Head>
        <meta
          name="keywords"
          content="Ajay Dhangar uses, developer tools, web development setup, React, TypeScript, Docusaurus, Tailwind CSS, GitHub, AI tools, open source"
        />
        <meta property="og:title" content="Uses | Ajay Dhangar" />
        <meta
          property="og:description"
          content="The tools, technologies, and resources behind my development workflow."
        />
        <meta property="og:type" content="website" />
      </Head>

      <main className="uses-page">
        <div className="uses-shell">
          {/* HERO */}
          <section className="uses-hero">
            <div className="uses-hero-grid" aria-hidden="true" />

            <div className="uses-hero-content">
              <div className="uses-eyebrow">
                <span className="uses-live-dot" />
                DEVELOPER TOOLKIT
              </div>

              <h1>
                The tools behind
                <br />
                <span className="uses-gradient-text">what I build.</span>
              </h1>

              <p className="uses-hero-description">
                A look inside my development toolkit — from coding and
                documentation to AI-assisted learning and open-source projects.
                Good tools matter, but how you use them matters more.
              </p>

              <div className="uses-hero-actions">
                <a href="#toolkit" className="uses-button uses-button-primary">
                  Explore my toolkit <ArrowIcon />
                </a>
                <a
                  href="https://github.com/ajay-dhangar"
                  target="_blank"
                  rel="noreferrer"
                  className="uses-button uses-button-secondary"
                >
                  View GitHub <ArrowIcon />
                </a>
              </div>

              <div className="uses-hero-meta">
                <span><span className="uses-meta-symbol">⌘</span> Web development</span>
                <span><span className="uses-meta-symbol">✳</span> Open source</span>
                <span><span className="uses-meta-symbol">✧</span> AI exploration</span>
              </div>
            </div>

            <div className="uses-hero-art" aria-hidden="true">
              <div className="uses-orbit uses-orbit-one" />
              <div className="uses-orbit uses-orbit-two" />
              <div className="uses-terminal">
                <div className="uses-terminal-top">
                  <div className="uses-terminal-dots">
                    <i /><i /><i />
                  </div>
                  <span>developer.config</span>
                  <span>●</span>
                </div>
                <div className="uses-terminal-body">
                  <p><span className="uses-code-muted">01</span> <span className="uses-code-purple">const</span> builder = {"{"}</p>
                  <p><span className="uses-code-muted">02</span> &nbsp; mindset: <span className="uses-code-green">"curious"</span>,</p>
                  <p><span className="uses-code-muted">03</span> &nbsp; stack: [</p>
                  <p><span className="uses-code-muted">04</span> &nbsp;&nbsp; <span className="uses-code-green">"React"</span>,</p>
                  <p><span className="uses-code-muted">05</span> &nbsp;&nbsp; <span className="uses-code-green">"TypeScript"</span>,</p>
                  <p><span className="uses-code-muted">06</span> &nbsp;&nbsp; <span className="uses-code-green">"Docusaurus"</span></p>
                  <p><span className="uses-code-muted">07</span> &nbsp; ],</p>
                  <p><span className="uses-code-muted">08</span> &nbsp; openSource: <span className="uses-code-orange">true</span></p>
                  <p><span className="uses-code-muted">09</span> {"}"};</p>
                  <p className="uses-terminal-prompt"><span>➜</span> ship --with-purpose <i /></p>
                </div>
              </div>
              <div className="uses-floating-chip uses-chip-top">{"</>"} Clean code</div>
              <div className="uses-floating-chip uses-chip-bottom">✧ Build & learn</div>
            </div>
          </section>

          {/* QUICK STATS */}
          <section className="uses-stats" aria-label="Toolkit overview">
            <div className="uses-stat">
              <span className="uses-stat-number">{tools.length.toString().padStart(2, "0")}</span>
              <span className="uses-stat-label">Tools & resources</span>
            </div>
            <div className="uses-stat-divider" />
            <div className="uses-stat">
              <span className="uses-stat-number">06</span>
              <span className="uses-stat-label">Tool categories</span>
            </div>
            <div className="uses-stat-divider" />
            <div className="uses-stat">
              <span className="uses-stat-number">03</span>
              <span className="uses-stat-label">Featured projects</span>
            </div>
            <div className="uses-stat-divider" />
            <div className="uses-stat">
              <span className="uses-stat-number">∞</span>
              <span className="uses-stat-label">Things to learn</span>
            </div>
          </section>

          {/* TOOLKIT */}
          <section className="uses-section" id="toolkit">
            <div className="uses-section-heading">
              <div>
                <span className="uses-section-kicker">MY TOOLBOX</span>
                <h2>Tools I use & explore</h2>
                <p>
                  Software and resources that support my coding, learning,
                  design, and collaboration workflows.
                </p>
              </div>
              <span className="uses-result-count">
                {filteredTools.length} result{filteredTools.length === 1 ? "" : "s"}
              </span>
            </div>

            <div className="uses-controls">
              <label className="uses-search">
                <svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                  <circle cx="10.8" cy="10.8" r="6.8" />
                  <path d="m16 16 4 4" />
                </svg>
                <input
                  type="search"
                  value={search}
                  onChange={(event) => setSearch(event.target.value)}
                  placeholder="Search tools, technologies, tags..."
                  aria-label="Search tools"
                />
                {search && (
                  <button
                    type="button"
                    className="uses-clear-search"
                    onClick={() => setSearch("")}
                    aria-label="Clear search"
                  >
                    ×
                  </button>
                )}
              </label>

              <label className="uses-toggle">
                <input
                  type="checkbox"
                  checked={activeOnly}
                  onChange={(event) => setActiveOnly(event.target.checked)}
                />
                <span className="uses-toggle-track"><span /></span>
                <span>Daily drivers only</span>
              </label>
            </div>

            <div className="uses-filters" aria-label="Filter by category">
              {categories.map((category) => (
                <button
                  key={category}
                  type="button"
                  className={`uses-filter ${activeCategory === category ? "is-active" : ""}`}
                  onClick={() => setActiveCategory(category)}
                  aria-pressed={activeCategory === category}
                >
                  {category}
                </button>
              ))}
            </div>

            {filteredTools.length > 0 ? (
              <div className="uses-tool-grid">
                {filteredTools.map((tool) => (
                  <article className="uses-tool-card" key={tool.name}>
                    <div className="uses-tool-card-top">
                      <ToolIcon>{tool.icon}</ToolIcon>
                      {tool.status && (
                        <span className={`uses-status uses-status-${tool.status.toLowerCase().replace(" ", "-")}`}>
                          <span />
                          {tool.status}
                        </span>
                      )}
                    </div>

                    <div className="uses-tool-category">{tool.category}</div>
                    <h3>{tool.name}</h3>
                    <p className="uses-tool-description">{tool.description}</p>

                    <div className="uses-purpose">
                      <span>USE CASE</span>
                      <p>{tool.purpose}</p>
                    </div>

                    <div className="uses-tags">
                      {tool.tags.map((tag) => (
                        <span key={tag}>{tag}</span>
                      ))}
                    </div>

                    {tool.url && (
                      <a
                        className="uses-tool-link"
                        href={tool.url}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`Visit ${tool.name} official website`}
                      >
                        Official website <ArrowIcon />
                      </a>
                    )}
                  </article>
                ))}
              </div>
            ) : (
              <div className="uses-empty">
                <span>⌕</span>
                <h3>No matching tools found</h3>
                <p>Try another keyword or reset the selected filters.</p>
                <button
                  type="button"
                  className="uses-button uses-button-primary"
                  onClick={() => {
                    setSearch("");
                    setActiveCategory("All");
                    setActiveOnly(false);
                  }}
                >
                  Reset filters
                </button>
              </div>
            )}
          </section>

          {/* WORKFLOW */}
          <section className="uses-section uses-workflow-section">
            <div className="uses-section-heading">
              <div>
                <span className="uses-section-kicker">HOW I WORK</span>
                <h2>A workflow built around progress</h2>
                <p>
                  The goal isn't to collect tools. It's to turn ideas into
                  useful, maintainable software.
                </p>
              </div>
            </div>

            <div className="uses-workflow-grid">
              <article className="uses-workflow-card">
                <span className="uses-workflow-number">01</span>
                <div className="uses-workflow-icon">⌕</div>
                <h3>Research & plan</h3>
                <p>
                  Understand the problem, read documentation, explore
                  alternatives, and define a practical implementation.
                </p>
                <span className="uses-workflow-tag">Learn before building</span>
              </article>

              <article className="uses-workflow-card">
                <span className="uses-workflow-number">02</span>
                <div className="uses-workflow-icon">{"</>"}</div>
                <h3>Build & iterate</h3>
                <p>
                  Develop component-based interfaces, keep code organized,
                  and improve usability through iteration.
                </p>
                <span className="uses-workflow-tag">Code with intention</span>
              </article>

              <article className="uses-workflow-card">
                <span className="uses-workflow-number">03</span>
                <div className="uses-workflow-icon">⑂</div>
                <h3>Share & improve</h3>
                <p>
                  Use version control, publish projects, document decisions,
                  and learn from feedback and collaboration.
                </p>
                <span className="uses-workflow-tag">Make it useful</span>
              </article>
            </div>
          </section>

          {/* PROJECTS */}
          <section className="uses-section">
            <div className="uses-section-heading">
              <div>
                <span className="uses-section-kicker">TOOLS IN ACTION</span>
                <h2>What I'm building</h2>
                <p>
                  These projects bring together my interests in education,
                  developer communities, and AI.
                </p>
              </div>
              <a
                href="https://github.com/ajay-dhangar"
                className="uses-text-link"
                target="_blank"
                rel="noreferrer"
              >
                More on GitHub <ArrowIcon />
              </a>
            </div>

            <div className="uses-project-grid">
              {projects.map((project) => (
                <article
                  className={`uses-project-card uses-project-${project.accent}`}
                  key={project.name}
                >
                  <div className="uses-project-top">
                    <span className="uses-project-icon">{project.icon}</span>
                    <span className="uses-project-type">{project.type}</span>
                  </div>
                  <h3>{project.name}</h3>
                  <p>{project.description}</p>
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noreferrer"
                    className="uses-project-link"
                  >
                    Explore project <ArrowIcon />
                  </a>
                </article>
              ))}
            </div>
          </section>

          {/* PRINCIPLES */}
          <section className="uses-principles">
            <div className="uses-principles-main">
              <span className="uses-section-kicker">MY PHILOSOPHY</span>
              <h2>
                Tools are powerful.
                <br />
                <span className="uses-gradient-text">Purpose is the point.</span>
              </h2>
              <p>
                I value tools that help me learn faster, build responsibly,
                collaborate openly, and create technology that makes knowledge
                more accessible.
              </p>
              <Link to="/projects" className="uses-button uses-button-primary">
                Explore my work <ArrowIcon />
              </Link>
            </div>
            <div className="uses-principles-list">
              <div><span>01</span><p>Prefer clear, maintainable code.</p><span>↗</span></div>
              <div><span>02</span><p>Learn from official documentation.</p><span>↗</span></div>
              <div><span>03</span><p>Build for real people and real needs.</p><span>↗</span></div>
              <div><span>04</span><p>Share knowledge with the community.</p><span>↗</span></div>
            </div>
          </section>

          {/* FOOTER CTA */}
          <section className="uses-footer-cta">
            <div className="uses-footer-glow" aria-hidden="true" />
            <span className="uses-section-kicker">LET'S CONNECT</span>
            <h2>Have a tool worth exploring?</h2>
            <p>
              I'm always interested in useful developer tools, new ideas,
              open-source collaboration, and better ways to build.
            </p>
            <div className="uses-footer-actions">
              <a
                href="https://www.linkedin.com/in/ajay-dhangar/"
                target="_blank"
                rel="noreferrer"
                className="uses-button uses-button-primary"
              >
                Connect on LinkedIn <ArrowIcon />
              </a>
              <a
                href="https://github.com/ajay-dhangar"
                target="_blank"
                rel="noreferrer"
                className="uses-button uses-button-secondary"
              >
                Follow on GitHub <ArrowIcon />
              </a>
            </div>
          </section>
        </div>
      </main>

      <style>{`
        .uses-page {
          --uses-accent: var(--ifm-color-primary, #2e93e2);
          --uses-accent-rgb: 46, 147, 226;
          --uses-surface: var(--ifm-card-background-color, var(--ifm-background-surface-color));
          --uses-border: var(--ifm-color-emphasis-200);
          --uses-muted: var(--ifm-color-emphasis-600);
          --uses-text: var(--ifm-font-color-base);
          --uses-soft: var(--ifm-color-emphasis-100);
          overflow: hidden;
          color: var(--uses-text);
          padding: 0 0 72px;
        }

        .uses-page * { box-sizing: border-box; }
        .uses-shell { width: min(1160px, calc(100% - 40px)); margin: 0 auto; }

        .uses-hero {
          min-height: 500px;
          position: relative;
          isolation: isolate;
          display: grid;
          grid-template-columns: 1.1fr .9fr;
          align-items: center;
          gap: 32px;
          padding: 72px 0 54px;
        }

        .uses-hero-grid {
          position: absolute;
          inset: 0 -40px;
          z-index: -2;
          opacity: .55;
          background-image:
            linear-gradient(to right, var(--uses-border) 1px, transparent 1px),
            linear-gradient(to bottom, var(--uses-border) 1px, transparent 1px);
          background-size: 42px 42px;
          mask-image: linear-gradient(to bottom, black, transparent 95%);
          pointer-events: none;
        }

        .uses-hero::before {
          content: "";
          position: absolute;
          z-index: -1;
          width: 400px;
          height: 400px;
          left: 8%;
          top: 2%;
          border-radius: 50%;
          background: rgba(var(--uses-accent-rgb), .09);
          filter: blur(85px);
          pointer-events: none;
        }

        .uses-hero-content { position: relative; z-index: 1; }

        .uses-eyebrow, .uses-section-kicker {
          display: inline-flex;
          align-items: center;
          gap: 9px;
          color: var(--uses-accent);
          font-size: 11px;
          font-weight: 800;
          letter-spacing: .15em;
        }

        .uses-live-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #20c997;
          box-shadow: 0 0 12px rgba(32, 201, 151, .65);
        }

        .uses-hero h1 {
          margin: 22px 0 18px;
          font-size: clamp(2.8rem, 5.6vw, 5rem);
          line-height: 1.03;
          letter-spacing: -.065em;
          font-weight: 850;
        }

        .uses-gradient-text {
          color: var(--uses-accent);
          background: linear-gradient(100deg, var(--uses-accent), #8b7bff 70%, #19c9b0);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .uses-hero-description {
          max-width: 590px;
          color: var(--uses-muted);
          font-size: 1.04rem;
          line-height: 1.85;
          margin: 0;
        }

        .uses-hero-actions, .uses-footer-actions {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 12px;
          margin-top: 28px;
        }

        .uses-button {
          display: inline-flex;
          justify-content: center;
          align-items: center;
          gap: 10px;
          min-height: 46px;
          padding: 0 18px;
          border-radius: 12px;
          font-weight: 750;
          font-size: .9rem;
          text-decoration: none !important;
          transition: transform .2s ease, border-color .2s ease, box-shadow .2s ease;
        }

        .uses-button:hover { transform: translateY(-2px); }
        .uses-button-primary {
          color: white !important;
          background: var(--uses-accent);
          border: 1px solid var(--uses-accent);
          box-shadow: 0 8px 24px rgba(var(--uses-accent-rgb), .22);
        }
        .uses-button-primary:hover { box-shadow: 0 12px 30px rgba(var(--uses-accent-rgb), .3); }
        .uses-button-secondary {
          color: var(--uses-text) !important;
          background: var(--uses-surface);
          border: 1px solid var(--uses-border);
        }
        .uses-button-secondary:hover { border-color: var(--uses-accent); }

        .uses-hero-meta {
          display: flex;
          flex-wrap: wrap;
          gap: 18px;
          margin-top: 30px;
          color: var(--uses-muted);
          font-size: .8rem;
        }
        .uses-hero-meta > span { display: inline-flex; gap: 7px; align-items: center; }
        .uses-meta-symbol { color: var(--uses-accent); font-weight: 800; }

        .uses-hero-art {
          min-width: 0;
          min-height: 340px;
          position: relative;
          display: grid;
          place-items: center;
          perspective: 1000px;
        }

        .uses-orbit {
          position: absolute;
          width: 310px;
          height: 310px;
          border: 1px solid rgba(var(--uses-accent-rgb), .25);
          border-radius: 50%;
          transform: rotateX(63deg) rotateZ(-22deg);
        }
        .uses-orbit-two {
          width: 390px;
          height: 390px;
          border-color: var(--uses-border);
          transform: rotateX(63deg) rotateZ(35deg);
        }

        .uses-terminal {
          position: relative;
          z-index: 1;
          width: min(100%, 400px);
          overflow: hidden;
          border: 1px solid rgba(var(--uses-accent-rgb), .32);
          border-radius: 17px;
          background: var(--ifm-background-surface-color);
          box-shadow: 0 30px 80px rgba(0, 0, 0, .15), 0 0 50px rgba(var(--uses-accent-rgb), .08);
          transform: rotateY(-5deg) rotateX(3deg);
        }

        .uses-terminal-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 13px 15px;
          border-bottom: 1px solid var(--uses-border);
          color: var(--uses-muted);
          font: 11px/1.4 var(--ifm-font-family-monospace);
        }
        .uses-terminal-dots { display: flex; gap: 5px; }
        .uses-terminal-dots i { width: 7px; height: 7px; border-radius: 50%; background: #fa6a65; }
        .uses-terminal-dots i:nth-child(2) { background: #f6c453; }
        .uses-terminal-dots i:nth-child(3) { background: #39c98b; }

        .uses-terminal-body {
          padding: 20px 18px;
          font: 12px/1.65 var(--ifm-font-family-monospace);
          color: var(--uses-text);
        }
        .uses-terminal-body p { margin: 0 0 3px; white-space: pre; }
        .uses-code-muted { color: var(--uses-muted); opacity: .65; }
        .uses-code-purple { color: #b18cff; }
        .uses-code-green { color: #2ebd85; }
        .uses-code-orange { color: #e6a34b; }
        .uses-terminal-prompt { margin-top: 17px !important; padding-top: 13px; border-top: 1px solid var(--uses-border); }
        .uses-terminal-prompt > span { color: #2ebd85; }
        .uses-terminal-prompt i { display: inline-block; width: 6px; height: 13px; margin-left: 4px; vertical-align: -2px; background: var(--uses-accent); animation: usesBlink 1s steps(2, start) infinite; }

        .uses-floating-chip {
          position: absolute;
          z-index: 2;
          padding: 10px 13px;
          border: 1px solid var(--uses-border);
          border-radius: 11px;
          background: var(--uses-surface);
          box-shadow: 0 10px 35px rgba(0, 0, 0, .1);
          font-size: .78rem;
          font-weight: 750;
        }
        .uses-chip-top { top: 30px; right: 0; color: var(--uses-accent); }
        .uses-chip-bottom { bottom: 26px; left: -3px; color: #2ebd85; }

        .uses-stats {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          align-items: center;
          padding: 25px 30px;
          border: 1px solid var(--uses-border);
          border-radius: 18px;
          background: var(--uses-surface);
          box-shadow: 0 12px 40px rgba(0, 0, 0, .025);
        }
        .uses-stat { display: flex; flex-direction: column; gap: 5px; align-items: center; text-align: center; }
        .uses-stat-number { font-size: 1.8rem; line-height: 1.2; font-weight: 850; letter-spacing: -.04em; }
        .uses-stat-label { color: var(--uses-muted); font-size: .78rem; }
        .uses-stat-divider { width: 1px; height: 38px; justify-self: center; background: var(--uses-border); }

        .uses-section { padding-top: 92px; scroll-margin-top: 30px; }
        .uses-section-heading {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          gap: 24px;
          margin-bottom: 28px;
        }
        .uses-section-heading h2, .uses-principles h2, .uses-footer-cta h2 {
          margin: 12px 0 9px;
          font-size: clamp(1.8rem, 3.4vw, 2.7rem);
          line-height: 1.15;
          font-weight: 850;
          letter-spacing: -.045em;
        }
        .uses-section-heading p {
          max-width: 660px;
          margin: 0;
          color: var(--uses-muted);
          line-height: 1.75;
          font-size: .94rem;
        }
        .uses-result-count { flex-shrink: 0; color: var(--uses-muted); font-size: .8rem; padding-bottom: 5px; }

        .uses-controls { display: flex; align-items: center; gap: 18px; flex-wrap: wrap; }
        .uses-search {
          min-width: 240px;
          flex: 1;
          display: flex;
          align-items: center;
          gap: 11px;
          padding: 0 14px;
          min-height: 48px;
          border: 1px solid var(--uses-border);
          border-radius: 12px;
          background: var(--uses-surface);
          color: var(--uses-muted);
          transition: border-color .2s ease, box-shadow .2s ease;
        }
        .uses-search:focus-within { border-color: var(--uses-accent); box-shadow: 0 0 0 3px rgba(var(--uses-accent-rgb), .1); }
        .uses-search input { flex: 1; width: 100%; min-width: 0; border: 0; outline: 0; color: var(--uses-text); background: transparent; font-size: .88rem; }
        .uses-search input::placeholder { color: var(--uses-muted); opacity: .8; }
        .uses-search input::-webkit-search-cancel-button { display: none; }
        .uses-clear-search { border: 0; background: transparent; color: var(--uses-muted); font-size: 1.35rem; cursor: pointer; }
        .uses-toggle { display: inline-flex; align-items: center; gap: 9px; cursor: pointer; font-size: .82rem; color: var(--uses-muted); }
        .uses-toggle input { position: absolute; opacity: 0; pointer-events: none; }
        .uses-toggle-track { width: 34px; height: 19px; padding: 2px; display: flex; align-items: center; border-radius: 20px; background: var(--uses-border); transition: background .2s ease; }
        .uses-toggle-track span { display: block; width: 15px; height: 15px; border-radius: 50%; background: white; transition: transform .2s ease; }
        .uses-toggle input:checked + .uses-toggle-track { background: var(--uses-accent); }
        .uses-toggle input:checked + .uses-toggle-track span { transform: translateX(15px); }
        .uses-toggle input:focus-visible + .uses-toggle-track { outline: 2px solid var(--uses-accent); outline-offset: 3px; }

        .uses-filters { display: flex; flex-wrap: wrap; gap: 8px; margin: 19px 0 25px; }
        .uses-filter {
          min-height: 36px;
          padding: 0 13px;
          border: 1px solid var(--uses-border);
          border-radius: 9px;
          background: transparent;
          color: var(--uses-muted);
          cursor: pointer;
          font-size: .79rem;
          font-weight: 650;
          transition: color .2s ease, background .2s ease, border-color .2s ease;
        }
        .uses-filter:hover { border-color: var(--uses-accent); color: var(--uses-accent); }
        .uses-filter.is-active { background: rgba(var(--uses-accent-rgb), .1); color: var(--uses-accent); border-color: rgba(var(--uses-accent-rgb), .5); }

        .uses-tool-grid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 16px; }
        .uses-tool-card {
          display: flex;
          flex-direction: column;
          min-width: 0;
          padding: 21px;
          border: 1px solid var(--uses-border);
          border-radius: 16px;
          background: var(--uses-surface);
          transition: transform .22s ease, border-color .22s ease, box-shadow .22s ease;
        }
        .uses-tool-card:hover { transform: translateY(-4px); border-color: rgba(var(--uses-accent-rgb), .55); box-shadow: 0 14px 36px rgba(0, 0, 0, .055); }
        .uses-tool-card-top { display: flex; align-items: flex-start; justify-content: space-between; gap: 10px; margin-bottom: 20px; }
        .uses-tool-icon {
          display: grid;
          place-items: center;
          width: 44px;
          height: 44px;
          flex-shrink: 0;
          border: 1px solid rgba(var(--uses-accent-rgb), .22);
          border-radius: 12px;
          background: rgba(var(--uses-accent-rgb), .08);
          color: var(--uses-accent);
          font-size: 1.15rem;
          font-weight: 850;
        }
        .uses-status { display: inline-flex; align-items: center; gap: 6px; padding: 5px 8px; border-radius: 7px; background: var(--uses-soft); color: var(--uses-muted); font-size: .65rem; font-weight: 750; white-space: nowrap; }
        .uses-status > span { width: 6px; height: 6px; border-radius: 50%; background: #9b9b9b; }
        .uses-status-daily-driver > span { background: #22b983; }
        .uses-status-project-tool > span { background: #e6a23c; }
        .uses-status-exploring > span { background: #8b7bff; }
        .uses-tool-category { margin-bottom: 6px; color: var(--uses-accent); font-size: .7rem; font-weight: 800; letter-spacing: .05em; text-transform: uppercase; }
        .uses-tool-card h3 { margin: 0 0 9px; font-size: 1.16rem; letter-spacing: -.02em; }
        .uses-tool-description { min-height: 74px; margin: 0 0 19px; color: var(--uses-muted); font-size: .84rem; line-height: 1.75; }
        .uses-purpose { padding: 12px; border-radius: 10px; background: var(--uses-soft); }
        .uses-purpose > span { color: var(--uses-muted); font-size: .62rem; font-weight: 850; letter-spacing: .12em; }
        .uses-purpose p { margin: 4px 0 0; font-size: .78rem; font-weight: 700; }
        .uses-tags { display: flex; flex-wrap: wrap; gap: 6px; margin-top: 13px; }
        .uses-tags span { padding: 4px 7px; border: 1px solid var(--uses-border); border-radius: 6px; color: var(--uses-muted); font-size: .65rem; }
        .uses-tool-link, .uses-text-link, .uses-project-link {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          color: var(--uses-accent);
          font-size: .8rem;
          font-weight: 800;
          text-decoration: none !important;
        }
        .uses-tool-link { margin-top: 19px; padding-top: 13px; border-top: 1px solid var(--uses-border); }
        .uses-tool-link:hover, .uses-text-link:hover, .uses-project-link:hover { gap: 11px; }
        .uses-tool-link, .uses-text-link, .uses-project-link { transition: gap .2s ease; }

        .uses-empty { padding: 60px 20px; text-align: center; border: 1px dashed var(--uses-border); border-radius: 16px; }
        .uses-empty > span { font-size: 2rem; color: var(--uses-accent); }
        .uses-empty h3 { margin: 12px 0 6px; }
        .uses-empty p { margin: 0 0 18px; color: var(--uses-muted); }

        .uses-workflow-grid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 16px; }
        .uses-workflow-card { position: relative; overflow: hidden; padding: 25px; border: 1px solid var(--uses-border); border-radius: 16px; background: var(--uses-surface); }
        .uses-workflow-number { position: absolute; top: 14px; right: 17px; color: var(--uses-border); font-size: 2.7rem; font-weight: 900; letter-spacing: -.08em; }
        .uses-workflow-icon { display: grid; place-items: center; width: 46px; height: 46px; margin-bottom: 22px; border-radius: 13px; background: rgba(var(--uses-accent-rgb), .1); color: var(--uses-accent); font-size: 1.3rem; font-weight: 850; }
        .uses-workflow-card h3 { margin: 0 0 10px; font-size: 1.15rem; }
        .uses-workflow-card p { min-height: 83px; margin: 0; color: var(--uses-muted); font-size: .86rem; line-height: 1.8; }
        .uses-workflow-tag { display: inline-block; margin-top: 18px; padding: 6px 9px; border-radius: 7px; background: var(--uses-soft); color: var(--uses-muted); font-size: .7rem; font-weight: 750; }

        .uses-project-grid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 16px; }
        .uses-project-card { padding: 25px; border: 1px solid var(--uses-border); border-radius: 16px; background: var(--uses-surface); transition: transform .2s ease, border-color .2s ease; }
        .uses-project-card:hover { transform: translateY(-3px); border-color: rgba(var(--uses-accent-rgb), .45); }
        .uses-project-top { display: flex; align-items: center; justify-content: space-between; gap: 10px; margin-bottom: 22px; }
        .uses-project-icon { display: grid; place-items: center; width: 46px; height: 46px; border-radius: 13px; background: rgba(var(--uses-accent-rgb), .1); color: var(--uses-accent); font-size: 1.4rem; font-weight: 850; }
        .uses-project-type { color: var(--uses-muted); font-size: .72rem; font-weight: 700; }
        .uses-project-card h3 { margin: 0 0 10px; font-size: 1.2rem; }
        .uses-project-card p { min-height: 84px; margin: 0 0 18px; color: var(--uses-muted); font-size: .85rem; line-height: 1.8; }
        .uses-project-purple .uses-project-icon { color: #9b7bff; background: rgba(139, 123, 255, .12); }
        .uses-project-green .uses-project-icon { color: #20b986; background: rgba(32, 185, 134, .12); }

        .uses-principles { display: grid; grid-template-columns: 1fr .85fr; gap: 60px; align-items: center; margin-top: 100px; padding: 42px; border: 1px solid var(--uses-border); border-radius: 22px; background: var(--uses-surface); }
        .uses-principles-main h2 { margin-top: 15px; }
        .uses-principles-main > p { max-width: 500px; margin: 15px 0 23px; color: var(--uses-muted); font-size: .92rem; line-height: 1.85; }
        .uses-principles-list { border-top: 1px solid var(--uses-border); }
        .uses-principles-list > div { display: grid; grid-template-columns: 34px 1fr 15px; align-items: center; gap: 10px; padding: 17px 0; border-bottom: 1px solid var(--uses-border); }
        .uses-principles-list > div > span:first-child { color: var(--uses-accent); font: 750 .73rem var(--ifm-font-family-monospace); }
        .uses-principles-list p { margin: 0; font-size: .84rem; font-weight: 650; }
        .uses-principles-list > div > span:last-child { color: var(--uses-muted); }

        .uses-footer-cta { position: relative; isolation: isolate; overflow: hidden; margin-top: 80px; padding: 55px 24px; border: 1px solid rgba(var(--uses-accent-rgb), .25); border-radius: 22px; background: var(--uses-surface); text-align: center; }
        .uses-footer-glow { position: absolute; z-index: -1; width: 380px; height: 180px; left: calc(50% - 190px); top: -100px; border-radius: 50%; background: rgba(var(--uses-accent-rgb), .2); filter: blur(70px); }
        .uses-footer-cta h2 { margin-top: 14px; }
        .uses-footer-cta > p { max-width: 560px; margin: 0 auto; color: var(--uses-muted); font-size: .92rem; line-height: 1.8; }
        .uses-footer-actions { justify-content: center; }

        @keyframes usesBlink { to { visibility: hidden; } }

        @media (max-width: 996px) {
          .uses-hero { grid-template-columns: 1fr; padding-top: 60px; gap: 10px; }
          .uses-hero-content { max-width: 720px; }
          .uses-hero-art { min-height: 350px; margin-top: 15px; }
          .uses-tool-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
          .uses-principles { grid-template-columns: 1fr; gap: 35px; }
        }

        @media (max-width: 640px) {
          .uses-shell { width: min(100% - 28px, 1160px); }
          .uses-page { padding-bottom: 40px; }
          .uses-hero { padding: 45px 0 30px; min-height: 0; }
          .uses-hero h1 { font-size: clamp(2.65rem, 12vw, 4rem); }
          .uses-hero-description { font-size: .95rem; }
          .uses-hero-meta { gap: 11px; }
          .uses-hero-art { min-height: 300px; }
          .uses-terminal { transform: none; }
          .uses-terminal-body { padding: 17px 11px; font-size: 10px; }
          .uses-orbit { width: 250px; height: 250px; }
          .uses-orbit-two { width: 310px; height: 310px; }
          .uses-chip-top { right: -2px; top: 10px; }
          .uses-chip-bottom { bottom: 6px; left: -2px; }
          .uses-stats { grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 22px 8px; padding: 23px 10px; }
          .uses-stat-divider { display: none; }
          .uses-stat-number { font-size: 1.55rem; }
          .uses-stat-label { font-size: .72rem; }
          .uses-section { padding-top: 65px; }
          .uses-section-heading { align-items: flex-start; flex-direction: column; gap: 12px; }
          .uses-result-count { padding: 0; }
          .uses-controls { align-items: stretch; flex-direction: column; gap: 14px; }
          .uses-search { min-height: 46px; }
          .uses-filters { flex-wrap: nowrap; overflow-x: auto; padding-bottom: 8px; scrollbar-width: thin; }
          .uses-filter { flex-shrink: 0; }
          .uses-tool-grid, .uses-workflow-grid, .uses-project-grid { grid-template-columns: 1fr; }
          .uses-tool-description, .uses-workflow-card p, .uses-project-card p { min-height: 0; }
          .uses-workflow-card, .uses-project-card { padding: 22px; }
          .uses-principles { margin-top: 65px; padding: 25px 20px; }
          .uses-footer-cta { margin-top: 60px; padding: 40px 18px; }
          .uses-footer-actions { align-items: stretch; flex-direction: column; }
          .uses-footer-actions .uses-button { width: 100%; }
        }

        @media (prefers-reduced-motion: reduce) {
          .uses-page *, .uses-page *::before, .uses-page *::after {
            animation-duration: .01ms !important;
            animation-iteration-count: 1 !important;
            scroll-behavior: auto !important;
            transition-duration: .01ms !important;
          }
        }
      `}</style>
    </Layout>
  );
}
