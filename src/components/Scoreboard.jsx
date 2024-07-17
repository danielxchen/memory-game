export function Scoreboard({ currentScore, highScore }) {
  return (
    <div className="rounded-lg bg-slate-100 w-1/3 mx-auto p-6 mb-6">
      <p className="text-xl"><b>Current Score:</b> {currentScore}</p>
      <p className="text-xl"><b>High Score:</b> {highScore}</p>
    </div>
  );
}
