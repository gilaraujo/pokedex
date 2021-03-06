import React, { Fragment, useCallback, useState } from 'react';

import Grid from '../../components/Grid';
import SearchField from '../../components/SearchField';
import Spinner from '../../components/Spinner';
import usePokemons from '../../hooks/usePokemons';
import styles from './Home.module.css';

const Home = () => {
  const { pokemons, isFetching, error } = usePokemons();
  const [search, setSearch] = useState('');

  const filteredPokemons = pokemons.filter(({ formattedName }) =>
    !search || formattedName.toLowerCase().includes(search.toLowerCase()));

  const onSearchChange = useCallback(e => setSearch(e.target.value), []);

  return (
    <Fragment>
      {isFetching && (
        <Spinner />
      )}
      {error && (
        <p className={styles.error}>No Pokémons in this village!</p>
      )}
      {pokemons.length > 0 && (
        <Fragment>
          <SearchField onChange={onSearchChange} value={search} />
          <Grid pokemons={filteredPokemons} />
        </Fragment>
      )}
    </Fragment>
  );
}

export default Home;
