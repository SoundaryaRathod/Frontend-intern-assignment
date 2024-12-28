import React from 'react';
import PokemonCard from './PokemonCard';

const PokemonList = ({ pokemonData, searchTerm, selectedType, onToggleFavorite, favorites }) => {
  const filteredPokemons = pokemonData.filter((pokemon) => {
    const matchesSearch = pokemon.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = selectedType
      ? pokemon.types?.some((type) => type.type.name === selectedType)
      : true;
    return matchesSearch && matchesType;
  });

  return (
    <div className="pokemon-list">
      {filteredPokemons.map((pokemon) => (
        <PokemonCard
          key={pokemon.name}
          pokemon={pokemon}
          onToggleFavorite={onToggleFavorite}
          isFavorite={favorites.some((fav) => fav.name === pokemon.name)}
        />
      ))}
    </div>
  );
};

export default PokemonList;
