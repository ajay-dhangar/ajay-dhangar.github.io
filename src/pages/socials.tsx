import { useState, useMemo } from "react";
import Layout from "@theme/Layout";
import { motion, AnimatePresence } from "framer-motion";
import * as Icons from "lucide-react";
import { SOCIAL_LINKS, SocialLink } from "../data/socialLinks";
import { SearchFilter } from "../components/SearchFilter";

/**
 * Dynamically generate categories from data
 * Ensures scalability for 100+ links
 */
const ALL_CATEGORY = "All";

export default function SocialDirectory() {
  // const [search, setSearch] = useState('');
  // const [activeTab, setActiveTab] = useState<string>(ALL_CATEGORY);

  // const categories = useMemo(() => {
  //   const unique = new Set(SOCIAL_LINKS.map(link => link.category));
  //   return [ALL_CATEGORY, ...Array.from(unique)];
  // }, []);

  // const filteredLinks = useMemo(() => {
  //   const query = search.toLowerCase().trim();

  //   return SOCIAL_LINKS.filter((link) => {
  //     const matchesSearch =
  //       link.name.toLowerCase().includes(query) ||
  //       link.handle.toLowerCase().includes(query);

  //     const matchesCategory =
  //       activeTab === ALL_CATEGORY || link.category === activeTab;

  //     return matchesSearch && matchesCategory;
  //   });
  // }, [search, activeTab]);

  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState(ALL_CATEGORY);

  const categories = useMemo(() => {
    const unique = new Set(SOCIAL_LINKS.map((l) => l.category));
    return [ALL_CATEGORY, ...Array.from(unique)];
  }, []);

  const filteredLinks = useMemo(() => {
    const q = search.toLowerCase().trim();

    return SOCIAL_LINKS.filter((link) => {
      const matchesSearch =
        link.name.toLowerCase().includes(q) ||
        link.handle.toLowerCase().includes(q);

      const matchesCategory =
        activeCategory === ALL_CATEGORY || link.category === activeCategory;

      return matchesSearch && matchesCategory;
    });
  }, [search, activeCategory]);

  return (
    <Layout
      title="Social Directory"
      description="Complete collection of my professional, developer, and social presence"
    >
      <main className="min-h-screen bg-gray-50 py-20 px-4 dark:bg-[#0a0a0a]">
        <div className="pointer-events-none fixed inset-0 overflow-hidden">
          <div className="absolute -top-[10%] -left-[10%] h-[40%] w-[40%] rounded-full bg-blue-500/10 blur-[120px]" />
          <div className="absolute top-[20%] -right-[10%] h-[30%] w-[30%] rounded-full bg-purple-500/10 blur-[120px]" />
        </div>

        <div className="mx-auto">
          {/* ─── Header ───────────────────────── */}
          <header className="mb-12 text-center">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3 py-1 font-semibold text-[var(--ifm-color-primary)] dark:border-blue-900/30 dark:bg-blue-900/20 mb-4"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--ifm-color-primary)] opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--ifm-color-primary)]"></span>
              </span>
              {SOCIAL_LINKS.length} Connections Online
            </motion.div>
            <h1 className="text-4xl font-black tracking-tight text-gray-900 dark:text-white sm:text-6xl">
              Connect{" "}
              <span className="text-[--ifm-color-primary]">Everywhere</span>
            </h1>

            <p className="mx-auto mt-6 max-w-7xl text-base leading-relaxed text-gray-600 dark:text-neutral-400 sm:text-lg">
              A unified directory of my professional, developer, and community
              presence. From open-source contributions and competitive
              programming to content creation, learning platforms, and social
              networks — everything I build, share, and contribute to lives
              here.
            </p>

            <p className="mx-auto mt-4 max-w-5xl text-sm text-gray-500 dark:text-neutral-500">
              Currently active across <strong>{SOCIAL_LINKS.length}+</strong>{" "}
              platforms, tools, and communities, continuously learning,
              contributing, and collaborating with developers worldwide.
            </p>
          </header>

          <SearchFilter
            search={search}
            onSearchChange={setSearch}
            categories={categories}
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
            resultCount={filteredLinks.length}
          />

          {/* ─── Grid ────────────────────────── */}
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            <AnimatePresence mode="popLayout">
              {filteredLinks.map((link) => {
                const Icon =
                  (Icons as Record<string, React.FC<any>>)[link.iconName] ??
                  Icons.Link;

                return (
                  <motion.a
                    layout
                    key={`${link.name}-${link.url}`}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-4 rounded-2xl border border-gray-100 bg-white p-4 shadow-sm transition-all hover:-translate-y-1 hover:border-blue-500 hover:shadow-xl dark:border-neutral-800 dark:bg-neutral-900 hover:no-underline"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600 transition-all group-hover:bg-[var(--ifm-color-primary)] group-hover:text-white dark:bg-neutral-800 dark:text-blue-400">
                      <Icon size={24} />
                    </div>

                    <div className="min-w-0">
                      <h4 className="truncate font-bold text-gray-900 dark:text-white">
                        {link.name} (
                        <span className="truncate italic text-[var(--ifm-color-primary)]">
                          {link.handle}
                        </span>
                        )
                      </h4>

                      <span className="mt-2 inline-block rounded-md bg-gray-100 px-2 py-0.5 text-[10px] font-uppercase tracking-wider text-gray-500 dark:bg-neutral-800 dark:text-neutral-400">
                        {link.category}
                      </span>
                    </div>

                    <Icons.ChevronRight
                      className="ml-auto text-[var(--ifm-color-primary)] opacity-0 transition-opacity group-hover:opacity-100"
                      size={16}
                    />
                  </motion.a>
                );
              })}
            </AnimatePresence>
          </div>

          {/* ─── Empty State ─────────────────── */}
          {filteredLinks.length === 0 && (
            <div className="py-24 text-center">
              <Icons.Frown size={48} className="mx-auto mb-4 text-gray-400" />
              <p className="text-gray-500">
                No links found. Try a different keyword or category.
              </p>
            </div>
          )}
        </div>
      </main>
    </Layout>
  );
}
