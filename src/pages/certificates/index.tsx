import React, {useEffect, useMemo, useRef, useState} from 'react';
import Layout from '@theme/Layout';
import {certificates, type Certificate, type CertCategory} from '../../data/certificates';

type Sort = 'newest' | 'oldest' | 'az';

const sortLabels: Record<Sort, string> = {
  newest: 'Newest first',
  oldest: 'Oldest first',
  az: 'Title A to Z',
};

function initials(name: string) {
  return name
    .split(/\s+/)
    .filter((w) => /^[A-Za-z]/.test(w))
    .slice(0, 2)
    .map((w) => w[0])
    .join('')
    .toUpperCase();
}

function byDate(a: Certificate, b: Certificate) {
  return b.year - a.year || (b.month ?? 0) - (a.month ?? 0);
}

function Badge({children}: {children: React.ReactNode}) {
  return (
    <span className="rounded-md bg-gray-100 px-2 py-0.5 text-xs text-gray-700 dark:bg-gray-800 dark:text-gray-300">
      {children}
    </span>
  );
}

function CertRow({cert, onOpen}: {cert: Certificate; onOpen: () => void}) {
  return (
    <li className="m-0 border-b border-gray-200 dark:border-gray-700">
      <button
        type="button"
        onClick={onOpen}
        className="flex w-full cursor-pointer appearance-none items-start gap-4 border-0 bg-transparent px-2 py-5 text-left text-inherit transition-colors hover:bg-gray-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--ifm-color-primary)] dark:hover:bg-gray-800/60"
        style={{font: 'inherit'}}
        aria-label={`${cert.title}, ${cert.issuer}, ${cert.year}. Open details`}
      >
        <span
          aria-hidden="true"
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[var(--ifm-color-primary)] text-sm font-semibold text-[var(--ifm-color-primary)]"
        >
          {initials(cert.issuer)}
        </span>
        <span className="min-w-0 flex-1">
          <span className="block text-lg font-semibold leading-snug">{cert.title}</span>
          <span className="mt-0.5 block text-gray-600 dark:text-gray-400">{cert.issuer}</span>
          <span className="mt-3 flex flex-wrap gap-2">
            {cert.skills.slice(0, 4).map((s) => (
              <Badge key={s}>{s}</Badge>
            ))}
            {cert.skills.length > 4 && <Badge>+{cert.skills.length - 4} more</Badge>}
          </span>
        </span>
        <span className="hidden shrink-0 text-right text-sm sm:block">
          <span className="block text-gray-600 dark:text-gray-400">{cert.category}</span>
          <span
            className={`mt-1 block ${
              cert.credentialUrl ? 'text-[var(--ifm-color-primary)]' : 'text-gray-500 dark:text-gray-500'
            }`}
          >
            {cert.credentialUrl ? 'Verifiable' : 'No public link'}
          </span>
        </span>
      </button>
    </li>
  );
}

function DetailDialog({cert, onClose}: {cert: Certificate | null; onClose: () => void}) {
  const ref = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dlg = ref.current;
    if (!dlg) return;
    if (cert && !dlg.open) dlg.showModal();
    if (!cert && dlg.open) dlg.close();
  }, [cert]);

  return (
    <dialog
      ref={ref}
      onClose={onClose}
      onClick={(e) => {
        // Click on the backdrop (the dialog element itself) closes it.
        if (e.target === ref.current) ref.current?.close();
      }}
      aria-labelledby="cert-dialog-title"
      className="w-[min(92vw,40rem)] rounded-2xl border border-gray-200 bg-white p-0 text-gray-900 shadow-2xl backdrop:bg-black/60 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100"
    >
      {cert && (
        <div className="p-6 sm:p-8">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="m-0 text-sm text-gray-600 dark:text-gray-400">
                {cert.issuer} · {cert.year}
              </p>
              <h2 id="cert-dialog-title" className="mb-0 mt-1 text-2xl font-bold leading-snug">
                {cert.title}
              </h2>
            </div>
            <button
              type="button"
              onClick={() => ref.current?.close()}
              aria-label="Close details"
              className="shrink-0 cursor-pointer rounded-lg border border-gray-300 bg-transparent px-3 py-1 text-sm text-inherit dark:border-gray-600"
            >
              Close
            </button>
          </div>

          {cert.image && (
            <img
              src={cert.image}
              alt={`Certificate: ${cert.title}`}
              className="mt-5 w-full rounded-lg border border-gray-200 dark:border-gray-700"
              loading="lazy"
            />
          )}

          <p className="mt-5 text-gray-700 dark:text-gray-300">{cert.description}</p>

          <h3 className="mb-2 mt-6 text-base font-semibold">Skills covered</h3>
          <ul className="m-0 flex list-none flex-wrap gap-2 p-0">
            {cert.skills.map((s) => (
              <li key={s} className="m-0">
                <Badge>{s}</Badge>
              </li>
            ))}
          </ul>

          {cert.credentialId && (
            <p className="mt-6 text-sm text-gray-600 dark:text-gray-400">
              Credential ID: <code>{cert.credentialId}</code>
            </p>
          )}

          <div className="mt-6 flex flex-wrap items-center gap-4">
            {cert.credentialUrl ? (
              <a
                href={cert.credentialUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary hover:text-white hover:no-underline"
              >
                Verify on {cert.issuer.split(' ')[0]}
              </a>
            ) : (
              <p className="m-0 text-sm text-gray-600 dark:text-gray-400">
                This certificate has no public verification link. Ask me for proof by email.
              </p>
            )}
          </div>
        </div>
      )}
    </dialog>
  );
}

export default function Certificates(): JSX.Element {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState<CertCategory | 'All'>('All');
  const [sort, setSort] = useState<Sort>('newest');
  const [openId, setOpenId] = useState<string | null>(null);

  const categories = useMemo(() => {
    const counts = new Map<CertCategory, number>();
    certificates.forEach((c) => counts.set(c.category, (counts.get(c.category) ?? 0) + 1));
    return Array.from(counts.entries());
  }, []);

  const visible = useMemo(() => {
    const q = query.trim().toLowerCase();
    const list = certificates.filter((c) => {
      if (category !== 'All' && c.category !== category) return false;
      if (!q) return true;
      return [c.title, c.issuer, c.description, ...c.skills].some((t) => t.toLowerCase().includes(q));
    });
    if (sort === 'newest') list.sort(byDate);
    if (sort === 'oldest') list.sort((a, b) => -byDate(a, b));
    if (sort === 'az') list.sort((a, b) => a.title.localeCompare(b.title));
    return list;
  }, [query, category, sort]);

  // Group by year only when sorting by date; A-Z gets one flat list.
  const groups = useMemo(() => {
    if (sort === 'az') return [{label: '', items: visible}];
    const map = new Map<number, Certificate[]>();
    visible.forEach((c) => map.set(c.year, [...(map.get(c.year) ?? []), c]));
    return Array.from(map.entries()).map(([year, items]) => ({label: String(year), items}));
  }, [visible, sort]);

  const issuers = new Set(certificates.map((c) => c.issuer)).size;
  const latest = Math.max(...certificates.map((c) => c.year));
  const filtering = query.trim() !== '' || category !== 'All';
  const openCert = certificates.find((c) => c.id === openId) ?? null;

  const reset = () => {
    setQuery('');
    setCategory('All');
  };

  return (
    <Layout
      title="Certificates"
      description="Professional certifications and training completed by Ajay Dhangar in cloud, frontend, DevOps, and databases."
    >
      <main className="section-padding m-4">
        <div className="container-max">
          <header className="max-w-2xl">
            <h1 className="mb-4 text-4xl font-bold sm:text-5xl">Certificates</h1>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              Courses and exams I have completed. Open any entry for the skills it covered and a
              link to check it with the issuer.
            </p>
            <p className="mt-4 text-sm text-gray-600 dark:text-gray-400">
              {certificates.length} certificates · {issuers} issuers · latest in {latest}
            </p>
          </header>

          {/* Controls */}
          <div className="mt-10 grid gap-4 md:grid-cols-[1fr_auto] md:items-end">
            <div>
              <label htmlFor="cert-search" className="mb-1 block text-sm font-medium">
                Search by title, issuer, or skill
              </label>
              <input
                id="cert-search"
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Try “React” or “Google”"
                className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-base text-gray-900 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-100"
              />
            </div>
            <div>
              <label htmlFor="cert-sort" className="mb-1 block text-sm font-medium">
                Sort
              </label>
              <select
                id="cert-sort"
                value={sort}
                onChange={(e) => setSort(e.target.value as Sort)}
                className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2.5 text-base text-gray-900 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-100 md:w-auto"
              >
                {(Object.keys(sortLabels) as Sort[]).map((s) => (
                  <option key={s} value={s}>
                    {sortLabels[s]}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="mt-4 flex flex-wrap gap-2" role="group" aria-label="Filter by category">
            {([['All', certificates.length], ...categories] as [CertCategory | 'All', number][]).map(
              ([name, count]) => {
                const active = category === name;
                return (
                  <button
                    key={name}
                    type="button"
                    aria-pressed={active}
                    onClick={() => setCategory(name)}
                    className={`cursor-pointer rounded-full border px-4 py-1.5 text-sm transition-colors ${
                      active
                        ? 'border-[var(--ifm-color-primary)] bg-[var(--ifm-color-primary)] text-white'
                        : 'border-gray-300 bg-transparent text-inherit hover:border-[var(--ifm-color-primary)] dark:border-gray-600'
                    }`}
                  >
                    {name} <span className="opacity-70">{count}</span>
                  </button>
                );
              },
            )}
          </div>

          <p aria-live="polite" className="mb-0 mt-6 text-sm text-gray-600 dark:text-gray-400">
            Showing {visible.length} of {certificates.length}
            {filtering && (
              <>
                {' · '}
                <button
                  type="button"
                  onClick={reset}
                  className="cursor-pointer border-0 bg-transparent p-0 text-[var(--ifm-color-primary)] underline"
                >
                  Clear filters
                </button>
              </>
            )}
          </p>

          {/* Results */}
          {visible.length === 0 ? (
            <div className="mt-8 rounded-xl border border-dashed border-gray-300 p-10 text-center dark:border-gray-600">
              <p className="mb-1 text-lg font-semibold">No certificates match “{query}”</p>
              <p className="mb-5 text-gray-600 dark:text-gray-400">
                Check the spelling, or remove the category filter.
              </p>
              <button type="button" onClick={reset} className="btn-primary cursor-pointer border-0">
                Show all certificates
              </button>
            </div>
          ) : (
            <div className="mt-4">
              {groups.map((g) => (
                <section
                  key={g.label || 'all'}
                  className={g.label ? 'grid gap-2 md:grid-cols-[6rem_1fr] md:gap-8' : ''}
                  aria-label={g.label ? `Certificates from ${g.label}` : undefined}
                >
                  {g.label && (
                    <h2 className="m-0 pt-5 text-xl font-semibold text-gray-500 dark:text-gray-400 md:sticky md:top-20 md:self-start">
                      {g.label}
                    </h2>
                  )}
                  <ul className="m-0 list-none p-0">
                    {g.items.map((c) => (
                      <CertRow key={c.id} cert={c} onOpen={() => setOpenId(c.id)} />
                    ))}
                  </ul>
                </section>
              ))}
            </div>
          )}
        </div>
      </main>

      <DetailDialog cert={openCert} onClose={() => setOpenId(null)} />
    </Layout>
  );
}