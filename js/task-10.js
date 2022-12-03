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
  let boxSize = refs.initialBoxSize;

  for (let i = 0; i < refs.qty.value; i += 1) {
    const box = document.createElement("div");

    box.style.width = boxSize + "px";
    box.style.height = boxSize + "px";
    box.style.backgroundColor = getRandomHexColor();

    boxes.appendChild(box);

    boxSize += refs.boxSizeModificator;
  }
}

function destroyBoxes() {
  refs.boxes.innerHTML = "";
}
