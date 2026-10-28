/**
 * Single source of truth for every project.
 * - The /projects gallery reads this file.
 * - Each case study (projects/<slug>.mdx) pulls its header from here via <ProjectHeader slug="..." />.
 *
 * To add a project:
 *   1. Add an entry below.
 *   2. Create projects/<slug>.mdx (copy projects/_template.mdx).
 */

export type ProjectCategory =
  | 'Learning platform'
  | 'Web app'
  | 'Open source'
  | 'Tool';

export type ProjectStatus = 'Live' | 'In progress' | 'Archived';

export interface Project {
  /** URL segment: /projects/<slug>. Must match the .mdx file name. */
  slug: string;
  title: string;
  /** One or two sentences, shown on cards and in the case-study header. */
  summary: string;
  /** Path inside /static, e.g. /data/algo.png (16:9 works best). */
  image: string;
  category: ProjectCategory;
  status: ProjectStatus;
  stack: string[];
  featured?: boolean;
  links: {
    demo?: string;
    github?: string;
  };
}

export const projects: Project[] = [
  {
    slug: 'codeharborhub',
    title: 'CodeHarborHub',
    summary:
      'A community platform where developers share code snippets, learn, and collaborate.',
    image: '/data/codeharborhub.png',
    category: 'Learning platform',
    status: 'Live',
    stack: ['React', 'TypeScript', 'JavaScript', 'CSS', 'Docusaurus'],
    featured: true,
    links: {
      demo: 'https://codeharborhub.github.io/',
      // github: 'https://github.com/...',   // TODO: add repo link
    },
  },
  {
    slug: 'algo',
    title: 'Algo',
    summary:
      'Learn and practice data structures and algorithms through interactive coding challenges.',
    image: '/data/algo.png',
    category: 'Learning platform',
    status: 'Live',
    stack: ['React', 'TypeScript', 'JavaScript', 'CSS', 'Docusaurus'],
    featured: true,
    links: {
      demo: 'https://ajay-dhangar.github.io/algo',
      // github: 'https://github.com/...',   // TODO: add repo link
    },
  },
  {
    slug: 'javascript-mastery',
    title: 'JavaScript Mastery',
    summary:
      'JavaScript tutorials, challenges, and projects for developers at every level.',
    image: '/data/jsm.png',
    category: 'Learning platform',
    status: 'Live',
    stack: ['React', 'TypeScript', 'JavaScript', 'CSS', 'Docusaurus'],
    links: {
      demo: 'https://javascript-mastery.github.io/',
      // github: 'https://github.com/...',   // TODO: add repo link
    },
  },
  {
    slug: 'ai-buddies',
    title: 'AI Buddies',
    summary:
      'A learning space for practicing AI through tutorials and hands-on projects.',
    image: '/data/ai-buddies.png',
    category: 'Learning platform',
    status: 'Live',
    stack: ['React', 'TypeScript', 'JavaScript', 'CSS', 'Docusaurus'],
    links: {
      demo: 'https://ai-buddies.github.io/',
      // github: 'https://github.com/...',   // TODO: add repo link
    },
  },
];

export function getProject(slug: string): Project {
  const project = projects.find((p) => p.slug === slug);
  if (!project) {
    // Fail the build on a typo instead of silently rendering nothing.
    throw new Error(
      `Unknown project slug "${slug}". Add it to src/data/projects.ts.`,
    );
  }
  return project;
}
