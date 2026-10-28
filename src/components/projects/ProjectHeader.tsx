import React from 'react';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import {getProject} from '@site/src/data/projects';

/** Used at the top of every case study: <ProjectHeader slug="algo" /> */
export default function ProjectHeader({slug}: {slug: string}): JSX.Element {
  const project = getProject(slug);
  const image = useBaseUrl(project.image);

  return (
    <header className="mb-10">
      <p className="text-sm text-gray-600 dark:text-gray-400">
        {project.status} · {project.category}
      </p>
      <p className="mt-2 max-w-2xl text-lg leading-8 text-gray-700 dark:text-gray-300">
        {project.summary}
      </p>

      <div className="mt-5 flex flex-wrap gap-3">
        {project.links.demo && (
          <Link
            href={project.links.demo}
            className="rounded-lg bg-[var(--ifm-color-primary)] px-5 py-2.5 font-semibold text-white hover:no-underline hover:text-white hover:opacity-90"
          >
            Visit live site
          </Link>
        )}
        {project.links.github && (
          <Link
            href={project.links.github}
            className="rounded-lg border border-gray-300 px-5 py-2.5 font-semibold text-gray-900 hover:no-underline hover:bg-gray-100 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800"
          >
            View source
          </Link>
        )}
      </div>

      <img
        src={image}
        alt={`${project.title} screenshot`}
        className="mt-8 w-full rounded-xl border border-gray-200 dark:border-gray-800"
      />

      <p className="mt-4 text-sm text-gray-600 dark:text-gray-400">
        Built with {project.stack.join(', ')}
      </p>
      <Link
        to="/projects"
        className="mt-2 inline-block text-sm font-semibold text-[var(--ifm-color-primary)]"
      >
        Back to all projects
      </Link>
    </header>
  );
}