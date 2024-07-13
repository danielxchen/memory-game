export function Scoreboard({ currentScore, highScore }) {
  return (
    <div className="rounded-lg bg-slate-100 w-1/3 mx-auto p-8 mb-8">
      <p className="text-2xl"><b>Current Score:</b> {currentScore}</p>
      <p className="text-2xl"><b>High Score:</b> {highScore}</p>
    </div>
  );
}
