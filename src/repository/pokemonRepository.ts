import { Database, Table } from "dexie";
import { Pokemon } from "pokenode-ts";
import { db } from "../storage/db";
import { PokemonId, PokemonName } from "../types/pokemon";

export default class PokemonRepository {
  private database: Database;

  private tableName: Table["name"];

  constructor() {
    this.database = db;
    this.tableName = "pokemon";
  }

  async store(pokemon: Pokemon): Promise<void> {
    await this.database.table(this.tableName).put(pokemon);
  }

  async count(): Promise<number> {
    return this.database.table(this.tableName).count();
  }

  async find(): Promise<Pokemon[]> {
    return this.database.table(this.tableName).toArray();
  }

  async findById(pokemonId: PokemonId): Promise<Pokemon> {
    return this.database
      .table(this.tableName)
      .where("id")
      .equals(pokemonId)
      .first();
  }

  async findByName(pokemonName: PokemonName): Promise<Pokemon> {
    return this.database
      .table("pokemon")
      .where("name")
      .equals(pokemonName)
      .first();
  }
}
