function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const btnEl = document.querySelector(".change-color")
const lineEl = document.querySelector(".color")

btnEl.addEventListener('click', () => {
  lineEl.textContent = `${getRandomHexColor()}`
  lineEl.style.color = `${getRandomHexColor()}`
})