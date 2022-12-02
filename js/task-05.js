const refs = {
  input: document.querySelector("#name-input"),
  greetingName: document.querySelector("#name-output"),
};

refs.input.addEventListener("input", changeName);

function changeName(event) {
  if (event.currentTarget.value !== "") {
    refs.greetingName.textContent = event.currentTarget.value;
  } else {
    refs.greetingName.textContent = "Anonymous";
  }
}
