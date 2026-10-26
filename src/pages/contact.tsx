
import React, { FormEvent, useState } from "react";
import Layout from "@theme/Layout";
import Head from "@docusaurus/Head";

const profile = {
  name: "Ajay Dhangar",
  location: "Madhya Pradesh, India",
  website: "https://ajay-dhangar.github.io/",
  github: "https://github.com/ajay-dhangar",
  linkedin: "https://www.linkedin.com/in/ajay-dhangar/",
  codeHarborHub: "https://codeharborhub.github.io/",
  aiBuddies: "https://ajay-dhangar.github.io/ai-buddies/",
};

const contactOptions = [
  {
    number: "01",
    icon: "in",
    title: "Professional opportunities",
    description:
      "Recruitment, full-time roles, internships, and engineering opportunities.",
    action: "Connect on LinkedIn",
    href: profile.linkedin,
  },
  {
    number: "02",
    icon: "</>",
    title: "Development projects",
    description:
      "Website development, frontend engineering, and web application ideas.",
    action: "Discuss a project",
    href: `mailto:?subject=${encodeURIComponent("Project inquiry for Ajay Dhangar")}`,
  },
  {
    number: "03",
    icon: "✳",
    title: "Open-source collaboration",
    description:
      "Developer education, community projects, documentation, and AI experiments.",
    action: "Explore CodeHarborHub",
    href: profile.codeHarborHub,
  },
];

const collaborationTypes = [
  "Website / web application",
  "Frontend development",
  "AI-powered application",
  "Open-source collaboration",
  "Job / internship opportunity",
  "Something else",
];

const socialLinks = [
  {
    label: "LinkedIn",
    description: "Professional networking",
    href: profile.linkedin,
    icon: "in",
  },
  {
    label: "GitHub",
    description: "Code and open-source work",
    href: profile.github,
    icon: "⌘",
  },
  {
    label: "Portfolio",
    description: "Explore my work",
    href: profile.website,
    icon: "↗",
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
    <p className="mb-4 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-[var(--ifm-color-primary)]">
      <span className="h-1.5 w-1.5 rounded-full bg-[var(--ifm-color-primary)]" />
      {children}
    </p>
  );
}

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className="max-w-2xl">
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 className="mb-4 text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl">
        {title}
      </h2>
      <p className="text-base leading-8 text-[var(--ifm-color-emphasis-700)]">
        {description}
      </p>
    </div>
  );
}

export default function ContactPage(): React.JSX.Element {
  const [form, setForm] = useState({
    name: "",
    email: "",
    type: collaborationTypes[0],
    budget: "",
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [copied, setCopied] = useState(false);

  // Replace this with your real public contact email.
  // Do not put a private or sensitive email address in a public repository.
  const contactEmail = "";

  function updateField(
    field: keyof typeof form,
    value: string,
  ) {
    setForm((previous) => ({ ...previous, [field]: value }));

    setErrors((previous) => {
      const next = { ...previous };
      delete next[field];
      return next;
    });
  }

  function validateForm() {
    const nextErrors: Record<string, string> = {};

    if (!form.name.trim()) {
      nextErrors.name = "Please enter your name.";
    }

    if (
      !form.email.trim() ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())
    ) {
      nextErrors.email = "Please enter a valid email address.";
    }

    if (form.message.trim().length < 20) {
      nextErrors.message =
        "Please provide a little more detail (at least 20 characters).";
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  }

  function buildInquiry() {
    return [
      "Hello Ajay,",
      "",
      "I'd like to get in touch with you.",
      "",
      `Name: ${form.name.trim()}`,
      `Email: ${form.email.trim()}`,
      `Inquiry type: ${form.type}`,
      `Budget / arrangement: ${form.budget.trim() || "Not specified"}`,
      "",
      "Message:",
      form.message.trim(),
      "",
      "Sent from your portfolio contact form.",
    ].join("\n");
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!validateForm()) return;

    const subject = `Portfolio inquiry: ${form.type}`;
    const body = buildInquiry();

    if (contactEmail.trim()) {
      const mailto = `mailto:${contactEmail}?subject=${encodeURIComponent(
        subject,
      )}&body=${encodeURIComponent(body)}`;

      window.location.href = mailto;
      return;
    }

    // A backend-free fallback: copy the inquiry and let the visitor
    // choose LinkedIn or another contact channel.
    const inquiry = `${subject}\n\n${body}`;

    if (navigator.clipboard?.writeText) {
      navigator.clipboard
        .writeText(inquiry)
        .then(() => {
          setCopied(true);
        })
        .catch(() => {
          window.prompt("Copy your inquiry:", inquiry);
        });
    } else {
      window.prompt("Copy your inquiry:", inquiry);
    }
  }

  return (
    <Layout
      title="Contact"
      description="Contact Ajay Dhangar for web development projects, frontend engineering, AI applications, open-source collaboration, and professional opportunities."
    >
      <Head>
        <meta property="og:title" content="Contact | Ajay Dhangar" />
        <meta
          property="og:description"
          content="Have a project, an opportunity, or an open-source idea? Let's connect and explore what's possible."
        />
        <meta property="og:type" content="website" />
        <meta
          name="keywords"
          content="Contact Ajay Dhangar, hire web developer, React developer, full stack developer, AI developer, open-source collaboration"
        />
      </Head>

      <main className="contact-page overflow-hidden text-[var(--ifm-font-color-base)]">
        {/* HERO */}
        <section className="relative border-b border-[var(--ifm-color-emphasis-200)]">
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <div className="absolute -right-20 -top-24 h-80 w-80 rounded-full bg-[var(--ifm-color-primary)] opacity-[0.09] blur-3xl" />
            <div className="absolute -left-24 top-52 h-64 w-64 rounded-full bg-[var(--ifm-color-primary)] opacity-[0.06] blur-3xl" />
          </div>

          <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16 lg:px-10 lg:py-28">
            <div>
              <Eyebrow>Contact & collaboration</Eyebrow>

              <h1 className="max-w-3xl text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-5xl lg:text-7xl">
                Have an idea?
                <span className="mt-2 block text-[var(--ifm-color-primary)]">
                  Let's talk.
                </span>
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-8 text-[var(--ifm-color-emphasis-700)] sm:text-lg">
                Whether you are a recruiter, founder, developer, or open-source
                contributor, I would love to hear what you are working on.
                Share your idea, ask a question, or explore a possible
                collaboration.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#contact-form"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-[var(--ifm-color-primary)] px-6 py-3 font-semibold text-white no-underline shadow-lg shadow-black/10 transition hover:-translate-y-0.5 hover:opacity-90"
                >
                  Start a conversation
                  <span aria-hidden="true">↓</span>
                </a>

                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-[var(--ifm-color-emphasis-300)] px-6 py-3 font-semibold no-underline transition hover:border-[var(--ifm-color-primary)] hover:bg-[var(--ifm-color-emphasis-100)]"
                >
                  Connect on LinkedIn
                  <ArrowIcon className="h-4 w-4" />
                </a>
              </div>

              <p className="mt-6 text-sm text-[var(--ifm-color-emphasis-600)]">
                <span className="mr-2 inline-block h-2 w-2 rounded-full bg-[var(--ifm-color-primary)]" />
                Based in {profile.location}
              </p>
            </div>

            {/* CONTACT TERMINAL */}
            <div className="relative mx-auto w-full max-w-lg">
              <div className="absolute -inset-3 rounded-[2rem] border border-[var(--ifm-color-primary)] opacity-20" />

              <div className="relative overflow-hidden rounded-3xl border border-[var(--ifm-color-emphasis-300)] bg-[var(--ifm-background-surface-color)] shadow-2xl shadow-black/10">
                <div className="flex items-center justify-between border-b border-[var(--ifm-color-emphasis-200)] px-5 py-4">
                  <div className="flex gap-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
                    <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
                    <span className="h-2.5 w-2.5 rounded-full bg-green-400" />
                  </div>
                  <span className="font-mono text-xs text-[var(--ifm-color-emphasis-600)]">
                    connection.init()
                  </span>
                </div>

                <div className="p-6 sm:p-8">
                  <div className="mb-6 flex items-center gap-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[var(--ifm-color-primary)] text-lg font-black text-white">
                      AD
                    </div>
                    <div>
                      <h2 className="mb-1 text-xl font-bold">
                        {profile.name}
                      </h2>
                      <p className="text-sm text-[var(--ifm-color-emphasis-700)]">
                        Developer · Founder · Builder
                      </p>
                    </div>
                  </div>

                  <div className="rounded-2xl border border-[var(--ifm-color-emphasis-200)] bg-[var(--ifm-background-color)] p-4 font-mono text-sm leading-7">
                    <p className="text-[var(--ifm-color-emphasis-600)]">
                      {"// Let's create something useful"}
                    </p>
                    <p>
                      <span className="text-[var(--ifm-color-primary)]">
                        const
                      </span>{" "}
                      connection = {"{"}
                    </p>
                    <p className="pl-4">
                      purpose:{" "}
                      <span className="text-[var(--ifm-color-primary)]">
                        "collaboration"
                      </span>
                      ,
                    </p>
                    <p className="pl-4">
                      ideas:{" "}
                      <span className="text-[var(--ifm-color-primary)]">
                        "welcome"
                      </span>
                      ,
                    </p>
                    <p className="pl-4">
                      nextStep:{" "}
                      <span className="text-[var(--ifm-color-primary)]">
                        "start a conversation"
                      </span>
                    </p>
                    <p>{"}"}</p>
                  </div>

                  <div className="mt-5 grid grid-cols-2 gap-3">
                    <a
                      href={profile.github}
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-xl border border-[var(--ifm-color-emphasis-300)] p-3 no-underline transition hover:border-[var(--ifm-color-primary)] hover:bg-[var(--ifm-color-emphasis-100)]"
                    >
                      <span className="block text-sm font-semibold">
                        GitHub ↗
                      </span>
                      <span className="mt-1 block text-xs text-[var(--ifm-color-emphasis-600)]">
                        Explore projects
                      </span>
                    </a>
                    <a
                      href={profile.codeHarborHub}
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-xl border border-[var(--ifm-color-emphasis-300)] p-3 no-underline transition hover:border-[var(--ifm-color-primary)] hover:bg-[var(--ifm-color-emphasis-100)]"
                    >
                      <span className="block text-sm font-semibold">
                        CodeHarborHub ↗
                      </span>
                      <span className="mt-1 block text-xs text-[var(--ifm-color-emphasis-600)]">
                        Developer education
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT PATHS */}
        <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-10">
          <SectionHeading
            eyebrow="Choose your path"
            title="What would you like to discuss?"
            description="Choose the most relevant starting point. You can share a project brief, explore a professional opportunity, or connect around open source."
          />

          <div className="mt-9 grid gap-5 md:grid-cols-3">
            {contactOptions.map((option) => (
              <article
                key={option.number}
                className="group flex h-full flex-col rounded-2xl border border-[var(--ifm-color-emphasis-300)] bg-[var(--ifm-background-surface-color)] p-6 transition duration-300 hover:-translate-y-1 hover:border-[var(--ifm-color-primary)] hover:shadow-xl hover:shadow-black/5 sm:p-7"
              >
                <div className="mb-6 flex items-center justify-between">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--ifm-color-primary)]/10 font-mono text-lg font-bold text-[var(--ifm-color-primary)]">
                    {option.icon}
                  </span>
                  <span className="font-mono text-xs text-[var(--ifm-color-emphasis-500)]">
                    / {option.number}
                  </span>
                </div>

                <h3 className="mb-3 text-xl font-bold">{option.title}</h3>

                <p className="mb-6 flex-1 text-sm leading-7 text-[var(--ifm-color-emphasis-700)]">
                  {option.description}
                </p>

                <a
                  href={option.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--ifm-color-primary)] no-underline transition group-hover:gap-3"
                >
                  {option.action}
                  <ArrowIcon className="h-4 w-4" />
                </a>
              </article>
            ))}
          </div>
        </section>

        {/* FORM + SIDEBAR */}
        <section
          id="contact-form"
          className="scroll-mt-24 border-y border-[var(--ifm-color-emphasis-200)] bg-[var(--ifm-background-surface-color)]"
        >
          <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:px-8 sm:py-24 lg:grid-cols-[0.75fr_1.25fr] lg:gap-16 lg:px-10">
            {/* Left column */}
            <aside>
              <SectionHeading
                eyebrow="Send an inquiry"
                title="Tell me a little about your idea."
                description="A few details will help me understand what you need and how we might work together."
              />

              <div className="mt-8 space-y-4">
                {[
                  {
                    number: "01",
                    title: "Share the context",
                    text: "What are you building, or what opportunity are you exploring?",
                  },
                  {
                    number: "02",
                    title: "Explain the goal",
                    text: "Tell me what you want to achieve and what support you need.",
                  },
                  {
                    number: "03",
                    title: "Choose the next step",
                    text: "We can continue the conversation through your preferred contact channel.",
                  },
                ].map((item) => (
                  <div
                    key={item.number}
                    className="flex gap-4 rounded-xl border border-[var(--ifm-color-emphasis-200)] p-4"
                  >
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[var(--ifm-color-primary)]/10 font-mono text-xs font-bold text-[var(--ifm-color-primary)]">
                      {item.number}
                    </span>
                    <div>
                      <h3 className="mb-1 font-bold">{item.title}</h3>
                      <p className="mb-0 text-sm leading-6 text-[var(--ifm-color-emphasis-700)]">
                        {item.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 rounded-2xl border border-[var(--ifm-color-emphasis-300)] bg-[var(--ifm-background-color)] p-5">
                <p className="mb-2 text-sm font-semibold">
                  Prefer social platforms?
                </p>
                <p className="mb-4 text-sm leading-6 text-[var(--ifm-color-emphasis-700)]">
                  You can also reach out through my professional and developer
                  profiles.
                </p>

                <div className="space-y-3">
                  {socialLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center justify-between gap-3 rounded-xl border border-[var(--ifm-color-emphasis-200)] p-3 no-underline transition hover:border-[var(--ifm-color-primary)] hover:bg-[var(--ifm-background-surface-color)]"
                    >
                      <span className="flex min-w-0 items-center gap-3">
                        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[var(--ifm-color-primary)]/10 text-sm font-bold text-[var(--ifm-color-primary)]">
                          {link.icon}
                        </span>
                        <span>
                          <span className="block text-sm font-semibold">
                            {link.label}
                          </span>
                          <span className="block text-xs text-[var(--ifm-color-emphasis-600)]">
                            {link.description}
                          </span>
                        </span>
                      </span>
                      <ArrowIcon className="h-4 w-4 shrink-0 text-[var(--ifm-color-emphasis-600)]" />
                    </a>
                  ))}
                </div>
              </div>
            </aside>

            {/* Inquiry form */}
            <div className="rounded-2xl border border-[var(--ifm-color-emphasis-300)] bg-[var(--ifm-background-color)] p-5 shadow-sm sm:p-8 lg:p-9">
              <div className="mb-7 flex items-start justify-between gap-4">
                <div>
                  <p className="mb-2 text-xs font-bold uppercase tracking-[0.16em] text-[var(--ifm-color-primary)]">
                    Project inquiry
                  </p>
                  <h2 className="mb-2 text-2xl font-bold sm:text-3xl">
                    Let's get to know your idea.
                  </h2>
                  <p className="text-sm leading-6 text-[var(--ifm-color-emphasis-700)]">
                    Fields marked with * are required.
                  </p>
                </div>

                <span className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[var(--ifm-color-primary)]/10 text-xl text-[var(--ifm-color-primary)] sm:flex">
                  ↗
                </span>
              </div>

              <form onSubmit={handleSubmit} noValidate>
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="mb-2 block text-sm font-semibold"
                    >
                      Your name *
                    </label>
                    <input
                      id="contact-name"
                      name="name"
                      autoComplete="name"
                      required
                      value={form.name}
                      onChange={(event) =>
                        updateField("name", event.target.value)
                      }
                      placeholder="Enter your name"
                      aria-invalid={Boolean(errors.name)}
                      aria-describedby={
                        errors.name ? "contact-name-error" : undefined
                      }
                      className="w-full rounded-xl border border-[var(--ifm-color-emphasis-300)] bg-[var(--ifm-background-surface-color)] px-4 py-3 text-sm outline-none transition placeholder:text-[var(--ifm-color-emphasis-500)] focus:border-[var(--ifm-color-primary)] focus:ring-2 focus:ring-[var(--ifm-color-primary)]/20"
                    />
                    {errors.name && (
                      <p
                        id="contact-name-error"
                        className="mt-2 text-xs text-red-500"
                      >
                        {errors.name}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="contact-email"
                      className="mb-2 block text-sm font-semibold"
                    >
                      Email address *
                    </label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      value={form.email}
                      onChange={(event) =>
                        updateField("email", event.target.value)
                      }
                      placeholder="you@example.com"
                      aria-invalid={Boolean(errors.email)}
                      aria-describedby={
                        errors.email ? "contact-email-error" : undefined
                      }
                      className="w-full rounded-xl border border-[var(--ifm-color-emphasis-300)] bg-[var(--ifm-background-surface-color)] px-4 py-3 text-sm outline-none transition placeholder:text-[var(--ifm-color-emphasis-500)] focus:border-[var(--ifm-color-primary)] focus:ring-2 focus:ring-[var(--ifm-color-primary)]/20"
                    />
                    {errors.email && (
                      <p
                        id="contact-email-error"
                        className="mt-2 text-xs text-red-500"
                      >
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                <div className="mt-5">
                  <label
                    htmlFor="contact-type"
                    className="mb-2 block text-sm font-semibold"
                  >
                    What would you like to discuss? *
                  </label>
                  <select
                    id="contact-type"
                    name="type"
                    required
                    value={form.type}
                    onChange={(event) =>
                      updateField("type", event.target.value)
                    }
                    className="w-full rounded-xl border border-[var(--ifm-color-emphasis-300)] bg-[var(--ifm-background-surface-color)] px-4 py-3 text-sm outline-none transition focus:border-[var(--ifm-color-primary)] focus:ring-2 focus:ring-[var(--ifm-color-primary)]/20"
                  >
                    {collaborationTypes.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="mt-5">
                  <label
                    htmlFor="contact-budget"
                    className="mb-2 block text-sm font-semibold"
                  >
                    Budget or work arrangement{" "}
                    <span className="font-normal text-[var(--ifm-color-emphasis-600)]">
                      (optional)
                    </span>
                  </label>
                  <input
                    id="contact-budget"
                    name="budget"
                    value={form.budget}
                    onChange={(event) =>
                      updateField("budget", event.target.value)
                    }
                    placeholder="e.g. Freelance, full-time, or flexible"
                    className="w-full rounded-xl border border-[var(--ifm-color-emphasis-300)] bg-[var(--ifm-background-surface-color)] px-4 py-3 text-sm outline-none transition placeholder:text-[var(--ifm-color-emphasis-500)] focus:border-[var(--ifm-color-primary)] focus:ring-2 focus:ring-[var(--ifm-color-primary)]/20"
                  />
                </div>

                <div className="mt-5">
                  <div className="mb-2 flex items-center justify-between gap-3">
                    <label
                      htmlFor="contact-message"
                      className="block text-sm font-semibold"
                    >
                      Your message *
                    </label>
                    <span className="text-xs text-[var(--ifm-color-emphasis-600)]">
                      {form.message.length} characters
                    </span>
                  </div>

                  <textarea
                    id="contact-message"
                    name="message"
                    rows={6}
                    required
                    minLength={20}
                    value={form.message}
                    onChange={(event) =>
                      updateField("message", event.target.value)
                    }
                    placeholder="Tell me about your idea, goals, requirements, or opportunity..."
                    aria-invalid={Boolean(errors.message)}
                    aria-describedby={
                      errors.message ? "contact-message-error" : undefined
                    }
                    className="w-full resize-y rounded-xl border border-[var(--ifm-color-emphasis-300)] bg-[var(--ifm-background-surface-color)] px-4 py-3 text-sm leading-7 outline-none transition placeholder:text-[var(--ifm-color-emphasis-500)] focus:border-[var(--ifm-color-primary)] focus:ring-2 focus:ring-[var(--ifm-color-primary)]/20"
                  />

                  {errors.message && (
                    <p
                      id="contact-message-error"
                      className="mt-2 text-xs text-red-500"
                    >
                      {errors.message}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  className="mt-6 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-[var(--ifm-color-primary)] px-6 py-3 font-semibold text-white shadow-lg shadow-black/10 transition hover:-translate-y-0.5 hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--ifm-color-primary)] sm:w-auto"
                >
                  {contactEmail ? "Prepare email" : "Prepare inquiry"}
                  <ArrowIcon className="h-4 w-4" />
                </button>

                {copied && (
                  <p
                    role="status"
                    className="mt-4 rounded-xl border border-[var(--ifm-color-primary)]/30 bg-[var(--ifm-color-primary)]/10 p-3 text-sm leading-6"
                  >
                    Your inquiry has been copied. Open LinkedIn or your
                    preferred messaging app and paste it into a message.
                  </p>
                )}

                <p className="mb-0 mt-4 text-xs leading-6 text-[var(--ifm-color-emphasis-600)]">
                  This form does not upload or store your information. Without
                  a configured email address or backend, it prepares your
                  inquiry locally.
                </p>
              </form>
            </div>
          </div>
        </section>

        {/* COLLABORATION CTA */}
        <section className="px-5 py-16 sm:px-8 sm:py-20 lg:px-10">
          <div className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl bg-[var(--ifm-color-primary)] px-6 py-12 text-white sm:px-10 sm:py-16 lg:px-16">
            <div className="pointer-events-none absolute -right-16 -top-20 h-64 w-64 rounded-full border border-white/20" />
            <div className="pointer-events-none absolute -right-4 -top-10 h-44 w-44 rounded-full border border-white/20" />

            <div className="relative flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
              <div className="max-w-3xl">
                <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-white/80">
                  Open to meaningful collaboration
                </p>
                <h2 className="mb-5 text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                  Good things start with a conversation.
                </h2>
                <p className="max-w-2xl text-base leading-8 text-white/85">
                  Let's connect around software development, AI, developer
                  education, or an opportunity to build something valuable
                  together.
                </p>
              </div>

              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-12 shrink-0 items-center justify-center gap-2 rounded-xl bg-white px-6 py-3 font-bold text-slate-900 no-underline transition hover:-translate-y-0.5 hover:bg-slate-100"
              >
                Let's connect
                <ArrowIcon className="h-4 w-4" />
              </a>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
