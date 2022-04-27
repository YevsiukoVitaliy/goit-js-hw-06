const valueEl = document.querySelector("#value")
let counterValue = 0;
const btnPlus = document.querySelector('[data-action="increment"]')
const btnPlusNumber = Number(btnPlus.textContent)
const btnMinus = document.querySelector('[data-action="decrement"]')
const btnMinusNumber = Number(btnMinus.textContent)
btnPlus.addEventListener('click', () => {
    counterValue += btnPlusNumber
    valueEl.textContent =`${counterValue}`
})
btnMinus.addEventListener('click', () => {
    counterValue += btnMinusNumber
    valueEl.textContent =`${counterValue}`
})