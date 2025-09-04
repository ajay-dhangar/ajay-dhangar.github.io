import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import {
  Award,
  Calendar,
  ExternalLink,
  Download,
  Share2,
  CheckCircle,
  Globe,
  Clock,
} from "lucide-react";
import type { CertificationData } from "../data/certifications";

interface CertificateDetailProps {
  certificate: CertificationData;
}

const CertificateDetail: React.FC<CertificateDetailProps> = ({ certificate }) => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!certificate) return;

    const section = sectionRef.current;
    if (!section) return;

    // Entrance animations
    gsap.fromTo(
      ".cert-header",
      { opacity: 0, y: -50, scale: 0.9 },
      { opacity: 1, y: 0, scale: 1, duration: 1, ease: "back.out(1.7)" }
    );

    gsap.fromTo(
      ".cert-image",
      { opacity: 0, scale: 0.8, rotationY: -30 },
      { opacity: 1, scale: 1, rotationY: 0, duration: 1.2, delay: 0.3, ease: "power3.out" }
    );

    gsap.fromTo(
      ".cert-content",
      { opacity: 0, x: 50 },
      { opacity: 1, x: 0, duration: 1, delay: 0.5, ease: "power2.out" }
    );

    gsap.fromTo(
      ".cert-skill",
      { opacity: 0, y: 20, scale: 0.8 },
      { opacity: 1, y: 0, scale: 1, duration: 0.6, stagger: 0.1, delay: 0.8, ease: "back.out(1.7)" }
    );
  }, [certificate]);

  return (
    <div
      ref={sectionRef}
      className="bg-gradient-to-br from-white via-blue-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-black"
    >
      <div className="p-2">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="cert-header text-center mb-16">
            <div
              className={`inline-flex items-center px-6 py-3 bg-gradient-to-r ${certificate.color} text-white rounded-2xl mb-6 shadow-2xl`}
            >
              <Award className="w-6 h-6 mr-2" />
              <span className="font-semibold">Verified Certificate</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 bg-clip-text text-transparent">
              {certificate.title}
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">
              Issued by{" "}
              <span className="font-semibold text-blue-600 dark:text-blue-400">
                {certificate.issuer}
              </span>
            </p>
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-16 mb-20">
            {/* Certificate Image */}
            <div className="cert-image">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500" />
                <img
                  src={certificate.certificateImage}
                  alt={certificate.title}
                  className="relative w-full rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Action Buttons */}
              <div className="flex justify-center space-x-4 mt-8">
                <button className="flex items-center px-6 py-3 bg-blue-500 text-white rounded-xl hover:bg-blue-600 transition-all duration-300 hover:scale-105 shadow-lg">
                  <Download className="w-5 h-5 mr-2" />
                  Download
                </button>
                <button className="flex items-center px-6 py-3 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-xl hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300 hover:scale-105 shadow-lg">
                  <Share2 className="w-5 h-5 mr-2" />
                  Share
                </button>
                <a
                  href={certificate.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center px-6 py-3 bg-purple-500 text-white rounded-xl hover:bg-purple-600 transition-all duration-300 hover:scale-105 shadow-lg"
                >
                  <ExternalLink className="w-5 h-5 mr-2" />
                  Verify
                </a>
              </div>
            </div>

            {/* Certificate Details */}
            <div className="cert-content space-y-8">
              {/* Certificate Info */}
              <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/20 dark:border-gray-700/50">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                  Certificate Details
                </h2>

                <div className="space-y-4">
                  <div className="flex items-center">
                    <Calendar className="w-5 h-5 text-blue-500 mr-3" />
                    <span className="text-gray-700 dark:text-gray-300">
                      <strong>Issued:</strong> {certificate.date}
                    </span>
                  </div>

                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-gray-700 dark:text-gray-300">
                      <strong>Credential ID:</strong> {certificate.credentialId}
                    </span>
                  </div>

                  {certificate.validUntil && (
                    <div className="flex items-center">
                      <Clock className="w-5 h-5 text-orange-500 mr-3" />
                      <span className="text-gray-700 dark:text-gray-300">
                        <strong>Valid Until:</strong> {certificate.validUntil}
                      </span>
                    </div>
                  )}

                  <div className="flex items-center">
                    <Globe className="w-5 h-5 text-purple-500 mr-3" />
                    <span className="text-gray-700 dark:text-gray-300">
                      <strong>Issuer:</strong> {certificate.issuer}
                    </span>
                  </div>
                </div>
              </div>

              {/* Description */}
              <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/20 dark:border-gray-700/50">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  About This Certification
                </h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  {certificate.fullDescription}
                </p>
              </div>
            </div>
          </div>

          {/* Skills */}
          <div className="mb-20">
            <h3 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
              Skills Validated
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              {certificate.skills.map((skill, index) => (
                <div
                  key={index}
                  className={`cert-skill px-6 py-3 bg-gradient-to-r ${certificate.color} text-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 font-medium`}
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CertificateDetail;
