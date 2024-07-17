import { useState, useEffect } from 'react';
import { Scoreboard } from './components/Scoreboard';
import { Card } from './components/Card';
import { getAllPokemon } from './services/pokeService';
import { generateIds, shuffle } from './services/utilities';
import { Start } from './components/Start';
import { GameOver } from './components/GameOver';

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

  function handlePlayAgainClick() {
    const newIds = generateIds(count);
    setPokeIds(newIds);
    setSelected([]);
    setGameStatus('playing');
  }

  function handlePokemonClick(clickedPokemon) {
    if (selected.includes(clickedPokemon.id)) {
      const score = selected.length;
  
      if (score > highScore) {
        setHighScore(score);
      }

      setGameStatus('game over');
    } else {
      const nextSelected = [...selected, clickedPokemon.id];
      setSelected(nextSelected);

      if (nextSelected.length === count) {
        if (highScore < count) {
          setHighScore(count);
        }
        setGameStatus('game over');
      } else {
        const shuffled = shuffle(pokemon);
        setPokemon(shuffled);
      }
    }
  }

  return (
    <>
      <div className="w-4/5 mx-auto p-8">
        <h1 className="text-center text-5xl mb-6">Pokémon Memory Game</h1>
        {
          gameStatus === 'start' && <Start onClick={handleStartClick} />
        }
        {
          gameStatus === 'playing' &&
          <>
            <Scoreboard currentScore={selected.length} highScore={highScore} />
            <div className="grid grid-cols-6 gap-6">
            {
              pokemon.map(p => <Card key={p.id} pokemon={p} onClick={() => handlePokemonClick(p)}/>)
            }
            </div>
          </>
        }
        {
          gameStatus === 'game over' && <GameOver score={selected.length} count={count} onClick={handlePlayAgainClick} />
        }
      </div>
    </>
  )
}

export default App
