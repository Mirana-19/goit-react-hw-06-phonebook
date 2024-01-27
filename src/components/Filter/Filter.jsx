import React from 'react';
import { Label } from './Filter.styled';

export const Filter = ({ onFilterChange, filter }) => {
  return (
    <Label>
      Find contacts by name
      <input
        value={filter}
        onChange={e => onFilterChange(e)}
        type="text"
        name="filter"
      />
    </Label>
  );
};
