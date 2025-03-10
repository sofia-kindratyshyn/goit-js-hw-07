const userName = document.querySelector("input");
const changeText = document.getElementById("name-output");

userName.addEventListener("input", inputText);

function inputText(event) {
  const inputValue = event.target.value.trim();
  changeText.textContent = inputValue === "" ? "Anonymous" : inputValue;
}
