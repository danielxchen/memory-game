export function GameOver({ score, count, onClick }) {
  const isWinner = score === count;
  const headerText = isWinner ? 'Great memory!' : 'Game Over';
  const displayText = isWinner ? `Congrats! You successfully clicked each Pokémon only once.`: `You achieved a score of: ${score}`;

  return (
    <div className="rounded-lg bg-slate-100 w-1/2 mx-auto p-8">
      <div className="flex flex-col items-center">
        <h2 className="text-4xl mb-4">{headerText}</h2>
        <p className="text-2xl">{displayText}</p>
        <button onClick={onClick} className="bg-blue-500 hover:bg-blue-700 text-2xl text-white font-bold py-2 px-4 mt-8 rounded">Play Again?</button>
      </div>
    </div>
  );
}
