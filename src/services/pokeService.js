async function getPokemon(id) {
  const pokeapinUrl = 'https://pokeapi.co/api/v2/pokemon/';
  const pokemonRequestUrl = `${pokeapinUrl}${id}`;
  
  const pokemonResponse = await fetch(pokemonRequestUrl);
  const pokemon = await pokemonResponse.json();

  const name = pokemon.name;
  const type = pokemon.past_types.length > 0 ? pokemon.past_types[0].types[0].type.name : pokemon.types[0].type.name;
  const color = getTypeColor(type);
  const url = pokemon.sprites.front_default;

  return { id, name, color, url }
}

export function getAllPokemon(ids) {
  const requestPool = []

  ids.forEach(id => {
    const request = getPokemon(id);
    requestPool.push(request);
  });

  return Promise.all(requestPool);
}

function getTypeColor(type) {
  const typeToColorMapping = {
    'normal': '#A8A77A',
    'fire': '#EE8130',
    'water': '#6390F0',
    'electric': '#F7D02C',
    'grass': '#7AC74C',
    'ice': '#96D9D6',
    'fighting': '#C22E28',
    'poison': '#A33EA1',
    'ground': '#E2BF65',
    'flying': '#A98FF3',
    'psychic': '#F95587',
    'bug': '#A6B91A',
    'rock': '#B6A136',
    'ghost': '#735797',
    'dragon': '#6F35FC',
  };

  return typeToColorMapping[type];
}
