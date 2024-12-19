import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown, X } from 'lucide-react';

interface TagDropdownProps {
  tags: string[];
  selectedTags: string[];
  onTagSelect: (tag: string) => void;
  onTagRemove: (tag: string) => void;
}

export const TagDropdown: React.FC<TagDropdownProps> = ({
  tags,
  selectedTags,
  onTagSelect,
  onTagRemove,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-auto px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-200"
      >
        <span>Filter by tags</span>
        <ChevronDown className={`w-4 h-4 ml-4 transition-transform ${isOpen ? 'transform rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute z-10 w-auto mt-2 bg-white border border-gray-200 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700">
          <div className="p-2 max-h-60 overflow-y-auto">
            {tags.map((tag) => (
              <div
                key={tag}
                onClick={() => {
                  onTagSelect(tag);
                  setIsOpen(false);
                }}
                className={`px-3 py-2 text-sm cursor-pointer rounded-md ${
                  selectedTags.includes(tag)
                    ? 'bg-[var(--ifm-color-primary)] text-white'
                    : 'hover:bg-gray-100 dark:hover:bg-gray-600'
                }`}
              >
                {tag}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};