import React from "react";
import { TechType } from "../../data/certificates";

interface FilterProps {
  technologies: TechType[];
  selected: TechType | "";
  onChange: (tech: TechType | "") => void;
}

const Filter: React.FC<FilterProps> = ({
  technologies,
  selected,
  onChange,
}) => {
  return (
    <select
      className="border dark:border-gray-600 rounded-md p-2 text-gray-800 dark:text-gray-200 bg-white dark:bg-gray-700 text-md"
      value={selected}
      onChange={(e) => onChange(e.target.value as TechType | "")}
    >
      <option value="">All</option>
      {technologies.map((tech) => (
        <option
          key={tech}
          value={tech}
        >
          {tech}
        </option>
      ))}
    </select>
  );
};

export default Filter;
