import { useState, useEffect } from 'react';

import request from '../utils/request';

const usePokemons = () => {
  const [pokemons, setPokemons] = useState([]);
  const [isFetching, setIsFetching] = useState(true);

  const fetchPokemons = async () => {
    const { results } = await request('pokemon/?limit=151');
    const pokemons = results.map((pokemon, i) => ({
      ...pokemon,
      // Workaround to add sprite URL without making one extra request per Pokémon
      sprite: `//raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i + 1}.png`,
    }));

    setPokemons(pokemons);
    setIsFetching(false);
  };

  useEffect(() => {
    fetchPokemons();
  }, []);

  return [pokemons, isFetching];
}

export default usePokemons;
