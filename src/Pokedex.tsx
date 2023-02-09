import usePokemonList from "./components/hooks/usePokemonList";
import UpdateButton from "./components/updateButton";

export default function Pokedex() {
  const pokemonList = usePokemonList();

  // if (typeof pokemonList === "undefined") {
  //   return <div>loading...</div>;
  // }

  return (
    <>
      <UpdateButton />

      <ul>
        {pokemonList?.map((value) => (
          <li>{value}</li>
        ))}
      </ul>
    </>
  );
}
