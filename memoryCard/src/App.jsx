import { useState } from "react";
import "./App.css";
import { Cards } from "./components/cards";
import { Scoreboard } from "./components/scoreboard";

//sempre que eu clicar em um card, um novo deck deve ser renderizado, para queo jogo faca sentido, o deck renderiazado, pode ou nao conter cartas ja mostradas anteriormente
//sempre que eu clicar em um card, o app deve checar se aquela carta ja foi clicada anteriormente (via array?), para que assim, a pontuacao possa exitir e ser coesa
const deck = [123, 133, 12, 124, 152, 212];
function App() {
  const [score, setScore] = useState(0);
  let [highScore, setHighScore] = useState(0);
  return (
    <>
      <Scoreboard score={score} highScore={highScore}></Scoreboard>
      {deck.map((cards) => {
        return <Cards key={cards} onClick={clickCard} numero={cards}></Cards>;
      })}
    </>
  );
  function clickCard() {
    setScore(score + 1);
  }
}

export default App;
