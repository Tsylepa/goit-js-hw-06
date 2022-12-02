let counterValue = 0;

const value = document.querySelector("#value");
value.textContent = counterValue;

const actionBtn = document.querySelectorAll("#counter > button");

actionBtn.forEach((button) => button.addEventListener("click", updateValue));

function updateValue() {
  counterValue += Number(this.textContent);
  value.textContent = counterValue;
}
