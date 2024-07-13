import { useState, useEffect } from 'react';
import { Scoreboard } from './components/Scoreboard';
import { Card } from './components/Card';
import { getPokemon } from './services/pokeService';
import { generateIds } from './services/idsGenerator';

function App() {
  const [pokemon, setPokemon] = useState([]);
  const count = 12;
  const [selected, setSelected] = useState([]);

  useEffect(() => {
    getAllPokemon(count).then(allPokemon => setPokemon(allPokemon));
  }, []);

  function handlePokemonClick(pokemon) {
    if (selected.includes(pokemon.id)) {
      console.log('Already selected!');
    } else {
      const nextSelected = [...selected, pokemon.id];
      setSelected(nextSelected);
    }
  }

  return (
    <>
      <div className="w-2/3 mx-auto p-16">
        <h1 className="text-center text-7xl mb-10">Memory Game</h1>
        <Scoreboard currentScore={selected.length} highScore={0} />
        <div className="grid grid-cols-4 gap-8">
        {
          pokemon.map(p => <Card key={p.id} pokemon={p} onClick={() => handlePokemonClick(p)}/>)
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
