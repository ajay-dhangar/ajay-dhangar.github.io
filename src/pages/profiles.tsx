import Layout from "@theme/Layout";
import { motion } from "framer-motion";
import clsx from "clsx";
import { Github, Linkedin, Globe } from "lucide-react";

const profiles = [
  {
    name: "Ajay Dhangar",
    role: "Founder · MERN Stack Engineer · Open Source",
    image: "https://github.com/Ajay-Dhangar.png",
    tagline: "Building scalable products & empowering developers",
    description:
      "Founder of CodeHarborHub with hands-on experience in MERN, Docusaurus, and modern UI systems. Focused on performance, DX, and real-world impact.",
    stats: { repos: 220, stars: 950, contributions: 15000 },
    links: {
      github: "https://github.com/Ajay-Dhangar",
      linkedin: "https://www.linkedin.com/in/ajay-dhangar/",
      portfolio: "https://ajay-dhangar.github.io",
    },
    skills: [
      "React",
      "TypeScript",
      "Node.js",
      "Tailwind",
      "Docusaurus",
      "System Design",
    ],
  },
  {
    name: "Ajay Dhangar",
    role: "Founder · MERN Stack Engineer · Open Source",
    image: "https://github.com/Ajay-Dhangar.png",
    tagline: "Building scalable products & empowering developers",
    description:
      "Founder of CodeHarborHub with hands-on experience in MERN, Docusaurus, and modern UI systems. Focused on performance, DX, and real-world impact.",
    stats: { repos: 220, stars: 950, contributions: 15000 },
    links: {
      github: "https://github.com/Ajay-Dhangar",
      linkedin: "https://www.linkedin.com/in/ajay-dhangar/",
      portfolio: "https://ajay-dhangar.github.io",
    },
    skills: [
      "React",
      "TypeScript",
      "Node.js",
      "Tailwind",
      "Docusaurus",
      "System Design",
    ],
  },
  {
    name: "Ajay Dhangar",
    role: "Founder · MERN Stack Engineer · Open Source",
    image: "https://github.com/Ajay-Dhangar.png",
    tagline: "Building scalable products & empowering developers",
    description:
      "Founder of CodeHarborHub with hands-on experience in MERN, Docusaurus, and modern UI systems. Focused on performance, DX, and real-world impact.",
    stats: { repos: 220, stars: 950, contributions: 15000 },
    links: {
      github: "https://github.com/Ajay-Dhangar",
      linkedin: "https://www.linkedin.com/in/ajay-dhangar/",
      portfolio: "https://ajay-dhangar.github.io",
    },
    skills: [
      "React",
      "TypeScript",
      "Node.js",
      "Tailwind",
      "Docusaurus",
      "System Design",
    ],
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

function ProfileCard({ profile }: { profile: typeof profiles[number] }) {
  return (
    <motion.div
      variants={fadeUp}
      whileHover={{ scale: 1.03 }}
      className={clsx(
        "relative overflow-hidden rounded-3xl",
        "border border-neutral-200 dark:border-neutral-800",
        "bg-gradient-to-br from-white via-neutral-50 to-neutral-100",
        "dark:from-neutral-900 dark:via-neutral-900 dark:to-neutral-950",
        "shadow-lg hover:shadow-2xl transition-all"
      )}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(99,102,241,0.15),transparent_60%)]" />

      <div className="relative p-8 flex flex-col gap-6">
        {/* Header */}
        <div className="flex items-center gap-5">
          <img
            src={profile.image}
            alt={profile.name}
            className="h-36 w-24 rounded-2xl object-cover ring-4 ring-indigo-500/30"
          />
          <div>
            <h3 className="text-2xl font-bold text-neutral-900 dark:text-white">
              {profile.name}
            </h3>
            <p className="text-sm font-medium text-indigo-600 dark:text-indigo-400">
              {profile.role}
            </p>
            <p className="text-xs text-neutral-500 dark:text-neutral-400">
              {profile.tagline}
            </p>
          </div>
        </div>

        {/* Description */}
        <p className="text-sm leading-relaxed text-neutral-700 dark:text-neutral-300">
          {profile.description}
        </p>

        {/* Skills */}
        <div className="flex flex-wrap gap-2">
          {profile.skills.map((skill) => (
            <span
              key={skill}
              className="rounded-full border border-neutral-200 dark:border-neutral-700 px-2 py-1 text-xs font-semibold text-neutral-700 dark:text-neutral-300 backdrop-blur"
            >
              {skill}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-4 pt-2">
          <a
            href={profile.links.github}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 text-sm font-semibold"
          >
            <Github size={16} /> GitHub
          </a>
          <a
            href={profile.links.linkedin}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 text-sm font-semibold"
          >
            <Linkedin size={16} /> LinkedIn
          </a>
          <a
            href={profile.links.portfolio}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 text-sm font-semibold"
          >
            <Globe size={16} /> Portfolio
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default function ProfilesPage(): JSX.Element {
  return (
    <Layout title="Profiles" description="Industry-grade developer profiles">
      <main className="relative min-h-screen overflow-hidden bg-neutral-50 dark:bg-neutral-950">
        {/* Animated Background */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-indigo-500/20 blur-3xl" />
          <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-cyan-500/20 blur-3xl" />
        </div>

        {/* Hero */}
        <section className="relative px-6 pt-24 pb-20 text-center">
          <motion.h1
            initial="hidden"
            animate="show"
            variants={fadeUp}
            className="text-5xl md:text-6xl font-extrabold tracking-tight text-neutral-900 dark:text-white"
          >
            Professional Profiles
          </motion.h1>
          <motion.p
            initial="hidden"
            animate="show"
            variants={fadeUp}
            className="mt-6 max-w-3xl mx-auto text-lg text-neutral-600 dark:text-neutral-400"
          >
            A premium, industry-ready showcase of developers, contributors, and
            creators — crafted for performance, aesthetics, and scalability.
          </motion.p>
        </section>

        {/* Grid */}
        <section className="relative px-6 pb-32">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={{ show: { transition: { staggerChildren: 0.15 } } }}
            className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
          >
            {profiles.map((profile) => (
              <ProfileCard key={profile.name} profile={profile} />
            ))}
          </motion.div>
        </section>

        {/* CTA */}
        <section className="relative border-t border-neutral-200 dark:border-neutral-800 bg-white/70 dark:bg-neutral-900/70 backdrop-blur px-6 py-20">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-4xl font-bold text-neutral-900 dark:text-white">
              Add Your Developer Profile
            </h2>
            <p className="mt-4 text-neutral-600 dark:text-neutral-400">
              Join the ecosystem, highlight your expertise, and become part of an
              open-source driven professional network.
            </p>
            <a
              href="https://github.com/CodeHarborHub"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center mt-8 rounded-2xl bg-gradient-to-r from-indigo-600 to-cyan-600 px-8 py-4 text-sm font-bold text-white shadow-lg hover:scale-105 transition hover:text-white"
            >
              Contribute on GitHub
            </a>
          </div>
        </section>
      </main>
    </Layout>
  );
}
