import { useState, useEffect } from 'react';
import { getPokemon } from './pokeService';

function App() {
  const [pokemon, setPokemon] = useState('');

  useEffect(() => {
    getPokemon().then(p => setPokemon(p));
  }, []);

  const { name, color, url } = pokemon;

  return (
    <>
      <h1>Memory Game</h1>
      <div style={{backgroundColor: color, width: "16rem" }}>
        <h2>{name}</h2>
        <img src={url} width={200} height={200} />
      </div>
    </>
  )
}

export default App
