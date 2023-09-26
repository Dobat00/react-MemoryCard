import { useState } from "react";

export function Scoreboard({ score, highScore }) {
  return (
    <div className="scoreBoardDiv">
      <p>score: {score} </p>
      <p>highest score: {highScore}</p>
    </div>
  );
}
