const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const list = document.querySelector("#ingredients");
ingredients.forEach(elem => {
  const listItem = document.createElement("li");
  listItem.classList.add("item")
  listItem.textContent = `${elem}`;
  list.append(listItem)
})

