const categoriesItemEl = document.querySelectorAll(".item");
console.log(`Number of categories: ${categoriesItemEl.length}`)
const listEl = document.querySelectorAll(".item ul");
listEl.forEach((elem) => {
    console.log(`Category: ${elem.previousElementSibling.textContent}`);
    console.log(`Elements: ${elem.children.length}`)
});