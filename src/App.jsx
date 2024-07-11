import { useState, useEffect } from 'react';
import { Card } from './components/Card';
import { getPokemon } from './services/pokeService';
import { generateIds } from './services/idsGenerator';

function App() {
  const [pokemon, setPokemon] = useState([]);
  const count = 12;

  useEffect(() => {
    getAllPokemon(count).then(allPokemon => setPokemon(allPokemon));
  }, []);

  return (
    <>
      <h1>Memory Game</h1>
      {
        pokemon.map(p => <Card key={p.id} pokemon={p} />)
      }
    </>
  )
}

function getAllPokemon(count) {
  const pokeIds = generateIds(count);
  const requestPool = []

  pokeIds.forEach(pokeId => {
    const request = getPokemon(pokeId);
    requestPool.push(request);
  });

  return Promise.all(requestPool);
}

export default App
