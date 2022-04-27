const inputName = document.querySelector('#name-input');
const lineName = document.querySelector('#name-output');
 
inputName.addEventListener("input", (elem) => {
    lineName.textContent = elem.currentTarget.value
})