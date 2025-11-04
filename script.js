const btnSubmit = document.getElementById("btnSubmit");
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

/* let name = prompt("What's your name?");
alert(`Hi ${name} how are you?`); 

let color = prompt("Whats your favorite color?");
if (color === "blue") {
  alert(`Oh nice that's my favorite color too!`);
} else {
  alert(`That's a nice color!`);
}*/

const numberInp = document.quearySelector("inputSubmit");
const guessBtn = document.quearySelector("guessBtn");
const attemptConst = document.quearySelector("#attemptSpan");
const youWon = document.quearySelector("youWon");
let secretNumber = Math.floor(Math.random() * 10) + 1;
guessBtn.addEventListener("click");
function onGuess() {
  attemptConst++;
  const inputValue = Number(numberInp.value);
}
if (secretNumber === inputValue) {
}
