import { render, screen } from '@testing-library/react';
import App from './App';

// import rest
import { rest } from 'msw';

import { setupServer } from 'msw/node';


const pokemon = [{
  
}]


const server = setupServer(
  rest.get('https://pokedex-alchemy.herokuapp.com/api/pokedex?', (req, res, ctx) => {
    return res(ctx.status(200), 
    ctx.json([req]));
  })
);

test.only('title renders on page', async () => {
  render(<App />);

  const heading = await screen.findByRole('heading', {
    name: /pokemon/i,
  });
  expect(heading).toBeInTheDocument();
});
