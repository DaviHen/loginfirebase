const formElement = document.getElementById("formElement");
const backToLoginBtn = document.getElementById("goBackToLogin");
const registerBtn = document.getElementById("registerBtn");

const emailInput = document.getElementById("emailInput");
const passwordInput = document.getElementById("passwordInput");
const confirmPasswordInput = document.getElementById("confirmPasswordInput");
const PasswordsNotMatchingError = document.getElementById("PasswordsNotMatchingError");


confirmPasswordInput.addEventListener("change", checkIfPasswordsMatch)
passwordInput.addEventListener("change", checkIfPasswordsMatch)
registerBtn.addEventListener("click", registerNewUser);
backToLoginBtn.addEventListener("click", goBackToLogin);
formElement.addEventListener("submit", (e) => { e.preventDefault() });

firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        window.location.href = "../pages/home.html"
        var uid = user.uid;
    } else {
        console.log("Deslogado")
    }
});

function goBackToLogin(){
    window.location.href = "../index.html"
}

function registerNewUser(){
    showLoading();

    const email = emailInput.value;
    const password = passwordInput.value;

    firebase.auth().createUserWithEmailAndPassword(email, password).then(() => {
        hideLoading();
        window.location.href = "../pages/home.html"
    }).catch( error => {
        hideLoading();
        alert("Houve um erro!: " + error)
    })
}

function checkIfPasswordsMatch(){
    const password = passwordInput.value;
    const confirmPassword = confirmPasswordInput.value;

    if(password == confirmPassword){
        console.log(password == confirmPassword)
        PasswordsNotMatchingError.style.display = "none"
    } else{
        PasswordsNotMatchingError.style.display = "block"
    }
}

