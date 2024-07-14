import { useState, useEffect } from 'react';
import { Scoreboard } from './components/Scoreboard';
import { Card } from './components/Card';
import { getAllPokemon } from './services/pokeService';
import { generateIds, shuffle } from './services/utilities';
import { StartScreen } from './components/StartScreen';

function App() {
  const count = 12;
  const initialIds = generateIds(count);

  const [gameStatus, setGameStatus] = useState('start');
  const [pokeIds, setPokeIds] = useState(initialIds);
  const [pokemon, setPokemon] = useState([]);
  const [selected, setSelected] = useState([]);
  const [highScore, setHighScore] = useState(0);

  useEffect(() => {
    getAllPokemon(pokeIds).then(allPokemon => setPokemon(allPokemon));
  }, [pokeIds]);

  function handleStartClick() {
    setGameStatus('playing');
  }

  function handlePokemonClick(clickedPokemon) {
    if (selected.includes(clickedPokemon.id)) {
      const currentScore = selected.length;

      if (currentScore > highScore) {
        setHighScore(currentScore);
      }

      const newIds = generateIds(count);
      setPokeIds(newIds);
      setSelected([]);
    } else {
      const nextSelected = [...selected, clickedPokemon.id];
      setSelected(nextSelected);

      const shuffled = shuffle(pokemon);
      setPokemon(shuffled);
    }
  }

  return (
    <>
      <div className="w-2/3 mx-auto p-16">
        <h1 className="text-center text-7xl mb-10">Pokémon Memory Game</h1>
        {
          gameStatus === 'start' && <StartScreen onClick={handleStartClick} />
        }
        {
          gameStatus === 'playing' && <>
            <Scoreboard currentScore={selected.length} highScore={highScore} />
            <div className="grid grid-cols-4 gap-8">
            {
              pokemon.map(p => <Card key={p.id} pokemon={p} onClick={() => handlePokemonClick(p)}/>)
            }
            </div>
          </>
        }
      </div>
    </>
  )
}

export default App
