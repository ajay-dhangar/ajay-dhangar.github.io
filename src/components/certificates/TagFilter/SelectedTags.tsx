import React from 'react';
import { X } from 'lucide-react';

interface SelectedTagsProps {
  selectedTags: string[];
  onTagRemove: (tag: string) => void;
}

export const SelectedTags: React.FC<SelectedTagsProps> = ({ selectedTags, onTagRemove }) => {
  if (selectedTags.length === 0) return null;

  return (
    <div className="flex flex-wrap gap-2 mt-2">
      {selectedTags.map((tag) => (
        <span
          key={tag}
          className="inline-flex items-center px-3 py-1 rounded text-sm font-medium bg-[var(--ifm-color-primary)] text-white"
        >
          {tag}
          <button
            onClick={() => onTagRemove(tag)}
            className="ml-2 focus:outline-none border border-none rounded-full bg-transparent dark:hover:bg-red-600 hover:bg-red-300"
          >
            <X className="w-4 h-4 text-red-800 pt-1 dark:text-red-500 dark:hover:text-red-100" />
          </button>
        </span>
      ))}
    </div>
  );
};