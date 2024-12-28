import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TypeFilter = ({ onTypeChange }) => {
  const [types, setTypes] = useState([]);

  useEffect(() => {
    const fetchTypes = async () => {
      const { data } = await axios.get('https://pokeapi.co/api/v2/type');
      setTypes(data.results);
    };
    fetchTypes();
  }, []);

  return (
    <div className="type-filter">
      <select onChange={(e) => onTypeChange(e.target.value)}>
        <option value="">Filter by Type</option>
        {types.map((type) => (
          <option key={type.name} value={type.name}>
            {type.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default TypeFilter;
