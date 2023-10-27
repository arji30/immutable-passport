import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Game() {
  const [randomNumber, setRandomNumber] = useState(generateRandomNumber());
  const [guess, setGuess] = useState("");
  const [message, setMessage] = useState("");
  const [attempts, setAttempts] = useState(0);
  const navigate = useNavigate();

  function generateRandomNumber() {
    return Math.floor(Math.random() * 100) + 1;
  }

  function handleGuess() {
    const userGuess = parseInt(guess, 10);

    if (isNaN(userGuess)) {
      setMessage("Please enter a valid number.");
    } else if (userGuess === randomNumber) {
      console.log(message)
      navigate("/result", {state: { message: `Congratulations! You guessed the number ${randomNumber} in ${attempts} attempts.` } });
    } else if (userGuess < randomNumber) {
      setMessage("Try a higher number.");
      setAttempts(attempts + 1);
    } else {
      setMessage("Try a lower number.");
      setAttempts(attempts + 1);
    }
  }

  return (
    <div className="App">
      <h1>Number Guessing Game</h1>
      <p>Try to guess the number between 1 and 100.</p>
      <input
        type="text"
        value={guess}
        onChange={(e) => setGuess(e.target.value)}
        placeholder="Enter your guess"
      />
      <button onClick={handleGuess}>Guess</button>
      <p>{message}</p>
    </div>
  );
}

export default Game;
