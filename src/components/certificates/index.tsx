import React from "react";
import { certificates } from "../../data/certificates";
import { SearchBar } from "./SearchBar";
import { TagFilter } from "./TagFilter";
import { CertificateCard } from "./CertificateCard";
import { Award } from "lucide-react";
import { useCertificateFilters } from "../../hooks/useCertificateFilters";

export const Certificates: React.FC = () => {
  const {
    searchQuery,
    setSearchQuery,
    selectedTags,
    allTags,
    filteredCertificates,
    handleTagSelect,
  } = useCertificateFilters(certificates);

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <Award className="h-12 w-12 text-[var(--ifm-color-primary)]" />
          </div>
          <h1 className="text-4xl font-bold mb-4">
            Professional Certifications
          </h1>
          <p className="text-xl mx-auto max-w-prose">
            A comprehensive collection of my professional certifications and
            achievements in software development and technology.
          </p>
        </div>

        {/* Filters Section */}
        <div className="mb-8 space-y-4">
          <div className="flex justify-between gap-4">
            <div className="relative">
              <SearchBar value={searchQuery} onChange={setSearchQuery} />
            </div>
            <div className="relative">
            <TagFilter
              tags={allTags}
              selectedTags={selectedTags}
              onTagSelect={handleTagSelect}
            />
            </div>
          </div>
        </div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCertificates.map((certificate) => (
            <CertificateCard key={certificate.id} certificate={certificate} />
          ))}
        </div>

        {/* Empty State */}
        {filteredCertificates.length === 0 && (
          <div className="text-center py-12">
            <p className="text-lg">
              No certificates found matching your criteria.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
