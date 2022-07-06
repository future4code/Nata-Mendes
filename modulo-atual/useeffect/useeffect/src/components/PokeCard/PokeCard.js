import React, { useState, useEffect } from "react";
import axios from "axios";

export default function App(props) {
  const [cadaPokemon, setPokemon] = useState({});

  const pokemonUnitario = (parametro) => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${parametro}`)
      .then((res) => {
        setPokemon(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    pokemonUnitario(props.pokemon);
  }, [cadaPokemon]);

  return (
    <div>
      <p>{cadaPokemon.name}</p>
      <p>{cadaPokemon.weight} Kg</p>
      {cadaPokemon.types && <p>{cadaPokemon.types[0].type.name}</p>}
      {cadaPokemon.sprites && (
        <img src={cadaPokemon.sprites.front_default} alt={cadaPokemon.name} />
      )}
    </div>
  );
}
