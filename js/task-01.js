const list = document.querySelector("#categories");
const categories = list.querySelectorAll(".item");

console.log("Number of categories:", categories.length);

categories.forEach((ctg) => {
  console.log("Category:", ctg.querySelector("h2").textContent);
  console.log("Elements:", ctg.querySelectorAll("li").length);
});
// console.log(getInfo);
