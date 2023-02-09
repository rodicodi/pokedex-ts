import { PokemonClient } from "pokenode-ts";
import validateFetchedResults from "../helpers/validator";
import PokemonRepository from "../repository/pokemonRepository";

export default async function pokemonFetcher() {
  const api = new PokemonClient();
  const pokemonRepository = new PokemonRepository();

  const tableCount = await pokemonRepository.count();
  await api
    .listPokemons(0, -1)
    .then((data) => {
      const canUpdate = validateFetchedResults(data, tableCount);

      return { canUpdate, data };
    })
    .then(({ canUpdate, data }) => {
      if (canUpdate) {
        data.results.map((value) =>
          api
            .getPokemonByName(value.name)
            .then((pokemon) => pokemonRepository.store(pokemon))
        );
      }
    })
    .catch((error) => console.error(error));
}
