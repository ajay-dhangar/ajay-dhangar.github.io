import React, { useState } from 'react';
// @ts-ignore
import Layout from '@theme/Layout';
// @ts-ignore
import Link from '@docusaurus/Link';
// @ts-ignore
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

interface Certification {
  id: string;
  title: string;
  issuer: string;
  issueDate: string;
  credentialId: string;
  credentialUrl: string;
  category: 'Software Engineering' | 'Systems & DevOps' | 'Full-Stack & Web' | 'Data & AI';
  skills: string[];
  description: string;
  image: string; // Certificate full image URL / static path
  featured?: boolean;
}

export default function CertificationsPage(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const certifications: Certification[] = [
    {
      id: 'cert-1',
      title: 'Linux System Engineering & Administration',
      issuer: 'Linux Foundation / System Engineering',
      issueDate: '2026',
      credentialId: 'LF-LSE-2026-0981',
      credentialUrl: 'https://github.com/ajay-dhangar',
      category: 'Systems & DevOps',
      skills: ['Linux Kernel', 'Shell Scripting', 'System Architecture', 'CI/CD Pipelines'],
      description: 'Validation in Linux system performance optimization, shell automation, GitHub Actions CI/CD workflows, and core OS administration.',
      image: '/img/certificates/linux-engineering.png', // Replace with your static image path or URL
      featured: true,
    },
    {
      id: 'cert-2',
      title: 'Frontend System Architecture with React & TypeScript',
      issuer: 'Advanced Web Engineering Ecosystem',
      issueDate: '2025',
      credentialId: 'AWE-RTS-2025-4421',
      credentialUrl: 'https://github.com/ajay-dhangar',
      category: 'Software Engineering',
      skills: ['React', 'TypeScript', 'Docusaurus Architecture', 'State Management', 'UI/UX'],
      description: 'Mastery in modular component engineering, custom Docusaurus theme building, state management, and accessible UI designs.',
      image: '/img/certificates/frontend-react-typescript.png', // Replace with your static image path or URL
      featured: true,
    },
    {
      id: 'cert-3',
      title: 'Full-Stack Web Development & DevOps Automation',
      issuer: 'Developer Community & Open Source Academy',
      issueDate: '2025',
      credentialId: 'FSW-DEV-2025-7729',
      credentialUrl: 'https://github.com/ajay-dhangar',
      category: 'Full-Stack & Web',
      skills: ['Node.js', 'Express', 'Tailwind CSS', 'Docker', 'GitHub Actions'],
      description: 'Comprehensive certification covering RESTful APIs, modern full-stack web platforms, containerization, and deployment pipelines.',
      image: '/img/certificates/fullstack-devops.png', // Replace with your static image path or URL
      featured: true,
    },
    {
      id: 'cert-4',
      title: 'Data Structures & Algorithms Mastery',
      issuer: 'Algo Open Source Platform',
      issueDate: '2025',
      credentialId: 'ALG-DSA-2025-1029',
      credentialUrl: 'https://github.com/ajay-dhangar/algo',
      category: 'Software Engineering',
      skills: ['Algorithms', 'Data Structures', 'Problem Solving', 'Visualizers'],
      description: 'Focused on algorithm visualizers, graph traversal algorithms, dynamic programming, and computer science fundamentals.',
      image: '/img/certificates/dsa-mastery.png', // Replace with your static image path or URL
    },
    {
      id: 'cert-5',
      title: 'AI Multi-Agent Systems & Developer Workflows',
      issuer: 'AI Software Architecture Labs',
      issueDate: '2026',
      credentialId: 'AI-MAS-2026-3012',
      credentialUrl: 'https://github.com/ajay-dhangar',
      category: 'Data & AI',
      skills: ['Multi-Agent Systems', 'AI Roadmaps', 'Automation', 'LLM Tools'],
      description: 'Multi-agent system architecture, automated developer tools, and designing AI workflow roadmaps.',
      image: '/img/certificates/ai-multiagent.png', // Replace with your static image path or URL
    },
  ];

  const categories = ['All', 'Software Engineering', 'Systems & DevOps', 'Full-Stack & Web', 'Data & AI'];

  const filteredCertifications = certifications.filter((cert) => {
    const matchesCategory = selectedCategory === 'All' || cert.category === selectedCategory;
    const matchesQuery =
      cert.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      cert.issuer.toLowerCase().includes(searchQuery.toLowerCase()) ||
      cert.skills.some((skill) => skill.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesQuery;
  });

  return (
    <Layout
      title="Certifications & Badges | Ajay Dhangar"
      description="Verified professional certifications, full-size credential images, and technical skill badges of Ajay Dhangar."
    >
      <main className="noise-bg min-h-screen transition-colors duration-300">
        
        {/* BREADCRUMB / NAV BACK */}
        <section className="pt-8 px-4 sm:px-6 lg:px-8 container-max">
          <Link
            to="/career"
            className="inline-flex items-center text-sm font-semibold text-blue-600 dark:text-emerald-400 no-underline hover:underline"
          >
            ← Back to Career Hub
          </Link>
        </section>

        {/* HERO SECTION */}
        <section className="section-padding container-max pt-6">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="dyte-badge px-3 py-1 bg-blue-100 dark:bg-emerald-900/40 text-blue-600 dark:text-emerald-400 font-semibold rounded-full text-xs uppercase tracking-widest inline-block">
              Verified Technical Credentials
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white leading-tight">
              Certifications & <span className="text-primaryColor">Credential Showcase</span>
            </h1>
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              Explore my verified certificates across Linux systems, full-stack architecture, software engineering, and AI ecosystems. Click on any certificate image to view it full size.
            </p>
          </div>
        </section>

       {/* SEARCH & CATEGORY FILTER BAR */}
        <section className="container-max px-4 sm:px-6 lg:px-8 mb-12">
          <div className="card p-6 sm:p-8 border border-gray-200/80 dark:border-gray-800 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-xl dark:shadow-2xl/40 rounded-2xl space-y-6">
            
            {/* Top Bar: Search Input + Result Counter */}
            <div className="flex flex-col md:flex-row gap-4 items-stretch md:items-center justify-between">
              
              {/* Search Box */}
              <div className="relative flex-1 group">
                <input
                  type="text"
                  placeholder="Search by title, issuer, credential ID, or technology..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-4 py-3.5 pl-11 pr-10 text-sm font-medium bg-gray-50/90 dark:bg-gray-800/80 text-gray-900 dark:text-white rounded-xl border border-gray-200 dark:border-gray-700/80 focus:outline-none focus:ring-2 focus:ring-blue-500/80 dark:focus:ring-emerald-400/80 focus:border-transparent transition-all duration-300 placeholder-gray-400 dark:placeholder-gray-500 shadow-inner"
                />
                
                {/* Search Icon */}
                <svg
                  className="w-5 h-5 absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-blue-600 dark:group-focus-within:text-emerald-400 transition-colors duration-200"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>

                {/* Clear Input Button (Visible when searchQuery has text) */}
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    aria-label="Clear search query"
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 bg-gray-200/60 dark:bg-gray-700/60 p-1 rounded-full border-none cursor-pointer transition-colors"
                  >
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                )}
              </div>

              {/* Real-time Match Indicator */}
              <div className="flex items-center justify-between md:justify-end gap-3 text-xs font-mono text-gray-500 dark:text-gray-400 shrink-0 border-t md:border-t-0 border-gray-100 dark:border-gray-800 pt-3 md:pt-0">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gray-100 dark:bg-gray-800 font-semibold text-gray-700 dark:text-gray-300">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  Showing {filteredCertifications.length} of {certifications.length}
                </span>

                {(selectedCategory !== 'All' || searchQuery !== '') && (
                  <button
                    onClick={() => {
                      setSelectedCategory('All');
                      setSearchQuery('');
                    }}
                    className="text-xs font-semibold text-blue-600 dark:text-emerald-400 hover:underline bg-transparent border-none cursor-pointer"
                  >
                    Reset Filters
                  </button>
                )}
              </div>

            </div>

            {/* Filter Buttons & Popular Search Chips */}
            <div className="pt-2 border-t border-gray-100 dark:border-gray-800/80 space-y-3">
              
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-xs font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest mr-1 text-[10px]">
                  Category:
                </span>
                
                {categories.map((cat) => {
                  const isSelected = selectedCategory === cat;
                  const count = cat === 'All' 
                    ? certifications.length 
                    : certifications.filter((c) => c.category === cat).length;

                  return (
                    <button
                      key={cat}
                      onClick={() => setSelectedCategory(cat)}
                      className={`relative inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-300 border cursor-pointer select-none ${
                        isSelected
                          ? 'bg-blue-600 dark:bg-emerald-500 text-white border-blue-600 dark:border-emerald-500 shadow-lg shadow-blue-500/25 dark:shadow-emerald-500/20 transform -translate-y-0.5'
                          : 'bg-gray-100/80 dark:bg-gray-800/60 text-gray-700 dark:text-gray-300 border-gray-200/60 dark:border-gray-700/50 hover:bg-gray-200 dark:hover:bg-gray-700/80 hover:text-gray-900 dark:hover:text-white'
                      }`}
                    >
                      <span>{cat}</span>
                      <span
                        className={`px-1.5 py-0.5 text-[10px] rounded-full font-mono font-bold ${
                          isSelected
                            ? 'bg-white/20 text-white'
                            : 'bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300'
                        }`}
                      >
                        {count}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Quick Filter Tags / Popular Keywords */}
              <div className="flex flex-wrap items-center gap-1.5 pt-1">
                <span className="text-[10px] font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest mr-1">
                  Quick Tags:
                </span>
                {['Linux', 'React', 'Docker', 'TypeScript', 'CI/CD', 'AI'].map((tag) => (
                  <button
                    key={tag}
                    onClick={() => setSearchQuery(tag)}
                    className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-gray-50 dark:bg-gray-800/40 text-gray-600 dark:text-gray-400 border border-gray-200/60 dark:border-gray-700/40 hover:border-blue-500 dark:hover:border-emerald-400 hover:text-blue-600 dark:hover:text-emerald-400 transition-colors cursor-pointer"
                  >
                    #{tag}
                  </button>
                ))}
              </div>

            </div>

          </div>
        </section>

        {/* CERTIFICATIONS GALLERY GRID */}
        <section className="container-max px-4 sm:px-6 lg:px-8 pb-20">
          {filteredCertifications.length === 0 ? (
            <div className="card p-12 text-center text-gray-500 dark:text-gray-400 border border-gray-100 dark:border-gray-800">
              <p className="text-lg font-semibold">No certificates match your search query.</p>
              <button
                onClick={() => {
                  setSelectedCategory('All');
                  setSearchQuery('');
                }}
                className="mt-4 text-sm text-blue-600 dark:text-emerald-400 underline font-medium border-none bg-transparent cursor-pointer"
              >
                Reset filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredCertifications.map((cert) => (
                <div
                  key={cert.id}
                  className="card overflow-hidden border border-gray-100 dark:border-gray-800 flex flex-col justify-between transition-all duration-300 hover:shadow-2xl group"
                >
                  {/* FULL SIZE IMAGE CONTAINER WITH OVERLAY */}
                  <div className="relative w-full h-52 bg-gray-900 overflow-hidden cursor-pointer" onClick={() => setSelectedImage(cert.image)}>
                    <img
                      src={cert.image}
                      alt={cert.title}
                      className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                      onError={(e) => {
                        // Fallback image gradient if local file is missing
                        (e.target as HTMLElement).style.display = 'none';
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-950/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                    
                    {/* Expand Badge Overlay */}
                    <div className="absolute bottom-3 right-3 bg-gray-900/80 backdrop-blur-md text-white text-[11px] px-2.5 py-1 rounded-md border border-white/20 flex items-center gap-1">
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                      Click to Expand
                    </div>

                    {/* Featured Tag */}
                    {cert.featured && (
                      <span className="absolute top-3 left-3 text-[10px] font-bold text-amber-900 bg-amber-400 px-2 py-0.5 rounded shadow">
                        ★ FEATURED
                      </span>
                    )}
                  </div>

                  {/* CONTENT DETAILS */}
                  <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-[11px] font-mono font-bold px-2.5 py-0.5 rounded bg-blue-50 text-blue-700 dark:bg-emerald-900/40 dark:text-emerald-300">
                          {cert.category}
                        </span>
                        <span className="text-xs font-mono text-gray-500 dark:text-gray-400">
                          {cert.issueDate}
                        </span>
                      </div>

                      <h3 className="text-lg font-bold text-gray-900 dark:text-white leading-snug mb-1">
                        {cert.title}
                      </h3>
                      <p className="text-xs font-semibold text-blue-600 dark:text-emerald-400 mb-3">
                        {cert.issuer}
                      </p>

                      <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                        {cert.description}
                      </p>

                      {/* Skills Tags */}
                      <div className="flex flex-wrap gap-1.5">
                        {cert.skills.map((skill, sIdx) => (
                          <span
                            key={sIdx}
                            className="text-[11px] px-2 py-0.5 bg-gray-100 dark:bg-gray-700/60 text-gray-700 dark:text-gray-300 rounded"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Credential ID & External Verify Link */}
                    <div className="pt-4 border-t border-gray-100 dark:border-gray-800 flex items-center justify-between text-xs">
                      <div>
                        <p className="text-[9px] uppercase font-mono text-gray-400">Credential ID</p>
                        <p className="font-mono text-gray-600 dark:text-gray-300 text-[11px]">{cert.credentialId}</p>
                      </div>
                      <a
                        href={cert.credentialUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs font-semibold text-blue-600 dark:text-emerald-400 hover:underline no-underline"
                      >
                        Verify
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    </div>

                  </div>
                </div>
              ))}
            </div>
          )}
        </section>

        {/* FULL-SCREEN LIGHTBOX MODAL FOR CERTIFICATE IMAGE */}
        {selectedImage && (
          <div
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 transition-opacity duration-300"
            onClick={() => setSelectedImage(null)}
          >
            <div
              className="relative max-w-5xl w-full max-h-[90vh] bg-transparent flex flex-col items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 text-white hover:text-gray-300 font-bold text-sm bg-gray-800/80 px-3 py-1.5 rounded-lg border border-gray-600 cursor-pointer"
              >
                ✕ Close
              </button>

              {/* Full Image */}
              <img
                src={selectedImage}
                alt="Certificate Full View"
                className="w-full h-auto max-h-[85vh] object-contain rounded-xl shadow-2xl border border-gray-800"
              />
            </div>
          </div>
        )}

        {/* BOTTOM RESUME / CAREER CTA */}
        <section className="section-padding container-max text-center p-4">
          <div className="card p-10 bg-gradient-to-r from-blue-600 to-indigo-700 dark:from-gray-800 dark:to-gray-900 text-white rounded-3xl shadow-xl relative overflow-hidden">
            <div className="relative z-10 max-w-2xl mx-auto space-y-4">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">Looking for complete career details?</h2>
              <p className="text-blue-100 dark:text-gray-300 text-sm">
                View my structured resume, open-source project contributions, and academic background.
              </p>
              <div className="pt-2 flex justify-center gap-4">
                <Link
                  to="/career/resume"
                  className="bg-white text-blue-600 hover:bg-gray-100 font-bold py-2.5 px-6 rounded-xl text-sm transition duration-300 shadow-md no-underline"
                >
                  View Resume
                </Link>
                <Link
                  to="/career/experience"
                  className="bg-blue-500/30 hover:bg-blue-500/50 text-white font-bold py-2.5 px-6 rounded-xl text-sm transition duration-300 border border-white/20 no-underline"
                >
                  Explore Work Experience
                </Link>
              </div>
            </div>
          </div>
        </section>

      </main>
    </Layout>
  );
}