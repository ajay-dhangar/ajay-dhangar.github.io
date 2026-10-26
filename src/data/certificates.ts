export type CertCategory = 'Cloud' | 'Frontend' | 'Backend' | 'DevOps' | 'Database' | 'Other';

export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  year: number;
  /** 1-12. Optional, used only for sorting within a year. */
  month?: number;
  category: CertCategory;
  description: string;
  skills: string[];
  credentialId?: string;
  /** Public verification link. The "Verify" button only appears when this is set. */
  credentialUrl?: string;
  /** Optional image of the certificate, e.g. "/img/certificates/aws-saa.png" (in /static). */
  image?: string;
}

/**
 * IMPORTANT: keep only certificates you have actually earned, and add the real
 * credentialUrl for each one. Entries without a link are shown as "No public link"
 * instead of a fake "Verified" badge.
 */
export const certificates: Certificate[] = [
  {
    id: 'aws-solutions-architect',
    title: 'AWS Certified Solutions Architect',
    issuer: 'Amazon Web Services',
    year: 2023,
    category: 'Cloud',
    description:
      'Designing distributed systems on AWS, covering compute, storage, networking, security, and cost control.',
    skills: ['AWS', 'Cloud architecture', 'System design', 'Networking', 'Security'],
    // credentialUrl: 'https://www.credly.com/badges/...',
  },
  {
    id: 'gcp-professional-developer',
    title: 'Google Cloud Professional Developer',
    issuer: 'Google Cloud',
    year: 2023,
    category: 'Cloud',
    description: 'Building, testing, and deploying scalable applications on Google Cloud Platform.',
    skills: ['Google Cloud', 'Microservices', 'CI/CD', 'App development'],
  },
  {
    id: 'meta-frontend',
    title: 'Meta Front-End Developer Professional Certificate',
    issuer: 'Meta',
    year: 2022,
    category: 'Frontend',
    description: 'React, JavaScript, HTML, CSS, version control, and UX/UI design fundamentals.',
    skills: ['React', 'JavaScript', 'HTML', 'CSS', 'UX/UI'],
  },
  {
    id: 'docker-associate',
    title: 'Docker Certified Associate',
    issuer: 'Docker',
    year: 2022,
    category: 'DevOps',
    description: 'Containerization, image management, networking, and orchestration basics.',
    skills: ['Docker', 'Containers', 'Orchestration'],
  },
  {
    id: 'cka',
    title: 'Certified Kubernetes Administrator (CKA)',
    issuer: 'Cloud Native Computing Foundation',
    year: 2022,
    category: 'DevOps',
    description: 'Hands-on cluster administration, workloads, networking, and troubleshooting.',
    skills: ['Kubernetes', 'Cluster administration', 'Troubleshooting'],
  },
  {
    id: 'mongodb-developer',
    title: 'MongoDB Certified Developer',
    issuer: 'MongoDB',
    year: 2021,
    category: 'Database',
    description: 'Schema design, queries, indexing, aggregation, and performance tuning in MongoDB.',
    skills: ['MongoDB', 'Data modeling', 'Aggregation', 'Indexing'],
  },
];