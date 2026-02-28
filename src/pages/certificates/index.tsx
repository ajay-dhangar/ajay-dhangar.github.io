import React, { useEffect, useRef } from "react";
import Layout from "@theme/Layout";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Award, Calendar, ExternalLink, Eye } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

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

const CertificatesPage: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  const certifications: CertificationData[] = [
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

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    gsap.fromTo(
      ".cert-title",
      { opacity: 0, y: 50, scale: 0.9 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1.2,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
        },
      }
    );

    gsap.fromTo(
      ".cert-card",
      { opacity: 0, y: 50, rotationY: -15, scale: 0.8 },
      {
        opacity: 1,
        y: 0,
        rotationY: 0,
        scale: 1,
        duration: 1,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: section,
          start: "top 60%",
        },
      }
    );
  }, []);

  const handleViewCertificate = (certId: string) => {
    window.location.href = `/certificates/${certId}`;
  };

  return (
    <Layout
      title="Certificates"
      description="Check out my certificates on various technologies. I have a collection of certificates from Coursera, Udemy, and other platforms."
    >
      <div
        ref={sectionRef}
        className="py-20 px-6 bg-gradient-to-br from-white via-blue-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-black"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="cert-title text-6xl md:text-7xl font-black mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 bg-clip-text text-transparent">
              Certifications
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Professional certifications that validate my expertise in modern
              technologies and best practices
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="cert-card group relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-700 hover:scale-105 border border-white/20 dark:border-gray-700/50 overflow-hidden"
              >
                {/* 3D Background Effect */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${cert.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-3xl`}
                />

                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-xl group-hover:scale-150 transition-transform duration-700" />

                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-6">
                    <div
                      className={`p-4 rounded-2xl bg-gradient-to-br ${cert.color} text-white shadow-lg group-hover:scale-110 group-hover:rotate-12 transition-all duration-500`}
                    >
                      <Award className="w-8 h-8" />
                    </div>
                    <div className="flex space-x-2">
                      <button
                        onClick={() => handleViewCertificate(cert.id)}
                        className="opacity-0 group-hover:opacity-100 p-2 bg-blue-500 text-white rounded-xl hover:bg-blue-600 transition-all duration-300 hover:scale-110 border-none"
                        title="View Certificate Details"
                      >
                        <Eye className="w-5 h-5" />
                      </button>
                      <a
                        href={cert.link}
                        className="opacity-0 group-hover:opacity-100 p-2 bg-gray-100 dark:bg-gray-700 rounded-xl hover:bg-gray-200 dark:hover:bg-gray-600 transition-all duration-300 hover:scale-110"
                        title="External Link"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                    {cert.title}
                  </h3>

                  <div className="flex items-center text-sm text-gray-600 dark:text-gray-400 mb-4">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>{cert.date}</span>
                    <span className="mx-2">•</span>
                    <span className="font-medium">{cert.issuer}</span>
                  </div>

                  <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed mb-6">
                    {cert.description}
                  </p>

                  {/* Skills Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {cert.skills.slice(0, 3).map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded-full font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                    {cert.skills.length > 3 && (
                      <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs rounded-full font-medium">
                        +{cert.skills.length - 3} more
                      </span>
                    )}
                  </div>

                  <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide">
                        Verified Certification
                      </span>
                      <div
                        className={`w-4 h-4 rounded-full bg-gradient-to-r ${cert.color} shadow-lg`}
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-20 text-center">
            <div className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105">
              <Award className="w-6 h-6 mr-3" />
              <span className="text-lg font-semibold">
                {certifications.length} Professional Certifications Earned
              </span>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CertificatesPage;
