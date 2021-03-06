import React from 'react';

import { capitalize } from '../../styles/functional.module.css';
import styles from './Profile.module.css';

const Profile = ({ pokemon }) => (
  <section>
    <h2>Profile</h2>
    <div className={styles.grid}>
      <strong>Height</strong>
      <span>{pokemon.height / 10} m</span>

      <strong>Weight</strong>
      <span>{pokemon.weight / 10} kg</span>

      <strong>Base XP</strong>
      <span>{pokemon.base_experience}</span>

      <strong>Abilities</strong>
      <span className={capitalize}>{pokemon.abilities.map(({ ability }) => ability.name).join(', ')}</span>

      <strong>Hatch steps</strong>
      <span>{pokemon.species.hatch_counter * 255}</span>

      <strong>Egg groups</strong>
      <span className={capitalize}>{pokemon.species.egg_groups.map(({ name }) => name).join(', ')}</span>

      <strong>Catch rate</strong>
      <span>{(pokemon.species.capture_rate / 255 * 100).toFixed(1)}%</span>

      <strong>Happiness</strong>
      <span>{(pokemon.species.base_happiness / 255 * 100).toFixed(1)}%</span>

      <strong>Growth rate</strong>
      <span className={capitalize}>{pokemon.species.growth_rate.name}</span>

      <strong>Habitat</strong>
      <span className={capitalize}>{pokemon.species.habitat.name}</span>
    </div>
  </section>
);

export default Profile;
