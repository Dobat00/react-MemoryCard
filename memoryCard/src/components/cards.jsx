import { useState, useEffect } from "react";
let pokemons = [];

export function Cards({ onClick }) {
  const [pokemon, setPokemon] = useState();
  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/1`)
      .then((response) => response.json())
      .then((data) => setPokemon(String(data.sprites.front_default)));
  }, []);

  return (
    <>
      <button onClick={onClick}>
        {/* {pokemons.map((poke) => {
          return <img key={poke} src={poke}></img>;
        })} */}
        <img src={pokemon}></img>
      </button>
    </>
  );
}
