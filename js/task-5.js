function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

//Напиши скрипт, який змінює колір фону елемента <body> через інлайн-стиль по
//кліку на button.change - color і задає це значення кольору текстовим вмістом
//для span.color.

const wrapp = document.querySelector("body");
const changeColorBtn = document.querySelector(".change-color");
const returnColor = document.querySelector(".color");

changeColorBtn.addEventListener("click", changingColorFunc);

function changingColorFunc(event) {
  wrapp.style.backgroundColor = getRandomHexColor();
  returnColor.textContent = wrapp.style.backgroundColor;
}
