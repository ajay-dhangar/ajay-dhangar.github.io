export interface CertificationData {
  id: string;
  title: string;
  issuer: string;
  date: string;
  description: string;
  badge: string;
  link: string;
  color: string;
  fullDescription: string;
  skills: string[];
  credentialId: string;
  validUntil?: string;
  certificateImage: string;
}

const Certifications: CertificationData[] = [
  {
    id: "aws-solutions-architect",
    title: "AWS Certified Solutions Architect",
    issuer: "Amazon Web Services",
    date: "2023",
    description:
      "Professional-level certification demonstrating expertise in designing distributed systems on AWS.",
    badge:
      "https://images.pexels.com/photos/2422280/pexels-photo-2422280.jpeg?auto=compress&cs=tinysrgb&w=400",
    link: "#",
    color: "from-orange-500 to-red-500",
    fullDescription:
      "The AWS Certified Solutions Architect – Professional certification validates advanced technical skills and experience in designing distributed applications and systems on the AWS platform. This certification demonstrates expertise in designing and deploying dynamically scalable, highly available, fault-tolerant, and reliable applications on AWS.",
    skills: [
      "AWS Architecture",
      "Cloud Computing",
      "System Design",
      "Security",
      "Cost Optimization",
      "Migration Strategies",
    ],
    credentialId: "AWS-SAP-2023-001234",
    validUntil: "2026",
    certificateImage:
      "https://images.pexels.com/photos/2422280/pexels-photo-2422280.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: "google-cloud-developer",
    title: "Google Cloud Professional Developer",
    issuer: "Google Cloud Platform",
    date: "2023",
    description:
      "Certification in designing, building, and deploying applications on Google Cloud.",
    badge:
      "https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=400",
    link: "#",
    color: "from-blue-500 to-green-500",
    fullDescription:
      "The Professional Cloud Developer certification demonstrates the ability to build scalable and highly available applications using Google-recommended tools and best practices. This certification validates skills in application development, monitoring, and debugging on Google Cloud Platform.",
    skills: [
      "Google Cloud Platform",
      "Application Development",
      "Microservices",
      "DevOps",
      "Monitoring",
      "API Design",
    ],
    credentialId: "GCP-PCD-2023-005678",
    validUntil: "2025",
    certificateImage:
      "https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: "meta-frontend-developer",
    title: "Meta Frontend Developer Professional",
    issuer: "Meta (Facebook)",
    date: "2022",
    description:
      "Comprehensive program covering React, JavaScript, HTML, CSS, and UX/UI design principles.",
    badge:
      "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=400",
    link: "#",
    color: "from-blue-600 to-purple-600",
    fullDescription:
      "The Meta Frontend Developer Professional Certificate program provides comprehensive training in frontend development technologies and best practices. This program covers modern JavaScript, React development, responsive design, and user experience principles used at Meta.",
    skills: [
      "React",
      "JavaScript",
      "HTML5",
      "CSS3",
      "UX/UI Design",
      "Responsive Design",
      "Version Control",
    ],
    credentialId: "META-FED-2022-009876",
    certificateImage:
      "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: "docker-certified-associate",
    title: "Docker Certified Associate",
    issuer: "Docker Inc.",
    date: "2022",
    description:
      "Certification in containerization, Docker fundamentals, and container orchestration.",
    badge:
      "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=400",
    link: "#",
    color: "from-cyan-500 to-blue-500",
    fullDescription:
      "The Docker Certified Associate (DCA) certification validates skills in containerization using Docker. This certification demonstrates proficiency in Docker fundamentals, image creation, container orchestration, networking, security, and troubleshooting.",
    skills: [
      "Docker",
      "Containerization",
      "Orchestration",
      "Networking",
      "Security",
      "DevOps",
    ],
    credentialId: "DCA-2022-543210",
    validUntil: "2025",
    certificateImage:
      "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: "kubernetes-administrator",
    title: "Kubernetes Administrator (CKA)",
    issuer: "Cloud Native Computing Foundation",
    date: "2022",
    description:
      "Hands-on certification for Kubernetes cluster administration and troubleshooting.",
    badge:
      "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400",
    link: "#",
    color: "from-purple-500 to-indigo-500",
    fullDescription:
      "The Certified Kubernetes Administrator (CKA) program provides assurance that CKAs have the skills, knowledge, and competency to perform the responsibilities of Kubernetes administrators. This hands-on certification demonstrates expertise in cluster management, troubleshooting, and maintenance.",
    skills: [
      "Kubernetes",
      "Cluster Administration",
      "Troubleshooting",
      "Networking",
      "Storage",
      "Security",
    ],
    credentialId: "CKA-2022-112233",
    validUntil: "2025",
    certificateImage:
      "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: "mongodb-developer",
    title: "MongoDB Certified Developer",
    issuer: "MongoDB Inc.",
    date: "2021",
    description:
      "Professional certification in MongoDB database design, development, and optimization.",
    badge:
      "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=400",
    link: "#",
    color: "from-green-500 to-emerald-500",
    fullDescription:
      "The MongoDB Certified Developer Associate certification validates the knowledge and skills required to develop applications using MongoDB. This certification demonstrates proficiency in MongoDB fundamentals, data modeling, indexing, aggregation, and application development.",
    skills: [
      "MongoDB",
      "Database Design",
      "Data Modeling",
      "Indexing",
      "Aggregation",
      "Performance Optimization",
    ],
    credentialId: "MDB-DEV-2021-445566",
    certificateImage:
      "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
];

export default Certifications;