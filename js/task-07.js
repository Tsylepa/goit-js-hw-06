const fontRange = document.querySelector("#font-size-control");
const text = document.querySelector("#text");

fontRange.addEventListener("input", fontSize);

function fontSize() {
  text.style.fontSize = fontRange.value + "px";
}
