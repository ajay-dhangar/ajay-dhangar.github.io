
import React from "react";
import Layout from "@theme/Layout";
import Head from "@docusaurus/Head";
import Link from "@docusaurus/Link";

type FocusItem = {
  number: string;
  category: string;
  title: string;
  description: string;
  priority: "High focus" | "Ongoing" | "Exploring";
  tags: string[];
  icon: string;
};

const focusItems: FocusItem[] = [
  {
    number: "01",
    category: "OPEN-SOURCE EDUCATION",
    title: "Growing CodeHarborHub",
    description:
      "Improving a developer learning platform with structured tutorials, practical programming resources, documentation, and opportunities for community contributions.",
    priority: "High focus",
    tags: ["EdTech", "Docusaurus", "Community"],
    icon: "⌘",
  },
  {
    number: "02",
    category: "DEVELOPER LEARNING",
    title: "Building Algo",
    description:
      "Working on a learning experience around data structures, algorithms, problem-solving, and collaborative contributions for developers.",
    priority: "Ongoing",
    tags: ["DSA", "Algorithms", "Open source"],
    icon: "⟡",
  },
  {
    number: "03",
    category: "AI & EXPERIMENTATION",
    title: "Exploring AI Buddies",
    description:
      "Developing an AI-focused project and exploring how interactive features can make digital learning and everyday tasks more helpful.",
    priority: "Ongoing",
    tags: ["AI", "React", "Experiments"],
    icon: "✧",
  },
  {
    number: "04",
    category: "CAREER DEVELOPMENT",
    title: "Sharpening engineering skills",
    description:
      "Continuing to strengthen full-stack development, JavaScript and TypeScript, clean code practices, problem-solving, and project-building skills.",
    priority: "Ongoing",
    tags: ["Full stack", "TypeScript", "Problem solving"],
    icon: "</>",
  },
];

const roadmap = [
  {
    step: "01",
    title: "Build consistently",
    description:
      "Make practical improvements to portfolio projects and keep learning through implementation.",
    status: "Current focus",
    icon: "↗",
  },
  {
    step: "02",
    title: "Improve developer experience",
    description:
      "Focus on responsive interfaces, accessible UI, clear documentation, and maintainable code.",
    status: "Ongoing",
    icon: "⌘",
  },
  {
    step: "03",
    title: "Contribute and collaborate",
    description:
      "Help open-source communities grow through useful contributions, project maintenance, and knowledge sharing.",
    status: "Long-term focus",
    icon: "⑂",
  },
  {
    step: "04",
    title: "Grow as an engineer",
    description:
      "Continue preparing for stronger software engineering opportunities through projects, technical practice, and collaboration.",
    status: "Long-term focus",
    icon: "◎",
  },
];

const principles = [
  {
    title: "Build before you overthink",
    description:
      "Turn ideas into small, testable improvements instead of waiting for the perfect plan.",
    number: "01",
  },
  {
    title: "Learn by doing",
    description:
      "Use documentation, experiments, and real projects to develop practical understanding.",
    number: "02",
  },
  {
    title: "Share what you learn",
    description:
      "Make knowledge more accessible through open-source projects and developer resources.",
    number: "03",
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

function CheckIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="18"
      height="18"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="m5 12 4 4L19 6" />
    </svg>
  );
}

export default function NowPage(): React.JSX.Element {
  return (
    <Layout
      title="Now — What I'm Focused On"
      description="Discover what Ajay Dhangar is focused on now: open-source education, CodeHarborHub, Algo, AI Buddies, and continued software engineering growth."
    >
      <Head>
        <meta
          name="keywords"
          content="Ajay Dhangar now, current projects, CodeHarborHub, Algo, AI Buddies, developer journey, open source, full stack development"
        />
        <meta property="og:title" content="Now | Ajay Dhangar" />
        <meta
          property="og:description"
          content="What I'm building, learning, and working toward right now."
        />
        <meta property="og:type" content="website" />
      </Head>

      <main className="now-page">
        <div className="now-shell">
          {/* HERO */}
          <section className="now-hero">
            <div className="now-hero-grid" aria-hidden="true" />

            <div className="now-hero-copy">
              <div className="now-eyebrow">
                <span className="now-pulse" />
                THE CURRENT CHAPTER
              </div>

              <h1>
                What I'm
                <br />
                <span className="now-gradient">focused on now.</span>
              </h1>

              <p className="now-hero-description">
                Building useful things, learning through real projects, and
                contributing to a more accessible developer ecosystem. Here's
                where my attention is going right now.
              </p>

              <div className="now-hero-actions">
                <a href="#current-focus" className="now-button now-button-primary">
                  Explore my focus <ArrowIcon />
                </a>
                <a
                  href="https://github.com/ajay-dhangar"
                  target="_blank"
                  rel="noreferrer"
                  className="now-button now-button-secondary"
                >
                  Follow my work <ArrowIcon />
                </a>
              </div>

              <div className="now-hero-note">
                <span className="now-note-icon">✳</span>
                <span>A living snapshot of my current direction</span>
              </div>
            </div>

            <div className="now-hero-visual" aria-hidden="true">
              <div className="now-visual-orbit now-orbit-outer" />
              <div className="now-visual-orbit now-orbit-inner" />

              <div className="now-focus-console">
                <div className="now-console-header">
                  <div className="now-console-dots">
                    <i /><i /><i />
                  </div>
                  <span>current-focus.json</span>
                  <span className="now-console-live">LIVE</span>
                </div>

                <div className="now-console-code">
                  <p><span className="now-line">01</span> {"{"}</p>
                  <p><span className="now-line">02</span> &nbsp; <span className="now-key">"building"</span>: [</p>
                  <p><span className="now-line">03</span> &nbsp;&nbsp; <span className="now-value">"CodeHarborHub"</span>,</p>
                  <p><span className="now-line">04</span> &nbsp;&nbsp; <span className="now-value">"Algo"</span>,</p>
                  <p><span className="now-line">05</span> &nbsp;&nbsp; <span className="now-value">"AI Buddies"</span></p>
                  <p><span className="now-line">06</span> &nbsp; ],</p>
                  <p><span className="now-line">07</span> &nbsp; <span className="now-key">"mindset"</span>: <span className="now-value">"learn + build"</span>,</p>
                  <p><span className="now-line">08</span> &nbsp; <span className="now-key">"openTo"</span>: <span className="now-bool">"collaboration"</span></p>
                  <p><span className="now-line">09</span> {"}"}</p>
                </div>

                <div className="now-console-footer">
                  <span className="now-console-check"><CheckIcon /></span>
                  <span>One step at a time.</span>
                  <span className="now-console-arrow">↗</span>
                </div>
              </div>

              <div className="now-float-card now-float-one">
                <span className="now-float-symbol">{"</>"}</span>
                <span><strong>Build</strong><small>with purpose</small></span>
              </div>

              <div className="now-float-card now-float-two">
                <span className="now-float-symbol now-float-green">✧</span>
                <span><strong>Learn</strong><small>every day</small></span>
              </div>
            </div>
          </section>

          {/* FOCUS SUMMARY */}
          <section className="now-overview" aria-label="Current priorities">
            <div className="now-overview-item">
              <span className="now-overview-icon">⌘</span>
              <div><strong>Build</strong><span>Useful projects</span></div>
            </div>
            <div className="now-overview-item">
              <span className="now-overview-icon">⟡</span>
              <div><strong>Learn</strong><span>Practical skills</span></div>
            </div>
            <div className="now-overview-item">
              <span className="now-overview-icon">⑂</span>
              <div><strong>Contribute</strong><span>Open source</span></div>
            </div>
            <div className="now-overview-item">
              <span className="now-overview-icon">◎</span>
              <div><strong>Grow</strong><span>As an engineer</span></div>
            </div>
          </section>

          {/* CURRENT FOCUS */}
          <section className="now-section" id="current-focus">
            <div className="now-section-heading">
              <div>
                <span className="now-kicker">WHERE MY ENERGY GOES</span>
                <h2>My current focus</h2>
                <p>
                  A practical mix of project development, technical learning,
                  and community-oriented work.
                </p>
              </div>
              <span className="now-section-index">01 / FOCUS</span>
            </div>

            <div className="now-focus-grid">
              {focusItems.map((item) => (
                <article className="now-focus-card" key={item.number}>
                  <div className="now-focus-card-top">
                    <span className="now-focus-number">{item.number}</span>
                    <span className={`now-priority now-priority-${item.priority.toLowerCase().replace(" ", "-")}`}>
                      <i />
                      {item.priority}
                    </span>
                  </div>

                  <span className="now-focus-icon">{item.icon}</span>
                  <span className="now-focus-category">{item.category}</span>
                  <h3>{item.title}</h3>
                  <p className="now-focus-description">{item.description}</p>

                  <div className="now-focus-tags">
                    {item.tags.map((tag) => <span key={tag}>{tag}</span>)}
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* PROJECT SPOTLIGHTS */}
          <section className="now-section">
            <div className="now-section-heading">
              <div>
                <span className="now-kicker">FROM IDEAS TO IMPLEMENTATION</span>
                <h2>Projects on my radar</h2>
                <p>
                  The projects connecting my interests in web development,
                  education, algorithms, and AI.
                </p>
              </div>
              <Link to="/projects" className="now-inline-link">
                All projects <ArrowIcon />
              </Link>
            </div>

            <div className="now-project-list">
              <article className="now-project">
                <div className="now-project-symbol now-project-blue">CH</div>
                <div className="now-project-content">
                  <div className="now-project-meta">
                    <span>01 / EDUCATION</span>
                    <span className="now-project-status">Active project</span>
                  </div>
                  <h3>CodeHarborHub</h3>
                  <p>
                    Making programming knowledge more accessible through
                    tutorials, structured learning resources, documentation,
                    and community contributions.
                  </p>
                  <div className="now-project-tags">
                    <span>Docusaurus</span><span>MDX</span><span>Open source</span>
                  </div>
                </div>
                <a
                  href="https://codeharborhub.github.io/"
                  className="now-project-open"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Visit CodeHarborHub"
                >
                  <ArrowIcon />
                </a>
              </article>

              <article className="now-project">
                <div className="now-project-symbol now-project-purple">AL</div>
                <div className="now-project-content">
                  <div className="now-project-meta">
                    <span>02 / PROBLEM SOLVING</span>
                    <span className="now-project-status">Active project</span>
                  </div>
                  <h3>Algo</h3>
                  <p>
                    Supporting developers as they learn data structures,
                    algorithms, and problem-solving through a collaborative
                    learning project.
                  </p>
                  <div className="now-project-tags">
                    <span>DSA</span><span>Learning</span><span>Community</span>
                  </div>
                </div>
                <a
                  href="https://ajay-dhangar.github.io/algo/"
                  className="now-project-open"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Visit Algo"
                >
                  <ArrowIcon />
                </a>
              </article>

              <article className="now-project">
                <div className="now-project-symbol now-project-green">AI</div>
                <div className="now-project-content">
                  <div className="now-project-meta">
                    <span>03 / EXPERIMENTATION</span>
                    <span className="now-project-status">In development</span>
                  </div>
                  <h3>AI Buddies</h3>
                  <p>
                    Exploring AI-powered experiences and ways to make digital
                    tools more interactive and helpful.
                  </p>
                  <div className="now-project-tags">
                    <span>AI</span><span>Web development</span><span>Experiments</span>
                  </div>
                </div>
                <a
                  href="https://ajay-dhangar.github.io/ai-buddies/"
                  className="now-project-open"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Visit AI Buddies"
                >
                  <ArrowIcon />
                </a>
              </article>
            </div>
          </section>

          {/* ROADMAP */}
          <section className="now-section">
            <div className="now-section-heading">
              <div>
                <span className="now-kicker">THE DIRECTION</span>
                <h2>What I'm working toward</h2>
                <p>
                  A flexible roadmap for making steady progress without
                  pretending every goal has a fixed deadline.
                </p>
              </div>
              <span className="now-section-index">02 / ROADMAP</span>
            </div>

            <div className="now-roadmap">
              <div className="now-roadmap-line" aria-hidden="true" />
              {roadmap.map((item) => (
                <article className="now-roadmap-item" key={item.step}>
                  <div className="now-roadmap-marker">{item.step}</div>
                  <div className="now-roadmap-content">
                    <div className="now-roadmap-top">
                      <h3>{item.title}</h3>
                      <span>{item.status}</span>
                    </div>
                    <p>{item.description}</p>
                  </div>
                  <span className="now-roadmap-icon">{item.icon}</span>
                </article>
              ))}
            </div>
          </section>

          {/* WORK PRINCIPLES */}
          <section className="now-section">
            <div className="now-section-heading">
              <div>
                <span className="now-kicker">WHAT GUIDES ME</span>
                <h2>Principles over shortcuts</h2>
                <p>
                  The habits I want to bring into every project, contribution,
                  and learning experience.
                </p>
              </div>
            </div>

            <div className="now-principles-grid">
              {principles.map((principle) => (
                <article className="now-principle-card" key={principle.number}>
                  <span>{principle.number}</span>
                  <h3>{principle.title}</h3>
                  <p>{principle.description}</p>
                </article>
              ))}
            </div>
          </section>

          {/* PERSONAL NOTE */}
          <section className="now-note-section">
            <div className="now-note-mark">“</div>
            <div className="now-note-content">
              <span className="now-kicker">A NOTE TO MY FUTURE SELF</span>
              <h2>Progress is built one useful step at a time.</h2>
              <p>
                I don't need to know every answer before I start. I need to
                stay curious, keep building, learn from mistakes, and share
                what I discover along the way.
              </p>
              <span className="now-note-signature">— Ajay Dhangar</span>
            </div>
          </section>

          {/* CONNECT */}
          <section className="now-cta">
            <div className="now-cta-glow" aria-hidden="true" />
            <span className="now-kicker">GOOD THINGS HAPPEN WHEN WE BUILD TOGETHER</span>
            <h2>Working on something interesting?</h2>
            <p>
              I'm open to meaningful conversations around web development,
              AI experiments, learning platforms, and open-source collaboration.
            </p>
            <div className="now-cta-actions">
              <a
                href="https://www.linkedin.com/in/ajay-dhangar/"
                target="_blank"
                rel="noreferrer"
                className="now-button now-button-primary"
              >
                Connect on LinkedIn <ArrowIcon />
              </a>
              <Link to="/contact" className="now-button now-button-secondary">
                Get in touch <ArrowIcon />
              </Link>
            </div>
          </section>

          <footer className="now-page-footer">
            <span>Built with curiosity and a commitment to keep learning.</span>
            <a href="https://github.com/ajay-dhangar" target="_blank" rel="noreferrer">
              Follow the journey <ArrowIcon />
            </a>
          </footer>
        </div>
      </main>

      <style>{`
        .now-page {
          --now-accent: var(--ifm-color-primary, #2e93e2);
          --now-accent-rgb: 46, 147, 226;
          --now-surface: var(--ifm-card-background-color, var(--ifm-background-surface-color));
          --now-border: var(--ifm-color-emphasis-200);
          --now-muted: var(--ifm-color-emphasis-600);
          --now-text: var(--ifm-font-color-base);
          --now-soft: var(--ifm-color-emphasis-100);
          overflow: hidden;
          color: var(--now-text);
          padding-bottom: 55px;
        }

        .now-page * { box-sizing: border-box; }
        .now-shell { width: min(1120px, calc(100% - 40px)); margin: 0 auto; }

        .now-hero {
          display: grid;
          grid-template-columns: 1.08fr .92fr;
          gap: 28px;
          align-items: center;
          min-height: 505px;
          padding: 65px 0 50px;
          position: relative;
          isolation: isolate;
        }

        .now-hero-grid {
          position: absolute;
          inset: 0 -40px;
          z-index: -2;
          background-image:
            linear-gradient(to right, var(--now-border) 1px, transparent 1px),
            linear-gradient(to bottom, var(--now-border) 1px, transparent 1px);
          background-size: 42px 42px;
          opacity: .48;
          mask-image: linear-gradient(to bottom, black, transparent 94%);
          pointer-events: none;
        }

        .now-hero::before {
          content: "";
          position: absolute;
          z-index: -1;
          width: 390px;
          height: 390px;
          top: 0;
          left: 3%;
          border-radius: 50%;
          background: rgba(var(--now-accent-rgb), .1);
          filter: blur(90px);
          pointer-events: none;
        }

        .now-eyebrow, .now-kicker {
          display: inline-flex;
          align-items: center;
          gap: 9px;
          color: var(--now-accent);
          font-size: 10px;
          font-weight: 850;
          letter-spacing: .15em;
          line-height: 1.6;
        }

        .now-pulse {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #20bd89;
          box-shadow: 0 0 13px rgba(32, 189, 137, .7);
        }

        .now-hero h1 {
          margin: 21px 0 17px;
          font-size: clamp(2.8rem, 5.5vw, 4.9rem);
          line-height: 1.03;
          font-weight: 900;
          letter-spacing: -.065em;
        }

        .now-gradient {
          background: linear-gradient(100deg, var(--now-accent), #8a7cff 68%, #1ac7a5);
          color: var(--now-accent);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .now-hero-description {
          max-width: 565px;
          margin: 0;
          color: var(--now-muted);
          font-size: 1rem;
          line-height: 1.9;
        }

        .now-hero-actions, .now-cta-actions {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 12px;
          margin-top: 27px;
        }

        .now-button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          min-height: 46px;
          padding: 0 17px;
          border-radius: 11px;
          font-size: .86rem;
          font-weight: 800;
          text-decoration: none !important;
          transition: transform .2s ease, box-shadow .2s ease, border-color .2s ease;
        }

        .now-button:hover { transform: translateY(-2px); }
        .now-button-primary {
          color: white !important;
          background: var(--now-accent);
          border: 1px solid var(--now-accent);
          box-shadow: 0 8px 22px rgba(var(--now-accent-rgb), .2);
        }
        .now-button-primary:hover { box-shadow: 0 12px 28px rgba(var(--now-accent-rgb), .3); }
        .now-button-secondary {
          color: var(--now-text) !important;
          background: var(--now-surface);
          border: 1px solid var(--now-border);
        }
        .now-button-secondary:hover { border-color: var(--now-accent); }

        .now-hero-note {
          display: flex;
          align-items: center;
          gap: 9px;
          margin-top: 27px;
          color: var(--now-muted);
          font-size: .78rem;
        }
        .now-note-icon { color: var(--now-accent); }

        .now-hero-visual {
          min-width: 0;
          min-height: 340px;
          display: grid;
          place-items: center;
          position: relative;
          perspective: 1000px;
        }

        .now-visual-orbit {
          position: absolute;
          width: 290px;
          height: 290px;
          border: 1px solid rgba(var(--now-accent-rgb), .28);
          border-radius: 50%;
          transform: rotateX(65deg) rotateZ(-28deg);
        }
        .now-orbit-outer { width: 370px; height: 370px; border-color: var(--now-border); transform: rotateX(65deg) rotateZ(30deg); }
        .now-orbit-inner::after {
          content: "";
          position: absolute;
          top: 10%;
          left: 12%;
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: var(--now-accent);
          box-shadow: 0 0 18px rgba(var(--now-accent-rgb), .6);
        }

        .now-focus-console {
          width: min(100%, 395px);
          overflow: hidden;
          position: relative;
          z-index: 1;
          border: 1px solid rgba(var(--now-accent-rgb), .3);
          border-radius: 16px;
          background: var(--ifm-background-surface-color);
          box-shadow: 0 28px 70px rgba(0, 0, 0, .13), 0 0 50px rgba(var(--now-accent-rgb), .08);
          transform: rotateY(-4deg) rotateX(3deg);
        }

        .now-console-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 10px;
          padding: 13px 15px;
          border-bottom: 1px solid var(--now-border);
          color: var(--now-muted);
          font: 10px/1.4 var(--ifm-font-family-monospace);
        }

        .now-console-dots { display: flex; gap: 5px; }
        .now-console-dots i { width: 7px; height: 7px; border-radius: 50%; background: #f56a66; }
        .now-console-dots i:nth-child(2) { background: #efbe48; }
        .now-console-dots i:nth-child(3) { background: #26be84; }
        .now-console-live { color: #20bd89; font-weight: 800; }

        .now-console-code {
          padding: 20px 17px;
          font: 11px/1.8 var(--ifm-font-family-monospace);
        }
        .now-console-code p { margin: 0; white-space: pre; }
        .now-line { display: inline-block; width: 22px; color: var(--now-muted); opacity: .55; }
        .now-key { color: #b18cff; }
        .now-value { color: #29b986; }
        .now-bool { color: #e3a64c; }

        .now-console-footer {
          display: flex;
          align-items: center;
          gap: 9px;
          padding: 12px 15px;
          border-top: 1px solid var(--now-border);
          color: var(--now-muted);
          font-size: .72rem;
        }
        .now-console-check { display: inline-flex; color: #24bd89; }
        .now-console-arrow { margin-left: auto; color: var(--now-accent); }

        .now-float-card {
          display: flex;
          align-items: center;
          gap: 10px;
          position: absolute;
          z-index: 2;
          padding: 10px 13px;
          border: 1px solid var(--now-border);
          border-radius: 12px;
          background: var(--now-surface);
          box-shadow: 0 12px 35px rgba(0, 0, 0, .1);
        }
        .now-float-one { top: 27px; right: -1px; }
        .now-float-two { bottom: 20px; left: -4px; }
        .now-float-symbol { display: grid; place-items: center; width: 33px; height: 33px; border-radius: 9px; background: rgba(var(--now-accent-rgb), .1); color: var(--now-accent); font-weight: 850; }
        .now-float-green { color: #22bd88; background: rgba(34, 189, 136, .1); }
        .now-float-card strong, .now-float-card small { display: block; }
        .now-float-card strong { font-size: .75rem; }
        .now-float-card small { margin-top: 2px; color: var(--now-muted); font-size: .67rem; }

        .now-overview {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          padding: 23px 20px;
          border: 1px solid var(--now-border);
          border-radius: 16px;
          background: var(--now-surface);
        }
        .now-overview-item { display: flex; align-items: center; justify-content: center; gap: 11px; padding: 4px 8px; }
        .now-overview-icon { display: grid; place-items: center; width: 39px; height: 39px; flex-shrink: 0; border-radius: 11px; background: rgba(var(--now-accent-rgb), .1); color: var(--now-accent); font-size: 1.05rem; font-weight: 850; }
        .now-overview-item strong, .now-overview-item div > span { display: block; }
        .now-overview-item strong { font-size: .82rem; }
        .now-overview-item div > span { margin-top: 3px; color: var(--now-muted); font-size: .7rem; }

        .now-section { padding-top: 88px; scroll-margin-top: 28px; }
        .now-section-heading { display: flex; justify-content: space-between; align-items: flex-end; gap: 24px; margin-bottom: 27px; }
        .now-section-heading h2, .now-note-section h2, .now-cta h2 {
          margin: 11px 0 8px;
          font-size: clamp(1.8rem, 3.2vw, 2.65rem);
          line-height: 1.16;
          font-weight: 850;
          letter-spacing: -.045em;
        }
        .now-section-heading p { max-width: 650px; margin: 0; color: var(--now-muted); font-size: .91rem; line-height: 1.8; }
        .now-section-index { flex-shrink: 0; padding-bottom: 4px; color: var(--now-muted); font: 750 .68rem var(--ifm-font-family-monospace); letter-spacing: .06em; }
        .now-inline-link { display: inline-flex; align-items: center; gap: 8px; color: var(--now-accent); font-size: .81rem; font-weight: 800; text-decoration: none !important; white-space: nowrap; }

        .now-focus-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 16px; }
        .now-focus-card { padding: 24px; border: 1px solid var(--now-border); border-radius: 16px; background: var(--now-surface); transition: transform .2s ease, border-color .2s ease, box-shadow .2s ease; }
        .now-focus-card:hover { transform: translateY(-3px); border-color: rgba(var(--now-accent-rgb), .5); box-shadow: 0 12px 35px rgba(0, 0, 0, .045); }
        .now-focus-card-top { display: flex; align-items: center; justify-content: space-between; gap: 10px; margin-bottom: 22px; }
        .now-focus-number { color: var(--now-border); font: 850 1.7rem var(--ifm-font-family-monospace); }
        .now-priority { display: inline-flex; align-items: center; gap: 7px; padding: 6px 9px; border-radius: 7px; background: var(--now-soft); color: var(--now-muted); font-size: .66rem; font-weight: 800; }
        .now-priority i { width: 6px; height: 6px; border-radius: 50%; background: #e5a43c; }
        .now-priority-high-focus i { background: #20bd89; }
        .now-priority-exploring i { background: #8a7cff; }
        .now-focus-icon { display: grid; place-items: center; width: 45px; height: 45px; margin-bottom: 19px; border-radius: 12px; background: rgba(var(--now-accent-rgb), .1); color: var(--now-accent); font-size: 1.15rem; font-weight: 850; }
        .now-focus-category { color: var(--now-accent); font-size: .66rem; font-weight: 850; letter-spacing: .1em; }
        .now-focus-card h3 { margin: 8px 0 10px; font-size: 1.23rem; letter-spacing: -.025em; }
        .now-focus-description { min-height: 82px; margin: 0; color: var(--now-muted); font-size: .85rem; line-height: 1.8; }
        .now-focus-tags, .now-project-tags { display: flex; flex-wrap: wrap; gap: 7px; margin-top: 19px; }
        .now-focus-tags span, .now-project-tags span { padding: 5px 8px; border: 1px solid var(--now-border); border-radius: 6px; color: var(--now-muted); font-size: .68rem; }

        .now-project-list { display: flex; flex-direction: column; gap: 12px; }
        .now-project { display: grid; grid-template-columns: 54px minmax(0, 1fr) 42px; gap: 20px; align-items: start; padding: 23px; border: 1px solid var(--now-border); border-radius: 16px; background: var(--now-surface); transition: border-color .2s ease, transform .2s ease; }
        .now-project:hover { border-color: rgba(var(--now-accent-rgb), .45); transform: translateX(3px); }
        .now-project-symbol { display: grid; place-items: center; width: 52px; height: 52px; border-radius: 14px; background: rgba(var(--now-accent-rgb), .1); color: var(--now-accent); font-size: .9rem; font-weight: 900; }
        .now-project-purple { color: #927aff; background: rgba(146, 122, 255, .12); }
        .now-project-green { color: #22bd88; background: rgba(34, 189, 136, .12); }
        .now-project-meta { display: flex; align-items: center; flex-wrap: wrap; gap: 12px; color: var(--now-muted); font-size: .65rem; font-weight: 800; letter-spacing: .06em; }
        .now-project-status { padding: 4px 7px; border-radius: 5px; background: var(--now-soft); letter-spacing: 0; }
        .now-project h3 { margin: 10px 0 7px; font-size: 1.17rem; }
        .now-project-content > p { max-width: 720px; margin: 0; color: var(--now-muted); font-size: .84rem; line-height: 1.8; }
        .now-project-tags { margin-top: 13px; }
        .now-project-open { display: grid; place-items: center; width: 38px; height: 38px; border: 1px solid var(--now-border); border-radius: 10px; color: var(--now-accent); transition: background .2s ease, border-color .2s ease; }
        .now-project-open:hover { background: rgba(var(--now-accent-rgb), .1); border-color: var(--now-accent); }

        .now-roadmap { position: relative; }
        .now-roadmap-line { position: absolute; left: 24px; top: 25px; bottom: 25px; width: 1px; background: var(--now-border); }
        .now-roadmap-item { display: grid; grid-template-columns: 49px minmax(0, 1fr) 38px; gap: 20px; align-items: start; position: relative; padding: 17px 0; }
        .now-roadmap-marker { z-index: 1; display: grid; place-items: center; width: 49px; height: 49px; border: 1px solid rgba(var(--now-accent-rgb), .35); border-radius: 13px; background: var(--now-surface); color: var(--now-accent); font: 800 .75rem var(--ifm-font-family-monospace); }
        .now-roadmap-content { padding-top: 3px; }
        .now-roadmap-top { display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 9px; }
        .now-roadmap-top h3 { margin: 0; font-size: 1rem; }
        .now-roadmap-top > span { padding: 5px 8px; border-radius: 6px; background: var(--now-soft); color: var(--now-muted); font-size: .67rem; font-weight: 700; }
        .now-roadmap-content > p { margin: 8px 0 0; color: var(--now-muted); font-size: .84rem; line-height: 1.8; }
        .now-roadmap-icon { display: grid; place-items: center; width: 36px; height: 36px; margin-top: 4px; border-radius: 10px; background: var(--now-soft); color: var(--now-muted); }

        .now-principles-grid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 15px; }
        .now-principle-card { padding: 24px; border: 1px solid var(--now-border); border-radius: 15px; background: var(--now-surface); }
        .now-principle-card > span { color: var(--now-accent); font: 800 .72rem var(--ifm-font-family-monospace); }
        .now-principle-card h3 { margin: 18px 0 10px; font-size: 1.03rem; }
        .now-principle-card p { margin: 0; color: var(--now-muted); font-size: .83rem; line-height: 1.8; }

        .now-note-section { display: grid; grid-template-columns: 70px 1fr; gap: 22px; align-items: start; margin-top: 95px; padding: 37px; border: 1px solid var(--now-border); border-radius: 19px; background: var(--now-surface); }
        .now-note-mark { color: var(--now-accent); font: 900 6rem/.8 Georgia, serif; opacity: .7; }
        .now-note-section h2 { max-width: 650px; }
        .now-note-content > p { max-width: 700px; margin: 14px 0; color: var(--now-muted); font-size: .91rem; line-height: 1.9; }
        .now-note-signature { color: var(--now-accent); font-size: .81rem; font-weight: 800; }

        .now-cta { position: relative; isolation: isolate; overflow: hidden; margin-top: 75px; padding: 52px 24px; border: 1px solid rgba(var(--now-accent-rgb), .28); border-radius: 21px; background: var(--now-surface); text-align: center; }
        .now-cta-glow { position: absolute; z-index: -1; top: -120px; left: calc(50% - 190px); width: 380px; height: 210px; border-radius: 50%; background: rgba(var(--now-accent-rgb), .19); filter: blur(75px); }
        .now-cta h2 { margin-top: 14px; }
        .now-cta > p { max-width: 620px; margin: 0 auto; color: var(--now-muted); font-size: .91rem; line-height: 1.85; }
        .now-cta-actions { justify-content: center; }

        .now-page-footer { display: flex; justify-content: space-between; align-items: center; gap: 15px; flex-wrap: wrap; padding-top: 28px; color: var(--now-muted); font-size: .75rem; }
        .now-page-footer a { display: inline-flex; align-items: center; gap: 7px; color: var(--now-accent); font-weight: 750; text-decoration: none; }

        @media (max-width: 996px) {
          .now-hero { grid-template-columns: 1fr; gap: 12px; padding-top: 55px; }
          .now-hero-copy { max-width: 720px; }
          .now-hero-visual { min-height: 340px; }
          .now-overview { grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 22px 10px; }
          .now-focus-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
        }

        @media (max-width: 640px) {
          .now-shell { width: min(100% - 28px, 1120px); }
          .now-hero { min-height: 0; padding: 42px 0 32px; }
          .now-hero h1 { font-size: clamp(2.6rem, 12vw, 3.8rem); }
          .now-hero-description { font-size: .94rem; }
          .now-hero-visual { min-height: 290px; }
          .now-focus-console { transform: none; }
          .now-console-code { padding: 17px 9px; font-size: 9px; }
          .now-visual-orbit { width: 240px; height: 240px; }
          .now-orbit-outer { width: 300px; height: 300px; }
          .now-float-one { top: 7px; right: -3px; }
          .now-float-two { bottom: 3px; left: -3px; }
          .now-overview { padding: 20px 9px; gap: 19px 5px; }
          .now-overview-item { justify-content: flex-start; gap: 8px; padding: 2px; }
          .now-overview-icon { width: 34px; height: 34px; }
          .now-overview-item strong { font-size: .75rem; }
          .now-overview-item div > span { font-size: .65rem; }
          .now-section { padding-top: 64px; }
          .now-section-heading { align-items: flex-start; flex-direction: column; gap: 12px; }
          .now-section-index { padding: 0; }
          .now-focus-grid, .now-principles-grid { grid-template-columns: 1fr; }
          .now-focus-card { padding: 21px; }
          .now-focus-description { min-height: 0; }
          .now-project { grid-template-columns: 42px minmax(0, 1fr) 32px; gap: 11px; padding: 16px 12px; }
          .now-project-symbol { width: 40px; height: 40px; border-radius: 11px; font-size: .75rem; }
          .now-project-open { width: 31px; height: 31px; }
          .now-project-meta { gap: 7px; font-size: .58rem; }
          .now-project h3 { font-size: 1.04rem; }
          .now-project-content > p { font-size: .8rem; }
          .now-roadmap-line { left: 20px; }
          .now-roadmap-item { grid-template-columns: 41px minmax(0, 1fr); gap: 13px; }
          .now-roadmap-marker { width: 41px; height: 41px; border-radius: 11px; }
          .now-roadmap-icon { display: none; }
          .now-roadmap-top { align-items: flex-start; flex-direction: column; }
          .now-note-section { grid-template-columns: 1fr; gap: 8px; margin-top: 65px; padding: 24px 20px; }
          .now-note-mark { font-size: 4rem; }
          .now-cta { margin-top: 60px; padding: 39px 18px; }
          .now-cta-actions { align-items: stretch; flex-direction: column; }
          .now-cta-actions .now-button { width: 100%; }
          .now-page-footer { align-items: flex-start; flex-direction: column; }
        }

        @media (prefers-reduced-motion: reduce) {
          .now-page *, .now-page *::before, .now-page *::after {
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
