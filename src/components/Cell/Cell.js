import React, { memo } from 'react';
import { Link } from 'react-router-dom'

import styles from './Cell.module.css';

const Cell = memo(({ pokemon }) => (
  <Link className={styles.cell} to={`/${pokemon.name}`}>
    <img className={styles.sprite} src={pokemon.sprite} alt="" />
    <span>{pokemon.formattedName}</span>
  </Link>
));

export default Cell;
