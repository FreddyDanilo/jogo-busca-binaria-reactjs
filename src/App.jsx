import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [state, setState] = useState("start-menu");
  const [guess, setGuess] = useState(250);
  const [numberOfGuesses, setNumberOfGuesses] = useState(0);
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(500);

  const handleStartGame = () => {
    setState("running");
  };

  const handleWonTheGame = () => {
    alert(`Parabéns 🎉, a máquina teve ${numberOfGuesses} palpites`);
    setNumberOfGuesses(0);
    setMin(0);
    setMax(300);
    setGuess(150);
    setState("start-menu");
  };

  const handleCountGuesses = () => {
    setNumberOfGuesses(numberOfGuesses + 1);
  };

  const handleLarger = () => {
    if (max - 1 !== min) {
      handleCountGuesses();
      setMin(guess);
      const nextGuess = parseInt((max - guess) / 2) + guess;
      setGuess(nextGuess);
    }
  };

  const handleSmaller = () => {
    if (max - 1 !== min) {
      handleCountGuesses();
      setMax(guess);
      const nextGuess = parseInt((guess - min) / 2) + min;
      setGuess(nextGuess);
    }
  };

  if (state === "start-menu") {
    return <button onClick={handleStartGame}>Começar</button>;
  } else if (state === "running") {
    return (
      <>
        <h1>O palpite é {guess}</h1>
        <div className="interval">
          <p>Min: {min}</p>
          <p>Max: {max}</p>
        </div>
        <div className="buttons">
          <button onClick={handleSmaller}>Menor!</button>
          <button onClick={handleWonTheGame}>Acertou!</button>
          <button onClick={handleLarger}>Maior!</button>
        </div>
      </>
    );
  }
};

export default App;
