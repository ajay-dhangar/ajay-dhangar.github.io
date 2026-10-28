import React from 'react';
// @ts-ignore
import Layout from '@theme/Layout';
// @ts-ignore
import Link from '@docusaurus/Link';
// @ts-ignore
import useBaseUrl from '@docusaurus/useBaseUrl';

/* ------------------------------------------------------------------
   Edit the data below. Images are expected in /static as on your
   current site (/img, /data, /icons).
------------------------------------------------------------------- */

const links = {
  resume:
    'https://drive.google.com/file/d/1kXgSKUjLyc0kcKuOz2SjfNnDfjXv9sHl/view?usp=sharing',
  github: 'https://github.com/ajay-dhangar',
  linkedin: 'https://linkedin.com/in/ajay-dhangar',
  youtube: 'https://youtube.com/@ajay-dhangar',
  x: 'https://twitter.com/CodesWithAjay',
};

const projects = [
  {
    name: 'CodeHarborHub',
    text: 'A community platform where developers share code snippets, learn, and collaborate.',
    image: '/data/codeharborhub.png',
    tags: ['React', 'TypeScript', 'Docusaurus'],
    href: 'https://codeharborhub.github.io/',
  },
  {
    name: 'Algo',
    text: 'Learn and practice data structures and algorithms through interactive coding challenges.',
    image: '/data/algo.png',
    tags: ['React', 'TypeScript', 'Docusaurus'],
    href: 'https://ajay-dhangar.github.io/algo',
  },
  {
    name: 'JavaScript Mastery',
    text: 'JavaScript tutorials, challenges, and projects for developers at every level.',
    image: '/data/jsm.png',
    tags: ['React', 'TypeScript', 'Docusaurus'],
    href: 'https://javascript-mastery.github.io/',
  },
  {
    name: 'AI Buddies',
    text: 'A learning space for practicing AI through tutorials and hands-on projects.',
    image: '/data/ai-buddies.png',
    tags: ['React', 'TypeScript', 'Docusaurus'],
    href: 'https://ai-buddies.github.io/',
  },
];

const skills = [
  { name: 'React', icon: 'jsx.svg' },
  { name: 'Next.js', icon: 'nextjs.svg' },
  { name: 'TypeScript', icon: 'ts.svg' },
  { name: 'JavaScript', icon: 'js.svg' },
  { name: 'Node.js', icon: 'nodejs.svg' },
  { name: 'Express', icon: 'express.svg' },
  { name: 'MongoDB', icon: 'mongodb.svg' },
  { name: 'Tailwind', icon: 'tailwind.svg' },
  { name: 'Python', icon: 'py.svg' },
  { name: 'Docker', icon: 'docker.svg' },
  { name: 'Git', icon: 'git.svg' },
  { name: 'Figma', icon: 'figma.svg' },
];

/* ------------------------------------------------------------------ */

const primary = 'text-[var(--ifm-color-primary)]';
const rule = 'border-t border-gray-200 dark:border-gray-800';
const heading = 'text-2xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-3xl';
const body = 'text-base leading-7 text-gray-700 dark:text-gray-300';

function Img(props: React.ImgHTMLAttributes<HTMLImageElement> & { src: string }) {
  const { src, ...rest } = props;
  return <img src={useBaseUrl(src)} {...rest} />;
}

function Hero() {
  return (
    <section className="mx-auto grid items-center gap-12 px-4 py-16 sm:px-6 md:grid-cols-[1fr_300px] md:py-24 lg:px-8">
      <div>
        <p className="inline-flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300">
          <span className="h-2.5 w-2.5 rounded-full bg-[var(--ifm-color-primary)]" aria-hidden />
          Open to full-stack opportunities
        </p>
        <h1 className="mt-5 text-4xl font-extrabold leading-[1.1] tracking-tight text-gray-900 dark:text-white sm:text-6xl">
          Hi, I'm Ajay. I build web apps from database to interface.
        </h1>
        <p className={`mt-6 max-w-xl text-lg ${body}`}>
          A full-stack developer specializing in the MERN stack, with a habit
          of cleaning up code until it reads well. I also build platforms that
          help other developers learn.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            to="/showcase"
            className="rounded-lg bg-[var(--ifm-color-primary)] px-5 py-2.5 font-semibold text-white hover:no-underline hover:text-white hover:opacity-90"
          >
            See my work
          </Link>
          <Link
            href={links.resume}
            className="rounded-lg border border-gray-300 px-5 py-2.5 font-semibold text-gray-900 hover:no-underline hover:bg-gray-100 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800"
          >
            Read my resume
          </Link>
          <Link
            to="/about"
            className="px-3 py-2.5 font-semibold text-gray-700 hover:no-underline dark:text-gray-300"
          >
            About me
          </Link>
        </div>
      </div>
      <Img
        src="/img/og/ajay.jpeg"
        alt="Ajay Dhangar"
        className="mx-auto aspect-square w-72 rounded-full object-cover ring-1 ring-gray-200 dark:ring-gray-800 sm:w-80"
      />
    </section>
  );
}

function Projects() {
  return (
    <section className={`mx-auto px-4 py-16 sm:px-6 lg:px-8 ${rule}`}>
      <div className="flex flex-wrap items-end justify-between gap-4">
        <h2 className={heading}>Things I've built</h2>
        <Link to="/showcase" className={`font-semibold ${primary}`}>
          View all projects
        </Link>
      </div>

      <div className="mt-12 space-y-16">
        {projects.map((p, i) => (
          <article
            key={p.name}
            className="grid items-center gap-8 md:grid-cols-2 md:gap-12"
          >
            <Link
              href={p.href}
              className={i % 2 === 1 ? 'md:order-2' : undefined}
              aria-label={`Open ${p.name}`}
            >
              <Img
                src={p.image}
                alt={`${p.name} screenshot`}
                loading="lazy"
                className="w-full rounded-xl border border-gray-200 object-cover dark:border-gray-800"
              />
            </Link>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{p.name}</h3>
              <p className={`mt-3 ${body}`}>{p.text}</p>
              <p className="mt-4 text-sm text-gray-600 dark:text-gray-400">
                {p.tags.join(', ')}
              </p>
              <Link href={p.href} className={`mt-5 inline-block font-semibold ${primary}`}>
                Visit {p.name}
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section className={`mx-auto px-4 py-16 sm:px-6 lg:px-8 ${rule}`}>
      <div className="grid gap-10 md:grid-cols-[300px_1fr]">
        <div>
          <h2 className={heading}>What I work with</h2>
          <p className={`mt-4 ${body}`}>
            These are the tools I use most for frontend, backend, and shipping
            projects.
          </p>
        </div>
        <ul className="grid grid-cols-2 gap-x-6 gap-y-5 sm:grid-cols-3 lg:grid-cols-4">
          {skills.map((s) => (
            <li key={s.name} className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-white p-1.5 ring-1 ring-gray-200 dark:ring-gray-700">
                <Img src={`/icons/${s.icon}`} alt="" className="h-full w-full object-contain" />
              </span>
              <span className="font-medium text-gray-900 dark:text-white">{s.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Writing() {
  return (
    <section className={`mx-auto px-4 py-16 sm:px-6 lg:px-8 ${rule}`}>
      <h2 className={heading}>Learn alongside me</h2>
      <p className={`mt-4 max-w-2xl ${body}`}>
        I write tutorials and notes as I learn, and share videos on YouTube.
        Start with whichever format you prefer.
      </p>
      <div className="mt-6 flex flex-wrap gap-x-8 gap-y-3 font-semibold">
        <Link to="/blog" className={primary}>Read the blog</Link>
        <Link to="/docs" className={primary}>Browse the docs</Link>
        <Link href={links.youtube} className={primary}>Watch on YouTube</Link>
        <Link to="/certificates" className={primary}>See my certificates</Link>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section className={`mx-auto px-4 pb-24 pt-16 sm:px-6 lg:px-8 ${rule}`}>
      <h2 className="max-w-2xl text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
        Have a role or project in mind? Let's talk.
      </h2>
      <p className={`mt-4 max-w-xl ${body}`}>
        I'm looking for full-stack work where I can build, learn, and
        contribute to the team. A message on LinkedIn is the fastest way to
        reach me.
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
        <Link
          href={links.linkedin}
          className="rounded-lg bg-[var(--ifm-color-primary)] px-5 py-2.5 font-semibold text-white hover:no-underline hover:text-white hover:opacity-90"
        >
          Message me on LinkedIn
        </Link>
        <Link
          href={links.github}
          className="rounded-lg border border-gray-300 px-5 py-2.5 font-semibold text-gray-900 hover:no-underline hover:bg-gray-100 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800"
        >
          Follow on GitHub
        </Link>
        <Link
          href={links.x}
          className="px-3 py-2.5 font-semibold text-gray-700 hover:no-underline dark:text-gray-300"
        >
          X / Twitter
        </Link>
      </div>
    </section>
  );
}

export default function Home(): JSX.Element {
  return (
    <Layout
      title="Full Stack Developer"
      description="Ajay Dhangar is a full stack developer who builds MERN apps and developer learning platforms. Explore projects, skills, and certifications."
    >
      <main>
        <Hero />
        <Projects />
        <Skills />
        <Writing />
        <Contact />
      </main>
    </Layout>
  );
}