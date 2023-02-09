import { useEffect, useState } from "react";
import PokemonRepository from "../../repository/pokemonRepository";
import { PokemonName } from "../../types/pokemon";

export default function usePokemonList() {
  const pokemonRepository = new PokemonRepository();
  const [pokemonList, setPokemonList] = useState<PokemonName[]>();

  useEffect(() => {
    const pokemon = pokemonRepository.find();
    pokemon
      .then((allPokemon) => allPokemon.map((value) => value.name))
      .then((namesList) => setPokemonList(namesList))
      .catch((error) => console.error(error));
  }, []);

  return pokemonList;
}
