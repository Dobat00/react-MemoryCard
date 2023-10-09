import { useState } from "react";
import "./App.css";
import { Cards } from "./components/cards";
import { Scoreboard } from "./components/scoreboard";

const deck = [123, 133, 12, 124, 152, 212];
function App() {
  const [score, setScore] = useState(0);
  let [highScore, setHighScore] = useState(0);
  return (
    <>
      <Scoreboard score={score} highScore={highScore}></Scoreboard>
      {/* <Cards onClick={scoreCheck} numero={123}></Cards>
      <Cards onClick={scoreCheck} numero={133}></Cards>
      <Cards onClick={scoreCheck} numero={12}></Cards>
      <Cards onClick={scoreCheck} numero={124}></Cards>
      <Cards onClick={scoreCheck} numero={152}></Cards>
      <Cards onClick={scoreCheck} numero={212}></Cards> */}
      {deck.map((cards) => {
        return <Cards key={cards} onClick={scoreCheck} numero={cards}></Cards>;
      })}
    </>
  );
  function scoreCheck() {
    setScore(score + 1);
  }
}

export default App;
