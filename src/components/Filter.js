// Filter.js
import React from 'react';

function Filter({ category, onCategoryChange }) {
  return (
    <div>
      <label htmlFor="category">Filter by Category:</label>
      <select id="category" value={category} onChange={(e) => onCategoryChange(e.target.value)}>
        <option value="all">All</option>
        <option value="food">Food</option>
        <option value="clothing">Clothing</option>
        <option value="electronics">Electronics</option>
        {/* Add more options as needed */}
      </select>
    </div>
  );
}

export default Filter;
