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
      className="w-full rounded-md p-2 text-gray-700 dark:text-gray-200 outline-none bg-transparent"
    />
  );
};

export default SearchBar;