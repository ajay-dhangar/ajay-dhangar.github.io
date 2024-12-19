import React from 'react';
import { ExternalLink, Info } from 'lucide-react';
import { Certificate } from '../../types/certificate';

interface CertificateCardProps {
  certificate: Certificate;
}

export const CertificateCard: React.FC<CertificateCardProps> = ({ certificate }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-[1.02] dark:bg-gray-800">
      <img
        src={certificate.imageUrl}
        alt={certificate.title}
        className="w-full h-48 object-cover object-center"
      />
      <div className="p-4">
        <h3 className="text-lg mb-2">{certificate.title}</h3>
        <p className="text-sm mb-4">{certificate.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {certificate.tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 rounded-full text-xs font-medium bg-gray-200 dark:bg-gray-700 dark:text-gray-200"
            >
              {tag}
            </span>
          ))}
        </div>
        
        <div className="flex items-center justify-between mt-4">
          <a
            href={certificate.detailsUrl}
            className="inline-flex items-center text-blue-600 hover:text-blue-700"
          >
            <Info className="h-4 w-4 mr-1" />
            Details
          </a>
          <a
            href={certificate.certificateUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-green-600 hover:text-green-700"
          >
            <ExternalLink className="h-4 w-4 mr-1" />
            View Certificate
          </a>
        </div>
      </div>
    </div>
  );
};