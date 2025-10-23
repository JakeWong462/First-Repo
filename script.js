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
