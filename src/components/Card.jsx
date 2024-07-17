export function Card({ pokemon, onClick }) {
  const { name, color, url } = pokemon;

  return (
    <div className="p-4 rounded-lg shadow-lg cursor-pointer" style={{backgroundColor: color}} onClick={onClick}>
      <div className="rounded-md bg-slate-100 py-1">
        <h2 className="text-center capitalize text-xl">{name}</h2>
      </div>
      <div className="rounded-md bg-slate-100 mt-4">
        <img src={url} className="object-cover h-full w-full" />
      </div>
    </div>
  );
}
