import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

function App() {
  const rng = Math.random()*100
  const numbertoguess = parseInt(rng)
  const clgChecker = (userInput) => {console.log(userInput); let userGuess = (userInput); 
    console.log(`The user guessed ${userGuess}. The number to guess is ${numbertoguess}`);}

  return (

   <div className="App">

<label>Guess your number:</label>

<input onChange ={(userInput => clgChecker(userInput.target.value))} placeholder ="Guess the number!" type={"text"}></input>

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