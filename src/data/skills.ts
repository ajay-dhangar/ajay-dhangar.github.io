export type Level = 'daily' | 'comfortable' | 'learning';

export interface Skill {
  name: string;
  level: Level;
  /** Path inside /static, e.g. "/icons/react.svg". Optional. */
  icon?: string;
}

export interface SkillGroup {
  id: string;
  title: string;
  description: string;
  skills: Skill[];
}

export const levelMeta: Record<Level, { label: string; dots: 1 | 2 | 3; hint: string }> = {
  daily: { label: 'Daily', dots: 3, hint: 'I use it in almost every project' },
  comfortable: { label: 'Comfortable', dots: 2, hint: 'I can build and debug with it on my own' },
  learning: { label: 'Learning', dots: 1, hint: 'Using it in side projects right now' },
};

// NOTE: levels below are a first draft. Adjust them so they match your real experience.
export const skillGroups: SkillGroup[] = [
  {
    id: 'frontend',
    title: 'Frontend',
    description:
      'Fast, accessible interfaces. React is my main tool, with Tailwind for styling and Docusaurus for content-heavy sites.',
    skills: [
      { name: 'HTML', level: 'daily', icon: '/icons/html.svg' },
      { name: 'CSS', level: 'daily', icon: '/icons/css.svg' },
      { name: 'JavaScript', level: 'daily', icon: '/icons/js.svg' },
      { name: 'TypeScript', level: 'comfortable', icon: '/icons/ts.svg' },
      { name: 'React', level: 'daily', icon: '/icons/jsx.svg' },
      { name: 'Next.js', level: 'comfortable', icon: '/icons/nextjs.svg' },
      { name: 'Tailwind CSS', level: 'daily', icon: '/icons/tailwind.svg' },
      { name: 'Docusaurus', level: 'daily', icon: '/data/docusaurus.svg' },
      { name: 'Bootstrap', level: 'comfortable', icon: '/icons/bootstrap.svg' },
      { name: 'Material-UI', level: 'comfortable', icon: '/icons/material-ui.svg' },
    ],
  },
  {
    id: 'backend',
    title: 'Backend and data',
    description:
      'The MERN stack end to end: REST APIs, authentication, and database design. Python for scripting and learning AI topics.',
    skills: [
      { name: 'Node.js', level: 'comfortable', icon: '/icons/nodejs.svg' },
      { name: 'Express', level: 'comfortable', icon: '/icons/express.svg' },
      { name: 'MongoDB', level: 'comfortable', icon: '/icons/mongodb.svg' },
      { name: 'Python', level: 'comfortable', icon: '/icons/py.svg' },
      { name: 'REST APIs', level: 'comfortable' },
    ],
  },
  {
    id: 'workflow',
    title: 'Workflow and deployment',
    description:
      'Version control, automated checks, and shipping to the web. Most of my projects deploy from GitHub on every push.',
    skills: [
      { name: 'Git', level: 'daily', icon: '/icons/git.svg' },
      { name: 'GitHub', level: 'daily', icon: '/icons/github.svg' },
      { name: 'GitHub Actions', level: 'comfortable', icon: '/icons/github-actions.svg' },
      { name: 'GitHub Pages', level: 'daily', icon: '/icons/github.svg' },
      { name: 'Netlify', level: 'comfortable', icon: '/icons/netlify.svg' },
      { name: 'Vercel', level: 'comfortable', icon: '/icons/vercel.svg' },
      { name: 'Docker', level: 'learning', icon: '/icons/docker.svg' },
    ],
  },
  {
    id: 'tooling',
    title: 'Design and tooling',
    description: 'What I use to design, test, and keep code clean.',
    skills: [
      { name: 'Figma', level: 'comfortable', icon: '/icons/figma.svg' },
      { name: 'VS Code', level: 'daily', icon: '/icons/vs-code.svg' },
      { name: 'Postman', level: 'comfortable', icon: '/icons/postman.svg' },
      { name: 'Lighthouse', level: 'comfortable', icon: '/icons/lighthouse.svg' },
      { name: 'ESLint', level: 'daily', icon: '/icons/eslint.svg' },
      { name: 'Prettier', level: 'daily', icon: '/icons/prettier.png' },
      { name: 'npm', level: 'daily', icon: '/icons/npm.svg' },
    ],
  },
];

export const learningNow = ['Docker and containers', 'System design basics', 'Data structures and algorithms'];