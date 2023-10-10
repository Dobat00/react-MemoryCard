import { useState, useEffect } from "react";

export function Cards({ onClick, numero }) {
  const [pokemon, setPokemon] = useState();
  const [showCard, setShowCard] = useState(true);
  let card = createCard(numero);

  return <>{card}</>;
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
        {showCard && (
          <button
            onClick={() => {
              cardDisplay();
              onClick();
            }}
          >
            <img src={pokemon}></img>
          </button>
        )}
      </>
    );
  }

  function cardDisplay() {
    setShowCard(false);
  }
}
