import React from "react";
import { Certificate } from "../../data/certificates";
import Link from "@docusaurus/Link";

interface CardProps {
  certificate: Certificate;
}

const Card: React.FC<CardProps> = ({ certificate }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4">
      <img
        src={certificate.imageUrl}
        alt={certificate.title}
        className="w-full h-40 object-cover rounded-lg"
      />
      <h3 className="mt-2 text-lg font-semibold text-gray-800 dark:text-gray-200">
        {certificate.title}
      </h3>
      <p className="text-sm text-gray-600 dark:text-gray-400">
        {certificate.description}
      </p>
      <div className="mt-2 flex flex-wrap gap-2">
        {certificate.technology.map((tech) => (
          <span
            key={tech}
            className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs px-2 py-1 rounded"
          >
            {tech}
          </span>
        ))}
      </div>
      <Link
        to={certificate.link}
        target="_blank"
        rel="noopener noreferrer"
        className="block mt-4"
      >
        View Certificate
      </Link>
    </div>
  );
};

export default Card;
