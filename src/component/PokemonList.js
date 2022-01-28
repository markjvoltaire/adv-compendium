import React from 'react';

export default function PokemonList({ pokemon }) {
  return (
    <div>
      <h1>pokemon</h1>
      <ul>
        {pokemon.map((poke) => (
          <li key={poke.id}>
            <p>{poke.pokemon}</p>
            <img className="images" src={poke.url_image}></img>
            <span>Type: {poke.type_1}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
