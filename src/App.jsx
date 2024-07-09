import { useState, useEffect } from 'react';
import { Card } from './components/Card';
import { getPokemon } from './pokeService';

function App() {
  const [pokemon, setPokemon] = useState('');

  useEffect(() => {
    getPokemon().then(p => setPokemon(p));
  }, []);

  return (
    <>
      <h1>Memory Game</h1>
      <Card pokemon={pokemon} />
    </>
  )
}

export default App
