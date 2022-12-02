const form = document.querySelector(".login-form");

form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const formElements = event.currentTarget.elements;
  let email = formElements["email"].value;
  let password = formElements["password"].value;

  if (email && password) {
    console.log({ email, password });
    form.reset();
  } else {
    alert("Заповніть, будь ласка, всі поля!");
  }
}
