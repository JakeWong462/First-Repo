/*const btnSubmit = document.getElementById("btnSubmit");
const pText = document.getElementById("pText");
const inputText = document.querySelector("#inputText");

btnSubmit.addEventListener("click", displayText);

function displayText() {
  const inputValue = inputText.value;
  console.log(inputValue);

  pText.style.color = "red";

  pText.style.fontWeight = "bold";

  pText.innerHTML = inputValue;
}

 let name = prompt("What's your name?");
alert(`Hi ${name} how are you?`); 

let color = prompt("Whats your favorite color?");
if (color === "blue") {
  alert(`Oh nice that's my favorite color too!`);
} else {
  alert(`That's a nice color!`);
}*/

const numberInp = document.querySelector(".inputSubmit");
const guessButton = document.querySelector(".guessBtn");
const attemptSpn = document.querySelector(".attemptSpan");

let randomNumber = Math.floor(Math.random() * 10);
let attemptCount = 0;

guessButton.addEventListener("click", onGuess);

function onGuess() {
  attemptCount++;
  const inputValue = Number(numberInp.value);
  if (inputValue === randomNumber) {
    attemptSpn.textContent = `Congratulations! You guessed the number ${randomNumber} in ${attemptSpn} attempts`;
    numberInp.disabled = true;
    guessButton.disabled = true;
  } else {
    attemptSpn.textContent = `Attemps: ${attemptCount}`;
    if (inputValue < randomNumber) {
      alert("Too low! Try again.");
    } else {
      alert("Too high! Try again.");
    }
  }
}
