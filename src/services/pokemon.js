export async function getPokemon(query, type) {
  const params = new URLSearchParams();
  params.set('pokemon', query);
  if (type !== 'all') {
    params.set('type', type);
  }

  const response = await fetch(
    `https://pokedex-alchemy.herokuapp.com/api/pokedex?${params.toString()}`
  );
  const data = await response.json();
  return data;
}

export async function getType() {
  const response = await fetch('https://pokedex-alchemy.herokuapp.com/api/pokedex/types');
  const data = await response.json();
  return data.map((item) => item.type);
}
