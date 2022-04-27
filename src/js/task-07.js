const controlEl = document.querySelector("#font-size-control")
const sizeText = document.querySelector("#text")

controlEl.addEventListener("input", elem => {
    sizeText.style.fontSize = `${elem.currentTarget.value}px`
})
// sizeText.style.fontSize = "`${controlEl.range}`"