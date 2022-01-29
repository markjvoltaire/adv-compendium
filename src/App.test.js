import { render, screen } from '@testing-library/react';
import App from './App';

import userEvent from '@testing-library/user-event';

test('Pokemons renders on page', async () => {
  render(<App />);

  const heading = await screen.findByRole('heading', {
    name: /pokemon/i,
  });
  const pokemons = await screen.findAllByRole('listitem');
  expect(heading).toBeInTheDocument();
  expect(pokemons).toHaveLength(20);
});

test('testing for filter by type of pokemon', async () => {
  render(<App />);

  const dropdown = await screen.findByRole('combobox');
  userEvent.selectOptions(dropdown, 'bug');

  expect(screen.getByRole('option', { name: 'Bug' }).selected).toBe(true);
});

test('searchbar loads pokemons', async () => {
  render(<App />);

  const searchbar = await screen.findByRole('textbox');
  const searchbutton = screen.getByRole('button');
  const pokemonName = 'pidgeotto';

  const pokemonlist = await screen.findAllByText(pokemonName, { exact: false });
  const resultNames = pokemonlist.map((pokemon) => pokemon.textContent);

  const nameCheck = (name) => name.includes(pokemonName);

  const hasSameName = resultNames.every(nameCheck);
  expect(hasSameName).toBe(true);

  userEvent.type(searchbar, pokemonName);

  expect(searchbar).toBeInTheDocument();
  expect(searchbutton).toBeInTheDocument();
});
