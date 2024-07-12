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
      <div className="w-2/3 mx-auto p-16">
        <h1 className="text-center text-8xl mb-12">Memory Game</h1>
        <div className="grid grid-cols-4 gap-8">
        {
          pokemon.map(p => <Card key={p.id} pokemon={p} />)
        }
        </div>
      </div>
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
