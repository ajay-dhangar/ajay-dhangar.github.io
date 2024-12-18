import React from 'react';
import { Search } from 'lucide-react';

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

export const SearchBar: React.FC<SearchBarProps> = ({ value, onChange }) => {
  return (
    <div className="relative">
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5 dark:text-gray-300" />
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search certificates..."
        className="w-auto pl-10 pr-4 py-2 border border-[var(--ifm-color-primary)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--ifm-color-primary)] focus:border-transparent dark:bg-gray-800 dark:border-gray-700 dark:text-gray-200"
      />
    </div>
  );
};