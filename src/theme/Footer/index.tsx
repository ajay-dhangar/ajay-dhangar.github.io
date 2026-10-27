
import React from "react";
import Link from "@docusaurus/Link";
import useBaseUrl from "@docusaurus/useBaseUrl";

const currentYear = new Date().getFullYear();

const navigationGroups = [
  {
    title: "Explore",
    links: [
      { label: "Home", to: "/" },
      { label: "About Me", to: "/about" },
      { label: "Experience", to: "/experience" },
      { label: "Skills", to: "/skills" },
      { label: "Achievements", to: "/achievements" },
    ],
  },
  {
    title: "Portfolio",
    links: [
      { label: "Projects", to: "/projects" },
      { label: "Open Source", to: "/open-source" },
      { label: "Certificates", to: "/certificates" },
      { label: "Services", to: "/services" },
      { label: "Hire Me", to: "/hire-me" },
    ],
  },
];

const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/ajay-dhangar",
    icon: "github",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/ajay-dhangar/",
    icon: "linkedin",
  },
  {
    label: "CodeHarborHub",
    href: "https://codeharborhub.github.io/",
    icon: "globe",
  },
];

function SocialIcon({
  name,
  size = 19,
}: {
  name: string;
  size?: number;
}): JSX.Element {
  const common = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.7,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true as const,
  };

  switch (name) {
    case "github":
      return (
        <svg {...common} fill="currentColor" stroke="none">
          <path d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.56.1.76-.24.76-.54v-2.1c-3.1.68-3.76-1.32-3.76-1.32-.51-1.3-1.25-1.65-1.25-1.65-1.02-.7.08-.69.08-.69 1.13.08 1.72 1.16 1.72 1.16 1 1.71 2.63 1.22 3.27.93.1-.72.39-1.22.71-1.5-2.48-.28-5.09-1.24-5.09-5.52 0-1.22.44-2.22 1.16-3-.12-.29-.5-1.43.11-2.98 0 0 .95-.3 3.05 1.15a10.6 10.6 0 0 1 5.55 0c2.1-1.45 3.05-1.15 3.05-1.15.61 1.55.23 2.69.11 2.98.72.78 1.16 1.78 1.16 3 0 4.29-2.62 5.23-5.12 5.51.4.35.76 1.02.76 2.06v3.12c0 .3.2.65.77.54A11.1 11.1 0 0 0 12 .9Z" />
        </svg>
      );

    case "linkedin":
      return (
        <svg {...common}>
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6Z" />
          <rect x="2" y="9" width="4" height="12" />
          <circle cx="4" cy="4" r="2" />
        </svg>
      );

    case "globe":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="10" />
          <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10Z" />
        </svg>
      );

    case "arrow":
      return (
        <svg {...common}>
          <path d="M7 17 17 7M7 7h10v10" />
        </svg>
      );

    case "mail":
      return (
        <svg {...common}>
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <path d="m3 7 9 6 9-6" />
        </svg>
      );

    default:
      return (
        <svg {...common}>
          <path d="m5 12 4 4L19 6" />
        </svg>
      );
  }
}

export default function Footer(): JSX.Element {
  const homeUrl = useBaseUrl("/");
  const logoUrl = useBaseUrl("/img/logo.svg");

  return (
    <footer className="aj-footer">
      <div className="aj-footer__glow" aria-hidden="true" />

      <div className="aj-footer__container">
        {/* Main footer content */}
        <div className="aj-footer__main">
          <div className="aj-footer__brand">
            <Link
              to="/"
              className="aj-footer__brand-link"
              aria-label="Ajay Dhangar home"
            >
              <span className="aj-footer__logo">
                <img
                  src={logoUrl}
                  alt=""
                  onError={(event) => {
                    event.currentTarget.style.display = "none";
                  }}
                />
                <span className="aj-footer__logo-fallback">AD</span>
              </span>

              <span className="aj-footer__brand-name">
                Ajay<span>.</span>
              </span>
            </Link>

            <p className="aj-footer__description">
              Full Stack Developer, open-source builder, and founder of
              CodeHarborHub. I build practical web experiences and learning
              resources that help people grow through technology.
            </p>

            <div className="aj-footer__availability">
              <span className="aj-footer__availability-dot" />
              <span>Open to meaningful opportunities</span>
            </div>

            <div className="aj-footer__socials" aria-label="Social profiles">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="aj-footer__social-link"
                  aria-label={social.label}
                  title={social.label}
                >
                  <SocialIcon name={social.icon} />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          {navigationGroups.map((group) => (
            <nav
              key={group.title}
              className="aj-footer__nav"
              aria-label={`${group.title} navigation`}
            >
              <h2 className="aj-footer__heading">{group.title}</h2>

              <ul>
                {group.links.map((item) => (
                  <li key={item.to}>
                    <Link to={item.to} className="aj-footer__nav-link">
                      <span>{item.label}</span>
                      <span className="aj-footer__link-arrow">
                        <SocialIcon name="arrow" size={13} />
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}

          {/* Contact CTA */}
          <div className="aj-footer__contact">
            <h2 className="aj-footer__heading">Let's connect</h2>

            <p>
              Have a project idea, developer opportunity, or open-source
              collaboration in mind? Let's talk.
            </p>

            <Link to="/contact" className="aj-footer__contact-button">
              <SocialIcon name="mail" size={17} />
              Get in touch
              <SocialIcon name="arrow" size={15} />
            </Link>

            <Link to="/hire-me" className="aj-footer__hire-link">
              Looking to hire? View my profile
            </Link>
          </div>
        </div>

        {/* Featured project strip */}
        <div className="aj-footer__projects">
          <span className="aj-footer__projects-label">BUILT IN PUBLIC</span>

          <a
            href="https://codeharborhub.github.io/"
            target="_blank"
            rel="noopener noreferrer"
            className="aj-footer__project-link"
          >
            <span className="aj-footer__project-icon aj-footer__project-icon--blue">
              CH
            </span>
            <span>
              <strong>CodeHarborHub</strong>
              <small>Developer education</small>
            </span>
            <SocialIcon name="arrow" size={14} />
          </a>

          <a
            href="https://ajay-dhangar.github.io/algo/"
            target="_blank"
            rel="noopener noreferrer"
            className="aj-footer__project-link"
          >
            <span className="aj-footer__project-icon aj-footer__project-icon--purple">
              A
            </span>
            <span>
              <strong>Algo</strong>
              <small>DSA learning</small>
            </span>
            <SocialIcon name="arrow" size={14} />
          </a>

          <a
            href="https://ajay-dhangar.github.io/ai-buddies/"
            target="_blank"
            rel="noopener noreferrer"
            className="aj-footer__project-link"
          >
            <span className="aj-footer__project-icon aj-footer__project-icon--green">
              AI
            </span>
            <span>
              <strong>AI Buddies</strong>
              <small>AI experiments</small>
            </span>
            <SocialIcon name="arrow" size={14} />
          </a>
        </div>

        {/* Bottom bar */}
        <div className="aj-footer__bottom">
          <p>
            © {currentYear}{" "}
            <Link to={homeUrl} className="aj-footer__copyright-link">
              Ajay Dhangar
            </Link>
            . Built with curiosity and code.
          </p>

          <div className="aj-footer__bottom-links">
            <Link to="/privacy-policy">Privacy</Link>
            <Link to="/terms">Terms</Link>
            <a href="#__docusaurus">Back to top ↑</a>
          </div>
        </div>
      </div>

      <style>{`
        .aj-footer {
          --aj-footer-accent: var(--ifm-color-primary, #2e93e2);
          --aj-footer-border: var(--ifm-color-emphasis-200);
          --aj-footer-muted: var(--ifm-color-emphasis-600);
          --aj-footer-surface: var(--ifm-background-surface-color);
          --aj-footer-bg: var(--ifm-background-color);

          position: relative;
          overflow: hidden;
          color: var(--ifm-font-color-base);
          border-top: 1px solid var(--aj-footer-border);
          background: var(--aj-footer-bg);
        }

        .aj-footer *,
        .aj-footer *::before,
        .aj-footer *::after {
          box-sizing: border-box;
        }

        .aj-footer__glow {
          position: absolute;
          top: -190px;
          left: 12%;
          width: 480px;
          height: 360px;
          border-radius: 50%;
          pointer-events: none;
          background: radial-gradient(
            ellipse,
            color-mix(in srgb, var(--aj-footer-accent) 9%, transparent),
            transparent 70%
          );
        }

        .aj-footer__container {
          position: relative;
          z-index: 1;
          width: min(1200px, calc(100% - 48px));
          margin: 0 auto;
        }

        .aj-footer__main {
          display: grid;
          grid-template-columns: minmax(230px, 1.5fr) repeat(2, minmax(115px, 0.7fr)) minmax(190px, 1fr);
          gap: 42px;
          padding: 65px 0 50px;
        }

        .aj-footer__brand-link {
          display: inline-flex;
          align-items: center;
          gap: 11px;
          color: var(--ifm-font-color-base) !important;
          text-decoration: none !important;
        }

        .aj-footer__logo {
          position: relative;
          display: grid;
          width: 43px;
          height: 43px;
          flex-shrink: 0;
          place-items: center;
          overflow: hidden;
          border: 1px solid color-mix(
            in srgb,
            var(--aj-footer-accent) 35%,
            var(--aj-footer-border)
          );
          border-radius: 12px;
          background: color-mix(
            in srgb,
            var(--aj-footer-accent) 10%,
            var(--aj-footer-surface)
          );
        }

        .aj-footer__logo img {
          position: absolute;
          z-index: 1;
          width: 29px;
          height: 29px;
          object-fit: contain;
        }

        .aj-footer__logo-fallback {
          color: var(--aj-footer-accent);
          font-size: 13px;
          font-weight: 900;
          letter-spacing: -1px;
        }

        .aj-footer__brand-name {
          font-size: 22px;
          font-weight: 900;
          letter-spacing: -1px;
        }

        .aj-footer__brand-name > span {
          color: var(--aj-footer-accent);
        }

        .aj-footer__description {
          max-width: 320px;
          margin: 19px 0;
          color: var(--aj-footer-muted);
          font-size: 12px;
          line-height: 1.95;
        }

        .aj-footer__availability {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 8px 10px;
          border: 1px solid var(--aj-footer-border);
          border-radius: 8px;
          color: var(--aj-footer-muted);
          background: var(--aj-footer-surface);
          font-size: 10px;
        }

        .aj-footer__availability-dot {
          width: 7px;
          height: 7px;
          flex-shrink: 0;
          border-radius: 50%;
          background: #22a06b;
          box-shadow: 0 0 0 3px rgba(34, 160, 107, 0.12);
        }

        .aj-footer__socials {
          display: flex;
          gap: 9px;
          margin-top: 22px;
        }

        .aj-footer__social-link {
          display: grid;
          width: 38px;
          height: 38px;
          place-items: center;
          border: 1px solid var(--aj-footer-border);
          border-radius: 10px;
          color: var(--aj-footer-muted) !important;
          background: var(--aj-footer-surface);
          text-decoration: none !important;
          transition: color 180ms ease, border-color 180ms ease,
            transform 180ms ease;
        }

        .aj-footer__social-link:hover {
          transform: translateY(-3px);
          border-color: var(--aj-footer-accent);
          color: var(--aj-footer-accent) !important;
        }

        .aj-footer__heading {
          margin: 5px 0 22px;
          font-size: 12px;
          font-weight: 850;
          letter-spacing: 0.1px;
        }

        .aj-footer__nav ul {
          display: grid;
          gap: 13px;
          margin: 0;
          padding: 0;
          list-style: none;
        }

        .aj-footer__nav-link {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 7px;
          color: var(--aj-footer-muted) !important;
          font-size: 11px;
          text-decoration: none !important;
          transition: color 160ms ease;
        }

        .aj-footer__nav-link:hover {
          color: var(--aj-footer-accent) !important;
        }

        .aj-footer__link-arrow {
          display: inline-flex;
          opacity: 0;
          transform: translate(-3px, 3px);
          transition: opacity 160ms ease, transform 160ms ease;
        }

        .aj-footer__nav-link:hover .aj-footer__link-arrow {
          opacity: 1;
          transform: translate(0, 0);
        }

        .aj-footer__contact > p {
          margin: 0 0 19px;
          color: var(--aj-footer-muted);
          font-size: 11px;
          line-height: 1.9;
        }

        .aj-footer__contact-button {
          display: flex;
          width: 100%;
          min-height: 43px;
          align-items: center;
          justify-content: center;
          gap: 10px;
          padding: 10px 12px;
          border: 1px solid var(--aj-footer-accent);
          border-radius: 9px;
          color: #fff !important;
          background: var(--aj-footer-accent);
          font-size: 11px;
          font-weight: 800;
          text-decoration: none !important;
          transition: transform 180ms ease, filter 180ms ease;
        }

        .aj-footer__contact-button:hover {
          transform: translateY(-2px);
          filter: brightness(0.94);
        }

        .aj-footer__hire-link {
          display: block;
          margin-top: 15px;
          color: var(--aj-footer-muted) !important;
          font-size: 10px;
          line-height: 1.7;
          text-decoration: underline;
          text-decoration-color: var(--aj-footer-border);
          text-underline-offset: 4px;
        }

        .aj-footer__hire-link:hover {
          color: var(--aj-footer-accent) !important;
        }

        .aj-footer__projects {
          display: grid;
          grid-template-columns: 1.05fr repeat(3, minmax(0, 1fr));
          align-items: center;
          gap: 15px;
          padding: 20px 0;
          border-top: 1px solid var(--aj-footer-border);
          border-bottom: 1px solid var(--aj-footer-border);
        }

        .aj-footer__projects-label {
          color: var(--aj-footer-muted);
          font-size: 9px;
          font-weight: 850;
          letter-spacing: 1.3px;
        }

        .aj-footer__project-link {
          display: flex;
          min-width: 0;
          align-items: center;
          gap: 10px;
          padding: 10px;
          border: 1px solid transparent;
          border-radius: 10px;
          color: var(--ifm-font-color-base) !important;
          text-decoration: none !important;
          transition: border-color 180ms ease, background 180ms ease;
        }

        .aj-footer__project-link:hover {
          border-color: var(--aj-footer-border);
          background: var(--aj-footer-surface);
        }

        .aj-footer__project-icon {
          display: grid;
          width: 37px;
          height: 37px;
          flex-shrink: 0;
          place-items: center;
          border: 1px solid var(--aj-footer-border);
          border-radius: 10px;
          font-size: 10px;
          font-weight: 900;
        }

        .aj-footer__project-icon--blue {
          color: #2e93e2;
          background: rgba(46, 147, 226, 0.09);
        }

        .aj-footer__project-icon--purple {
          color: #a78bfa;
          background: rgba(139, 92, 246, 0.09);
        }

        .aj-footer__project-icon--green {
          color: #22a06b;
          background: rgba(16, 185, 129, 0.09);
        }

        .aj-footer__project-link > span:nth-child(2) {
          display: grid;
          min-width: 0;
          gap: 5px;
        }

        .aj-footer__project-link strong {
          overflow: hidden;
          font-size: 10px;
          font-weight: 800;
          text-overflow: ellipsis;
          white-space: nowrap;
        }

        .aj-footer__project-link small {
          color: var(--aj-footer-muted);
          font-size: 9px;
        }

        .aj-footer__project-link > svg {
          flex-shrink: 0;
          margin-left: auto;
          color: var(--aj-footer-muted);
          transition: color 160ms ease, transform 160ms ease;
        }

        .aj-footer__project-link:hover > svg {
          transform: translate(2px, -2px);
          color: var(--aj-footer-accent);
        }

        .aj-footer__bottom {
          display: flex;
          min-height: 72px;
          align-items: center;
          justify-content: space-between;
          gap: 18px;
        }

        .aj-footer__bottom > p {
          margin: 0;
          color: var(--aj-footer-muted);
          font-size: 10px;
          line-height: 1.8;
        }

        .aj-footer__copyright-link {
          color: var(--ifm-font-color-base) !important;
          font-weight: 800;
          text-decoration: none !important;
        }

        .aj-footer__copyright-link:hover {
          color: var(--aj-footer-accent) !important;
        }

        .aj-footer__bottom-links {
          display: flex;
          flex-wrap: wrap;
          gap: 19px;
        }

        .aj-footer__bottom-links a {
          color: var(--aj-footer-muted) !important;
          font-size: 10px;
          text-decoration: none !important;
          transition: color 160ms ease;
        }

        .aj-footer__bottom-links a:hover {
          color: var(--aj-footer-accent) !important;
        }

        .aj-footer a:focus-visible {
          outline: 2px solid var(--aj-footer-accent);
          outline-offset: 4px;
          border-radius: 4px;
        }

        @media (max-width: 996px) {
          .aj-footer__main {
            grid-template-columns: minmax(0, 1.3fr) repeat(2, minmax(110px, 0.7fr));
            gap: 35px 28px;
          }

          .aj-footer__brand {
            grid-column: 1 / -1;
          }

          .aj-footer__description {
            max-width: 570px;
          }

          .aj-footer__contact {
            max-width: 340px;
          }

          .aj-footer__projects {
            grid-template-columns: repeat(3, minmax(0, 1fr));
          }

          .aj-footer__projects-label {
            grid-column: 1 / -1;
          }
        }

        @media (max-width: 600px) {
          .aj-footer__container {
            width: calc(100% - 36px);
          }

          .aj-footer__main {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 35px 20px;
            padding: 45px 0 35px;
          }

          .aj-footer__brand {
            grid-column: 1 / -1;
          }

          .aj-footer__description {
            font-size: 12px;
          }

          .aj-footer__nav {
            min-width: 0;
          }

          .aj-footer__nav-link {
            font-size: 11px;
          }

          .aj-footer__contact {
            grid-column: 1 / -1;
            max-width: none;
            padding: 20px;
            border: 1px solid var(--aj-footer-border);
            border-radius: 13px;
            background: var(--aj-footer-surface);
          }

          .aj-footer__projects {
            grid-template-columns: 1fr;
            gap: 8px;
            padding: 19px 0;
          }

          .aj-footer__projects-label {
            grid-column: auto;
            margin-bottom: 5px;
          }

          .aj-footer__project-link {
            padding: 10px;
          }

          .aj-footer__bottom {
            align-items: flex-start;
            flex-direction: column;
            gap: 14px;
            padding: 20px 0 25px;
          }

          .aj-footer__bottom-links {
            gap: 17px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .aj-footer *,
          .aj-footer *::before,
          .aj-footer *::after {
            scroll-behavior: auto !important;
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
    </footer>
  );
}
