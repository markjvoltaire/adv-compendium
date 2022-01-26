import { render, screen } from '@testing-library/react';
import App from './App';

test.only('title renders on page', async () => {
  render(<App />);

  const heading = await screen.findByRole('heading', {
    name: /pokemon/i,
  });
  expect(heading).toBeInTheDocument();
});
