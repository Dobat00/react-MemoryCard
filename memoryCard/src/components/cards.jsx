import { useState } from "react";

export function Cards({ onClick }) {
  const [pokemon, setPokemon] = useState();
  function getPokemon() {
    fetch("https://pokeapi.co/api/v2/pokemon/35")
      .then((response) => response.json())
      .then((data) => setPokemon(String(data.sprites.front_default)));
    //   .then((data) => setPokemon(data));
    console.log(pokemon);
  }
  return (
    <>
      {getPokemon()}
      <button onClick={onClick}>
        <img src={pokemon}></img>
        carta
      </button>
      <button onClick={getPokemon}>TESTE</button>
    </>
  );
}
