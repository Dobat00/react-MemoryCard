import { useState, useEffect } from "react";

// let pokemons = [];
// export function Cards({ onClick }) {
//   const [pokemon, setPokemon] = useState();
//   useEffect(() => {
//     fetch(`https://pokeapi.co/api/v2/pokemon/1`)
//       .then((response) => response.json())
//       .then((data) => pokemons.push(String(data.sprites.front_default)));

//     fetch(`https://pokeapi.co/api/v2/pokemon/2`)
//       .then((response) => response.json())
//       .then((data) => pokemons.push(String(data.sprites.front_default)));
//     fetch(`https://pokeapi.co/api/v2/pokemon/3`)
//       .then((response) => response.json())
//       .then((data) => pokemons.push(String(data.sprites.front_default)));
//   }, []);

// return (
//   <>
//     <button
//       onClick={() => {
//         console.log(pokemons[0]);
//         console.log(pokemon);
//       }}
//     ></button>
//     <button>
//       <img src={pokemons[0]}></img>
//     </button>
//   </>
// );
// }

export function Cards({ onClick }) {
  const [pokemon, setPokemon] = useState();
  apiFetch();
  console.log(pokemon);
  return (
    <>
      {createCard()}
      <button
        onClick={() => {
          console.log(pokemon);
        }}
      ></button>
    </>
  );
  function apiFetch() {
    fetch(`https://pokeapi.co/api/v2/pokemon/1`)
      .then((response) => response.json())
      .then((data) => setPokemon(String(data.sprites.front_default)));
    return pokemon;
  }

  function createCard() {
    return (
      <>
        <button>
          <img src={pokemon}></img>
        </button>
      </>
    );
  }
}
