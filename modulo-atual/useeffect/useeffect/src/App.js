import "./App.css";
import axios from "axios";
import React, { useEffect, useState } from "react";
import PokeCard from "./components/PokeCard/PokeCard";

export default function App() {
  const [pokeList, setPokelist] = useState([]);
  const [pokeName, setPokeName] = useState("");

  const pegaPokemon = () => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/?limit=151`)

      .then((response) => setPokelist(response.data.results));
  };

  useEffect(() => {
    pegaPokemon();
  }, [pokeList]);

  const mudaSelect = (e) => {
    setPokeName(e.target.value);
  };

  return (
    <div className="App">
      <h1>lista de pokemons</h1>
      <select onChange={mudaSelect}>
        <option value={pokeName}>nenhum</option>

        {pokeList.map((pokemon) => {
          return (
            <option key={pokemon.name} value={pokemon.name}>
              {pokemon.name}
            </option>
          );
        })}
      </select>

      {pokeName && <PokeCard pokemon={pokeName} />}
    </div>
  );
}
