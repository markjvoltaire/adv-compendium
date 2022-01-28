import { render, screen } from '@testing-library/react';
import App from './App';

// import rest
import { rest } from 'msw';

import { setupServer } from 'msw/node';

const pokemon = [
  {
    id: 4,
    pokemon: 'venusaur-mega',
    url_image: 'http://assets.pokemon.com/assets/cms2/img/pokedex/full/003_f2.png',
    type_1: 'grass',
  },
  {
    id: 8,
    pokemon: 'charizard-mega-x',
    url_image: 'http://assets.pokemon.com/assets/cms2/img/pokedex/full/006_f2.png',
    type_1: 'fire',
  },
  {
    id: 1,
    pokemon: 'bulbasaur',
    url_image: 'http://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png',
    type_1: 'grass',
  },
  {
    id: 7,
    pokemon: 'charizard',
    url_image: 'http://assets.pokemon.com/assets/cms2/img/pokedex/full/006.png',
    type_1: 'fire',
  },
  {
    id: 9,
    pokemon: 'charizard-mega-y',
    url_image: 'http://assets.pokemon.com/assets/cms2/img/pokedex/full/006_f3.png',
    type_1: 'fire',
  },
  {
    id: 10,
    pokemon: 'squirtle',
    url_image: 'http://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png',
    type_1: 'water',
  },
  {
    id: 11,
    pokemon: 'wartortle',
    url_image: 'http://assets.pokemon.com/assets/cms2/img/pokedex/full/008.png',
    type_1: 'water',
  },
  {
    id: 12,
    pokemon: 'blastoise',
    url_image: 'http://assets.pokemon.com/assets/cms2/img/pokedex/full/009.png',
    type_1: 'water',
  },
  {
    id: 13,
    pokemon: 'blastoise-mega',
    url_image: 'http://assets.pokemon.com/assets/cms2/img/pokedex/full/009_f2.png',
    type_1: 'water',
  },
  {
    id: 14,
    pokemon: 'caterpie',
    url_image: 'http://assets.pokemon.com/assets/cms2/img/pokedex/full/010.png',
    type_1: 'bug',
  },
  {
    id: 15,
    pokemon: 'metapod',
    url_image: 'http://assets.pokemon.com/assets/cms2/img/pokedex/full/011.png',
    type_1: 'bug',
  },
  {
    id: 16,
    pokemon: 'butterfree',
    url_image: 'http://assets.pokemon.com/assets/cms2/img/pokedex/full/012.png',
    type_1: 'bug',
  },
  {
    id: 17,
    pokemon: 'weedle',
    url_image: 'http://assets.pokemon.com/assets/cms2/img/pokedex/full/013.png',
    type_1: 'bug',
  },
  {
    id: 5,
    pokemon: 'charmander',
    url_image: 'http://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png',
    type_1: 'fire',
  },
  {
    id: 19,
    pokemon: 'beedrill',
    url_image: 'http://assets.pokemon.com/assets/cms2/img/pokedex/full/015.png',
    type_1: 'bug',
  },
  {
    id: 18,
    pokemon: 'kakuna',
    url_image: 'http://assets.pokemon.com/assets/cms2/img/pokedex/full/014.png',
    type_1: 'bug',
  },
  {
    id: 22,
    pokemon: 'pidgeotto',
    url_image: 'http://assets.pokemon.com/assets/cms2/img/pokedex/full/017.png',
    type_1: 'normal',
  },
  {
    id: 20,
    pokemon: 'beedrill-mega',
    url_image: 'http://assets.pokemon.com/assets/cms2/img/pokedex/full/015_f2.png',
    type_1: 'bug',
  },
  {
    id: 23,
    pokemon: 'pidgeot',
    url_image: 'http://assets.pokemon.com/assets/cms2/img/pokedex/full/018.png',
    type_1: 'normal',
  },
  {
    id: 24,
    pokemon: 'pidgeot-mega',
    url_image: 'http://assets.pokemon.com/assets/cms2/img/pokedex/full/018_f2.png',
    type_1: 'normal',
  },
];

const server = setupServer(
  rest.get('https://pokedex-alchemy.herokuapp.com/api/pokedex?', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json({}));
  })
);

test.only('title renders on page', async () => {
  render(<App />);

  const heading = await screen.findByRole('heading', {
    name: /pokemon/i,
  });
  expect(heading).toBeInTheDocument();
});
