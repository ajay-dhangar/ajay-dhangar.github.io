import React, {useMemo, useState} from 'react';
import {projects} from '@site/src/data/projects';
import ProjectCard from './ProjectCard';

const ALL = 'All';

function Chip({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      aria-pressed={active}
      onClick={onClick}
      className={
        'cursor-pointer rounded-full border px-3.5 py-1.5 text-sm font-medium ' +
        (active
          ? 'border-[var(--ifm-color-primary)] bg-[var(--ifm-color-primary)] text-white'
          : 'border-gray-300 bg-transparent text-gray-800 hover:bg-gray-100 dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-800')
      }
    >
      {label}
    </button>
  );
}

function ChipRow({
  legend,
  options,
  value,
  onChange,
}: {
  legend: string;
  options: string[];
  value: string;
  onChange: (v: string) => void;
}) {
  // Filters only appear once there is something to choose between.
  if (options.length < 3) return null; // "All" + at least 2 real values
  return (
    <div role="group" aria-label={legend} className="flex flex-wrap items-center gap-2">
      <span className="mr-1 text-sm font-semibold text-gray-700 dark:text-gray-300">
        {legend}
      </span>
      {options.map((o) => (
        <Chip key={o} label={o} active={value === o} onClick={() => onChange(o)} />
      ))}
    </div>
  );
}

export default function ProjectsGallery(): JSX.Element {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState(ALL);
  const [tech, setTech] = useState(ALL);

  const categories = useMemo(
    () => [ALL, ...Array.from(new Set(projects.map((p) => p.category)))],
    [],
  );
  const techs = useMemo(
    () => [ALL, ...Array.from(new Set(projects.flatMap((p) => p.stack))).sort()],
    [],
  );

  const visible = useMemo(() => {
    const q = query.trim().toLowerCase();
    return projects
      .filter((p) => category === ALL || p.category === category)
      .filter((p) => tech === ALL || p.stack.includes(tech))
      .filter(
        (p) =>
          !q ||
          p.title.toLowerCase().includes(q) ||
          p.summary.toLowerCase().includes(q) ||
          p.stack.some((s) => s.toLowerCase().includes(q)),
      )
      .sort((a, b) => Number(!!b.featured) - Number(!!a.featured));
  }, [query, category, tech]);

  const filtering = query !== '' || category !== ALL || tech !== ALL;

  return (
    <div>
      <div className="space-y-4">
        <label className="block">
          <span className="sr-only">Search projects</span>
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search by name, description, or technology"
            className="w-full max-w-md rounded-lg border border-gray-300 bg-white px-3 py-2 text-gray-900 placeholder-gray-500 dark:border-gray-700 dark:bg-gray-900 dark:text-white"
          />
        </label>
        <ChipRow legend="Type" options={categories} value={category} onChange={setCategory} />
        <ChipRow legend="Tech" options={techs} value={tech} onChange={setTech} />
      </div>

      <p className="mt-6 text-sm text-gray-600 dark:text-gray-400" aria-live="polite">
        Showing {visible.length} of {projects.length} projects
      </p>

      {visible.length > 0 ? (
        <div className="mt-4 grid gap-8 md:grid-cols-2">
          {visible.map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>
      ) : (
        <div className="mt-8">
          <p className="text-gray-700 dark:text-gray-300">
            No projects match your filters.
          </p>
          {filtering && (
            <button
              type="button"
              onClick={() => {
                setQuery('');
                setCategory(ALL);
                setTech(ALL);
              }}
              className="mt-3 cursor-pointer font-semibold text-[var(--ifm-color-primary)]"
            >
              Clear filters
            </button>
          )}
        </div>
      )}
    </div>
  );
}