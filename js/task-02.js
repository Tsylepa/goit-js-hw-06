const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const list = document.querySelector("#ingredients");

const elements = [];

ingredients.forEach((ingr) => {
  const el = document.createElement("li");
  el.classList.add("item");
  el.textContent = ingr;
  elements.push(el);
});

list.append(...elements);
