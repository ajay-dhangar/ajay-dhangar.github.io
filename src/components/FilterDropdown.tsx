import { useState, useRef, useEffect } from 'react';
import * as Icons from 'lucide-react';

interface FilterDropdownProps {
  label: string;
  options: string[];
  value: string;
  onChange: (value: string) => void;
}

export function FilterDropdown({
  label,
  options,
  value,
  onChange,
}: FilterDropdownProps) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // Close on outside click
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div ref={ref} className="relative">
      {/* Button */}
      <button
        onClick={() => setOpen(!open)}
        className="
          inline-flex items-center gap-2
          rounded-lg border border-gray-200
          bg-white px-4 py-3
          text-sm font-medium
          shadow-sm transition
          hover:bg-gray-50
          dark:border-neutral-800 dark:bg-neutral-900 dark:hover:bg-neutral-800
        "
      >
        <Icons.Filter size={16} className="text-[var(--ifm-color-primary)]" />
        {label}
        <span className="text-[var(--ifm-color-primary)]">{value}</span>
        <Icons.ChevronDown size={16} />
      </button>

      {/* Dropdown */}
      {open && (
        <div className="
          absolute right-0 z-20 mt-2 w-56
          overflow-hidden
          border border-gray-200 bg-white
          shadow-lg
          dark:border-neutral-800 dark:bg-neutral-900
        ">
          {options.map((option) => {
            const isActive = option === value;

            return (
              <button
                key={option}
                onClick={() => {
                  onChange(option);
                  setOpen(false);
                }}
                className={`
                  flex w-full items-center px-4 py-2 text-sm
                  transition-color border-none
                  ${
                    isActive
                      ? 'bg-[var(--ifm-color-primary)] text-white'
                      : 'hover:bg-gray-100 dark:hover:bg-neutral-800'
                  }
                `}
              >
                {option}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
