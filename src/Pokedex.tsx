import usePokemonList from "./components/hooks/usePokemonList";

export default function Pokedex() {
  const pokemonList = usePokemonList();

  if (typeof pokemonList === "undefined") {
    return <div>loading...</div>;
  }

  return (
    <div className="text-center">
      {pokemonList.map((pokemon) => (
        <li key={pokemon.name}>{pokemon.name}</li>
      ))}
    </div>
  );
}
