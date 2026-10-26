
import React, { useMemo, useState } from "react";
import Layout from "@theme/Layout";
import Head from "@docusaurus/Head";

type ResumeSection = {
  id: string;
  label: string;
};

const PROFILE = {
  name: "Ajay Dhangar",
  headline: "Full Stack Developer | Open-Source Founder | AI Builder",
  location: "Madhya Pradesh, India",
  degree: "B.Tech in Computer Science and Engineering",
  university: "Mandsaur University",
  graduation: "2024",
  portfolio: "https://ajay-dhangar.github.io/",
  github: "https://github.com/ajay-dhangar",
  linkedin: "https://www.linkedin.com/in/ajay-dhangar/",
  codeHarborHub: "https://codeharborhub.github.io/",
  codeHarborHubRepo:
    "https://github.com/CodeHarborHub/codeharborhub.github.io",
  algo: "https://ajay-dhangar.github.io/algo/",
  aiBuddies: "https://ajay-dhangar.github.io/ai-buddies/",
  email: "ajaydhangar49@gmail.com",
};

const sections: ResumeSection[] = [
  { id: "summary", label: "Professional summary" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Selected projects" },
  { id: "skills", label: "Technical skills" },
  { id: "education", label: "Education" },
  { id: "leadership", label: "Leadership & community" },
];

const skills = [
  {
    title: "Frontend development",
    items: ["HTML5", "CSS3", "JavaScript", "TypeScript", "React", "Tailwind CSS"],
  },
  {
    title: "Full-stack & backend",
    items: ["Node.js", "REST APIs", "Web application architecture"],
  },
  {
    title: "Documentation & platforms",
    items: ["Docusaurus", "MDX", "GitHub Pages", "Technical documentation"],
  },
  {
    title: "AI & product development",
    items: ["AI-powered application concepts", "AI product integration", "UI/UX"],
  },
  {
    title: "Tools & collaboration",
    items: ["Git", "GitHub", "Open-source workflows", "Responsive design"],
  },
];

const projects = [
  {
    name: "CodeHarborHub",
    role: "Founder & Project Maintainer",
    description:
      "An open-source learning platform focused on accessible programming education, structured tutorials, developer resources, and community contributions.",
    technologies: ["Docusaurus", "React", "MDX", "CSS", "GitHub Pages"],
    url: PROFILE.codeHarborHub,
    repository: PROFILE.codeHarborHubRepo,
  },
  {
    name: "AI Buddies",
    role: "Project Builder",
    description:
      "An AI-focused project exploring practical AI-powered experiences and an accessible interface for users to interact with AI-based features.",
    technologies: ["Docusaurus", "React", "JavaScript", "AI integration"],
    url: PROFILE.aiBuddies,
    repository: "https://github.com/ajay-dhangar/ai-buddies",
  },
  {
    name: "Algo",
    role: "Project Maintainer",
    description:
      "A developer learning resource focused on data structures and algorithms, with educational content and opportunities for open-source collaboration.",
    technologies: ["Docusaurus", "React", "JavaScript", "GitHub"],
    url: PROFILE.algo,
    repository: "https://github.com/ajay-dhangar/algo",
  },
];

function Icon({
  name,
  size = 18,
}: {
  name: "download" | "print" | "external" | "check" | "file" | "arrow";
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
    case "download":
      return (
        <svg {...common}>
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
          <path d="m7 10 5 5 5-5M12 15V3" />
        </svg>
      );
    case "print":
      return (
        <svg {...common}>
          <path d="M6 9V2h12v7M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
          <path d="M6 14h12v8H6zM18 12h.01" />
        </svg>
      );
    case "external":
      return (
        <svg {...common}>
          <path d="M14 3h7v7M10 14 21 3" />
          <path d="M19 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h6" />
        </svg>
      );
    case "check":
      return (
        <svg {...common}>
          <path d="m5 12 4 4L19 6" />
        </svg>
      );
    case "file":
      return (
        <svg {...common}>
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <path d="M14 2v6h6M8 13h8M8 17h8" />
        </svg>
      );
    case "arrow":
      return (
        <svg {...common}>
          <path d="M7 17 17 7M7 7h10v10" />
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
    <div className="mb-6">
      <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-[var(--ifm-color-primary)]">
        {eyebrow}
      </p>
      <h2 className="mb-2 text-2xl font-bold tracking-tight sm:text-3xl">
        {title}
      </h2>
      {description && (
        <p className="m-0 max-w-2xl text-sm leading-7 opacity-70">
          {description}
        </p>
      )}
    </div>
  );
}

function ExternalLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--ifm-color-primary)] hover:underline"
    >
      {children}
      <Icon name="external" size={14} />
    </a>
  );
}

export default function ResumePage(): React.ReactElement {
  const [activeSection, setActiveSection] = useState("summary");
  const [showAllSkills, setShowAllSkills] = useState(false);

  const visibleSkills = useMemo(
    () => (showAllSkills ? skills : skills.slice(0, 4)),
    [showAllSkills],
  );

  const handlePrint = () => {
    if (typeof window !== "undefined") {
      window.print();
    }
  };

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <Layout
      title="Resume"
      description="Explore Ajay Dhangar's professional resume, software development experience, technical skills, education, and open-source projects."
    >
      <Head>
        <meta property="og:title" content="Ajay Dhangar | Professional Resume" />
        <meta
          property="og:description"
          content="Full Stack Developer, AI Builder, and Founder of CodeHarborHub. Explore professional experience, projects, and technical skills."
        />
        <meta property="og:type" content="profile" />
        <meta property="og:url" content={`${PROFILE.portfolio}resume/`} />
        <meta
          name="keywords"
          content="Ajay Dhangar resume, Full Stack Developer resume, React Developer, JavaScript Developer, Open Source, AI Builder, CodeHarborHub"
        />
        <meta name="robots" content="index, follow" />
      </Head>

      <main className="resume-page">
        <style>{`
          .resume-page {
            --resume-border: var(--ifm-color-emphasis-200);
            --resume-muted: var(--ifm-color-emphasis-600);
            --resume-surface: var(--ifm-background-surface-color);
            color: var(--ifm-font-color-base);
          }

          .resume-page * {
            box-sizing: border-box;
          }

          .resume-page .resume-card {
            border: 1px solid var(--resume-border);
            border-radius: 20px;
            background: var(--resume-surface);
            transition: border-color 180ms ease, transform 180ms ease;
          }

          .resume-page .resume-card:hover {
            border-color: var(--ifm-color-primary);
          }

          .resume-page .resume-anchor {
            scroll-margin-top: 100px;
          }

          .resume-page .resume-nav-link {
            display: flex;
            width: 100%;
            align-items: center;
            gap: 10px;
            border-radius: 10px;
            padding: 10px 12px;
            text-align: left;
            font-size: 13px;
            transition: background 160ms ease, color 160ms ease;
          }

          .resume-page .resume-nav-link:hover,
          .resume-page .resume-nav-link.active {
            background: color-mix(in srgb, var(--ifm-color-primary) 10%, transparent);
            color: var(--ifm-color-primary);
          }

          .resume-page .resume-pill {
            display: inline-flex;
            align-items: center;
            border: 1px solid var(--resume-border);
            border-radius: 999px;
            padding: 5px 10px;
            font-size: 11px;
            font-weight: 600;
            line-height: 1.5;
          }

          .resume-page .resume-action {
            display: inline-flex;
            min-height: 44px;
            align-items: center;
            justify-content: center;
            gap: 9px;
            border-radius: 12px;
            padding: 10px 16px;
            font-size: 13px;
            font-weight: 700;
            transition: opacity 160ms ease, transform 160ms ease;
          }

          .resume-page .resume-action:hover {
            opacity: 0.88;
            transform: translateY(-1px);
            text-decoration: none;
          }

          .resume-page .resume-action-primary {
            background: var(--ifm-color-primary);
            color: white;
          }

          .resume-page .resume-action-secondary {
            border: 1px solid var(--resume-border);
            color: var(--ifm-font-color-base);
          }

          @media print {
            @page {
              size: A4;
              margin: 12mm;
            }

            html,
            body {
              background: white !important;
              color: #171717 !important;
              font-size: 9.5pt !important;
              print-color-adjust: exact;
              -webkit-print-color-adjust: exact;
            }

            body * {
              visibility: hidden !important;
            }

            .resume-print-area,
            .resume-print-area * {
              visibility: visible !important;
            }

            .resume-print-area {
              position: absolute !important;
              left: 0 !important;
              top: 0 !important;
              width: 100% !important;
              padding: 0 !important;
              margin: 0 !important;
              color: #171717 !important;
              background: white !important;
            }

            .resume-print-area .resume-card {
              border: 0 !important;
              border-radius: 0 !important;
              box-shadow: none !important;
              background: white !important;
            }

            .resume-print-area a {
              color: #171717 !important;
              text-decoration: none !important;
            }

            .resume-print-area .print-hide,
            .resume-print-area .no-print {
              display: none !important;
            }

            .resume-print-area section {
              break-inside: avoid;
            }

            .resume-print-area h1 {
              font-size: 25pt !important;
            }

            .resume-print-area h2 {
              font-size: 13pt !important;
            }

            .resume-print-area h3 {
              font-size: 10pt !important;
            }

            .resume-print-area .print-compact {
              gap: 10px !important;
            }

            .resume-print-area .print-small {
              font-size: 8.5pt !important;
              line-height: 1.45 !important;
            }

            .resume-print-area .print-link::after {
              content: "";
            }

            .resume-page {
              padding: 0 !important;
            }
          }

          @media (prefers-reduced-motion: reduce) {
            .resume-page *,
            .resume-page *::before,
            .resume-page *::after {
              scroll-behavior: auto !important;
              transition-duration: 0.01ms !important;
            }
          }
        `}</style>

        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
          {/* Breadcrumb */}
          <div className="print-hide mb-7 flex flex-wrap items-center gap-2 text-xs opacity-60">
            <a href="/" className="hover:opacity-100">
              Home
            </a>
            <span>/</span>
            <span>Career</span>
            <span>/</span>
            <span className="font-semibold opacity-100">Resume</span>
          </div>

          {/* Hero */}
          <section className="resume-card relative mb-8 overflow-hidden p-6 sm:p-9 lg:p-11">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-16 -top-24 h-64 w-64 rounded-full opacity-20 blur-3xl"
              style={{
                background:
                  "radial-gradient(circle, var(--ifm-color-primary), transparent 70%)",
              }}
            />

            <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <div className="mb-5 flex flex-wrap items-center gap-2">
                  <span className="resume-pill">
                    <span
                      className="mr-2 inline-block h-2 w-2 rounded-full"
                      style={{ background: "var(--ifm-color-primary)" }}
                    />
                    PROFESSIONAL RESUME
                  </span>
                  <span className="resume-pill">Software Development</span>
                </div>

                <h1 className="mb-3 text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">
                  Ajay{" "}
                  <span style={{ color: "var(--ifm-color-primary)" }}>
                    Dhangar
                  </span>
                </h1>

                <p className="mb-4 max-w-2xl text-lg font-semibold leading-8 sm:text-xl">
                  Full Stack Developer · Open-Source Founder · AI Builder
                </p>

                <p className="mb-6 max-w-2xl text-sm leading-7 opacity-75 sm:text-base">
                  I build web applications, developer learning resources, and
                  open-source projects. My work combines software development,
                  technical documentation, and community-focused product
                  building.
                </p>

                <div className="mb-6 flex flex-wrap gap-x-5 gap-y-3 text-sm opacity-75">
                  <span className="inline-flex items-center gap-2">
                    <span aria-hidden="true">⌖</span>
                    {PROFILE.location}
                  </span>
                  <a
                    href={PROFILE.portfolio}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 hover:underline"
                  >
                    <Icon name="external" size={14} />
                    Portfolio
                  </a>
                  <a
                    href={PROFILE.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 hover:underline"
                  >
                    <Icon name="external" size={14} />
                    GitHub
                  </a>
                  <a
                    href={PROFILE.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 hover:underline"
                  >
                    <Icon name="external" size={14} />
                    LinkedIn
                  </a>
                </div>

                <div className="print-hide flex flex-wrap gap-3">
                  <button
                    type="button"
                    onClick={handlePrint}
                    className="resume-action resume-action-primary"
                  >
                    <Icon name="print" />
                    Print / Save as PDF
                  </button>
                  <a
                    href="#resume-content"
                    className="resume-action resume-action-secondary"
                  >
                    <Icon name="file" />
                    View resume
                  </a>
                </div>
              </div>

              <div className="hidden w-52 lg:block">
                <div
                  className="relative mx-auto flex aspect-square w-44 items-center justify-center rounded-[32px] border"
                  style={{
                    borderColor: "var(--resume-border)",
                    background:
                      "linear-gradient(145deg, color-mix(in srgb, var(--ifm-color-primary) 15%, var(--resume-surface)), var(--resume-surface))",
                  }}
                >
                  <div
                    className="flex items-center justify-center rounded-[28px] text-4xl font-black text-white shadow-xl"
                    style={{ background: "var(--ifm-color-primary)" }}
                    aria-label="Ajay Dhangar initials"
                  >
                    <img src="/img/profile.jpeg" alt="Ajay Dhangar" className="w-auto h-full" />
                  </div>
                  <div
                    className="absolute -bottom-3 -right-3 rounded-xl border px-3 py-2 text-xs font-bold"
                    style={{
                      background: "var(--resume-surface)",
                      borderColor: "var(--resume-border)",
                    }}
                  >
                    Developer
                  </div>
                </div>
                <p className="mt-6 text-center text-xs opacity-60">
                  Building · Learning · Contributing
                </p>
              </div>
            </div>
          </section>

          {/* Main layout */}
          <div
            id="resume-content"
            className="grid items-start gap-7 lg:grid-cols-[235px_minmax(0,1fr)]"
          >
            {/* Sidebar */}
            <aside className="print-hide space-y-5 lg:sticky lg:top-6">
              <div className="resume-card p-4">
                <p className="mb-3 px-3 text-xs font-bold uppercase tracking-[0.16em] opacity-50">
                  On this page
                </p>
                <nav aria-label="Resume sections" className="space-y-1">
                  {sections.map((section, index) => (
                    <button
                      type="button"
                      key={section.id}
                      onClick={() => scrollToSection(section.id)}
                      className={`resume-nav-link ${
                        activeSection === section.id ? "active" : ""
                      }`}
                    >
                      <span className="w-5 text-xs opacity-50">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      {section.label}
                    </button>
                  ))}
                </nav>
              </div>

              <div className="resume-card p-5">
                <div
                  className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl"
                  style={{
                    background:
                      "color-mix(in srgb, var(--ifm-color-primary) 12%, transparent)",
                    color: "var(--ifm-color-primary)",
                  }}
                >
                  <Icon name="file" size={20} />
                </div>
                <h3 className="mb-2 text-base font-bold">Resume PDF</h3>
                <p className="mb-4 text-xs leading-6 opacity-65">
                  Generate a printable version of this page, or save it as a
                  PDF from your browser.
                </p>
                <button
                  type="button"
                  onClick={handlePrint}
                  className="resume-action resume-action-secondary w-full"
                >
                  <Icon name="download" size={16} />
                  Save / Print
                </button>
                <p className="mb-0 mt-3 text-[11px] leading-5 opacity-50">
                  Choose “Save as PDF” in the print dialog.
                </p>
              </div>

              <div className="resume-card p-5">
                <h3 className="mb-2 text-sm font-bold">Connect professionally</h3>
                <div className="space-y-3 text-sm">
                  <ExternalLink href={PROFILE.linkedin}>LinkedIn profile</ExternalLink>
                  <ExternalLink href={PROFILE.github}>GitHub profile</ExternalLink>
                  <ExternalLink href={PROFILE.portfolio}>Personal portfolio</ExternalLink>
                </div>
              </div>
            </aside>

            {/* Resume body */}
            <div className="resume-print-area min-w-0 space-y-6">
              {/* Summary */}
              <section
                id="summary"
                className="resume-card resume-anchor p-6 sm:p-8"
              >
                <SectionHeading
                  eyebrow="01 / Introduction"
                  title="Professional summary"
                  description="A concise overview for recruiters and hiring teams."
                />

                <p className="print-small text-sm leading-8 opacity-80 sm:text-base">
                  Computer Science and Engineering graduate with a practical
                  focus on web development, React-based interfaces, developer
                  education, and open-source software. Founder of CodeHarborHub,
                  an educational initiative aimed at making programming
                  resources more accessible. Builds and maintains projects
                  including CodeHarborHub, Algo, and AI Buddies. Also brings
                  experience in computer operations and data-related workflows
                  through a current role at PACS Gujarda, Jila Sahakari Bank
                  Maryadit, Mandsaur. Interested in software engineering,
                  full-stack development, AI-enabled applications, and
                  collaborative product development.
                </p>

                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  {[
                    "Computer Science & Engineering graduate",
                    "Founder of CodeHarborHub",
                    "Hands-on web and documentation projects",
                    "Open-source project maintenance",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-start gap-2.5 text-sm"
                    >
                      <span
                        className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full"
                        style={{
                          color: "var(--ifm-color-primary)",
                          background:
                            "color-mix(in srgb, var(--ifm-color-primary) 12%, transparent)",
                        }}
                      >
                        <Icon name="check" size={13} />
                      </span>
                      <span className="opacity-80">{item}</span>
                    </div>
                  ))}
                </div>
              </section>

              {/* Experience */}
              <section
                id="experience"
                className="resume-card resume-anchor p-6 sm:p-8"
              >
                <SectionHeading
                  eyebrow="02 / Career"
                  title="Experience"
                  description="Professional responsibilities and ongoing software initiatives."
                />

                <div className="space-y-7">
                  <article className="relative border-l-2 pl-5 sm:pl-6" style={{ borderColor: "var(--resume-border)" }}>
                    <span
                      className="absolute -left-[7px] top-1 h-3 w-3 rounded-full"
                      style={{ background: "var(--ifm-color-primary)" }}
                    />
                    <div className="mb-2 flex flex-wrap items-start justify-between gap-2">
                      <div>
                        <h3 className="mb-1 text-lg font-bold">
                          Computer Operator
                        </h3>
                        <p className="mb-0 text-sm font-semibold opacity-70">
                          PACS Gujarda · Jila Sahakari Bank Maryadit, Mandsaur
                        </p>
                      </div>
                      <span className="resume-pill">Current role</span>
                    </div>
                    <p className="mb-3 text-xs opacity-55">
                      Operations · Data management · Administrative systems
                    </p>
                    <ul className="print-small space-y-2 pl-5 text-sm leading-7 opacity-80">
                      <li>
                        Support computer-based operational and administrative
                        workflows at the society.
                      </li>
                      <li>
                        Work with Public Distribution System (PDS) operator
                        activities and associated records.
                      </li>
                      <li>
                        Handle Kisan Credit Card (KCC) data-related work and
                        record maintenance.
                      </li>
                      <li>
                        Assist with fertilizer-related operational data and
                        documentation.
                      </li>
                    </ul>
                  </article>

                  <article className="relative border-l-2 pl-5 sm:pl-6" style={{ borderColor: "var(--resume-border)" }}>
                    <span
                      className="absolute -left-[7px] top-1 h-3 w-3 rounded-full"
                      style={{ background: "var(--ifm-color-primary)" }}
                    />
                    <div className="mb-2 flex flex-wrap items-start justify-between gap-2">
                      <div>
                        <h3 className="mb-1 text-lg font-bold">
                          Founder & Project Maintainer
                        </h3>
                        <p className="mb-0 text-sm font-semibold opacity-70">
                          CodeHarborHub
                        </p>
                      </div>
                      <span className="resume-pill">Ongoing</span>
                    </div>
                    <ul className="print-small space-y-2 pl-5 text-sm leading-7 opacity-80">
                      <li>
                        Lead an open-source educational platform focused on
                        programming tutorials and developer learning resources.
                      </li>
                      <li>
                        Develop and maintain documentation pages and
                        user-facing website experiences.
                      </li>
                      <li>
                        Organize educational content and support community
                        participation in open-source development.
                      </li>
                    </ul>
                    <div className="mt-3">
                      <ExternalLink href={PROFILE.codeHarborHub}>
                        Visit CodeHarborHub
                      </ExternalLink>
                    </div>
                  </article>

                  <article className="relative border-l-2 pl-5 sm:pl-6" style={{ borderColor: "var(--resume-border)" }}>
                    <span
                      className="absolute -left-[7px] top-1 h-3 w-3 rounded-full"
                      style={{ background: "var(--ifm-color-primary)" }}
                    />
                    <div className="mb-2 flex flex-wrap items-start justify-between gap-2">
                      <div>
                        <h3 className="mb-1 text-lg font-bold">
                          AI & Web Project Builder
                        </h3>
                        <p className="mb-0 text-sm font-semibold opacity-70">
                          Independent project development
                        </p>
                      </div>
                      <span className="resume-pill">Project-based</span>
                    </div>
                    <ul className="print-small space-y-2 pl-5 text-sm leading-7 opacity-80">
                      <li>
                        Build web-based learning and developer tools with
                        attention to accessibility, usability, and responsive
                        interfaces.
                      </li>
                      <li>
                        Explore AI-focused product experiences through the
                        AI Buddies project.
                      </li>
                      <li>
                        Maintain educational content and DSA resources through
                        the Algo project.
                      </li>
                    </ul>
                  </article>
                </div>
              </section>

              {/* Projects */}
              <section
                id="projects"
                className="resume-card resume-anchor p-6 sm:p-8"
              >
                <SectionHeading
                  eyebrow="03 / Selected work"
                  title="Projects"
                  description="Live projects that demonstrate practical development and open-source work."
                />

                <div className="space-y-4">
                  {projects.map((project, index) => (
                    <article
                      key={project.name}
                      className="rounded-2xl border p-5"
                      style={{ borderColor: "var(--resume-border)" }}
                    >
                      <div className="mb-3 flex items-start gap-3">
                        <div
                          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-sm font-black"
                          style={{
                            background:
                              "color-mix(in srgb, var(--ifm-color-primary) 12%, transparent)",
                            color: "var(--ifm-color-primary)",
                          }}
                        >
                          0{index + 1}
                        </div>
                        <div className="min-w-0 flex-1">
                          <h3 className="mb-1 text-base font-bold">
                            {project.name}
                          </h3>
                          <p className="mb-0 text-xs opacity-60">
                            {project.role}
                          </p>
                        </div>
                      </div>

                      <p className="print-small mb-4 text-sm leading-7 opacity-80">
                        {project.description}
                      </p>

                      <div className="mb-4 flex flex-wrap gap-2">
                        {project.technologies.map((technology) => (
                          <span key={technology} className="resume-pill">
                            {technology}
                          </span>
                        ))}
                      </div>

                      <div className="flex flex-wrap gap-x-5 gap-y-2">
                        <ExternalLink href={project.url}>Live project</ExternalLink>
                        <ExternalLink href={project.repository}>
                          Source code
                        </ExternalLink>
                      </div>
                    </article>
                  ))}
                </div>
              </section>

              {/* Skills */}
              <section
                id="skills"
                className="resume-card resume-anchor p-6 sm:p-8"
              >
                <SectionHeading
                  eyebrow="04 / Capabilities"
                  title="Technical skills"
                  description="Technologies and development areas relevant to my projects and learning journey."
                />

                <div className="grid gap-4 sm:grid-cols-2">
                  {visibleSkills.map((group) => (
                    <div
                      key={group.title}
                      className="rounded-2xl border p-4"
                      style={{ borderColor: "var(--resume-border)" }}
                    >
                      <h3 className="mb-3 text-sm font-bold">
                        {group.title}
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {group.items.map((skill) => (
                          <span
                            key={skill}
                            className="resume-pill"
                            style={{ background: "var(--ifm-background-color)" }}
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                <button
                  type="button"
                  onClick={() => setShowAllSkills((value) => !value)}
                  className="print-hide mt-5 text-sm font-bold text-[var(--ifm-color-primary)] hover:underline"
                >
                  {showAllSkills ? "Show fewer skill groups ↑" : "Show all skill groups ↓"}
                </button>

                <p className="print-small mb-0 mt-5 text-xs leading-6 opacity-60">
                  Skill list reflects the areas represented in my development
                  work. Proficiency levels and additional technologies can be
                  added once verified.
                </p>
              </section>

              {/* Education */}
              <section
                id="education"
                className="resume-card resume-anchor p-6 sm:p-8"
              >
                <SectionHeading
                  eyebrow="05 / Academic background"
                  title="Education"
                />

                <div className="flex gap-4">
                  <div
                    className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl"
                    style={{
                      background:
                        "color-mix(in srgb, var(--ifm-color-primary) 12%, transparent)",
                      color: "var(--ifm-color-primary)",
                    }}
                  >
                    <Icon name="file" size={22} />
                  </div>
                  <div>
                    <h3 className="mb-1 text-base font-bold">
                      Bachelor of Technology (B.Tech)
                    </h3>
                    <p className="mb-1 text-sm font-semibold opacity-75">
                      Computer Science and Engineering
                    </p>
                    <p className="mb-2 text-sm opacity-70">
                      {PROFILE.university}
                    </p>
                    <span className="resume-pill">
                      Graduated {PROFILE.graduation}
                    </span>
                  </div>
                </div>
              </section>

              {/* Leadership */}
              <section
                id="leadership"
                className="resume-card resume-anchor p-6 sm:p-8"
              >
                <SectionHeading
                  eyebrow="06 / Community"
                  title="Leadership & community"
                  description="Open-source leadership, educational initiatives, and collaborative development."
                />

                <div className="space-y-4">
                  <div className="flex gap-3">
                    <div
                      className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl"
                      style={{
                        color: "var(--ifm-color-primary)",
                        background:
                          "color-mix(in srgb, var(--ifm-color-primary) 12%, transparent)",
                      }}
                    >
                      <Icon name="check" size={18} />
                    </div>
                    <div>
                      <h3 className="mb-1 text-sm font-bold">
                        Open-source project leadership
                      </h3>
                      <p className="print-small mb-0 text-sm leading-7 opacity-75">
                        Founder and maintainer of CodeHarborHub, with additional
                        work on developer learning and algorithm resources.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <div
                      className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl"
                      style={{
                        color: "var(--ifm-color-primary)",
                        background:
                          "color-mix(in srgb, var(--ifm-color-primary) 12%, transparent)",
                      }}
                    >
                      <Icon name="check" size={18} />
                    </div>
                    <div>
                      <h3 className="mb-1 text-sm font-bold">
                        Developer education
                      </h3>
                      <p className="print-small mb-0 text-sm leading-7 opacity-75">
                        Build structured learning resources and technical
                        documentation intended to help developers learn
                        programming concepts.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <div
                      className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl"
                      style={{
                        color: "var(--ifm-color-primary)",
                        background:
                          "color-mix(in srgb, var(--ifm-color-primary) 12%, transparent)",
                      }}
                    >
                      <Icon name="check" size={18} />
                    </div>
                    <div>
                      <h3 className="mb-1 text-sm font-bold">
                        Community collaboration
                      </h3>
                      <p className="print-small mb-0 text-sm leading-7 opacity-75">
                        Experience with open-source contribution workflows,
                        project maintenance, and community-oriented development.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Contact CTA */}
              <section className="print-hide rounded-3xl p-6 text-white sm:p-8" style={{ background: "var(--ifm-color-primary)" }}>
                <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-white/75">
                  Let's connect
                </p>
                <h2 className="mb-3 text-2xl font-black sm:text-3xl">
                  Let's build something meaningful.
                </h2>
                <p className="mb-5 max-w-xl text-sm leading-7 text-white/85">
                  Interested in software development opportunities, full-stack
                  projects, AI-powered products, or open-source collaboration?
                  Visit my professional profiles to connect.
                </p>
                <div className="flex flex-wrap gap-3">
                  <a
                    href="/contact"
                    className="resume-action"
                    style={{ background: "white", color: "#174f75" }}
                  >
                    Contact me <Icon name="arrow" size={16} />
                  </a>
                  <a
                    href={PROFILE.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="resume-action border border-white/40 text-white"
                  >
                    LinkedIn <Icon name="external" size={14} />
                  </a>
                </div>
              </section>

              <footer className="print-hide py-3 text-center text-xs opacity-50">
                Resume content is maintained as part of my professional
                portfolio. Please use my linked profiles for the latest work.
              </footer>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
