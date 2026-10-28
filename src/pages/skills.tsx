import React from 'react';
// @ts-ignore
import Layout from '@theme/Layout';
// @ts-ignore
import Link from '@docusaurus/Link';
// @ts-ignore
import useBaseUrl from '@docusaurus/useBaseUrl';
import {skillGroups, learningNow, levelMeta, type Skill, type Level} from '../data/skills';

function Dots({level}: {level: Level}) {
  const filled = levelMeta[level].dots;
  return (
    <span aria-hidden="true" className="inline-flex gap-1">
      {[1, 2, 3].map((n) => (
        <span
          key={n}
          className={`h-1.5 w-1.5 rounded-full ${
            n <= filled ? 'bg-[var(--ifm-color-primary)]' : 'bg-gray-300 dark:bg-gray-600'
          }`}
        />
      ))}
    </span>
  );
}

function SkillRow({skill}: {skill: Skill}) {
  const iconUrl = useBaseUrl(skill.icon ?? '');
  return (
    <li className="m-0 flex items-center gap-3 border-b border-gray-200 py-3 dark:border-gray-700">
      {skill.icon ? (
        <img src={iconUrl} alt="" width={24} height={24} className="h-6 w-6 shrink-0 object-contain" />
      ) : (
        <span className="h-6 w-6 shrink-0" />
      )}
      <span className="flex-1 font-medium">{skill.name}</span>
      <span className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
        <Dots level={skill.level} />
        {levelMeta[skill.level].label}
      </span>
    </li>
  );
}

export default function Skills(): JSX.Element {
  return (
    <Layout
      title="Skills"
      description="Technologies and tools Ajay Dhangar uses to build full stack web applications: React, Node.js, MongoDB, Tailwind, and more."
    >
      <main className="section-padding m-4">
        <div className="container-max">
          <header className="max-w-2xl">
            <h1 className="mb-4 text-4xl font-bold sm:text-5xl">Skills</h1>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              I build full stack web apps with the MERN stack. Below is what I use, grouped by the
              kind of work, with an honest note on how well I know each one.
            </p>

            <dl className="mt-6 grid gap-2 text-sm text-gray-600 dark:text-gray-400">
              {(Object.keys(levelMeta) as Level[]).map((key) => (
                <div key={key} className="flex items-center gap-3">
                  <dt className="flex w-32 items-center gap-2 font-medium text-gray-900 dark:text-gray-100">
                    <Dots level={key} />
                    {levelMeta[key].label}
                  </dt>
                  <dd className="m-0">{levelMeta[key].hint}</dd>
                </div>
              ))}
            </dl>
          </header>

          <div className="mt-14">
            {skillGroups.map((group) => (
              <section
                key={group.id}
                id={group.id}
                className="grid gap-6 border-t border-gray-300 py-10 dark:border-gray-700 md:grid-cols-[18rem_1fr] md:gap-12"
              >
                <div>
                  <h2 className="mb-2 text-2xl font-semibold">{group.title}</h2>
                  <p className="m-0 text-gray-700 dark:text-gray-300">{group.description}</p>
                </div>
                <ul className="m-0 grid list-none gap-x-10 p-0 lg:grid-cols-2">
                  {group.skills.map((skill) => (
                    <SkillRow key={`${group.id}-${skill.name}`} skill={skill} />
                  ))}
                </ul>
              </section>
            ))}
          </div>

          <section className="border-t border-gray-300 py-10 dark:border-gray-700">
            <h2 className="mb-3 text-2xl font-semibold">Learning next</h2>
            <ul className="m-0 flex list-none flex-wrap gap-3 p-0">
              {learningNow.map((item) => (
                <li
                  key={item}
                  className="m-0 rounded-lg border border-gray-300 px-4 py-2 text-sm dark:border-gray-600"
                >
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <div className="mt-6 flex flex-wrap items-center gap-4">
            <Link to="/showcase" className="btn-primary hover:no-underline hover:text-white">
              See these skills in my projects
            </Link>
            <Link to="/me" className="font-medium">
              About me
            </Link>
          </div>
        </div>
      </main>
    </Layout>
  );
}