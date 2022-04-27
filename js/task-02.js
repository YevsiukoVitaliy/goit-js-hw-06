const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const list = document.querySelector("#ingredients");

const listItem = ingredients.map(elem => `<li><img class="item">${elem}
</li>`).join("")
list.insertAdjacentHTML("beforebegin",listItem)



// ingredients.forEach(elem => {
//   const listItem = document.createElement("li");
//   listItem.classList.add("item")
//   listItem.textContent = `${elem}`;
//   list.append(listItem)
// })

