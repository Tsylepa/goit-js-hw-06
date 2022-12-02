function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const body = document.querySelector("body");
const colorCode = document.querySelector(".color");
const colorChangeBtn = document.querySelector(".change-color");

colorChangeBtn.addEventListener("click", changeColor);

function changeColor() {
  const color = getRandomHexColor();
  body.style.backgroundColor = color;
  colorCode.textContent = color;
}
