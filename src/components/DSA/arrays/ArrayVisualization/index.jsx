import React, { useState } from 'react';
import './style.css';

function ArrayVisualization() {
  const [array, setArray] = useState([]);
  const [newValue, setNewValue] = useState('');
  const [searchValue, setSearchValue] = useState('');
  const [foundIndex, setFoundIndex] = useState(-1);

  // Function to handle adding a new element to the array
  const handleAdd = () => {
    if (newValue.trim() !== '') {
      setArray([...array, parseInt(newValue)]);
      setNewValue('');
    }
  };

  // Function to handle searching for an element in the array
  const handleSearch = () => {
    const index = array.indexOf(parseInt(searchValue));
    setFoundIndex(index);
  };

  // Function to handle removing an element from the array
  const handleRemove = (index) => {
    const newArray = [...array];
    newArray.splice(index, 1);
    setArray(newArray);
  };

  return (
    <div className="array-visualization-container">
      <div className="input-container">
        <input
          type="text"
          value={newValue}
          onChange={(e) => setNewValue(e.target.value)}
          placeholder="Enter a value"
        />
        <button onClick={handleAdd}>Add</button>
      </div>
      <div className="input-container">
        <input
          type="text"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          placeholder="Search for a value"
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      <div className="array-container">
        <h2>Array Visualization</h2>
        <div className="array-elements">
          {array.map((value, index) => (
            <div key={index} className="array-element">
              <span>{value}</span>
              <button onClick={() => handleRemove(index)}>Remove</button>
            </div>
          ))}
        </div>
        {foundIndex !== -1 && (
          <p className="search-result">Element found at index {foundIndex}</p>
        )}
      </div>
    </div>
  );
}

export default ArrayVisualization;
