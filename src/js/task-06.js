const inputEL = document.querySelector('#validation-input');

inputEL.addEventListener("blur", (elem) => {
    elem.currentTarget.value.length != 6 ? inputEL.classList
        .add("invalid") : inputEL.classList.add("valid")
    elem.currentTarget.value.length != 6 ? inputEL.classList
        .remove("valid") : inputEL.classList.remove("invalid")
})