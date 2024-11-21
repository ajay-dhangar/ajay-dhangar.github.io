import React from "react";

interface SearchBarProps {
  query: string;
  onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ query, onSearch }) => {
  return (
    <div className="relative w-full">
      <svg
        width="20"
        height="20"
        className="DocSearch-Search-Icon absolute top-1/2 left-3 transform -translate-y-1/2"
        viewBox="0 0 20 20"
        aria-hidden="true"
      >
        <path
          d="M14.386 14.386l4.0877 4.0877-4.0877-4.0877c-2.9418 2.9419-7.7115 2.9419-10.6533 0-2.9419-2.9418-2.9419-7.7115 0-10.6533 2.9418-2.9419 7.7115-2.9419 10.6533 0 2.9419 2.9418 2.9419 7.7115 0 10.6533z"
          stroke="currentColor"
          fill="none"
          fill-rule="evenodd"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></path>
      </svg>
      <input
        type="text"
        value={query}
        onChange={(e) => onSearch(e.target.value)}
        placeholder="Search certificates..."
        className="w-full rounded-md pl-10 p-2 text-gray-700 dark:text-gray-200 outline-none bg-transparent"
      />
    </div>
  );
};

export default SearchBar;
