import React from 'react';

const SearchBar = ({ onSearch }) => (
  <input
    type="text"
    placeholder="Search a word..."
    onChange={(e) => onSearch(e.target.value)}
    className="w-full p-2 border rounded"
  />
);

export default SearchBar;