function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const inputNumber = document.querySelector("input");
const createButton = document.querySelector("[data-create]");
const destroyButton = document.querySelector("[data-destroy]");
const mainBox = document.querySelector("#boxes");

inputNumber.addEventListener("input", checkInputValue);

function checkInputValue(event) {
  if (event.target.value > 100) {
    event.target.value = 100;
  }
}

createButton.addEventListener("click", () => {
  const amount = Number(inputNumber.value);
  if (amount <= 100) {
    createElements(amount);
  }
});

function createElements(inputValue) {
  mainBox.innerHTML = "";
  createBoxes(inputValue);
}

function createBoxes(amount) {
  for (let i = 0; i < amount; i++) {
    const newCard = document.createElement("div");
    newCard.classList.add("new-cards");
    newCard.style.width = `${30 + i * 10}px`;
    newCard.style.height = `${30 + i * 10}px`;
    newCard.style.backgroundColor = getRandomHexColor();
    newCard.style.margin = "5px";
    mainBox.append(newCard);
  }
}

destroyButton.addEventListener("click", destroyElements);

function destroyElements() {
  mainBox.innerHTML = "";
}
