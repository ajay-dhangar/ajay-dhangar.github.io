import * as Icons from 'lucide-react';
import { FilterDropdown } from './FilterDropdown';

interface SearchAndFiltersProps {
  search: string;
  onSearchChange: (value: string) => void;
  categories: string[];
  activeCategory: string;
  onCategoryChange: (value: string) => void;
  resultCount: number;
}

export function SearchFilter({
  search,
  onSearchChange,
  categories,
  activeCategory,
  onCategoryChange,
  resultCount,
}: SearchAndFiltersProps) {
  return (
    <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-center">

      {/* Search */}
      <div className="relative flex-1">
        <Icons.Search
          size={18}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
        />
        <input
          type="text"
          value={search}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Search platforms, handles..."
          className="
            w-full rounded-xl bg-gray-100 px-11 py-3
            text-sm outline-none
            focus:ring-2 focus:ring-blue-500/40
            dark:bg-neutral-800 dark:text-white
          "
        />
      </div>

      {/* Dropdown Filter */}
      <FilterDropdown
        label="Category:"
        options={categories}
        value={activeCategory}
        onChange={onCategoryChange}
      />

      {/* Result Count */}
      <span className="text-xs text-gray-500 dark:text-neutral-500">
        {resultCount} results
      </span>
    </div>
  );
}
