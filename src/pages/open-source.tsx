
import React, { useMemo, useState } from "react";
import Layout from "@theme/Layout";
import Head from "@docusaurus/Head";
import Link from "@docusaurus/Link";

type ProjectCategory = "All" | "Education" | "Algorithms" | "AI";
type ProjectStatus = "Active project" | "Learning project";

type OpenSourceProject = {
  name: string;
  slug: string;
  description: string;
  category: Exclude<ProjectCategory, "All">;
  status: ProjectStatus;
  stack: string[];
  repository: string;
  website: string;
  initials: string;
  accent: "blue" | "purple" | "green";
  highlights: string[];
};

const projects: OpenSourceProject[] = [
  {
    name: "CodeHarborHub",
    slug: "codeharborhub",
    description:
      "An open-source developer education platform focused on making programming knowledge, tutorials, and learning resources accessible to more people.",
    category: "Education",
    status: "Active project",
    stack: ["Docusaurus", "React", "MDX", "TypeScript"],
    repository:
      "https://github.com/CodeHarborHub/codeharborhub.github.io",
    website: "https://codeharborhub.github.io/",
    initials: "CH",
    accent: "blue",
    highlights: [
      "Developer tutorials and documentation",
      "Community-driven learning resources",
      "Open-source educational content",
    ],
  },
  {
    name: "Algo",
    slug: "algo",
    description:
      "A learning project for exploring data structures, algorithms, problem-solving patterns, and computer science concepts through documentation and practice.",
    category: "Algorithms",
    status: "Active project",
    stack: ["Docusaurus", "React", "JavaScript", "MDX"],
    repository: "https://github.com/ajay-dhangar/algo",
    website: "https://ajay-dhangar.github.io/algo/",
    initials: "A",
    accent: "purple",
    highlights: [
      "DSA learning resources",
      "Roadmaps and practice-oriented content",
      "Community contributions",
    ],
  },
  {
    name: "AI Buddies",
    slug: "ai-buddies",
    description:
      "An AI-focused project exploring how helpful, approachable tools and interactive learning experiences can support developers and curious learners.",
    category: "AI",
    status: "Learning project",
    stack: ["React", "Docusaurus", "JavaScript", "AI"],
    repository: "https://github.com/ajay-dhangar/ai-buddies",
    website: "https://ajay-dhangar.github.io/ai-buddies/",
    initials: "AI",
    accent: "green",
    highlights: [
      "AI product exploration",
      "Interactive web experience",
      "Experimentation with useful developer tools",
    ],
  },
];

const categories: ProjectCategory[] = [
  "All",
  "Education",
  "Algorithms",
  "AI",
];

const githubProfile = "https://github.com/ajay-dhangar";
const organizationProfile = "https://github.com/CodeHarborHub";
const linkedinProfile = "https://www.linkedin.com/in/ajay-dhangar/";

function ExternalArrow({ diagonal = true }: { diagonal?: boolean }) {
  return (
    <svg
      aria-hidden="true"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {diagonal ? (
        <path d="M7 17 17 7M7 7h10v10" />
      ) : (
        <path d="M5 12h14m-6-6 6 6-6 6" />
      )}
    </svg>
  );
}

function GitHubIcon({ size = 20 }: { size?: number }) {
  return (
    <svg
      aria-hidden="true"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.56.1.76-.24.76-.54v-2.1c-3.1.68-3.76-1.32-3.76-1.32-.51-1.3-1.25-1.65-1.25-1.65-1.02-.7.08-.69.08-.69 1.13.08 1.72 1.16 1.72 1.16 1 1.71 2.63 1.22 3.27.93.1-.72.39-1.22.71-1.5-2.48-.28-5.09-1.24-5.09-5.52 0-1.22.44-2.22 1.16-3-.12-.29-.5-1.43.11-2.98 0 0 .95-.3 3.05 1.15a10.6 10.6 0 0 1 5.55 0c2.1-1.45 3.05-1.15 3.05-1.15.61 1.55.23 2.69.11 2.98.72.78 1.16 1.78 1.16 3 0 4.29-2.62 5.23-5.12 5.51.4.35.76 1.02.76 2.06v3.12c0 .3.2.65.77.54A11.1 11.1 0 0 0 12 .9Z" />
    </svg>
  );
}

function CodeIcon() {
  return (
    <svg
      aria-hidden="true"
      width="27"
      height="27"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 17-5-5 5-5" />
      <path d="m16 7 5 5-5 5" />
      <path d="m14 4-4 16" />
    </svg>
  );
}

function ProjectCard({ project }: { project: OpenSourceProject }) {
  return (
    <article className="oss-project-card">
      <div className="oss-project-card__top">
        <div
          className={`oss-project-logo oss-project-logo--${project.accent}`}
          aria-hidden="true"
        >
          {project.initials}
        </div>

        <span className="oss-project-category">{project.category}</span>
      </div>

      <div className="oss-project-card__body">
        <div className="oss-project-title-row">
          <h3>{project.name}</h3>
          <span
            className={`oss-status-dot ${
              project.status === "Active project"
                ? "oss-status-dot--active"
                : ""
            }`}
            title={project.status}
            aria-label={project.status}
          />
        </div>

        <p className="oss-project-description">{project.description}</p>

        <div className="oss-project-highlights">
          {project.highlights.map((highlight) => (
            <div key={highlight} className="oss-project-highlight">
              <span aria-hidden="true">↗</span>
              {highlight}
            </div>
          ))}
        </div>

        <div className="oss-stack">
          {project.stack.map((technology) => (
            <span key={technology}>{technology}</span>
          ))}
        </div>
      </div>

      <div className="oss-project-card__footer">
        <a
          href={project.repository}
          target="_blank"
          rel="noreferrer"
          className="oss-repo-link"
        >
          <GitHubIcon size={17} />
          Repository
          <ExternalArrow />
        </a>

        <a
          href={project.website}
          target="_blank"
          rel="noreferrer"
          className="oss-live-link"
        >
          Live project
          <ExternalArrow />
        </a>
      </div>
    </article>
  );
}

export default function OpenSourcePage(): JSX.Element {
  const [activeCategory, setActiveCategory] =
    useState<ProjectCategory>("All");

  const [searchQuery, setSearchQuery] = useState("");

  const filteredProjects = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();

    return projects.filter((project) => {
      const matchesCategory =
        activeCategory === "All" || project.category === activeCategory;

      const searchableText = [
        project.name,
        project.description,
        project.category,
        ...project.stack,
        ...project.highlights,
      ]
        .join(" ")
        .toLowerCase();

      return matchesCategory && (!query || searchableText.includes(query));
    });
  }, [activeCategory, searchQuery]);

  return (
    <Layout
      title="Open Source"
      description="Explore Ajay Dhangar's open-source projects, developer education work, algorithm learning resources, and AI-focused experiments."
    >
      <Head>
        <meta property="og:title" content="Open Source | Ajay Dhangar" />
        <meta
          property="og:description"
          content="Explore open-source projects, developer education, algorithms, and AI experiments by Ajay Dhangar."
        />
        <meta property="og:type" content="website" />
        <meta name="robots" content="index, follow" />
      </Head>

      <main className="oss-page">
        <div className="oss-ambient-glow" aria-hidden="true" />

        {/* Hero */}
        <section className="oss-hero">
          <div className="oss-container">
            <div className="oss-eyebrow">
              <span className="oss-eyebrow-pulse" />
              OPEN SOURCE · SHARED KNOWLEDGE · COMMUNITY
            </div>

            <div className="oss-hero-grid">
              <div className="oss-hero-copy">
                <h1>
                  Building in public.
                  <br />
                  <span>Growing together.</span>
                </h1>

                <p className="oss-hero-description">
                  I believe useful software and learning resources should be
                  accessible to more people. Through open-source projects, I
                  explore ideas, build developer tools, improve documentation,
                  and learn alongside the community.
                </p>

                <div className="oss-hero-actions">
                  <a
                    href={githubProfile}
                    target="_blank"
                    rel="noreferrer"
                    className="oss-button oss-button--primary"
                  >
                    <GitHubIcon />
                    Explore my GitHub
                    <ExternalArrow />
                  </a>

                  <a
                    href={organizationProfile}
                    target="_blank"
                    rel="noreferrer"
                    className="oss-button oss-button--secondary"
                  >
                    Visit CodeHarborHub
                    <ExternalArrow />
                  </a>
                </div>

                <div className="oss-hero-note">
                  <span className="oss-hero-note__icon">
                    <CodeIcon />
                  </span>
                  <span>
                    <strong>Learn. Build. Share.</strong>
                    <small>One contribution at a time.</small>
                  </span>
                </div>
              </div>

              <div className="oss-hero-visual">
                <div className="oss-terminal">
                  <div className="oss-terminal-header">
                    <div className="oss-terminal-dots">
                      <span />
                      <span />
                      <span />
                    </div>
                    <span className="oss-terminal-filename">
                      open-source.ts
                    </span>
                    <span className="oss-terminal-badge">PUBLIC</span>
                  </div>

                  <div className="oss-terminal-content">
                    <div className="oss-code-line">
                      <span className="oss-line-number">01</span>
                      <span>
                        <i>const</i> mission = {"{"}
                      </span>
                    </div>

                    <div className="oss-code-line oss-code-line--indent">
                      <span className="oss-line-number">02</span>
                      <span>
                        <b>learn</b>: <em>"every day"</em>,
                      </span>
                    </div>

                    <div className="oss-code-line oss-code-line--indent">
                      <span className="oss-line-number">03</span>
                      <span>
                        <b>build</b>: <em>"useful things"</em>,
                      </span>
                    </div>

                    <div className="oss-code-line oss-code-line--indent">
                      <span className="oss-line-number">04</span>
                      <span>
                        <b>share</b>: <em>"what I learn"</em>,
                      </span>
                    </div>

                    <div className="oss-code-line">
                      <span className="oss-line-number">05</span>
                      <span>{"};"}</span>
                    </div>

                    <div className="oss-terminal-divider" />

                    <div className="oss-code-line">
                      <span className="oss-line-number">06</span>
                      <span>
                        <i>function</i> makeImpact() {"{"}
                      </span>
                    </div>

                    <div className="oss-code-line oss-code-line--indent">
                      <span className="oss-line-number">07</span>
                      <span className="oss-code-green">
                        return community + code;
                      </span>
                    </div>

                    <div className="oss-code-line">
                      <span className="oss-line-number">08</span>
                      <span>{"}"}</span>
                    </div>

                    <div className="oss-terminal-prompt">
                      <span>ajay@opensource</span>
                      <span>~</span>
                      <span className="oss-terminal-cursor" />
                    </div>
                  </div>
                </div>

                <div className="oss-floating-chip oss-floating-chip--top">
                  <span>01</span>
                  <div>
                    <strong>Open knowledge</strong>
                    <small>Learn without barriers</small>
                  </div>
                </div>

                <div className="oss-floating-chip oss-floating-chip--bottom">
                  <span>02</span>
                  <div>
                    <strong>Shared progress</strong>
                    <small>Build with the community</small>
                  </div>
                </div>

                <div className="oss-visual-orbit oss-visual-orbit--one" />
                <div className="oss-visual-orbit oss-visual-orbit--two" />
              </div>
            </div>
          </div>
        </section>

        {/* Focus areas */}
        <section className="oss-focus-strip">
          <div className="oss-container oss-focus-grid">
            <div className="oss-focus-intro">
              <span>MY OPEN-SOURCE FOCUS</span>
              <p>Different projects, one shared purpose.</p>
            </div>

            <div className="oss-focus-item">
              <span className="oss-focus-icon oss-focus-icon--blue">
                <CodeIcon />
              </span>
              <div>
                <strong>Developer Education</strong>
                <p>Tutorials, guides, documentation</p>
              </div>
            </div>

            <div className="oss-focus-item">
              <span className="oss-focus-icon oss-focus-icon--purple">
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m12 3 8 4.5v9L12 21l-8-4.5v-9L12 3Z" />
                  <path d="m4 7.5 8 4.5 8-4.5M12 12v9" />
                </svg>
              </span>
              <div>
                <strong>Computer Science</strong>
                <p>Algorithms and problem-solving</p>
              </div>
            </div>

            <div className="oss-focus-item">
              <span className="oss-focus-icon oss-focus-icon--green">
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 3 4 7v10l8 4 8-4V7l-8-4Z" />
                  <path d="M9 12h6M12 9v6" />
                </svg>
              </span>
              <div>
                <strong>AI Experiments</strong>
                <p>Exploring useful AI experiences</p>
              </div>
            </div>
          </div>
        </section>

        {/* Projects */}
        <section className="oss-projects-section">
          <div className="oss-container">
            <div className="oss-section-heading">
              <div>
                <div className="oss-section-kicker">
                  PROJECTS & CONTRIBUTIONS
                </div>
                <h2>
                  Things I'm <span>building.</span>
                </h2>
                <p>
                  A selection of public projects where I explore ideas, develop
                  web experiences, and share educational resources.
                </p>
              </div>

              <a
                href={githubProfile}
                target="_blank"
                rel="noreferrer"
                className="oss-text-link"
              >
                Browse GitHub <ExternalArrow />
              </a>
            </div>

            <div className="oss-project-controls">
              <div
                className="oss-category-filters"
                role="group"
                aria-label="Filter open-source projects"
              >
                {categories.map((category) => (
                  <button
                    type="button"
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    aria-pressed={activeCategory === category}
                    className={`oss-filter ${
                      activeCategory === category ? "oss-filter--active" : ""
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>

              <label className="oss-search">
                <svg
                  aria-hidden="true"
                  width="17"
                  height="17"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                >
                  <circle cx="11" cy="11" r="7" />
                  <path d="m16 16 4 4" />
                </svg>
                <input
                  type="search"
                  value={searchQuery}
                  onChange={(event) => setSearchQuery(event.target.value)}
                  placeholder="Search projects or tech..."
                  aria-label="Search projects by name, description, or technology"
                />
              </label>
            </div>

            <div className="oss-results-label" aria-live="polite">
              <span className="oss-results-dot" />
              Showing {filteredProjects.length} of {projects.length} projects
            </div>

            {filteredProjects.length > 0 ? (
              <div className="oss-project-grid">
                {filteredProjects.map((project) => (
                  <ProjectCard key={project.slug} project={project} />
                ))}
              </div>
            ) : (
              <div className="oss-empty-state">
                <div className="oss-empty-icon">
                  <CodeIcon />
                </div>
                <h3>No matching projects</h3>
                <p>
                  Try another keyword or choose a different category.
                </p>
                <button
                  type="button"
                  className="oss-button oss-button--secondary"
                  onClick={() => {
                    setActiveCategory("All");
                    setSearchQuery("");
                  }}
                >
                  Clear filters
                </button>
              </div>
            )}
          </div>
        </section>

        {/* How I contribute */}
        <section className="oss-process-section">
          <div className="oss-container">
            <div className="oss-section-heading oss-section-heading--center">
              <div>
                <div className="oss-section-kicker">THE CONTRIBUTION MINDSET</div>
                <h2>
                  Small improvements.
                  <br />
                  <span>Meaningful progress.</span>
                </h2>
                <p>
                  Open source is not just about writing code. It is also about
                  documentation, communication, maintenance, and helping other
                  people participate.
                </p>
              </div>
            </div>

            <div className="oss-process-grid">
              <article className="oss-process-card">
                <span className="oss-process-number">01</span>
                <div className="oss-process-icon oss-process-icon--blue">
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    width="25"
                    height="25"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="11" cy="11" r="7" />
                    <path d="m16 16 4 4M11 7v8M7 11h8" />
                  </svg>
                </div>
                <h3>Explore & understand</h3>
                <p>
                  Read existing code, understand the issue, review project
                  guidelines, and identify a useful improvement.
                </p>
              </article>

              <article className="oss-process-card">
                <span className="oss-process-number">02</span>
                <div className="oss-process-icon oss-process-icon--purple">
                  <CodeIcon />
                </div>
                <h3>Build & improve</h3>
                <p>
                  Make focused changes, write clear documentation, test the
                  result, and keep the solution maintainable.
                </p>
              </article>

              <article className="oss-process-card">
                <span className="oss-process-number">03</span>
                <div className="oss-process-icon oss-process-icon--green">
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    width="25"
                    height="25"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="18" cy="5" r="3" />
                    <circle cx="6" cy="12" r="3" />
                    <circle cx="18" cy="19" r="3" />
                    <path d="m8.7 10.6 6.6-4.2m-6.6 9.2 6.6 3.8" />
                  </svg>
                </div>
                <h3>Share & collaborate</h3>
                <p>
                  Open a pull request, explain the change, welcome feedback,
                  and learn from maintainers and fellow contributors.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* Community */}
        <section className="oss-community-section">
          <div className="oss-container">
            <div className="oss-community-panel">
              <div className="oss-community-copy">
                <div className="oss-section-kicker">
                  COMMUNITY & LEADERSHIP
                </div>
                <h2>
                  Help more people
                  <br />
                  <span>become builders.</span>
                </h2>
                <p>
                  My open-source journey includes building CodeHarborHub,
                  working on Algo, and exploring ways to make technical
                  learning more accessible. I value clear communication,
                  inclusive collaboration, and practical learning experiences.
                </p>

                <a
                  href={organizationProfile}
                  target="_blank"
                  rel="noreferrer"
                  className="oss-button oss-button--primary"
                >
                  Explore the organization <ExternalArrow />
                </a>
              </div>

              <div className="oss-community-visual">
                <div className="oss-community-orbit" />
                <div className="oss-community-node oss-community-node--center">
                  <CodeIcon />
                  <span>OPEN SOURCE</span>
                </div>
                <div className="oss-community-node oss-community-node--one">
                  <span>01</span>
                  <small>Learn</small>
                </div>
                <div className="oss-community-node oss-community-node--two">
                  <span>02</span>
                  <small>Build</small>
                </div>
                <div className="oss-community-node oss-community-node--three">
                  <span>03</span>
                  <small>Share</small>
                </div>
                <div className="oss-community-connect oss-community-connect--one" />
                <div className="oss-community-connect oss-community-connect--two" />
                <div className="oss-community-connect oss-community-connect--three" />
              </div>
            </div>
          </div>
        </section>

        {/* Contribution opportunities */}
        <section className="oss-contribute-section">
          <div className="oss-container">
            <div className="oss-contribute-panel">
              <div className="oss-contribute-icon">
                <GitHubIcon size={31} />
              </div>

              <div className="oss-contribute-copy">
                <div className="oss-section-kicker">YOUR NEXT CONTRIBUTION</div>
                <h2>Open source works better together.</h2>
                <p>
                  Explore the repositories, read their contribution
                  guidelines, find an issue that matches your skills, and
                  contribute at your own pace.
                </p>
              </div>

              <div className="oss-contribute-actions">
                <a
                  href={organizationProfile}
                  target="_blank"
                  rel="noreferrer"
                  className="oss-button oss-button--primary"
                >
                  Find a repository <ExternalArrow />
                </a>
                <a
                  href={linkedinProfile}
                  target="_blank"
                  rel="noreferrer"
                  className="oss-button oss-button--secondary"
                >
                  Connect with me <ExternalArrow />
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <style>{`
        .oss-page {
          --oss-accent: var(--ifm-color-primary, #2e93e2);
          --oss-border: var(--ifm-color-emphasis-200);
          --oss-muted: var(--ifm-color-emphasis-600);
          --oss-surface: var(--ifm-background-surface-color);
          --oss-page: var(--ifm-background-color);
          position: relative;
          overflow: hidden;
          color: var(--ifm-font-color-base);
          background: var(--oss-page);
        }

        .oss-page * {
          box-sizing: border-box;
        }

        .oss-container {
          width: min(1160px, calc(100% - 48px));
          margin: 0 auto;
        }

        .oss-ambient-glow {
          position: absolute;
          top: -200px;
          right: -150px;
          width: 560px;
          height: 560px;
          pointer-events: none;
          border-radius: 50%;
          background: radial-gradient(
            circle,
            color-mix(in srgb, var(--oss-accent) 14%, transparent),
            transparent 68%
          );
        }

        .oss-hero {
          position: relative;
          padding: 82px 0 85px;
        }

        .oss-eyebrow,
        .oss-section-kicker {
          display: inline-flex;
          align-items: center;
          gap: 9px;
          color: var(--oss-accent);
          font-size: 10px;
          font-weight: 850;
          letter-spacing: 1.7px;
        }

        .oss-eyebrow {
          margin-bottom: 28px;
          padding: 10px 13px;
          border: 1px solid color-mix(
            in srgb,
            var(--oss-accent) 30%,
            transparent
          );
          border-radius: 999px;
          background: color-mix(
            in srgb,
            var(--oss-accent) 6%,
            var(--oss-page)
          );
        }

        .oss-eyebrow-pulse {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: var(--oss-accent);
          box-shadow: 0 0 12px color-mix(
            in srgb,
            var(--oss-accent) 65%,
            transparent
          );
        }

        .oss-hero-grid {
          display: grid;
          grid-template-columns: minmax(0, 1.1fr) minmax(330px, 0.9fr);
          align-items: center;
          gap: 55px;
        }

        .oss-hero-copy h1 {
          margin: 0;
          font-size: clamp(43px, 6.3vw, 76px);
          font-weight: 850;
          letter-spacing: -3.8px;
          line-height: 1.05;
        }

        .oss-hero-copy h1 span,
        .oss-section-heading h2 span,
        .oss-community-copy h2 span {
          color: var(--oss-accent);
        }

        .oss-hero-description {
          max-width: 590px;
          margin: 25px 0 0;
          color: var(--oss-muted);
          font-size: 15px;
          line-height: 1.95;
        }

        .oss-hero-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          margin-top: 28px;
        }

        .oss-button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          min-height: 45px;
          padding: 11px 16px;
          border: 1px solid var(--oss-border);
          border-radius: 10px;
          font-size: 12px;
          font-weight: 750;
          text-decoration: none !important;
          cursor: pointer;
          transition: transform 180ms ease, border-color 180ms ease,
            background 180ms ease;
        }

        .oss-button:hover {
          transform: translateY(-2px);
        }

        .oss-button--primary {
          border-color: var(--oss-accent);
          color: #fff !important;
          background: var(--oss-accent);
          box-shadow: 0 8px 24px color-mix(
            in srgb,
            var(--oss-accent) 22%,
            transparent
          );
        }

        .oss-button--primary:hover {
          color: #fff !important;
          background: color-mix(in srgb, var(--oss-accent) 86%, #000);
        }

        .oss-button--secondary {
          color: var(--ifm-font-color-base) !important;
          background: var(--oss-surface);
        }

        .oss-button--secondary:hover {
          border-color: var(--oss-accent);
        }

        .oss-hero-note {
          display: flex;
          align-items: center;
          gap: 11px;
          margin-top: 27px;
        }

        .oss-hero-note__icon {
          display: grid;
          width: 42px;
          height: 42px;
          place-items: center;
          border: 1px solid var(--oss-border);
          border-radius: 11px;
          color: var(--oss-accent);
          background: var(--oss-surface);
        }

        .oss-hero-note strong,
        .oss-hero-note small {
          display: block;
        }

        .oss-hero-note strong {
          font-size: 12px;
        }

        .oss-hero-note small {
          margin-top: 4px;
          color: var(--oss-muted);
          font-size: 11px;
        }

        .oss-hero-visual {
          position: relative;
          display: flex;
          min-height: 390px;
          align-items: center;
          justify-content: center;
        }

        .oss-terminal {
          position: relative;
          z-index: 2;
          width: min(100%, 430px);
          overflow: hidden;
          border: 1px solid var(--oss-border);
          border-radius: 15px;
          background: var(--oss-surface);
          box-shadow: 0 28px 75px rgba(0, 0, 0, 0.13);
          transform: rotate(-2deg);
        }

        .oss-terminal-header {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 15px 16px;
          border-bottom: 1px solid var(--oss-border);
          background: color-mix(
            in srgb,
            var(--ifm-color-emphasis-100) 65%,
            var(--oss-surface)
          );
        }

        .oss-terminal-dots {
          display: flex;
          gap: 5px;
        }

        .oss-terminal-dots span {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: var(--ifm-color-emphasis-400);
        }

        .oss-terminal-dots span:first-child {
          background: #f87171;
        }

        .oss-terminal-dots span:nth-child(2) {
          background: #fbbf24;
        }

        .oss-terminal-dots span:nth-child(3) {
          background: #34d399;
        }

        .oss-terminal-filename {
          margin-left: 8px;
          color: var(--oss-muted);
          font-family: var(--ifm-font-family-monospace);
          font-size: 10px;
        }

        .oss-terminal-badge {
          margin-left: auto;
          padding: 4px 7px;
          border: 1px solid var(--oss-border);
          border-radius: 5px;
          color: var(--oss-muted);
          font-size: 8px;
          font-weight: 800;
          letter-spacing: 1px;
        }

        .oss-terminal-content {
          padding: 24px 18px 19px;
          font-family: var(--ifm-font-family-monospace);
          font-size: 12px;
          line-height: 2.15;
        }

        .oss-code-line {
          display: flex;
          gap: 18px;
          min-height: 26px;
          white-space: pre;
        }

        .oss-line-number {
          width: 18px;
          flex-shrink: 0;
          color: var(--oss-muted);
          opacity: 0.55;
          text-align: right;
        }

        .oss-code-line i {
          color: var(--oss-accent);
          font-style: normal;
        }

        .oss-code-line b {
          color: #a78bfa;
          font-weight: 600;
        }

        .oss-code-line em {
          color: #22a06b;
          font-style: normal;
        }

        .oss-code-line--indent > span:last-child {
          padding-left: 18px;
        }

        .oss-code-green {
          color: #22a06b;
        }

        .oss-terminal-divider {
          height: 1px;
          margin: 15px 0;
          background: var(--oss-border);
        }

        .oss-terminal-prompt {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-top: 16px;
          padding-top: 12px;
          border-top: 1px solid var(--oss-border);
          color: var(--oss-muted);
          font-size: 10px;
        }

        .oss-terminal-prompt span:first-child {
          color: var(--oss-accent);
        }

        .oss-terminal-cursor {
          width: 7px;
          height: 12px;
          background: var(--oss-accent);
          animation: oss-cursor-blink 1s steps(2, start) infinite;
        }

        .oss-floating-chip {
          position: absolute;
          z-index: 3;
          display: flex;
          align-items: center;
          gap: 11px;
          padding: 12px 15px;
          border: 1px solid var(--oss-border);
          border-radius: 11px;
          background: var(--oss-surface);
          box-shadow: 0 12px 30px rgba(0, 0, 0, 0.10);
        }

        .oss-floating-chip > span {
          display: grid;
          width: 34px;
          height: 34px;
          place-items: center;
          border: 1px solid color-mix(
            in srgb,
            var(--oss-accent) 30%,
            transparent
          );
          border-radius: 9px;
          color: var(--oss-accent);
          background: color-mix(
            in srgb,
            var(--oss-accent) 8%,
            var(--oss-surface)
          );
          font-family: monospace;
          font-size: 10px;
          font-weight: 800;
        }

        .oss-floating-chip strong,
        .oss-floating-chip small {
          display: block;
        }

        .oss-floating-chip strong {
          font-size: 11px;
        }

        .oss-floating-chip small {
          margin-top: 4px;
          color: var(--oss-muted);
          font-size: 9px;
        }

        .oss-floating-chip--top {
          top: 14px;
          right: -12px;
        }

        .oss-floating-chip--bottom {
          bottom: 10px;
          left: -10px;
        }

        .oss-visual-orbit {
          position: absolute;
          border: 1px dashed color-mix(
            in srgb,
            var(--oss-accent) 30%,
            transparent
          );
          border-radius: 50%;
          pointer-events: none;
        }

        .oss-visual-orbit--one {
          width: 330px;
          height: 330px;
        }

        .oss-visual-orbit--two {
          width: 410px;
          height: 410px;
          opacity: 0.5;
        }

        .oss-focus-strip {
          border-top: 1px solid var(--oss-border);
          border-bottom: 1px solid var(--oss-border);
          background: color-mix(
            in srgb,
            var(--ifm-color-emphasis-100) 40%,
            var(--oss-page)
          );
        }

        .oss-focus-grid {
          display: grid;
          grid-template-columns: 1.05fr repeat(3, 1fr);
          align-items: center;
          gap: 23px;
          padding-top: 25px;
          padding-bottom: 25px;
        }

        .oss-focus-intro > span {
          color: var(--oss-muted);
          font-size: 9px;
          font-weight: 850;
          letter-spacing: 1.3px;
        }

        .oss-focus-intro p {
          margin: 7px 0 0;
          font-size: 12px;
          font-weight: 700;
          line-height: 1.6;
        }

        .oss-focus-item {
          display: flex;
          align-items: center;
          gap: 11px;
          min-width: 0;
        }

        .oss-focus-icon {
          display: grid;
          width: 41px;
          height: 41px;
          flex-shrink: 0;
          place-items: center;
          border: 1px solid var(--oss-border);
          border-radius: 11px;
        }

        .oss-focus-icon--blue {
          color: #2e93e2;
          background: rgba(46, 147, 226, 0.09);
        }

        .oss-focus-icon--purple {
          color: #a78bfa;
          background: rgba(139, 92, 246, 0.09);
        }

        .oss-focus-icon--green {
          color: #22a06b;
          background: rgba(16, 185, 129, 0.09);
        }

        .oss-focus-item strong {
          display: block;
          font-size: 11px;
          line-height: 1.5;
        }

        .oss-focus-item p {
          margin: 4px 0 0;
          color: var(--oss-muted);
          font-size: 10px;
          line-height: 1.6;
        }

        .oss-projects-section {
          padding: 94px 0 88px;
        }

        .oss-section-heading {
          display: flex;
          align-items: end;
          justify-content: space-between;
          gap: 30px;
        }

        .oss-section-heading h2,
        .oss-community-copy h2 {
          margin: 13px 0;
          font-size: clamp(31px, 4vw, 47px);
          font-weight: 850;
          letter-spacing: -1.8px;
          line-height: 1.15;
        }

        .oss-section-heading > div > p,
        .oss-community-copy > p {
          max-width: 640px;
          margin: 0;
          color: var(--oss-muted);
          font-size: 13px;
          line-height: 1.9;
        }

        .oss-text-link {
          display: inline-flex;
          align-items: center;
          flex-shrink: 0;
          gap: 9px;
          padding-bottom: 5px;
          color: var(--oss-accent) !important;
          font-size: 12px;
          font-weight: 750;
          text-decoration: none !important;
        }

        .oss-text-link:hover {
          text-decoration: underline !important;
        }

        .oss-project-controls {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
          margin-top: 32px;
        }

        .oss-category-filters {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }

        .oss-filter {
          min-height: 37px;
          padding: 9px 14px;
          border: 1px solid var(--oss-border);
          border-radius: 9px;
          color: var(--oss-muted);
          background: var(--oss-surface);
          font-size: 11px;
          font-weight: 700;
          cursor: pointer;
          transition: all 160ms ease;
        }

        .oss-filter:hover {
          border-color: var(--oss-accent);
          color: var(--oss-accent);
        }

        .oss-filter--active {
          border-color: var(--oss-accent);
          color: #fff;
          background: var(--oss-accent);
        }

        .oss-filter--active:hover {
          color: #fff;
        }

        .oss-search {
          display: flex;
          width: min(100%, 285px);
          min-height: 40px;
          align-items: center;
          gap: 10px;
          padding: 0 12px;
          border: 1px solid var(--oss-border);
          border-radius: 10px;
          color: var(--oss-muted);
          background: var(--oss-surface);
        }

        .oss-search:focus-within {
          border-color: var(--oss-accent);
          box-shadow: 0 0 0 3px color-mix(
            in srgb,
            var(--oss-accent) 12%,
            transparent
          );
        }

        .oss-search input {
          width: 100%;
          min-width: 0;
          padding: 9px 0;
          border: 0;
          outline: none;
          color: var(--ifm-font-color-base);
          background: transparent;
          font: inherit;
          font-size: 11px;
        }

        .oss-search input::placeholder {
          color: var(--oss-muted);
          opacity: 0.8;
        }

        .oss-results-label {
          display: flex;
          align-items: center;
          gap: 9px;
          margin: 23px 0 16px;
          color: var(--oss-muted);
          font-size: 11px;
        }

        .oss-results-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #22a06b;
        }

        .oss-project-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          align-items: stretch;
          gap: 19px;
        }

        .oss-project-card {
          display: flex;
          min-width: 0;
          flex-direction: column;
          overflow: hidden;
          border: 1px solid var(--oss-border);
          border-radius: 15px;
          background: var(--oss-surface);
          transition: transform 180ms ease, border-color 180ms ease,
            box-shadow 180ms ease;
        }

        .oss-project-card:hover {
          transform: translateY(-4px);
          border-color: color-mix(
            in srgb,
            var(--oss-accent) 55%,
            var(--oss-border)
          );
          box-shadow: 0 18px 42px rgba(0, 0, 0, 0.07);
        }

        .oss-project-card__top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          padding: 21px 21px 0;
        }

        .oss-project-logo {
          display: grid;
          width: 49px;
          height: 49px;
          place-items: center;
          border: 1px solid var(--oss-border);
          border-radius: 13px;
          font-size: 13px;
          font-weight: 900;
          letter-spacing: -0.5px;
        }

        .oss-project-logo--blue {
          color: #2e93e2;
          background: rgba(46, 147, 226, 0.10);
        }

        .oss-project-logo--purple {
          color: #a78bfa;
          background: rgba(139, 92, 246, 0.10);
        }

        .oss-project-logo--green {
          color: #22a06b;
          background: rgba(16, 185, 129, 0.10);
        }

        .oss-project-category {
          padding: 6px 9px;
          border: 1px solid var(--oss-border);
          border-radius: 7px;
          color: var(--oss-muted);
          font-size: 9px;
          font-weight: 750;
        }

        .oss-project-card__body {
          display: flex;
          flex: 1;
          flex-direction: column;
          padding: 22px 21px 21px;
        }

        .oss-project-title-row {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .oss-project-title-row h3 {
          margin: 0;
          font-size: 19px;
          font-weight: 850;
          letter-spacing: -0.5px;
        }

        .oss-status-dot {
          width: 7px;
          height: 7px;
          flex-shrink: 0;
          border-radius: 50%;
          background: var(--ifm-color-emphasis-400);
        }

        .oss-status-dot--active {
          background: #22a06b;
          box-shadow: 0 0 0 3px rgba(34, 160, 107, 0.11);
        }

        .oss-project-description {
          min-height: 105px;
          margin: 13px 0 0;
          color: var(--oss-muted);
          font-size: 12px;
          line-height: 1.9;
        }

        .oss-project-highlights {
          display: grid;
          gap: 10px;
          margin: 18px 0 21px;
        }

        .oss-project-highlight {
          display: flex;
          align-items: flex-start;
          gap: 9px;
          color: var(--ifm-font-color-base);
          font-size: 10px;
          line-height: 1.65;
        }

        .oss-project-highlight > span {
          color: var(--oss-accent);
          font-weight: 900;
        }

        .oss-stack {
          display: flex;
          flex-wrap: wrap;
          gap: 7px;
          margin-top: auto;
          padding-top: 5px;
        }

        .oss-stack span {
          padding: 6px 8px;
          border: 1px solid var(--oss-border);
          border-radius: 6px;
          color: var(--oss-muted);
          background: color-mix(
            in srgb,
            var(--ifm-color-emphasis-100) 35%,
            var(--oss-surface)
          );
          font-family: var(--ifm-font-family-monospace);
          font-size: 9px;
        }

        .oss-project-card__footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 10px;
          padding: 15px 20px;
          border-top: 1px solid var(--oss-border);
          background: color-mix(
            in srgb,
            var(--ifm-color-emphasis-100) 25%,
            var(--oss-surface)
          );
        }

        .oss-repo-link,
        .oss-live-link {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          font-size: 10px;
          font-weight: 750;
          text-decoration: none !important;
        }

        .oss-repo-link {
          color: var(--ifm-font-color-base) !important;
        }

        .oss-live-link {
          color: var(--oss-accent) !important;
        }

        .oss-repo-link:hover,
        .oss-live-link:hover {
          text-decoration: underline !important;
        }

        .oss-empty-state {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 55px 20px;
          border: 1px dashed var(--oss-border);
          border-radius: 15px;
          text-align: center;
        }

        .oss-empty-icon {
          display: grid;
          width: 54px;
          height: 54px;
          place-items: center;
          border: 1px solid var(--oss-border);
          border-radius: 15px;
          color: var(--oss-accent);
          background: var(--oss-surface);
        }

        .oss-empty-state h3 {
          margin: 17px 0 8px;
          font-size: 17px;
        }

        .oss-empty-state p {
          margin: 0 0 20px;
          color: var(--oss-muted);
          font-size: 12px;
        }

        .oss-process-section {
          padding: 80px 0 88px;
          border-top: 1px solid var(--oss-border);
          border-bottom: 1px solid var(--oss-border);
          background: color-mix(
            in srgb,
            var(--ifm-color-emphasis-100) 30%,
            var(--oss-page)
          );
        }

        .oss-section-heading--center {
          justify-content: center;
          text-align: center;
        }

        .oss-section-heading--center > div > p {
          max-width: 690px;
          margin-right: auto;
          margin-left: auto;
        }

        .oss-process-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 18px;
          margin-top: 37px;
        }

        .oss-process-card {
          position: relative;
          padding: 26px 24px;
          border: 1px solid var(--oss-border);
          border-radius: 14px;
          background: var(--oss-surface);
        }

        .oss-process-number {
          position: absolute;
          top: 23px;
          right: 23px;
          color: var(--oss-muted);
          font-family: var(--ifm-font-family-monospace);
          font-size: 11px;
          opacity: 0.7;
        }

        .oss-process-icon {
          display: grid;
          width: 49px;
          height: 49px;
          place-items: center;
          border: 1px solid var(--oss-border);
          border-radius: 12px;
        }

        .oss-process-icon--blue {
          color: #2e93e2;
          background: rgba(46, 147, 226, 0.09);
        }

        .oss-process-icon--purple {
          color: #a78bfa;
          background: rgba(139, 92, 246, 0.09);
        }

        .oss-process-icon--green {
          color: #22a06b;
          background: rgba(16, 185, 129, 0.09);
        }

        .oss-process-card h3 {
          margin: 21px 0 10px;
          font-size: 15px;
          font-weight: 800;
        }

        .oss-process-card p {
          margin: 0;
          color: var(--oss-muted);
          font-size: 12px;
          line-height: 1.9;
        }

        .oss-community-section {
          padding: 88px 0;
        }

        .oss-community-panel {
          display: grid;
          grid-template-columns: minmax(0, 1fr) minmax(300px, 0.8fr);
          align-items: center;
          gap: 40px;
          padding: 45px;
          border: 1px solid var(--oss-border);
          border-radius: 19px;
          background: linear-gradient(
            120deg,
            color-mix(in srgb, var(--oss-accent) 7%, var(--oss-surface)),
            var(--oss-surface) 75%
          );
        }

        .oss-community-copy h2 {
          font-size: clamp(31px, 4vw, 43px);
        }

        .oss-community-copy .oss-button {
          margin-top: 25px;
        }

        .oss-community-visual {
          position: relative;
          display: grid;
          min-height: 300px;
          place-items: center;
        }

        .oss-community-orbit {
          position: absolute;
          width: 250px;
          height: 250px;
          border: 1px dashed color-mix(
            in srgb,
            var(--oss-accent) 45%,
            transparent
          );
          border-radius: 50%;
        }

        .oss-community-node {
          position: absolute;
          z-index: 2;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          gap: 6px;
          width: 76px;
          height: 76px;
          border: 1px solid var(--oss-border);
          border-radius: 17px;
          background: var(--oss-surface);
          box-shadow: 0 9px 26px rgba(0, 0, 0, 0.07);
        }

        .oss-community-node--center {
          width: 110px;
          height: 110px;
          gap: 9px;
          border-color: color-mix(
            in srgb,
            var(--oss-accent) 40%,
            var(--oss-border)
          );
          color: var(--oss-accent);
          background: color-mix(
            in srgb,
            var(--oss-accent) 8%,
            var(--oss-surface)
          );
        }

        .oss-community-node--center span {
          font-size: 8px;
          font-weight: 850;
          letter-spacing: 1px;
        }

        .oss-community-node--one {
          top: 9px;
          left: 50%;
          transform: translateX(-50%);
        }

        .oss-community-node--two {
          right: 0;
          bottom: 32px;
        }

        .oss-community-node--three {
          bottom: 32px;
          left: 0;
        }

        .oss-community-node:not(.oss-community-node--center) > span {
          color: var(--oss-accent);
          font-family: var(--ifm-font-family-monospace);
          font-size: 11px;
          font-weight: 850;
        }

        .oss-community-node small {
          color: var(--oss-muted);
          font-size: 10px;
          font-weight: 700;
        }

        .oss-community-connect {
          position: absolute;
          z-index: 1;
          width: 2px;
          height: 65px;
          background: color-mix(
            in srgb,
            var(--oss-accent) 40%,
            transparent
          );
        }

        .oss-community-connect--one {
          top: 73px;
          left: 50%;
          transform: translateX(-50%);
        }

        .oss-community-connect--two {
          right: 83px;
          bottom: 86px;
          transform: rotate(-53deg);
        }

        .oss-community-connect--three {
          bottom: 86px;
          left: 83px;
          transform: rotate(53deg);
        }

        .oss-contribute-section {
          padding: 0 0 82px;
        }

        .oss-contribute-panel {
          display: flex;
          align-items: center;
          gap: 23px;
          padding: 29px;
          border: 1px solid color-mix(
            in srgb,
            var(--oss-accent) 30%,
            var(--oss-border)
          );
          border-radius: 15px;
          background: color-mix(
            in srgb,
            var(--oss-accent) 5%,
            var(--oss-surface)
          );
        }

        .oss-contribute-icon {
          display: grid;
          width: 57px;
          height: 57px;
          flex-shrink: 0;
          place-items: center;
          border: 1px solid var(--oss-border);
          border-radius: 14px;
          color: var(--oss-accent);
          background: var(--oss-surface);
        }

        .oss-contribute-copy {
          flex: 1;
          min-width: 0;
        }

        .oss-contribute-copy h2 {
          margin: 9px 0;
          font-size: 21px;
          font-weight: 850;
          letter-spacing: -0.6px;
        }

        .oss-contribute-copy p {
          max-width: 620px;
          margin: 0;
          color: var(--oss-muted);
          font-size: 11px;
          line-height: 1.85;
        }

        .oss-contribute-actions {
          display: flex;
          flex-shrink: 0;
          flex-direction: column;
          gap: 9px;
        }

        .oss-footer {
          border-top: 1px solid var(--oss-border);
        }

        .oss-footer-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
          padding-top: 23px;
          padding-bottom: 23px;
        }

        .oss-footer-inner > p {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 8px;
          margin: 0;
          color: var(--oss-muted);
          font-size: 10px;
        }

        .oss-footer-inner strong {
          color: var(--ifm-font-color-base);
        }

        .oss-footer-code {
          color: var(--oss-accent);
          font-family: monospace;
          font-weight: 900;
        }

        .oss-footer-separator {
          opacity: 0.5;
        }

        .oss-footer-links {
          display: flex;
          flex-wrap: wrap;
          gap: 18px;
        }

        .oss-footer-links a {
          color: var(--oss-muted);
          font-size: 10px;
          text-decoration: none;
        }

        .oss-footer-links a:hover {
          color: var(--oss-accent);
        }

        @keyframes oss-cursor-blink {
          to {
            visibility: hidden;
          }
        }

        @media (max-width: 1100px) {
          .oss-focus-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .oss-focus-intro {
            grid-column: 1 / -1;
          }

          .oss-project-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .oss-project-description {
            min-height: 85px;
          }

          .oss-contribute-panel {
            flex-wrap: wrap;
          }

          .oss-contribute-copy {
            flex-basis: calc(100% - 90px);
          }

          .oss-contribute-actions {
            width: 100%;
            flex-direction: row;
            flex-wrap: wrap;
            padding-left: 80px;
          }
        }

        @media (max-width: 996px) {
          .oss-hero-grid {
            grid-template-columns: 1fr;
            gap: 35px;
          }

          .oss-hero-copy {
            max-width: 750px;
          }

          .oss-hero-visual {
            min-height: 385px;
          }

          .oss-project-controls {
            align-items: flex-start;
            flex-direction: column;
          }

          .oss-search {
            width: 100%;
          }

          .oss-community-panel {
            grid-template-columns: 1fr;
          }

          .oss-community-visual {
            min-height: 300px;
          }
        }

        @media (max-width: 640px) {
          .oss-container {
            width: min(100% - 32px, 1160px);
          }

          .oss-hero {
            padding: 54px 0 58px;
          }

          .oss-eyebrow {
            margin-bottom: 24px;
            font-size: 8px;
            letter-spacing: 1px;
          }

          .oss-hero-copy h1 {
            font-size: clamp(39px, 11vw, 56px);
            letter-spacing: -2.5px;
          }

          .oss-hero-description {
            font-size: 13px;
          }

          .oss-hero-actions {
            align-items: stretch;
            flex-direction: column;
          }

          .oss-button {
            width: 100%;
          }

          .oss-hero-visual {
            min-height: 320px;
          }

          .oss-terminal {
            width: 100%;
            transform: none;
          }

          .oss-terminal-content {
            padding: 19px 12px;
            font-size: 10px;
          }

          .oss-code-line {
            gap: 10px;
          }

          .oss-code-line--indent > span:last-child {
            padding-left: 9px;
          }

          .oss-floating-chip {
            gap: 8px;
            padding: 9px;
          }

          .oss-floating-chip > span {
            width: 28px;
            height: 28px;
          }

          .oss-floating-chip strong {
            font-size: 9px;
          }

          .oss-floating-chip small {
            font-size: 8px;
          }

          .oss-floating-chip--top {
            top: -2px;
            right: -3px;
          }

          .oss-floating-chip--bottom {
            bottom: -2px;
            left: -3px;
          }

          .oss-visual-orbit--one {
            width: 265px;
            height: 265px;
          }

          .oss-visual-orbit--two {
            width: 305px;
            height: 305px;
          }

          .oss-focus-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }

          .oss-focus-intro {
            grid-column: auto;
          }

          .oss-focus-item {
            padding-bottom: 16px;
            border-bottom: 1px solid var(--oss-border);
          }

          .oss-focus-item:last-child {
            padding-bottom: 0;
            border-bottom: 0;
          }

          .oss-projects-section {
            padding: 65px 0;
          }

          .oss-section-heading {
            align-items: flex-start;
            flex-direction: column;
            gap: 16px;
          }

          .oss-section-heading h2,
          .oss-community-copy h2 {
            font-size: 34px;
            letter-spacing: -1.3px;
          }

          .oss-category-filters {
            gap: 7px;
          }

          .oss-filter {
            padding: 8px 10px;
            font-size: 10px;
          }

          .oss-project-grid {
            grid-template-columns: 1fr;
          }

          .oss-project-description {
            min-height: auto;
          }

          .oss-process-section {
            padding: 65px 0;
          }

          .oss-process-grid {
            grid-template-columns: 1fr;
            gap: 13px;
          }

          .oss-process-card {
            padding: 23px;
          }

          .oss-community-section {
            padding: 65px 0;
          }

          .oss-community-panel {
            gap: 20px;
            padding: 25px 20px;
          }

          .oss-community-visual {
            min-height: 265px;
            transform: scale(0.92);
          }

          .oss-community-orbit {
            width: 225px;
            height: 225px;
          }

          .oss-community-node--two {
            right: -3px;
            bottom: 27px;
          }

          .oss-community-node--three {
            bottom: 27px;
            left: -3px;
          }

          .oss-community-connect--two {
            right: 75px;
            bottom: 78px;
          }

          .oss-community-connect--three {
            bottom: 78px;
            left: 75px;
          }

          .oss-contribute-section {
            padding-bottom: 55px;
          }

          .oss-contribute-panel {
            align-items: flex-start;
            flex-direction: column;
            padding: 23px 19px;
          }

          .oss-contribute-copy {
            flex-basis: auto;
          }

          .oss-contribute-copy h2 {
            font-size: 20px;
          }

          .oss-contribute-actions {
            flex-direction: column;
            padding-left: 0;
          }

          .oss-footer-inner {
            align-items: flex-start;
            flex-direction: column;
          }

          .oss-footer-links {
            gap: 15px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .oss-page *,
          .oss-page *::before,
          .oss-page *::after {
            scroll-behavior: auto !important;
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
    </Layout>
  );
}
