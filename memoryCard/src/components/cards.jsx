import { useState, useEffect } from "react";

let pokemons = [];
export function Cards({ onClick }) {
  const [pokemon, setPokemon] = useState();
  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/1`)
      .then((response) => response.json())
      .then((data) => setPokemon(String(data.sprites.front_default)));

    fetch(`https://pokeapi.co/api/v2/pokemon/2`)
      .then((response) => response.json())
      .then((data) => setPokemon(String(data.sprites.front_default)));

    fetch(`https://pokeapi.co/api/v2/pokemon/3`)
      .then((response) => response.json())
      .then((data) => setPokemon(String(data.sprites.front_default)));
  }, []);

  return (
    <>
      <button
        onClick={() => {
          console.log(pokemons);
          console.log(pokemon);
        }}
      ></button>
    </>
  );
}
