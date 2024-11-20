import React from "react";

interface SearchBarProps {
  query: string;
  onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ query, onSearch }) => {
  return (
    <input
      type="text"
      value={query}
      onChange={(e) => onSearch(e.target.value)}
      placeholder="Search certificates..."
      className="w-full border dark:border-gray-600 rounded-md p-2 text-gray-800 dark:text-gray-200 bg-white dark:bg-gray-700"
    />
  );
};

export default SearchBar;