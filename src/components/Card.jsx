export function Card({ pokemon }) {
  const { name, color, url } = pokemon;

  return (
    <div style={{backgroundColor: color, width: "16rem" }}>
      <h2>{name}</h2>
      <img src={url} width={200} height={200} />
    </div>
  );
}
