import React, { useState } from "react";
import {
  certificates as allCertificates,
  Certificate,
  TechType,
} from "../../data/certificates";
import Card from "./Card";
import Filter from "./Filter";
import SearchBar from "./SearchBar";
import { FiSearch } from "react-icons/fi";

const Certificates: React.FC = () => {
  const [query, setQuery] = useState("");
  const [selectedTech, setSelectedTech] = useState<TechType | "">("");

  const technologies = Array.from(
    new Set(allCertificates.flatMap((cert) => cert.technology))
  );

  const filteredCertificates = allCertificates.filter((cert) => {
    const matchesQuery = cert.title.toLowerCase().includes(query.toLowerCase());
    const matchesTech = selectedTech
      ? cert.technology.includes(selectedTech)
      : true;
    return matchesQuery && matchesTech;
  });

  return (
    <div className="pb-2 pt-2 md:pt-4 p-4 relative overflow-hidden">
      <div className="mb-2 mt-2 md:mt-4 p-4 relative overflow-hidden">
        <header className="mt-4">
          <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-200 text-center">
            CERTiFiCATES & COURSES
          </h1>
          <p className="text-gray-600 mt-4 dark:text-gray-400 text-center text-lg">
            Welcome to my certificates page! Here you can find all the courses
            and certifications I have completed. Feel free to filter them by
            technology or search for a specific certificate. If you want to know
            more about a specific certificate, click on it to see more details.
          </p>
        </header>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-between gap-4 my-8">
        <div className="flex items-center gap-2 rounded-md p-2">
          <FiSearch className="text-gray-500 dark:text-gray-400 text-lg w-8 h-8" />
          <SearchBar query={query} onSearch={setQuery} />
        </div>
        <div className="flex items-center gap-2">
          <Filter
            technologies={technologies}
            selected={selectedTech}
            onChange={setSelectedTech}
          />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredCertificates.map((cert) => (
          <Card key={cert.id} certificate={cert} />
        ))}
      </div>
      {filteredCertificates.length === 0 && (
        <p className="text-gray-600 dark:text-gray-400 mt-4">
          No certificates found.
        </p>
      )}
    </div>
  );
};

export default Certificates;
