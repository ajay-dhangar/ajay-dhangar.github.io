
import React, { useMemo, useState } from "react";
import Layout from "@theme/Layout";
import Head from "@docusaurus/Head";
import Link from "@docusaurus/Link";

type TestimonialCategory =
  | "All"
  | "Open Source"
  | "Projects"
  | "Mentorship"
  | "Collaboration";

type Testimonial = {
  id: number;
  name: string;
  role: string;
  organization: string;
  category: Exclude<TestimonialCategory, "All">;
  quote: string;
  initials: string;
  linkedIn?: string;
  featured?: boolean;
  placeholder?: boolean;
};

const categories: TestimonialCategory[] = [
  "All",
  "Open Source",
  "Projects",
  "Mentorship",
  "Collaboration",
];

/**
 * Replace these example records with genuine testimonials.
 * Publish only real feedback that the author has approved.
 */
const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Contributor Name",
    role: "Open-Source Contributor",
    organization: "CodeHarborHub",
    category: "Open Source",
    initials: "CN",
    quote:
      "Replace this placeholder with an authentic quote about collaborating on CodeHarborHub, learning through open source, or contributing to the community.",
    placeholder: true,
    featured: true,
  },
  {
    id: 2,
    name: "Collaborator Name",
    role: "Developer / Project Collaborator",
    organization: "Algo",
    category: "Projects",
    initials: "CN",
    quote:
      "Add approved feedback describing a real collaboration, a technical contribution, or the experience of working together on Algo.",
    placeholder: true,
  },
  {
    id: 3,
    name: "Team Member Name",
    role: "Project Teammate",
    organization: "AI Buddies",
    category: "Collaboration",
    initials: "TN",
    quote:
      "Use a genuine statement about the project, communication, problem-solving, or teamwork. Include only details the person agrees to share.",
    placeholder: true,
  },
  {
    id: 4,
    name: "Mentor Name",
    role: "Mentor / Educator",
    organization: "Professional Community",
    category: "Mentorship",
    initials: "MN",
    quote:
      "Add a real, permission-approved observation about Ajay's growth, technical work, learning attitude, or professional development.",
    placeholder: true,
  },
];

const profileLinks = {
  github: "https://github.com/ajay-dhangar",
  linkedin: "https://www.linkedin.com/in/ajay-dhangar/",
  codeharborhub: "https://codeharborhub.github.io/",
  algo: "https://ajay-dhangar.github.io/algo/",
  aiBuddies: "https://ajay-dhangar.github.io/ai-buddies/",
};

function ArrowIcon({ diagonal = false }: { diagonal?: boolean }) {
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

function QuoteIcon() {
  return (
    <svg
      aria-hidden="true"
      width="34"
      height="34"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 21c3.5-1.4 5.2-4.1 5.2-8.2V5H2v7h4c0 3.4-1 5.6-3 7" />
      <path d="M15 21c3.5-1.4 5.2-4.1 5.2-8.2V5H14v7h4c0 3.4-1 5.6-3 7" />
    </svg>
  );
}

function TestimonialCard({
  testimonial,
}: {
  testimonial: Testimonial;
}) {
  return (
    <article
      className={`testimonial-card ${
        testimonial.featured ? "testimonial-card--featured" : ""
      }`}
    >
      <div className="testimonial-card__top">
        <span className="testimonial-card__category">
          {testimonial.category}
        </span>
        <span className="testimonial-card__quote-icon">
          <QuoteIcon />
        </span>
      </div>

      {testimonial.placeholder && (
        <div className="testimonial-placeholder-notice">
          <span className="testimonial-placeholder-dot" />
          Sample content — replace before publishing
        </div>
      )}

      <blockquote className="testimonial-card__quote">
        “{testimonial.quote}”
      </blockquote>

      <div className="testimonial-card__person">
        <div className="testimonial-avatar" aria-hidden="true">
          {testimonial.initials}
        </div>

        <div className="testimonial-card__person-info">
          <h3>{testimonial.name}</h3>
          <p>{testimonial.role}</p>
          <span>{testimonial.organization}</span>
        </div>

        {testimonial.linkedIn && !testimonial.placeholder && (
          <a
            className="testimonial-card__profile-link"
            href={testimonial.linkedIn}
            target="_blank"
            rel="noreferrer"
            aria-label={`View ${testimonial.name}'s profile`}
          >
            <ArrowIcon diagonal />
          </a>
        )}
      </div>
    </article>
  );
}

export default function TestimonialsPage(): JSX.Element {
  const [activeCategory, setActiveCategory] =
    useState<TestimonialCategory>("All");

  const [showFeaturedOnly, setShowFeaturedOnly] = useState(false);

  const visibleTestimonials = useMemo(() => {
    return testimonials.filter((testimonial) => {
      const matchesCategory =
        activeCategory === "All" ||
        testimonial.category === activeCategory;

      const matchesFeatured =
        !showFeaturedOnly || Boolean(testimonial.featured);

      return matchesCategory && matchesFeatured;
    });
  }, [activeCategory, showFeaturedOnly]);

  const allContentIsPlaceholder =
    visibleTestimonials.length > 0 &&
    visibleTestimonials.every((item) => item.placeholder);

  return (
    <Layout
      title="Testimonials"
      description="Discover feedback from collaborators, open-source contributors, mentors, and project teammates working with Ajay Dhangar."
    >
      <Head>
        <meta property="og:title" content="Testimonials | Ajay Dhangar" />
        <meta
          property="og:description"
          content="Feedback and experiences from people who collaborate with Ajay Dhangar on software, open source, and developer education."
        />
        <meta property="og:type" content="website" />
        <meta name="robots" content="index, follow" />
      </Head>

      <main className="testimonials-page">
        <div className="testimonials-background-glow" aria-hidden="true" />

        <section className="testimonials-hero">
          <div className="testimonials-container">
            <div className="testimonials-eyebrow">
              <span className="testimonials-eyebrow-dot" />
              PEOPLE · PROJECTS · PROGRESS
            </div>

            <div className="testimonials-hero-grid">
              <div className="testimonials-hero-content">
                <h1>
                  Great work is built
                  <br />
                  <span>together.</span>
                </h1>

                <p className="testimonials-hero-description">
                  Software is more than code. It is about collaboration,
                  shared learning, solving meaningful problems, and helping
                  people grow. This page brings together feedback from the
                  people I work with.
                </p>

                <div className="testimonials-hero-actions">
                  <a
                    className="testimonials-button testimonials-button--primary"
                    href={profileLinks.linkedin}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Connect on LinkedIn <ArrowIcon diagonal />
                  </a>

                  <Link
                    className="testimonials-button testimonials-button--secondary"
                    to="/projects"
                  >
                    Explore my projects <ArrowIcon />
                  </Link>
                </div>

                <div className="testimonials-hero-note">
                  <span className="testimonials-note-icon">✳</span>
                  Built around real collaboration and honest feedback.
                </div>
              </div>

              <div className="testimonials-visual">
                <div className="testimonials-terminal">
                  <div className="testimonials-terminal-bar">
                    <span />
                    <span />
                    <span />
                    <small>collaboration.log</small>
                  </div>

                  <div className="testimonials-terminal-body">
                    <p>
                      <span className="terminal-muted">01</span>{" "}
                      <span className="terminal-blue">const</span> work =
                      "build together";
                    </p>
                    <p>
                      <span className="terminal-muted">02</span>{" "}
                      <span className="terminal-blue">const</span> growth =
                      "learn together";
                    </p>
                    <p>
                      <span className="terminal-muted">03</span>{" "}
                      <span className="terminal-blue">const</span> impact =
                      "create value";
                    </p>
                    <div className="terminal-divider" />
                    <p>
                      <span className="terminal-green">✓</span> Keep learning.
                    </p>
                    <p>
                      <span className="terminal-green">✓</span> Keep building.
                    </p>
                    <p>
                      <span className="terminal-green">✓</span> Keep sharing.
                    </p>
                    <div className="terminal-cursor-line">
                      <span className="terminal-prompt">&gt;</span>
                      <span className="terminal-cursor" />
                    </div>
                  </div>
                </div>

                <div className="testimonials-floating-card">
                  <div className="testimonials-floating-icon">{"</>"}</div>
                  <div>
                    <strong>Build with purpose.</strong>
                    <span>Grow through collaboration.</span>
                  </div>
                </div>

                <div className="testimonials-orbit testimonials-orbit--one" />
                <div className="testimonials-orbit testimonials-orbit--two" />
              </div>
            </div>
          </div>
        </section>

        <section className="testimonials-project-strip">
          <div className="testimonials-container testimonials-project-strip__inner">
            <div className="testimonials-project-strip__intro">
              <span>THE WORK BEHIND THE JOURNEY</span>
              <p>Projects and communities I help build</p>
            </div>

            <a
              href={profileLinks.codeharborhub}
              target="_blank"
              rel="noreferrer"
              className="testimonials-project-link"
            >
              <span className="project-mini-icon project-mini-icon--blue">
                CH
              </span>
              <span>
                <strong>CodeHarborHub</strong>
                <small>Developer education</small>
              </span>
              <ArrowIcon diagonal />
            </a>

            <a
              href={profileLinks.algo}
              target="_blank"
              rel="noreferrer"
              className="testimonials-project-link"
            >
              <span className="project-mini-icon project-mini-icon--purple">
                A
              </span>
              <span>
                <strong>Algo</strong>
                <small>Data structures & algorithms</small>
              </span>
              <ArrowIcon diagonal />
            </a>

            <a
              href={profileLinks.aiBuddies}
              target="_blank"
              rel="noreferrer"
              className="testimonials-project-link"
            >
              <span className="project-mini-icon project-mini-icon--green">
                AI
              </span>
              <span>
                <strong>AI Buddies</strong>
                <small>AI-focused project</small>
              </span>
              <ArrowIcon diagonal />
            </a>
          </div>
        </section>

        <section className="testimonials-content-section">
          <div className="testimonials-container">
            <div className="testimonials-section-heading">
              <div>
                <div className="testimonials-section-label">
                  THE PEOPLE & THE PROCESS
                </div>
                <h2>
                  Words from the <span>journey.</span>
                </h2>
                <p>
                  Feedback from open-source work, project collaboration, and
                  professional relationships.
                </p>
              </div>

              <label className="testimonials-featured-toggle">
                <input
                  type="checkbox"
                  checked={showFeaturedOnly}
                  onChange={(event) =>
                    setShowFeaturedOnly(event.target.checked)
                  }
                />
                <span className="testimonials-custom-checkbox" />
                Featured only
              </label>
            </div>

            <div
              className="testimonials-filters"
              role="group"
              aria-label="Filter testimonials by category"
            >
              {categories.map((category) => (
                <button
                  key={category}
                  type="button"
                  className={`testimonials-filter ${
                    activeCategory === category
                      ? "testimonials-filter--active"
                      : ""
                  }`}
                  onClick={() => setActiveCategory(category)}
                  aria-pressed={activeCategory === category}
                >
                  {category}
                </button>
              ))}
            </div>

            {allContentIsPlaceholder && (
              <div className="testimonials-editor-note" role="note">
                <span className="testimonials-editor-note__icon">i</span>
                <div>
                  <strong>Content setup preview</strong>
                  <p>
                    The cards below contain clearly marked sample copy, not
                    actual endorsements. Replace each record with a genuine,
                    approved testimonial before publishing this page.
                  </p>
                </div>
              </div>
            )}

            {visibleTestimonials.length > 0 ? (
              <div className="testimonials-grid">
                {visibleTestimonials.map((testimonial) => (
                  <TestimonialCard
                    key={testimonial.id}
                    testimonial={testimonial}
                  />
                ))}
              </div>
            ) : (
              <div className="testimonials-empty">
                <span className="testimonials-empty__icon">
                  <QuoteIcon />
                </span>
                <h3>No featured feedback in this category yet.</h3>
                <p>
                  Try another category or turn off the featured-only filter.
                </p>
                <button
                  type="button"
                  className="testimonials-button testimonials-button--secondary"
                  onClick={() => {
                    setActiveCategory("All");
                    setShowFeaturedOnly(false);
                  }}
                >
                  Reset filters <ArrowIcon />
                </button>
              </div>
            )}

            <p className="testimonials-grid-footer">
              <span className="testimonials-grid-footer__dot" />
              {visibleTestimonials.length}{" "}
              {visibleTestimonials.length === 1 ? "card" : "cards"} displayed
              <span className="testimonials-grid-footer__separator">·</span>
              Feedback should always be genuine and permission-approved.
            </p>
          </div>
        </section>

        <section className="testimonials-cta-section">
          <div className="testimonials-container">
            <div className="testimonials-cta">
              <div className="testimonials-cta-decoration" aria-hidden="true">
                <span />
                <span />
                <span />
              </div>

              <div className="testimonials-cta-content">
                <div className="testimonials-section-label">
                  LET'S BUILD SOMETHING
                </div>
                <h2>
                  Worked with me?
                  <br />
                  <span>Your perspective matters.</span>
                </h2>
                <p>
                  If we have collaborated on a project, open-source initiative,
                  or learning community, I would appreciate your honest
                  feedback. It helps me improve and helps others understand
                  what working together is like.
                </p>

                <div className="testimonials-cta-actions">
                  <a
                    href={`${profileLinks.linkedin}?`}
                    target="_blank"
                    rel="noreferrer"
                    className="testimonials-button testimonials-button--primary"
                  >
                    Connect on LinkedIn <ArrowIcon diagonal />
                  </a>
                  <Link
                    to="/contact"
                    className="testimonials-button testimonials-button--secondary"
                  >
                    Contact me <ArrowIcon />
                  </Link>
                </div>
              </div>

              <div className="testimonials-cta-mark" aria-hidden="true">
                <QuoteIcon />
              </div>
            </div>
          </div>
        </section>

        <footer className="testimonials-footer">
          <div className="testimonials-container testimonials-footer__inner">
            <p>
              <span className="testimonials-footer__symbol">{"</>"}</span>
              Built with curiosity by <strong>Ajay Dhangar</strong>
            </p>

            <div className="testimonials-footer__links">
              <a href={profileLinks.github} target="_blank" rel="noreferrer">
                GitHub
              </a>
              <a
                href={profileLinks.linkedin}
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
              <Link to="/">Portfolio home</Link>
            </div>
          </div>
        </footer>
      </main>

      <style>{`
        .testimonials-page {
          --testimonial-accent: var(--ifm-color-primary, #2e93e2);
          --testimonial-border: var(--ifm-color-emphasis-200);
          --testimonial-muted: var(--ifm-color-emphasis-600);
          --testimonial-surface: var(--ifm-background-surface-color);
          --testimonial-page-bg: var(--ifm-background-color);
          position: relative;
          overflow: hidden;
          color: var(--ifm-font-color-base);
          background: var(--testimonial-page-bg);
        }

        .testimonials-page * {
          box-sizing: border-box;
        }

        .testimonials-container {
          width: min(1160px, calc(100% - 48px));
          margin: 0 auto;
        }

        .testimonials-background-glow {
          position: absolute;
          top: -230px;
          right: -180px;
          width: 540px;
          height: 540px;
          pointer-events: none;
          border-radius: 50%;
          background: radial-gradient(
            circle,
            color-mix(in srgb, var(--testimonial-accent) 13%, transparent),
            transparent 68%
          );
          filter: blur(12px);
        }

        .testimonials-hero {
          position: relative;
          padding: 82px 0 86px;
        }

        .testimonials-eyebrow,
        .testimonials-section-label {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          color: var(--testimonial-accent);
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 1.9px;
        }

        .testimonials-eyebrow {
          margin-bottom: 30px;
          padding: 9px 13px;
          border: 1px solid color-mix(
            in srgb,
            var(--testimonial-accent) 32%,
            transparent
          );
          border-radius: 999px;
          background: color-mix(
            in srgb,
            var(--testimonial-accent) 6%,
            var(--testimonial-page-bg)
          );
        }

        .testimonials-eyebrow-dot,
        .testimonials-grid-footer__dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: var(--testimonial-accent);
          box-shadow: 0 0 12px color-mix(
            in srgb,
            var(--testimonial-accent) 65%,
            transparent
          );
        }

        .testimonials-hero-grid {
          display: grid;
          grid-template-columns: minmax(0, 1.1fr) minmax(320px, 0.9fr);
          align-items: center;
          gap: 62px;
        }

        .testimonials-hero h1 {
          margin: 0;
          font-size: clamp(43px, 6.2vw, 76px);
          font-weight: 850;
          letter-spacing: -3.7px;
          line-height: 1.05;
        }

        .testimonials-hero h1 span,
        .testimonials-section-heading h2 span,
        .testimonials-cta h2 span {
          color: var(--testimonial-accent);
        }

        .testimonials-hero-description {
          max-width: 590px;
          margin: 25px 0 0;
          color: var(--testimonial-muted);
          font-size: 16px;
          line-height: 1.9;
        }

        .testimonials-hero-actions,
        .testimonials-cta-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          margin-top: 29px;
        }

        .testimonials-button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          min-height: 46px;
          padding: 12px 17px;
          border: 1px solid var(--testimonial-border);
          border-radius: 10px;
          font-size: 13px;
          font-weight: 750;
          text-decoration: none !important;
          cursor: pointer;
          transition: transform 180ms ease, border-color 180ms ease,
            background 180ms ease;
        }

        .testimonials-button:hover {
          transform: translateY(-2px);
        }

        .testimonials-button--primary {
          color: #fff !important;
          border-color: var(--testimonial-accent);
          background: var(--testimonial-accent);
          box-shadow: 0 8px 24px color-mix(
            in srgb,
            var(--testimonial-accent) 23%,
            transparent
          );
        }

        .testimonials-button--primary:hover {
          background: color-mix(in srgb, var(--testimonial-accent) 86%, #000);
          color: #fff !important;
        }

        .testimonials-button--secondary {
          color: var(--ifm-font-color-base) !important;
          background: var(--testimonial-surface);
        }

        .testimonials-button--secondary:hover {
          border-color: var(--testimonial-accent);
        }

        .testimonials-hero-note {
          display: flex;
          align-items: center;
          gap: 9px;
          margin-top: 25px;
          color: var(--testimonial-muted);
          font-size: 12px;
        }

        .testimonials-note-icon {
          color: var(--testimonial-accent);
          font-size: 17px;
        }

        .testimonials-visual {
          position: relative;
          display: flex;
          min-height: 340px;
          align-items: center;
          justify-content: center;
        }

        .testimonials-terminal {
          position: relative;
          z-index: 2;
          width: min(100%, 435px);
          overflow: hidden;
          border: 1px solid var(--testimonial-border);
          border-radius: 15px;
          background: var(--testimonial-surface);
          box-shadow: 0 25px 70px rgba(0, 0, 0, 0.12);
          transform: rotate(-2deg);
        }

        .testimonials-terminal-bar {
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 15px 16px;
          border-bottom: 1px solid var(--testimonial-border);
          background: color-mix(
            in srgb,
            var(--ifm-color-emphasis-100) 65%,
            var(--testimonial-surface)
          );
        }

        .testimonials-terminal-bar > span {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: var(--ifm-color-emphasis-400);
        }

        .testimonials-terminal-bar > span:first-child {
          background: #f87171;
        }

        .testimonials-terminal-bar > span:nth-child(2) {
          background: #fbbf24;
        }

        .testimonials-terminal-bar > span:nth-child(3) {
          background: #34d399;
        }

        .testimonials-terminal-bar small {
          margin-left: auto;
          color: var(--testimonial-muted);
          font-family: monospace;
          font-size: 11px;
        }

        .testimonials-terminal-body {
          padding: 23px 20px 20px;
          font-family: var(--ifm-font-family-monospace);
          font-size: clamp(10px, 1.05vw, 12px);
          line-height: 2.1;
        }

        .testimonials-terminal-body p {
          margin: 0;
          white-space: nowrap;
        }

        .terminal-muted {
          margin-right: 10px;
          color: var(--testimonial-muted);
          opacity: 0.65;
        }

        .terminal-blue {
          color: var(--testimonial-accent);
        }

        .terminal-green {
          color: #22a06b;
        }

        .terminal-divider {
          height: 1px;
          margin: 13px 0;
          background: var(--testimonial-border);
        }

        .terminal-prompt {
          color: var(--testimonial-accent);
        }

        .terminal-cursor {
          display: inline-block;
          width: 7px;
          height: 13px;
          margin-left: 7px;
          vertical-align: middle;
          background: var(--testimonial-accent);
          animation: testimonial-blink 1s steps(2, start) infinite;
        }

        .testimonials-floating-card {
          position: absolute;
          z-index: 3;
          right: -5px;
          bottom: 5px;
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 14px 17px;
          border: 1px solid var(--testimonial-border);
          border-radius: 12px;
          background: var(--testimonial-surface);
          box-shadow: 0 12px 36px rgba(0, 0, 0, 0.10);
        }

        .testimonials-floating-icon {
          display: grid;
          width: 43px;
          height: 43px;
          place-items: center;
          border-radius: 10px;
          color: var(--testimonial-accent);
          background: color-mix(
            in srgb,
            var(--testimonial-accent) 11%,
            var(--testimonial-surface)
          );
          font-family: monospace;
          font-weight: 800;
        }

        .testimonials-floating-card strong,
        .testimonials-floating-card span {
          display: block;
        }

        .testimonials-floating-card strong {
          font-size: 12px;
        }

        .testimonials-floating-card span {
          margin-top: 4px;
          color: var(--testimonial-muted);
          font-size: 10px;
        }

        .testimonials-orbit {
          position: absolute;
          border: 1px dashed color-mix(
            in srgb,
            var(--testimonial-accent) 30%,
            transparent
          );
          border-radius: 50%;
          pointer-events: none;
        }

        .testimonials-orbit--one {
          width: 320px;
          height: 320px;
        }

        .testimonials-orbit--two {
          width: 400px;
          height: 400px;
          opacity: 0.5;
        }

        .testimonials-project-strip {
          border-top: 1px solid var(--testimonial-border);
          border-bottom: 1px solid var(--testimonial-border);
          background: color-mix(
            in srgb,
            var(--ifm-color-emphasis-100) 40%,
            var(--testimonial-page-bg)
          );
        }

        .testimonials-project-strip__inner {
          display: grid;
          grid-template-columns: 1.05fr repeat(3, 1fr);
          align-items: center;
          gap: 22px;
          padding-top: 24px;
          padding-bottom: 24px;
        }

        .testimonials-project-strip__intro > span {
          color: var(--testimonial-muted);
          font-size: 9px;
          font-weight: 800;
          letter-spacing: 1.2px;
        }

        .testimonials-project-strip__intro p {
          margin: 7px 0 0;
          font-size: 12px;
          font-weight: 700;
        }

        .testimonials-project-link {
          display: flex;
          min-width: 0;
          align-items: center;
          gap: 10px;
          color: var(--ifm-font-color-base) !important;
          text-decoration: none !important;
        }

        .project-mini-icon {
          display: grid;
          width: 37px;
          height: 37px;
          flex-shrink: 0;
          place-items: center;
          border: 1px solid var(--testimonial-border);
          border-radius: 10px;
          font-size: 11px;
          font-weight: 850;
        }

        .project-mini-icon--blue {
          color: #2e93e2;
          background: rgba(46, 147, 226, 0.10);
        }

        .project-mini-icon--purple {
          color: #a78bfa;
          background: rgba(139, 92, 246, 0.10);
        }

        .project-mini-icon--green {
          color: #34d399;
          background: rgba(16, 185, 129, 0.10);
        }

        .testimonials-project-link > span:nth-child(2) {
          min-width: 0;
        }

        .testimonials-project-link strong,
        .testimonials-project-link small {
          display: block;
          overflow-wrap: anywhere;
        }

        .testimonials-project-link strong {
          font-size: 11px;
        }

        .testimonials-project-link small {
          margin-top: 4px;
          color: var(--testimonial-muted);
          font-size: 10px;
        }

        .testimonials-project-link > svg {
          width: 13px;
          margin-left: auto;
          flex-shrink: 0;
          color: var(--testimonial-muted);
        }

        .testimonials-content-section {
          padding: 94px 0 88px;
        }

        .testimonials-section-heading {
          display: flex;
          align-items: end;
          justify-content: space-between;
          gap: 30px;
        }

        .testimonials-section-heading h2 {
          margin: 13px 0 12px;
          font-size: clamp(30px, 4vw, 46px);
          font-weight: 850;
          letter-spacing: -1.8px;
          line-height: 1.15;
        }

        .testimonials-section-heading > div > p {
          max-width: 580px;
          margin: 0;
          color: var(--testimonial-muted);
          font-size: 14px;
          line-height: 1.8;
        }

        .testimonials-featured-toggle {
          display: inline-flex;
          flex-shrink: 0;
          align-items: center;
          gap: 10px;
          color: var(--testimonial-muted);
          font-size: 12px;
          cursor: pointer;
        }

        .testimonials-featured-toggle input {
          position: absolute;
          width: 1px;
          height: 1px;
          overflow: hidden;
          clip-path: inset(50%);
        }

        .testimonials-custom-checkbox {
          position: relative;
          width: 17px;
          height: 17px;
          border: 1px solid var(--testimonial-border);
          border-radius: 5px;
          background: var(--testimonial-surface);
        }

        .testimonials-featured-toggle input:checked
          + .testimonials-custom-checkbox {
          border-color: var(--testimonial-accent);
          background: var(--testimonial-accent);
        }

        .testimonials-featured-toggle input:checked
          + .testimonials-custom-checkbox::after {
          position: absolute;
          top: 1px;
          left: 5px;
          width: 5px;
          height: 9px;
          border: solid white;
          border-width: 0 2px 2px 0;
          content: "";
          transform: rotate(45deg);
        }

        .testimonials-featured-toggle input:focus-visible
          + .testimonials-custom-checkbox {
          outline: 2px solid var(--testimonial-accent);
          outline-offset: 3px;
        }

        .testimonials-filters {
          display: flex;
          flex-wrap: wrap;
          gap: 9px;
          margin: 32px 0 26px;
        }

        .testimonials-filter {
          min-height: 38px;
          padding: 9px 15px;
          border: 1px solid var(--testimonial-border);
          border-radius: 9px;
          color: var(--testimonial-muted);
          background: var(--testimonial-surface);
          font-size: 11px;
          font-weight: 700;
          cursor: pointer;
          transition: all 160ms ease;
        }

        .testimonials-filter:hover {
          border-color: var(--testimonial-accent);
          color: var(--testimonial-accent);
        }

        .testimonials-filter--active {
          border-color: var(--testimonial-accent);
          color: white;
          background: var(--testimonial-accent);
        }

        .testimonials-filter--active:hover {
          color: white;
        }

        .testimonials-editor-note {
          display: flex;
          gap: 13px;
          align-items: flex-start;
          margin-bottom: 22px;
          padding: 16px 18px;
          border: 1px solid color-mix(
            in srgb,
            var(--testimonial-accent) 35%,
            var(--testimonial-border)
          );
          border-radius: 12px;
          background: color-mix(
            in srgb,
            var(--testimonial-accent) 5%,
            var(--testimonial-surface)
          );
        }

        .testimonials-editor-note__icon {
          display: grid;
          width: 22px;
          height: 22px;
          flex-shrink: 0;
          place-items: center;
          border: 1px solid var(--testimonial-accent);
          border-radius: 50%;
          color: var(--testimonial-accent);
          font-size: 12px;
          font-weight: 800;
        }

        .testimonials-editor-note strong {
          display: block;
          font-size: 12px;
        }

        .testimonials-editor-note p {
          margin: 5px 0 0;
          color: var(--testimonial-muted);
          font-size: 12px;
          line-height: 1.75;
        }

        .testimonials-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 20px;
        }

        .testimonial-card {
          display: flex;
          min-width: 0;
          flex-direction: column;
          padding: 25px;
          border: 1px solid var(--testimonial-border);
          border-radius: 15px;
          background: var(--testimonial-surface);
          transition: border-color 180ms ease, transform 180ms ease,
            box-shadow 180ms ease;
        }

        .testimonial-card:hover {
          transform: translateY(-3px);
          border-color: color-mix(
            in srgb,
            var(--testimonial-accent) 55%,
            var(--testimonial-border)
          );
          box-shadow: 0 16px 38px rgba(0, 0, 0, 0.06);
        }

        .testimonial-card--featured {
          background: linear-gradient(
            135deg,
            color-mix(in srgb, var(--testimonial-accent) 5%, var(--testimonial-surface)),
            var(--testimonial-surface) 70%
          );
        }

        .testimonial-card__top {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .testimonial-card__category {
          padding: 7px 10px;
          border: 1px solid var(--testimonial-border);
          border-radius: 7px;
          color: var(--testimonial-accent);
          background: color-mix(
            in srgb,
            var(--testimonial-accent) 6%,
            var(--testimonial-surface)
          );
          font-size: 10px;
          font-weight: 750;
        }

        .testimonial-card__quote-icon {
          display: grid;
          place-items: center;
          color: color-mix(
            in srgb,
            var(--testimonial-accent) 65%,
            var(--testimonial-muted)
          );
          opacity: 0.8;
        }

        .testimonial-card__quote-icon svg {
          width: 27px;
          height: 27px;
        }

        .testimonial-placeholder-notice {
          display: flex;
          align-items: center;
          gap: 7px;
          margin-top: 22px;
          color: var(--testimonial-muted);
          font-size: 10px;
          font-weight: 650;
        }

        .testimonial-placeholder-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #d97706;
        }

        .testimonial-card__quote {
          flex: 1;
          margin: 20px 0 26px;
          padding: 0;
          border: 0;
          color: var(--ifm-font-color-base);
          font-size: 14px;
          font-style: normal;
          line-height: 1.95;
        }

        .testimonial-card__person {
          display: flex;
          align-items: center;
          gap: 12px;
          padding-top: 19px;
          border-top: 1px solid var(--testimonial-border);
        }

        .testimonial-avatar {
          display: grid;
          width: 44px;
          height: 44px;
          flex-shrink: 0;
          place-items: center;
          border: 1px solid color-mix(
            in srgb,
            var(--testimonial-accent) 35%,
            var(--testimonial-border)
          );
          border-radius: 50%;
          color: var(--testimonial-accent);
          background: color-mix(
            in srgb,
            var(--testimonial-accent) 10%,
            var(--testimonial-surface)
          );
          font-size: 12px;
          font-weight: 850;
        }

        .testimonial-card__person-info {
          min-width: 0;
        }

        .testimonial-card__person-info h3 {
          margin: 0;
          font-size: 12px;
          font-weight: 800;
        }

        .testimonial-card__person-info p {
          margin: 4px 0;
          color: var(--testimonial-muted);
          font-size: 10px;
        }

        .testimonial-card__person-info > span {
          color: var(--testimonial-muted);
          font-size: 10px;
        }

        .testimonial-card__profile-link {
          display: grid;
          width: 34px;
          height: 34px;
          flex-shrink: 0;
          place-items: center;
          margin-left: auto;
          border: 1px solid var(--testimonial-border);
          border-radius: 9px;
          color: var(--testimonial-muted);
        }

        .testimonial-card__profile-link:hover {
          border-color: var(--testimonial-accent);
          color: var(--testimonial-accent);
        }

        .testimonials-grid-footer {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 9px;
          margin: 22px 0 0;
          color: var(--testimonial-muted);
          font-size: 11px;
        }

        .testimonials-grid-footer__dot {
          width: 6px;
          height: 6px;
        }

        .testimonials-grid-footer__separator {
          opacity: 0.5;
        }

        .testimonials-empty {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 55px 20px;
          border: 1px dashed var(--testimonial-border);
          border-radius: 15px;
          text-align: center;
        }

        .testimonials-empty__icon {
          color: var(--testimonial-accent);
        }

        .testimonials-empty h3 {
          margin: 18px 0 8px;
          font-size: 17px;
        }

        .testimonials-empty p {
          margin: 0 0 20px;
          color: var(--testimonial-muted);
          font-size: 13px;
        }

        .testimonials-cta-section {
          padding: 0 0 85px;
        }

        .testimonials-cta {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 35px;
          overflow: hidden;
          padding: 50px;
          border: 1px solid color-mix(
            in srgb,
            var(--testimonial-accent) 35%,
            var(--testimonial-border)
          );
          border-radius: 20px;
          background: linear-gradient(
            125deg,
            color-mix(in srgb, var(--testimonial-accent) 9%, var(--testimonial-surface)),
            var(--testimonial-surface) 72%
          );
        }

        .testimonials-cta-content {
          position: relative;
          z-index: 1;
          max-width: 690px;
        }

        .testimonials-cta h2 {
          margin: 15px 0;
          font-size: clamp(30px, 4vw, 43px);
          font-weight: 850;
          letter-spacing: -1.8px;
          line-height: 1.2;
        }

        .testimonials-cta-content > p {
          max-width: 610px;
          margin: 0;
          color: var(--testimonial-muted);
          font-size: 13px;
          line-height: 1.9;
        }

        .testimonials-cta-mark {
          position: relative;
          z-index: 1;
          display: grid;
          width: 115px;
          height: 115px;
          flex-shrink: 0;
          place-items: center;
          border: 1px solid color-mix(
            in srgb,
            var(--testimonial-accent) 30%,
            transparent
          );
          border-radius: 27px;
          color: var(--testimonial-accent);
          background: color-mix(
            in srgb,
            var(--testimonial-accent) 8%,
            var(--testimonial-surface)
          );
          transform: rotate(7deg);
        }

        .testimonials-cta-mark svg {
          width: 55px;
          height: 55px;
        }

        .testimonials-cta-decoration {
          position: absolute;
          top: -80px;
          right: -30px;
          display: flex;
          gap: 15px;
          transform: rotate(30deg);
          opacity: 0.5;
        }

        .testimonials-cta-decoration span {
          width: 34px;
          height: 300px;
          border: 1px solid color-mix(
            in srgb,
            var(--testimonial-accent) 22%,
            transparent
          );
          border-radius: 99px;
        }

        .testimonials-footer {
          border-top: 1px solid var(--testimonial-border);
        }

        .testimonials-footer__inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
          padding-top: 23px;
          padding-bottom: 23px;
        }

        .testimonials-footer__inner > p {
          display: flex;
          align-items: center;
          gap: 8px;
          margin: 0;
          color: var(--testimonial-muted);
          font-size: 11px;
        }

        .testimonials-footer__inner strong {
          color: var(--ifm-font-color-base);
        }

        .testimonials-footer__symbol {
          color: var(--testimonial-accent);
          font-family: monospace;
          font-weight: 900;
        }

        .testimonials-footer__links {
          display: flex;
          flex-wrap: wrap;
          gap: 19px;
        }

        .testimonials-footer__links a {
          color: var(--testimonial-muted);
          font-size: 11px;
          text-decoration: none;
        }

        .testimonials-footer__links a:hover {
          color: var(--testimonial-accent);
        }

        @keyframes testimonial-blink {
          to {
            visibility: hidden;
          }
        }

        @media (max-width: 996px) {
          .testimonials-hero-grid {
            grid-template-columns: 1fr;
            gap: 30px;
          }

          .testimonials-hero-content {
            max-width: 720px;
          }

          .testimonials-visual {
            min-height: 340px;
          }

          .testimonials-project-strip__inner {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 22px;
          }

          .testimonials-project-strip__intro {
            grid-column: 1 / -1;
          }

          .testimonials-cta {
            padding: 36px;
          }
        }

        @media (max-width: 640px) {
          .testimonials-container {
            width: min(100% - 32px, 1160px);
          }

          .testimonials-hero {
            padding: 55px 0 55px;
          }

          .testimonials-eyebrow {
            margin-bottom: 24px;
            font-size: 9px;
            letter-spacing: 1.3px;
          }

          .testimonials-hero h1 {
            font-size: clamp(40px, 12vw, 58px);
            letter-spacing: -2.4px;
          }

          .testimonials-hero-description {
            font-size: 14px;
          }

          .testimonials-hero-actions {
            align-items: stretch;
            flex-direction: column;
          }

          .testimonials-button {
            width: 100%;
          }

          .testimonials-visual {
            min-height: 290px;
          }

          .testimonials-terminal {
            width: 100%;
            transform: none;
          }

          .testimonials-terminal-body {
            padding: 18px 12px;
            font-size: 9px;
          }

          .testimonials-floating-card {
            right: -2px;
            bottom: -8px;
            padding: 10px;
          }

          .testimonials-floating-icon {
            width: 34px;
            height: 34px;
          }

          .testimonials-floating-card strong {
            font-size: 10px;
          }

          .testimonials-floating-card span {
            font-size: 9px;
          }

          .testimonials-orbit--one {
            width: 260px;
            height: 260px;
          }

          .testimonials-orbit--two {
            width: 300px;
            height: 300px;
          }

          .testimonials-project-strip__inner {
            grid-template-columns: 1fr;
            gap: 18px;
          }

          .testimonials-project-strip__intro {
            grid-column: auto;
          }

          .testimonials-project-link {
            padding-bottom: 14px;
            border-bottom: 1px solid var(--testimonial-border);
          }

          .testimonials-project-link:last-child {
            padding-bottom: 0;
            border-bottom: 0;
          }

          .testimonials-content-section {
            padding: 65px 0;
          }

          .testimonials-section-heading {
            align-items: flex-start;
            flex-direction: column;
            gap: 20px;
          }

          .testimonials-section-heading h2 {
            font-size: 34px;
            letter-spacing: -1.3px;
          }

          .testimonials-filters {
            gap: 7px;
          }

          .testimonials-filter {
            padding: 8px 11px;
            font-size: 10px;
          }

          .testimonials-grid {
            grid-template-columns: 1fr;
            gap: 15px;
          }

          .testimonial-card {
            padding: 20px;
          }

          .testimonials-grid-footer {
            line-height: 1.8;
          }

          .testimonials-cta-section {
            padding-bottom: 55px;
          }

          .testimonials-cta {
            padding: 27px 21px;
            border-radius: 15px;
          }

          .testimonials-cta-mark {
            display: none;
          }

          .testimonials-cta h2 {
            font-size: 32px;
            letter-spacing: -1.2px;
          }

          .testimonials-cta-actions {
            flex-direction: column;
          }

          .testimonials-footer__inner {
            align-items: flex-start;
            flex-direction: column;
          }

          .testimonials-footer__links {
            gap: 16px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .testimonials-page *,
          .testimonials-page *::before,
          .testimonials-page *::after {
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
