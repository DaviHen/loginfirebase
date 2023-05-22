const formElement = document.getElementById("formElement");
const backToLoginBtn = document.getElementById("goBackToLogin");
const registerBtn = document.getElementById("registerBtn");

const emailInput = document.getElementById("emailInput");
const passwordInput = document.getElementById("passwordInput");
const confirmPasswordInput = document.getElementById("confirmPasswordInput");
const PasswordsNotMatchingError = document.getElementById("PasswordsNotMatchingError");


confirmPasswordInput.addEventListener("change", checkIfPasswordsMatch)
registerBtn.addEventListener("click", registerNewUser);
backToLoginBtn.addEventListener("click", goBackToLogin);
formElement.addEventListener("submit", (e) => { e.preventDefault() });

function goBackToLogin(){
    window.location.href = "../index.html"
}

function registerNewUser(){
    const password = passwordInput.value;
    const confirmPassword = confirmPasswordInput.value;
    
    if(password == confirmPassword){
        alert("Registrado")
        PasswordsNotMatchingError.style.display = "none"
    } else{
        PasswordsNotMatchingError.style.display = "block"
    }
}

function checkIfPasswordsMatch(){

}

