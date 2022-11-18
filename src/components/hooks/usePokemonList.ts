import { NamedAPIResource, PokemonClient } from "pokenode-ts";
import { useEffect, useState } from "react";

export default function usePokemonList() {
  const [allPokemon, setAllPokemon] = useState<NamedAPIResource[]>();

  useEffect(() => {
    const pokemonList = async () => {
      const api = new PokemonClient();

      await api
        .listPokemons()
        .then((data) => setAllPokemon(data.results))
        .catch((error) => console.error(error));
    };
    pokemonList().catch((error) => console.error(error));
  }, []);

  return allPokemon;
}
