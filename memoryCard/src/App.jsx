import { useState } from "react";
import "./App.css";
import { Cards } from "./components/cards";

function App() {
  const [score, setScore] = useState(0);
  return (
    <>
      <h1>functionando</h1>
      <Cards></Cards>
    </>
  );
}

export default App;
