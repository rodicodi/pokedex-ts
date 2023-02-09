import React from "react";
import pokemonFetcher from "../api/pokemonFetcher";

export default function UpdateButton() {
  return (
    <button className="button" type="button" onClick={() => pokemonFetcher()}>
      Update the database
    </button>
  );
}
