export function Card({ pokemon }) {
  const { name, color, url } = pokemon;

  return (
    <div className="p-6 rounded-lg shadow-lg" style={{backgroundColor: color}}>
      <div className="rounded-md bg-slate-100 py-2">
        <h2 className="text-center capitalize text-2xl">{name}</h2>
      </div>
      <div className="rounded-md bg-slate-100 mt-6">
        <img src={url} className="object-cover h-full w-full" />
      </div>
    </div>
  );
}
