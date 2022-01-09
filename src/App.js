import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

function App() {
  let numbertoguess = 0
  let userGuess = 100
  const rng = () => {numbertoguess = parseInt(Math.random()*100); return numbertoguess}
  rng()
  const clgChecker = (userInput) => {console.log(userInput); userGuess = parseInt(userInput);
    console.log(`The user guessed ${userGuess}. The number to guess is ${numbertoguess}`);}
  
  const gameMechanics = () => {
    (numbertoguess === userGuess) ? console.log("The number guessed was right!"):console.log("Wrong guess...")
  }

  return (

   <div className="App">

<label>Guess your number:</label>

<input onChange ={(userInput => clgChecker(userInput.target.value))} placeholder ="Guess the number!" type={"text"}></input>
<button onClick={gameMechanics}> "Am I right?" </button>

    </div>
  );
}

export default App;



// const userGuess = (guessedNumber) => {console.log(guessedNumber)};
{/* <input onChange = {userInput => userGuess(userInput.target.value)} placeholder='Guess the number!' type={"text"}></input> */}
{/* <button onClick={}>Guess</button> */}








// 
// 

// 