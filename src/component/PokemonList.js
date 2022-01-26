import React from 'react';

export default function PokemonList({ pokemon }) {
  return (
    <div>
      <h1>pokemon</h1>
      {pokemon.map((poke) => (
        <>
          <p key={poke.id}>{poke.pokemon}</p>
          <img className="images" src={poke.url_image}></img>
          <span>Type: {poke.type_1}</span>
        </>
      ))}
    </div>
  );
}
