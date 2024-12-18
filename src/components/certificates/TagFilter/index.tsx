import React from 'react';
import { TagDropdown } from './TagDropdown';
import { SelectedTags } from './SelectedTags';

interface TagFilterProps {
  tags: string[];
  selectedTags: string[];
  onTagSelect: (tag: string) => void;
}

export const TagFilter: React.FC<TagFilterProps> = ({ tags, selectedTags, onTagSelect }) => {
  const handleTagRemove = (tagToRemove: string) => {
    onTagSelect(tagToRemove);
  };

  return (
    <div className="space-y-2">
      <TagDropdown
        tags={tags}
        selectedTags={selectedTags}
        onTagSelect={onTagSelect}
        onTagRemove={handleTagRemove}
      />
      <SelectedTags
        selectedTags={selectedTags}
        onTagRemove={handleTagRemove}
      />
    </div>
  );
};