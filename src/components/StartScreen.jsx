export function StartScreen({ onClick }) {
  const instructions = [
    'A grid of random Pokémon will be displayed.',
    'Click each Pokémon only once.',
    'All of the Pokémon will be shuffled after each click.',
    'Clicking on the same Pokémon twice will result in Game Over.',
    "When you're ready, click Start!",
  ];

  return (
    <div className="rounded-lg bg-slate-100 w-1/2 mx-auto p-8">
      <h2 className="text-4xl mb-4">Instructions:</h2>
      <ol className="list-disc">
        {
          instructions.map((instruction, index) => 
            <li className="text-xl" key={index}>{instruction}</li>
          )
        }
      </ol>
      <div className="flex flex-col items-center">
        <button onClick={onClick} className="bg-blue-500 hover:bg-blue-700 text-2xl text-white font-bold py-2 px-4 mt-8 rounded">Start</button>
      </div>
    </div>
  );
}
