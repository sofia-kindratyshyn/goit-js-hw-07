const userName = document.querySelector("input");
const title = document.querySelector("h1");
const changeText = document.getElementById("name-output");

userName.addEventListener("input", inputText);

function inputText(event) {
  const inputValue = event.target.value.trim();
  changeText.textContent = inputValue === "" ? "Anonymous" : inputValue;
}
