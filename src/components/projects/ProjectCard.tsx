import React from 'react';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import type {Project, ProjectStatus} from '@site/src/data/projects';

const statusDot: Record<ProjectStatus, string> = {
  Live: 'bg-green-500',
  'In progress': 'bg-amber-500',
  Archived: 'bg-gray-400',
};

export default function ProjectCard({project}: {project: Project}) {
  const image = useBaseUrl(project.image);
  const caseStudy = `/projects/${project.slug}`;

  return (
    <article className="flex flex-col overflow-hidden rounded-xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-900">
      <Link to={caseStudy} tabIndex={-1} aria-hidden="true">
        <img
          src={image}
          alt=""
          loading="lazy"
          className="aspect-[16/9] w-full object-cover"
        />
      </Link>

      <div className="flex flex-1 flex-col p-5">
        <p className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
          <span
            className={`h-2 w-2 rounded-full ${statusDot[project.status]}`}
            aria-hidden="true"
          />
          {project.status} · {project.category}
        </p>

        <h3 className="mt-2 text-xl font-bold text-gray-900 dark:text-white">
          <Link to={caseStudy} className="hover:no-underline">
            {project.title}
          </Link>
        </h3>

        <p className="mt-2 text-base leading-7 text-gray-700 dark:text-gray-300">
          {project.summary}
        </p>

        <p className="mt-3 text-sm text-gray-600 dark:text-gray-400">
          {project.stack.join(', ')}
        </p>

        <div className="mt-auto flex flex-wrap gap-x-5 gap-y-2 pt-5 font-semibold">
          <Link to={caseStudy} className="text-[var(--ifm-color-primary)]">
            Read case study
          </Link>
          {project.links.demo && (
            <Link
              href={project.links.demo}
              className="text-[var(--ifm-color-primary)]"
            >
              Live demo
            </Link>
          )}
          {project.links.github && (
            <Link
              href={project.links.github}
              className="text-[var(--ifm-color-primary)]"
            >
              Source code
            </Link>
          )}
        </div>
      </div>
    </article>
  );
}