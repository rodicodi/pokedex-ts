import { NamedAPIResourceList } from "pokenode-ts";

export default function validateFetchedResults(
  pokemonList: NamedAPIResourceList,
  tableCount: number
): boolean {
  if (tableCount === 0) {
    console.log("Database empty. Updating indexedDB");
    return true;
  }

  if (tableCount > 0 && pokemonList.results.length > tableCount) {
    console.log("Database is not up-to-date... Updating indexedDB");
    return true;
  }

  console.log("Database is up-to-date!");
  return false;
}
