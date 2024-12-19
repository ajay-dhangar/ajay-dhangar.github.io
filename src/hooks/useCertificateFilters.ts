import { useMemo, useState } from "react";
import { Certificate } from "../types/certificate";

export const useCertificateFilters = (certificates: Certificate[]) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const allTags = useMemo(() => {
    const tags = new Set<string>();
    certificates.forEach((cert) => {
      cert.tags.forEach((tag) => tags.add(tag));
    });
    return Array.from(tags).sort();
  }, [certificates]);

  const filteredCertificates = useMemo(() => {
    return certificates.filter((cert) => {
      const matchesSearch =
        cert.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        cert.description.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesTags =
        selectedTags.length === 0 ||
        selectedTags.some((tag) => cert.tags.includes(tag));

      return matchesSearch && matchesTags;
    });
  }, [certificates, searchQuery, selectedTags]);

  const handleTagSelect = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  return {
    searchQuery,
    setSearchQuery,
    selectedTags,
    allTags,
    filteredCertificates,
    handleTagSelect,
  };
};
