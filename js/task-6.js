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
  let value = Number(event.target.value);
  event.target.value = Math.min(Math.max(value, 1), 100);
}

createButton.addEventListener("click", () => {
  const amount = Number(inputNumber.value);
  if (amount >= 1 && amount <= 100) {
    createElements(amount);
  }
});

function createElements(inputValue) {
  mainBox.innerHTML = ""; // Очищення перед додаванням нових елементів
  createBoxes(inputValue);
}

function createBoxes(amount) {
  const fragment = document.createDocumentFragment();

  for (let i = 0; i < amount; i++) {
    const newCard = document.createElement("div");
    newCard.classList.add("new-cards");
    newCard.style.width = `${30 + i * 10}px`;
    newCard.style.height = `${30 + i * 10}px`;
    newCard.style.backgroundColor = getRandomHexColor();
    newCard.style.margin = "5px";
    fragment.appendChild(newCard);
  }

  mainBox.appendChild(fragment); // Додаємо всі елементи за одну операцію
}

destroyButton.addEventListener("click", destroyElements);

function destroyElements() {
  mainBox.innerHTML = "";
}
