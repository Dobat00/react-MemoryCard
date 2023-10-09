import { useState, useEffect } from "react";

export function Cards({ onClick, numero }) {
  const [pokemon, setPokemon] = useState();
  let a = createCard(numero);

  return <>{a}</>;
  function apiFetch(numero) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${numero}`)
      .then((response) => response.json())
      .then((data) => setPokemon(String(data.sprites.front_default)));
    console.log("funcao apiFetch() invocada");
    return pokemon;
  }

  function createCard(numero) {
    apiFetch(numero);
    return (
      <>
        <button onClick={onClick}>
          <img src={pokemon}></img>
        </button>
      </>
    );
  }
}
