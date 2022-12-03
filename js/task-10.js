function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  boxes: document.querySelector("#boxes"),
  createBoxBtn: document.querySelector("[data-create]"),
  destroyBoxBtn: document.querySelector("[data-destroy]"),
  qty: document.querySelector("#controls > input"),
  initialBoxSize: 30,
  boxSizeModificator: 10,
};

refs.createBoxBtn.addEventListener("click", createBoxes);
refs.destroyBoxBtn.addEventListener("click", destroyBoxes);

function createBoxes() {
  const boxArr = [];
  let boxSize = refs.initialBoxSize;

  for (let i = 0; i < refs.qty.value; i += 1) {
    const boxColor = getRandomHexColor();

    boxArr.push(`<div style="
    background-color: ${boxColor};
    width: ${boxSize}px; 
    height: ${boxSize}px;
    "></div>`);

    boxSize += refs.boxSizeModificator;
  }

  boxes.insertAdjacentHTML("beforeend", boxArr.join(""));
}

function destroyBoxes() {
  refs.boxes.innerHTML = "";
}
