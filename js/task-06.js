const input = document.querySelector("#validation-input");
const validLength = input.dataset.length;

input.addEventListener("blur", validation);

function validation() {
  if (this.value.length >= validLength) {
    this.classList.remove("invalid");
    this.classList.add("valid");
  } else {
    this.classList.remove("valid");
    this.classList.add("invalid");
  }
}
