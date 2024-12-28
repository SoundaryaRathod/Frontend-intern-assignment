import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PokemonCard = ({ pokemon, onToggleFavorite, isFavorite }) => {
  const [details, setDetails] = useState(null);

  useEffect(() => {
    const fetchPokemonDetails = async () => {
      const { data } = await axios.get(pokemon.url);
      setDetails(data);
    };
    fetchPokemonDetails();
  }, [pokemon]);

  if (!details) return <div>Loading...</div>;

  return (
    <div className="pokemon-card">
      <img src={details.sprites.front_default} alt={details.name} />
      <h3>{details.name}</h3>
      <button onClick={() => onToggleFavorite(details)}>
        {isFavorite ? 'Unfavorite' : 'Favorite'}
      </button>
    </div>
  );
};

export default PokemonCard;
