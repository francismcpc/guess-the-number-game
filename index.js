/* 
I want you to create a simple guess the number type game. It should choose a random number
 between 1 and 100, then challenge the player to guess the number in 10 turns. After each
  turn, the player should be told if they are right or wrong, and if they are wrong, whether
   the guess was too low or too high. It should also tell the player what numbers they 
   previously guessed. The game will end once the player guesses correctly, or once they run 
   out of turns. When the game ends, the player should be given an option to start playing 
   again.
*/

let randomNumber = Math.floor(Math.random() * 100 + 1);

const guesses = document.querySelector(".guesses");
const lastResult = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");
const guessSubmit = document.querySelector(".guessSubmit");
const guessField = document.querySelector(".guessField");

let guessCount = 1;
let resetBtn;

function checkGuess() {
  const userGuess = Number(guessField.value);
  if (guessCount === 1) {
    guesses.textContent = "Previous Guesses :";
  }
  guesses.textContent = `${guesses.textContent} ${userGuess}`;

  if (userGuess === randomNumber) {
    lastResult.textContent = "Congratulations! You got it right";
    lastResult.style.backgroundColor = "#04844B";
    lowOrHi.style.backgroundColor = "white";
    lowOrHi.textContent = "";
    setGameOver();
  } else if (guessCount === 10) {
    lastResult.textContent = "Game Over!";
    lastResult.style.backgroundColor = "#C23933";
    lastResult.style.color = "white";
    lastResult.style.padding = "16px";
    lastResult.style.fontSize = "1.25rem";
    lastResult.style.borderRadius = "4px";
    lowOrHi.style.backgroundColor = "white";
    lowOrHi.textContent = "";
    setGameOver();
  } else {
    lastResult.textContent = "Wrong Guess!";
    lastResult.style.backgroundColor = "#C23933";
    lastResult.style.color = "white";
    lastResult.style.padding = "16px";
    lastResult.style.fontSize = "0.875rem";
    lastResult.style.borderRadius = "4px";
    if (userGuess < randomNumber) {
      lowOrHi.textContent = "Last guess was too low!";
      lowOrHi.style.backgroundColor = "#FEE3E1";
      lowOrHi.style.color = "#F24433";
      lowOrHi.style.padding = "16px";
      lowOrHi.style.fontSize = "0.875rem";
      lowOrHi.style.borderRadius = "4px";
    } else if (userGuess > randomNumber) {
      lowOrHi.textContent = "Last guess was too high!";
      lowOrHi.style.backgroundColor = "#FFE4C7";
      lowOrHi.style.color = "#F7AE2F";
      lowOrHi.style.padding = "16px";
      lowOrHi.style.fontSize = "0.875rem";
      lowOrHi.style.borderRadius = "4px";
    }
  }

  guessCount++;
  guessField.value = "";
  guessField.focus();
}

guessSubmit.addEventListener("click", checkGuess);

function setGameOver() {
  guessField.disabled = true;
  guessSubmit.disabled = true;
  resetBtn = document.createElement("button");
  resetBtn.textContent = "Start a new game";
  document.body.append(resetBtn);
  resetBtn.addEventListener("click", resetGame);
  resetBtn.style.backgroundColor = "#004AAB";
  resetBtn.style.color = "white";
  resetBtn.style.border = "none";
  resetBtn.style.padding = "16px";
  resetBtn.style.fontSize = "0.875rem";
  resetBtn.style.borderRadius = "4px";
  resetBtn.style.fontFamily = "Inter, san-serif";
  resetBtn.style.width = "100%";
  resetBtn.style.cursor = "pointer";
}

function resetGame() {
  guessCount = 1;

  const resetParas = document.querySelectorAll(".resultParas p");
  for (const resetPara of resetParas) {
    resetPara.textContent = "";
  }
  resetBtn.parentNode.removeChild(resetBtn);

  guessField.disabled = false;
  guessSubmit.disabled = false;
  guessField.value = "";
  guessField.focus();

  lastResult.style.backgroundColor = "white";

  randomNumber = Math.floor(Math.random() * 100) + 1;
}
