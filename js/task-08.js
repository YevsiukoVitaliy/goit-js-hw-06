const loginForm = document.querySelector(".login-form")

loginForm.addEventListener("submit", elem => {
    elem.preventDefault();
     const {
    elements: { email, password }
     } = elem.currentTarget;
    if (email.value === "" || password.value === "") {
       alert("В форме есть незаполненные поля")
    }
    console.log(`Email: ${email.value}, Password: ${password.value}`);
    elem.currentTarget.reset()
})
