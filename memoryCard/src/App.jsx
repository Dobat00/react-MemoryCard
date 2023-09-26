import { useState } from "react";
import "./App.css";
import { Cards } from "./components/cards";
import { Scoreboard } from "./components/scoreboard";

function App() {
  const [score, setScore] = useState(0);
  let [highScore, setHighScore] = useState(0);
  return (
    <>
      <Scoreboard score={score} highScore={highScore}></Scoreboard>
      <h1>funcionando</h1>
      <Cards onClick={scoreCheck}></Cards>
    </>
  );
  function scoreCheck() {
    setScore(score + 1);
  }
}

export default App;
