import Dexie, { Table } from "dexie";
import { Pokemon } from "pokenode-ts";

const DATABASE_NAME = "PokemonDB";

export class PokedexIndexedDB extends Dexie {
  // 'pokemon' is added by dexie when declaring the stores()
  // We just tell the typing system this is the case
  pokemon!: Table<Pokemon, number>;

  constructor() {
    super(DATABASE_NAME);

    this.version(1).stores({
      pokemon: "++id", // Primary key and indexed props
    });
  }
}

export const db = new PokedexIndexedDB();
