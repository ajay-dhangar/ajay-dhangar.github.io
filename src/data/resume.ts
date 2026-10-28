/**
 * RESUME CONTENT
 * ---------------------------------------------------------------
 * Everything marked `draft: true` is a TEMPLATE ENTRY. Draft entries are shown
 * while you run `npm start`, but are HIDDEN in the production build, so placeholder
 * text can never go live by accident. Replace the text with your real details and
 * delete `draft: true` to publish an entry.
 * Do not add numbers or claims you can't back up in an interview.
 */

const DRIVE_ID = '1kXgSKUjLyc0kcKuOz2SjfNnDfjXv9sHl';

export const profile = {
  name: 'Ajay Dhangar',
  title: 'Full Stack Developer (MERN)',
  summary:
    'Full stack developer who builds with React, TypeScript, Node.js, and MongoDB. I maintain open-source learning platforms for developers, including CodeHarborHub, Algo, JavaScript Mastery, and AI Buddies, so I am used to shipping, documenting, and supporting real projects with other contributors. I am looking for a full stack role where I can own features from database to interface.',
  links: [
    { label: 'GitHub', href: 'https://github.com/ajay-dhangar' },
    { label: 'LinkedIn', href: 'https://linkedin.com/in/ajay-dhangar' },
    { label: 'Portfolio', href: 'https://ajay-dhangar.github.io' },
  ],
  // Drive links. If you add /static/resume/Ajay-Dhangar-Resume.pdf, point both to that instead.
  pdfDownload: `https://drive.google.com/uc?export=download&id=${DRIVE_ID}`,
  pdfPreview: `https://drive.google.com/file/d/${DRIVE_ID}/preview`,
  pdfView: `https://drive.google.com/file/d/${DRIVE_ID}/view`,
};

export interface Draftable {
  draft?: boolean;
}

export interface Experience extends Draftable {
  role: string;
  org: string;
  period: string;
  location?: string;
  bullets: string[];
  stack?: string[];
}

export const experience: Experience[] = [
  {
    draft: true,
    role: 'Your role (e.g. Open Source Maintainer)',
    org: 'CodeHarborHub',
    period: 'Start year – Present',
    location: 'Remote',
    bullets: [
      'What you built or owned, written as: action + what + result (e.g. “Built X so that Y”).',
      'A problem you solved and how (migration, performance fix, new feature, CI setup).',
      'How you worked with others (reviewed pull requests, mentored contributors, wrote docs).',
    ],
    stack: ['React', 'TypeScript', 'Docusaurus', 'GitHub Actions'],
  },
  {
    draft: true,
    role: 'Your role (e.g. Intern, Freelancer)',
    org: 'Company or client name',
    period: 'Month Year – Month Year',
    bullets: [
      'Replace with one real achievement from this role.',
      'Replace with a second one.',
    ],
    stack: ['Node.js', 'MongoDB'],
  },
];

export interface Project {
  name: string;
  description: string;
  stack: string[];
  href: string;
  linkLabel: string;
}

export const projects: Project[] = [
  {
    name: 'CodeHarborHub',
    description:
      'A collaborative platform where developers share and explore code, with learning material and open-source contribution.',
    stack: ['React', 'TypeScript', 'JavaScript', 'Docusaurus'],
    href: 'https://codeharborhub.github.io/',
    linkLabel: 'Live site',
  },
  {
    name: 'Algo',
    description:
      'A learning site for data structures and algorithms with interactive coding challenges.',
    stack: ['React', 'TypeScript', 'JavaScript', 'Docusaurus'],
    href: 'https://ajay-dhangar.github.io/algo',
    linkLabel: 'Live site',
  },
  {
    name: 'JavaScript Mastery',
    description:
      'A JavaScript learning platform with tutorials, projects, and practice challenges.',
    stack: ['React', 'TypeScript', 'JavaScript', 'Docusaurus'],
    href: 'https://javascript-mastery.github.io/',
    linkLabel: 'Live site',
  },
  {
    name: 'AI Buddies',
    description: 'A learning platform for AI topics, built around tutorials and hands-on projects.',
    stack: ['React', 'TypeScript', 'JavaScript', 'Docusaurus'],
    href: 'https://ai-buddies.github.io/',
    linkLabel: 'Live site',
  },
];

export interface Education extends Draftable {
  degree: string;
  school: string;
  period: string;
  note?: string;
}

export const education: Education[] = [
  {
    draft: true,
    degree: 'Your degree (e.g. B.Tech in Computer Science)',
    school: 'Your college or university',
    period: 'Start year – End year',
    note: 'Optional: relevant coursework, GPA if strong, or a notable project.',
  },
];