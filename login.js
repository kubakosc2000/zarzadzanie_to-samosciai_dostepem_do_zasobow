const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");
const validation = document.getElementById("validation-error-msg");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if (username === "JakubK" && password === "JakubK123234") {
        alert("You have successfully logged in.");
        location.reload();
    } else {
        if (password.length < 5){
            validation.style.opacity = 1;
        }
        loginErrorMsg.style.opacity = 1;
    }
})