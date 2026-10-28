
import React from "react";
import Layout from "@theme/Layout";
import Head from "@docusaurus/Head";
import Link from "@docusaurus/Link";

const roles = [
  {
    number: "01",
    title: "Full Stack Developer",
    description:
      "Build responsive web applications, reusable interfaces, and maintainable solutions across the frontend and backend.",
    skills: ["React", "TypeScript", "Node.js", "REST APIs"],
    icon: "</>",
  },
  {
    number: "02",
    title: "Frontend Developer",
    description:
      "Create accessible, responsive user experiences with thoughtful component architecture and attention to UI details.",
    skills: ["React", "JavaScript", "CSS", "Responsive UI"],
    icon: "◈",
  },
  {
    number: "03",
    title: "AI-Focused Developer",
    description:
      "Explore practical AI-powered web experiences, integrate useful capabilities, and turn ideas into working prototypes.",
    skills: ["AI integration", "Web apps", "APIs", "Prototyping"],
    icon: "✧",
  },
];

const strengths = [
  {
    number: "01",
    title: "Product-minded development",
    description:
      "I care about the problem a feature solves, not just whether the code works.",
    icon: "◎",
  },
  {
    number: "02",
    title: "Learning through building",
    description:
      "I use real projects to strengthen my engineering skills and turn concepts into practical solutions.",
    icon: "⌘",
  },
  {
    number: "03",
    title: "Open-source collaboration",
    description:
      "I value shared knowledge, readable documentation, constructive feedback, and community-driven development.",
    icon: "⑂",
  },
  {
    number: "04",
    title: "Continuous improvement",
    description:
      "I look for ways to improve usability, code quality, accessibility, and the overall developer experience.",
    icon: "↗",
  },
];

const projects = [
  {
    name: "CodeHarborHub",
    type: "Developer education",
    description:
      "A learning platform focused on programming tutorials, technical documentation, and accessible developer resources.",
    contribution:
      "Platform development, learning content, documentation, and community initiatives.",
    stack: ["Docusaurus", "React", "MDX"],
    url: "https://codeharborhub.github.io/",
    accent: "blue",
    symbol: "CH",
  },
  {
    name: "Algo",
    type: "DSA learning platform",
    description:
      "A project centered on data structures, algorithms, technical learning, and developer contributions.",
    contribution:
      "Project development, educational resources, and open-source collaboration.",
    stack: ["Docusaurus", "JavaScript", "Open source"],
    url: "https://ajay-dhangar.github.io/algo/",
    accent: "purple",
    symbol: "AL",
  },
  {
    name: "AI Buddies",
    type: "AI exploration",
    description:
      "An AI-focused web project exploring interactive experiences and useful learning-oriented features.",
    contribution:
      "Project architecture, web experience development, and feature exploration.",
    stack: ["React", "Docusaurus", "AI"],
    url: "https://ajay-dhangar.github.io/ai-buddies/",
    accent: "green",
    symbol: "AI",
  },
];

const workStyle = [
  "Readable, maintainable code",
  "Responsive and accessible interfaces",
  "Clear communication and documentation",
  "Feedback-driven iteration",
  "Collaborative problem-solving",
  "Continuous technical learning",
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
      width="17"
      height="17"
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

export default function HireMePage(): React.JSX.Element {
  const email = ""; // Add your public professional email address here.

  const contactHref = email
    ? `mailto:${email}?subject=${encodeURIComponent(
        "Opportunity to work together"
      )}`
    : "https://www.linkedin.com/in/ajay-dhangar/";

  return (
    <Layout
      title="Hire Me — Full Stack Developer"
      description="Explore Ajay Dhangar's developer profile, technical strengths, open-source projects, and opportunities for full-stack, frontend, and AI-focused development."
    >
      <Head>
        <meta
          name="keywords"
          content="Hire Ajay Dhangar, Full Stack Developer, React Developer, Frontend Developer, JavaScript Developer, TypeScript, AI Developer, Open Source"
        />
        <meta property="og:title" content="Hire Me | Ajay Dhangar" />
        <meta
          property="og:description"
          content="Looking for a developer who learns by building? Explore my projects, technical interests, and ways to collaborate."
        />
        <meta property="og:type" content="website" />
      </Head>

      <main className="hire-page">
        <div className="hire-shell">
          {/* HERO */}
          <section className="hire-hero">
            <div className="hire-hero-grid" aria-hidden="true" />

            <div className="hire-hero-copy">
              <div className="hire-eyebrow">
                <span className="hire-status-dot" />
                OPEN TO RELEVANT OPPORTUNITIES
              </div>

              <h1>
                Let's build
                <br />
                <span className="hire-gradient">something meaningful.</span>
              </h1>

              <p className="hire-hero-description">
                I'm Ajay Dhangar, a Computer Science graduate, developer, and
                founder of CodeHarborHub. I enjoy building web experiences,
                educational platforms, and projects that make technology more
                accessible.
              </p>

              <div className="hire-role-chips">
                <span>Full Stack Developer</span>
                <span>Frontend Developer</span>
                <span>AI-focused Projects</span>
              </div>

              <div className="hire-hero-actions">
                <a
                  href={contactHref}
                  target={email ? undefined : "_blank"}
                  rel={email ? undefined : "noreferrer"}
                  className="hire-button hire-button-primary"
                >
                  Let's talk <ArrowIcon />
                </a>
                <a
                  href="https://github.com/ajay-dhangar"
                  target="_blank"
                  rel="noreferrer"
                  className="hire-button hire-button-secondary"
                >
                  Explore GitHub <ArrowIcon />
                </a>
              </div>

              <div className="hire-hero-footnote">
                <span className="hire-footnote-icon">✳</span>
                Open to discussing suitable roles, projects, and collaborations.
              </div>
            </div>

            <div className="hire-hero-visual" aria-label="Developer profile summary">
              <div className="hire-orbit hire-orbit-one" aria-hidden="true" />
              <div className="hire-orbit hire-orbit-two" aria-hidden="true" />

              <div className="hire-profile-card">
                <div className="hire-profile-card-top">
                  <div className="hire-avatar">AD</div>
                  <div className="hire-profile-heading">
                    <strong>Ajay Dhangar</strong>
                    <span>Developer · Open-source builder</span>
                  </div>
                  <span className="hire-profile-mark">✧</span>
                </div>

                <div className="hire-profile-divider" />

                <div className="hire-code-window">
                  <div className="hire-code-header">
                    <div className="hire-window-dots"><i /><i /><i /></div>
                    <span>developer.ts</span>
                  </div>
                  <div className="hire-code-body">
                    <p><span className="hire-code-line">01</span> <span className="hire-code-purple">const</span> developer = {"{"}</p>
                    <p><span className="hire-code-line">02</span> &nbsp; name: <span className="hire-code-green">"Ajay"</span>,</p>
                    <p><span className="hire-code-line">03</span> &nbsp; focus: [</p>
                    <p><span className="hire-code-line">04</span> &nbsp;&nbsp; <span className="hire-code-green">"Web Development"</span>,</p>
                    <p><span className="hire-code-line">05</span> &nbsp;&nbsp; <span className="hire-code-green">"Open Source"</span>,</p>
                    <p><span className="hire-code-line">06</span> &nbsp;&nbsp; <span className="hire-code-green">"AI Exploration"</span></p>
                    <p><span className="hire-code-line">07</span> &nbsp; ],</p>
                    <p><span className="hire-code-line">08</span> &nbsp; mindset: <span className="hire-code-orange">"keep learning"</span></p>
                    <p><span className="hire-code-line">09</span> {"}"};</p>
                  </div>
                </div>

                <div className="hire-profile-footer">
                  <span className="hire-check"><CheckIcon /></span>
                  <span>Learn. Build. Improve.</span>
                </div>
              </div>

              <div className="hire-float hire-float-top">
                <span>⌘</span>
                <div><strong>Open source</strong><small>Build in public</small></div>
              </div>
              <div className="hire-float hire-float-bottom">
                <span className="hire-float-green">{"</>"}</span>
                <div><strong>Developer mindset</strong><small>Quality over shortcuts</small></div>
              </div>
            </div>
          </section>

          {/* QUICK PROFILE */}
          <section className="hire-profile-strip" aria-label="Professional overview">
            <div>
              <span className="hire-strip-label">EDUCATION</span>
              <strong>B.Tech, Computer Science</strong>
              <span>Mandsaur University · 2024</span>
            </div>
            <div>
              <span className="hire-strip-label">CURRENT WORK</span>
              <strong>Computer Operator</strong>
              <span>PACS Gujarda · Mandsaur</span>
            </div>
            <div>
              <span className="hire-strip-label">COMMUNITY</span>
              <strong>Founder, CodeHarborHub</strong>
              <span>Developer education and open source</span>
            </div>
          </section>

          {/* ROLE FIT */}
          <section className="hire-section" id="opportunities">
            <div className="hire-section-heading">
              <div>
                <span className="hire-kicker">WHERE I CAN CONTRIBUTE</span>
                <h2>Roles I'm interested in</h2>
                <p>
                  I’m interested in opportunities where I can contribute,
                  learn from experienced engineers, and grow through real
                  software development work.
                </p>
              </div>
              <span className="hire-section-number">01 / ROLE FIT</span>
            </div>

            <div className="hire-roles-grid">
              {roles.map((role) => (
                <article className="hire-role-card" key={role.number}>
                  <div className="hire-role-top">
                    <span className="hire-role-number">{role.number}</span>
                    <span className="hire-role-icon">{role.icon}</span>
                  </div>
                  <h3>{role.title}</h3>
                  <p>{role.description}</p>
                  <div className="hire-role-skills">
                    {role.skills.map((skill) => (
                      <span key={skill}>{skill}</span>
                    ))}
                  </div>
                  <a href="#contact" className="hire-role-link">
                    Discuss this role <ArrowIcon />
                  </a>
                </article>
              ))}
            </div>
          </section>

          {/* VALUE */}
          <section className="hire-section">
            <div className="hire-section-heading">
              <div>
                <span className="hire-kicker">WHAT I BRING</span>
                <h2>More than just writing code</h2>
                <p>
                  I aim to combine practical implementation with curiosity,
                  clear communication, and an understanding of the people
                  using the software.
                </p>
              </div>
              <span className="hire-section-number">02 / STRENGTHS</span>
            </div>

            <div className="hire-strength-grid">
              {strengths.map((strength) => (
                <article className="hire-strength-card" key={strength.number}>
                  <div className="hire-strength-top">
                    <span>{strength.number}</span>
                    <span className="hire-strength-icon">{strength.icon}</span>
                  </div>
                  <h3>{strength.title}</h3>
                  <p>{strength.description}</p>
                </article>
              ))}
            </div>
          </section>

          {/* SELECTED PROJECTS */}
          <section className="hire-section">
            <div className="hire-section-heading">
              <div>
                <span className="hire-kicker">PROOF THROUGH PROJECTS</span>
                <h2>Work worth exploring</h2>
                <p>
                  A selection of projects that demonstrates my interests in
                  developer education, algorithms, and AI-oriented experiences.
                </p>
              </div>
              <Link to="/projects" className="hire-inline-link">
                View all projects <ArrowIcon />
              </Link>
            </div>

            <div className="hire-project-grid">
              {projects.map((project) => (
                <article
                  className={`hire-project-card hire-project-${project.accent}`}
                  key={project.name}
                >
                  <div className="hire-project-top">
                    <span className="hire-project-symbol">{project.symbol}</span>
                    <span className="hire-project-type">{project.type}</span>
                  </div>
                  <h3>{project.name}</h3>
                  <p className="hire-project-description">{project.description}</p>

                  <div className="hire-project-contribution">
                    <span>PROJECT FOCUS</span>
                    <p>{project.contribution}</p>
                  </div>

                  <div className="hire-project-stack">
                    {project.stack.map((technology) => (
                      <span key={technology}>{technology}</span>
                    ))}
                  </div>

                  <a
                    href={project.url}
                    target="_blank"
                    rel="noreferrer"
                    className="hire-project-link"
                  >
                    Visit project <ArrowIcon />
                  </a>
                </article>
              ))}
            </div>
          </section>

          {/* WORKING STYLE */}
          <section className="hire-working">
            <div className="hire-working-main">
              <span className="hire-kicker">HOW I APPROACH THE WORK</span>
              <h2>
                Thoughtful code.
                <br />
                <span className="hire-gradient">Useful outcomes.</span>
              </h2>
              <p>
                I value practical solutions, feedback, maintainable code, and
                continuous improvement. I want to work with teams where asking
                questions, sharing knowledge, and taking ownership are part
                of building good software.
              </p>
              <a href="#contact" className="hire-button hire-button-primary">
                Let's discuss an opportunity <ArrowIcon />
              </a>
            </div>

            <div className="hire-working-list">
              {workStyle.map((item, index) => (
                <div key={item}>
                  <span className="hire-working-check"><CheckIcon /></span>
                  <span>{item}</span>
                  <span className="hire-working-index">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
              ))}
            </div>
          </section>

          {/* CONTACT */}
          <section className="hire-contact" id="contact">
            <div className="hire-contact-glow" aria-hidden="true" />
            <span className="hire-kicker">LET'S START A CONVERSATION</span>
            <h2>Have a role or project in mind?</h2>
            <p>
              If you're hiring for a relevant developer role, building an
              interesting product, or looking for an open-source collaborator,
              I'd be happy to hear from you.
            </p>

            <div className="hire-contact-actions">
              <a
                href={contactHref}
                target={email ? undefined : "_blank"}
                rel={email ? undefined : "noreferrer"}
                className="hire-button hire-button-primary"
              >
                Contact me <ArrowIcon />
              </a>
              <a
                href="https://www.linkedin.com/in/ajay-dhangar/"
                target="_blank"
                rel="noreferrer"
                className="hire-button hire-button-secondary"
              >
                LinkedIn profile <ArrowIcon />
              </a>
              <a
                href="https://github.com/ajay-dhangar"
                target="_blank"
                rel="noreferrer"
                className="hire-button hire-button-secondary"
              >
                GitHub profile <ArrowIcon />
              </a>
            </div>

            <div className="hire-contact-note">
              <span>✳</span>
              For the best conversation, include the role, project, or
              collaboration you're reaching out about.
            </div>
          </section>

          <footer className="hire-footer">
            <span>Ajay Dhangar · Developer · Open-source builder</span>
            <Link to="/resume">Explore resume <ArrowIcon /></Link>
          </footer>
        </div>
      </main>

      <style>{`
        .hire-page {
          --hire-accent: var(--ifm-color-primary, #2e93e2);
          --hire-accent-rgb: 46, 147, 226;
          --hire-surface: var(--ifm-card-background-color, var(--ifm-background-surface-color));
          --hire-border: var(--ifm-color-emphasis-200);
          --hire-muted: var(--ifm-color-emphasis-600);
          --hire-text: var(--ifm-font-color-base);
          --hire-soft: var(--ifm-color-emphasis-100);
          color: var(--hire-text);
          overflow: hidden;
          padding-bottom: 50px;
        }

        .hire-page * { box-sizing: border-box; }
        .hire-shell { width: min(1160px, calc(100% - 40px)); margin: 0 auto; }

        .hire-hero {
          display: grid;
          grid-template-columns: 1.1fr .9fr;
          gap: 25px;
          align-items: center;
          min-height: 535px;
          padding: 67px 0 52px;
          position: relative;
          isolation: isolate;
        }

        .hire-hero-grid {
          position: absolute;
          inset: 0 -40px;
          z-index: -2;
          background-image:
            linear-gradient(to right, var(--hire-border) 1px, transparent 1px),
            linear-gradient(to bottom, var(--hire-border) 1px, transparent 1px);
          background-size: 42px 42px;
          opacity: .48;
          mask-image: linear-gradient(to bottom, black, transparent 95%);
          pointer-events: none;
        }

        .hire-hero::before {
          content: "";
          position: absolute;
          z-index: -1;
          width: 390px;
          height: 390px;
          top: 0;
          left: 3%;
          border-radius: 50%;
          background: rgba(var(--hire-accent-rgb), .1);
          filter: blur(90px);
          pointer-events: none;
        }

        .hire-eyebrow, .hire-kicker {
          display: inline-flex;
          align-items: center;
          gap: 9px;
          color: var(--hire-accent);
          font-size: 10px;
          font-weight: 850;
          letter-spacing: .14em;
          line-height: 1.6;
        }

        .hire-status-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #20bd89;
          box-shadow: 0 0 12px rgba(32, 189, 137, .65);
        }

        .hire-hero h1 {
          margin: 21px 0 18px;
          font-size: clamp(2.8rem, 5.5vw, 4.8rem);
          line-height: 1.03;
          font-weight: 900;
          letter-spacing: -.065em;
        }

        .hire-gradient {
          color: var(--hire-accent);
          background: linear-gradient(100deg, var(--hire-accent), #8a7cff 68%, #20c8a5);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .hire-hero-description {
          max-width: 590px;
          margin: 0;
          color: var(--hire-muted);
          font-size: 1rem;
          line-height: 1.9;
        }

        .hire-role-chips {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-top: 19px;
        }
        .hire-role-chips span {
          padding: 6px 9px;
          border: 1px solid var(--hire-border);
          border-radius: 7px;
          color: var(--hire-muted);
          font-size: .7rem;
          font-weight: 700;
          background: var(--hire-surface);
        }

        .hire-hero-actions, .hire-contact-actions {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 11px;
          margin-top: 25px;
        }

        .hire-button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 9px;
          min-height: 46px;
          padding: 0 16px;
          border-radius: 11px;
          font-size: .85rem;
          font-weight: 800;
          text-decoration: none !important;
          transition: transform .2s ease, box-shadow .2s ease, border-color .2s ease;
        }
        .hire-button:hover { transform: translateY(-2px); }
        .hire-button-primary {
          color: white !important;
          background: var(--hire-accent);
          border: 1px solid var(--hire-accent);
          box-shadow: 0 8px 23px rgba(var(--hire-accent-rgb), .22);
        }
        .hire-button-primary:hover { box-shadow: 0 12px 30px rgba(var(--hire-accent-rgb), .3); }
        .hire-button-secondary {
          color: var(--hire-text) !important;
          background: var(--hire-surface);
          border: 1px solid var(--hire-border);
        }
        .hire-button-secondary:hover { border-color: var(--hire-accent); }

        .hire-hero-footnote {
          display: flex;
          align-items: flex-start;
          gap: 8px;
          margin-top: 23px;
          color: var(--hire-muted);
          font-size: .76rem;
          line-height: 1.7;
        }
        .hire-footnote-icon { color: var(--hire-accent); }

        .hire-hero-visual {
          min-width: 0;
          min-height: 370px;
          display: grid;
          place-items: center;
          position: relative;
          perspective: 1000px;
        }
        .hire-orbit {
          position: absolute;
          width: 290px;
          height: 290px;
          border: 1px solid rgba(var(--hire-accent-rgb), .25);
          border-radius: 50%;
          transform: rotateX(65deg) rotateZ(-28deg);
        }
        .hire-orbit-two {
          width: 380px;
          height: 380px;
          border-color: var(--hire-border);
          transform: rotateX(65deg) rotateZ(31deg);
        }

        .hire-profile-card {
          position: relative;
          z-index: 1;
          width: min(100%, 405px);
          padding: 19px;
          border: 1px solid rgba(var(--hire-accent-rgb), .3);
          border-radius: 18px;
          background: var(--ifm-background-surface-color);
          box-shadow: 0 28px 75px rgba(0, 0, 0, .13), 0 0 45px rgba(var(--hire-accent-rgb), .08);
          transform: rotateY(-4deg) rotateX(3deg);
        }
        .hire-profile-card-top { display: flex; align-items: center; gap: 12px; }
        .hire-avatar {
          display: grid;
          place-items: center;
          width: 48px;
          height: 48px;
          flex-shrink: 0;
          border-radius: 14px;
          background: linear-gradient(135deg, var(--hire-accent), #8a7cff);
          color: white;
          font-size: .9rem;
          font-weight: 900;
          letter-spacing: -.04em;
        }
        .hire-profile-heading { min-width: 0; }
        .hire-profile-heading strong, .hire-profile-heading span { display: block; }
        .hire-profile-heading strong { font-size: .9rem; }
        .hire-profile-heading span { margin-top: 4px; color: var(--hire-muted); font-size: .68rem; }
        .hire-profile-mark { margin-left: auto; color: var(--hire-accent); font-size: 1.3rem; }
        .hire-profile-divider { height: 1px; margin: 17px 0; background: var(--hire-border); }

        .hire-code-window { overflow: hidden; border: 1px solid var(--hire-border); border-radius: 11px; background: var(--ifm-background-color); }
        .hire-code-header { display: flex; align-items: center; gap: 11px; padding: 10px 12px; border-bottom: 1px solid var(--hire-border); color: var(--hire-muted); font: 10px var(--ifm-font-family-monospace); }
        .hire-window-dots { display: flex; gap: 4px; }
        .hire-window-dots i { width: 6px; height: 6px; border-radius: 50%; background: #f56a66; }
        .hire-window-dots i:nth-child(2) { background: #efbe48; }
        .hire-window-dots i:nth-child(3) { background: #26be84; }
        .hire-code-body { padding: 14px 10px; font: 10px/1.8 var(--ifm-font-family-monospace); }
        .hire-code-body p { margin: 0; white-space: pre; }
        .hire-code-line { display: inline-block; width: 20px; color: var(--hire-muted); opacity: .55; }
        .hire-code-purple { color: #b18cff; }
        .hire-code-green { color: #29b986; }
        .hire-code-orange { color: #e6a64d; }

        .hire-profile-footer { display: flex; align-items: center; gap: 8px; padding-top: 14px; color: var(--hire-muted); font-size: .72rem; }
        .hire-check { display: inline-flex; color: #22bd88; }

        .hire-float {
          display: flex;
          align-items: center;
          gap: 9px;
          position: absolute;
          z-index: 2;
          padding: 10px 12px;
          border: 1px solid var(--hire-border);
          border-radius: 11px;
          background: var(--hire-surface);
          box-shadow: 0 10px 32px rgba(0, 0, 0, .1);
        }
        .hire-float-top { top: 18px; right: -1px; }
        .hire-float-bottom { bottom: 13px; left: -5px; }
        .hire-float > span { display: grid; place-items: center; width: 31px; height: 31px; border-radius: 9px; background: rgba(var(--hire-accent-rgb), .1); color: var(--hire-accent); font-weight: 850; }
        .hire-float .hire-float-green { color: #22bd88; background: rgba(34, 189, 136, .1); }
        .hire-float strong, .hire-float small { display: block; }
        .hire-float strong { font-size: .72rem; }
        .hire-float small { margin-top: 3px; color: var(--hire-muted); font-size: .64rem; }

        .hire-profile-strip {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 20px;
          padding: 24px;
          border: 1px solid var(--hire-border);
          border-radius: 16px;
          background: var(--hire-surface);
        }
        .hire-profile-strip > div { display: flex; flex-direction: column; gap: 6px; min-width: 0; }
        .hire-strip-label { color: var(--hire-accent); font-size: .64rem; font-weight: 850; letter-spacing: .11em; }
        .hire-profile-strip strong { font-size: .85rem; }
        .hire-profile-strip > div > span:last-child { color: var(--hire-muted); font-size: .74rem; line-height: 1.6; }

        .hire-section { padding-top: 88px; scroll-margin-top: 30px; }
        .hire-section-heading { display: flex; justify-content: space-between; align-items: flex-end; gap: 25px; margin-bottom: 26px; }
        .hire-section-heading h2, .hire-working h2, .hire-contact h2 {
          margin: 11px 0 8px;
          font-size: clamp(1.8rem, 3.2vw, 2.65rem);
          line-height: 1.16;
          font-weight: 850;
          letter-spacing: -.045em;
        }
        .hire-section-heading p { max-width: 650px; margin: 0; color: var(--hire-muted); font-size: .91rem; line-height: 1.8; }
        .hire-section-number { flex-shrink: 0; color: var(--hire-muted); font: 750 .67rem var(--ifm-font-family-monospace); letter-spacing: .05em; padding-bottom: 4px; }
        .hire-inline-link { display: inline-flex; align-items: center; gap: 7px; color: var(--hire-accent); font-size: .8rem; font-weight: 800; text-decoration: none !important; white-space: nowrap; }

        .hire-roles-grid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 15px; }
        .hire-role-card { display: flex; flex-direction: column; padding: 23px; border: 1px solid var(--hire-border); border-radius: 16px; background: var(--hire-surface); transition: transform .2s ease, border-color .2s ease, box-shadow .2s ease; }
        .hire-role-card:hover { transform: translateY(-4px); border-color: rgba(var(--hire-accent-rgb), .5); box-shadow: 0 13px 35px rgba(0, 0, 0, .05); }
        .hire-role-top { display: flex; align-items: center; justify-content: space-between; margin-bottom: 22px; }
        .hire-role-number { color: var(--hire-border); font: 850 1.65rem var(--ifm-font-family-monospace); }
        .hire-role-icon { display: grid; place-items: center; width: 43px; height: 43px; border-radius: 12px; background: rgba(var(--hire-accent-rgb), .1); color: var(--hire-accent); font-size: 1.1rem; font-weight: 850; }
        .hire-role-card h3 { margin: 0 0 10px; font-size: 1.14rem; }
        .hire-role-card > p { flex: 1; min-height: 105px; margin: 0; color: var(--hire-muted); font-size: .83rem; line-height: 1.8; }
        .hire-role-skills { display: flex; flex-wrap: wrap; gap: 6px; margin-top: 17px; }
        .hire-role-skills span { padding: 5px 7px; border: 1px solid var(--hire-border); border-radius: 6px; color: var(--hire-muted); font-size: .65rem; }
        .hire-role-link { display: inline-flex; align-items: center; gap: 7px; margin-top: 19px; padding-top: 14px; border-top: 1px solid var(--hire-border); color: var(--hire-accent); font-size: .78rem; font-weight: 800; text-decoration: none !important; }

        .hire-strength-grid { display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 13px; }
        .hire-strength-card { padding: 20px; border: 1px solid var(--hire-border); border-radius: 15px; background: var(--hire-surface); }
        .hire-strength-top { display: flex; align-items: center; justify-content: space-between; margin-bottom: 22px; }
        .hire-strength-top > span:first-child { color: var(--hire-accent); font: 800 .7rem var(--ifm-font-family-monospace); }
        .hire-strength-icon { color: var(--hire-muted); font-size: 1.1rem; }
        .hire-strength-card h3 { margin: 0 0 9px; font-size: .96rem; line-height: 1.5; }
        .hire-strength-card p { margin: 0; color: var(--hire-muted); font-size: .78rem; line-height: 1.8; }

        .hire-project-grid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 15px; }
        .hire-project-card { display: flex; flex-direction: column; min-width: 0; padding: 22px; border: 1px solid var(--hire-border); border-radius: 16px; background: var(--hire-surface); transition: transform .2s ease, border-color .2s ease; }
        .hire-project-card:hover { transform: translateY(-3px); border-color: rgba(var(--hire-accent-rgb), .5); }
        .hire-project-top { display: flex; align-items: center; justify-content: space-between; gap: 10px; margin-bottom: 20px; }
        .hire-project-symbol { display: grid; place-items: center; width: 45px; height: 45px; border-radius: 12px; background: rgba(var(--hire-accent-rgb), .1); color: var(--hire-accent); font-size: .85rem; font-weight: 900; }
        .hire-project-type { color: var(--hire-muted); font-size: .68rem; font-weight: 700; text-align: right; }
        .hire-project-card h3 { margin: 0 0 9px; font-size: 1.16rem; }
        .hire-project-description { min-height: 90px; margin: 0; color: var(--hire-muted); font-size: .81rem; line-height: 1.8; }
        .hire-project-contribution { margin-top: 16px; padding: 12px; border-radius: 10px; background: var(--hire-soft); }
        .hire-project-contribution > span { color: var(--hire-muted); font-size: .61rem; font-weight: 850; letter-spacing: .1em; }
        .hire-project-contribution p { margin: 5px 0 0; font-size: .75rem; line-height: 1.7; }
        .hire-project-stack { display: flex; flex-wrap: wrap; gap: 6px; margin-top: 13px; }
        .hire-project-stack span { padding: 5px 7px; border: 1px solid var(--hire-border); border-radius: 6px; color: var(--hire-muted); font-size: .64rem; }
        .hire-project-link { display: inline-flex; align-items: center; gap: 7px; margin-top: auto; padding-top: 17px; color: var(--hire-accent); font-size: .78rem; font-weight: 800; text-decoration: none !important; }
        .hire-project-purple .hire-project-symbol { color: #927aff; background: rgba(146, 122, 255, .12); }
        .hire-project-green .hire-project-symbol { color: #20b987; background: rgba(32, 185, 135, .12); }

        .hire-working { display: grid; grid-template-columns: 1fr .9fr; gap: 55px; align-items: center; margin-top: 95px; padding: 38px; border: 1px solid var(--hire-border); border-radius: 20px; background: var(--hire-surface); }
        .hire-working-main h2 { margin-top: 13px; }
        .hire-working-main > p { max-width: 500px; margin: 15px 0 23px; color: var(--hire-muted); font-size: .9rem; line-height: 1.9; }
        .hire-working-list { border-top: 1px solid var(--hire-border); }
        .hire-working-list > div { display: grid; grid-template-columns: 23px 1fr 20px; align-items: center; gap: 10px; padding: 13px 0; border-bottom: 1px solid var(--hire-border); font-size: .8rem; }
        .hire-working-check { display: inline-flex; color: #20b987; }
        .hire-working-index { color: var(--hire-muted); font: 700 .65rem var(--ifm-font-family-monospace); text-align: right; }

        .hire-contact { position: relative; isolation: isolate; overflow: hidden; margin-top: 80px; padding: 54px 25px; border: 1px solid rgba(var(--hire-accent-rgb), .28); border-radius: 22px; background: var(--hire-surface); text-align: center; }
        .hire-contact-glow { position: absolute; z-index: -1; top: -120px; left: calc(50% - 200px); width: 400px; height: 210px; border-radius: 50%; background: rgba(var(--hire-accent-rgb), .2); filter: blur(75px); }
        .hire-contact h2 { margin-top: 14px; }
        .hire-contact > p { max-width: 650px; margin: 0 auto; color: var(--hire-muted); font-size: .9rem; line-height: 1.85; }
        .hire-contact-actions { justify-content: center; }
        .hire-contact-note { display: flex; align-items: center; justify-content: center; gap: 8px; margin-top: 22px; color: var(--hire-muted); font-size: .72rem; line-height: 1.7; }
        .hire-contact-note > span { color: var(--hire-accent); }

        .hire-footer { display: flex; justify-content: space-between; align-items: center; gap: 15px; flex-wrap: wrap; padding-top: 27px; color: var(--hire-muted); font-size: .74rem; }
        .hire-footer a { display: inline-flex; align-items: center; gap: 7px; color: var(--hire-accent); font-weight: 800; text-decoration: none; }

        @media (max-width: 996px) {
          .hire-hero { grid-template-columns: 1fr; gap: 12px; padding-top: 55px; }
          .hire-hero-copy { max-width: 720px; }
          .hire-hero-visual { min-height: 355px; }
          .hire-roles-grid, .hire-project-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
          .hire-strength-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
          .hire-working { grid-template-columns: 1fr; gap: 32px; }
        }

        @media (max-width: 640px) {
          .hire-shell { width: min(100% - 28px, 1160px); }
          .hire-hero { min-height: 0; padding: 42px 0 32px; }
          .hire-hero h1 { font-size: clamp(2.55rem, 11.5vw, 3.7rem); }
          .hire-hero-description { font-size: .93rem; }
          .hire-hero-visual { min-height: 300px; }
          .hire-profile-card { padding: 14px; transform: none; }
          .hire-code-body { padding: 12px 6px; font-size: 8.5px; }
          .hire-orbit { width: 235px; height: 235px; }
          .hire-orbit-two { width: 305px; height: 305px; }
          .hire-float-top { top: 3px; right: -2px; }
          .hire-float-bottom { bottom: 1px; left: -2px; }
          .hire-profile-strip { grid-template-columns: 1fr; gap: 18px; padding: 20px; }
          .hire-profile-strip > div { padding-bottom: 14px; border-bottom: 1px solid var(--hire-border); }
          .hire-profile-strip > div:last-child { padding-bottom: 0; border-bottom: 0; }
          .hire-section { padding-top: 64px; }
          .hire-section-heading { align-items: flex-start; flex-direction: column; gap: 12px; }
          .hire-section-number { padding: 0; }
          .hire-roles-grid, .hire-project-grid, .hire-strength-grid { grid-template-columns: 1fr; }
          .hire-role-card > p, .hire-project-description { min-height: 0; }
          .hire-working { margin-top: 65px; padding: 24px 19px; }
          .hire-contact { margin-top: 60px; padding: 39px 17px; }
          .hire-contact-actions { align-items: stretch; flex-direction: column; }
          .hire-contact-actions .hire-button { width: 100%; }
          .hire-contact-note { align-items: flex-start; text-align: left; }
          .hire-footer { align-items: flex-start; flex-direction: column; }
        }

        @media (prefers-reduced-motion: reduce) {
          .hire-page *, .hire-page *::before, .hire-page *::after {
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
