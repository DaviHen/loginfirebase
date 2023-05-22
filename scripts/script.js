(function(){
    "use strict";
    //index
    const formElement = document.getElementById("formElement");
    const loginBtn = document.getElementById("loginBtn");
    const errorMessage = document.getElementById("errorMessageP");

    formElement.addEventListener("submit", (e) => { e.preventDefault() });

    //forgotPassword
    const recoverPasswordBtn = document.getElementById("recoverPassword");
    const recoverPasswordInput = document.getElementById("recoverPasswordInput");
    const emailNotFoundMessage = document.getElementById("emailNotFound");

    loginBtn.addEventListener("click", login)
    recoverPasswordBtn.addEventListener("click", recoverPassword)


    function recoverPassword(){
        showLoading();

        firebase.auth().sendPasswordResetEmail(recoverPasswordInput.value).then( () => {
            hideLoading();
            alert("Email enviado com sucesso")
        }).catch(error => {
            emailNotFoundMessage.style.display = "block"
        });
    }

    function login(){
        showLoading();
        const emailInput = document.getElementById("emailInput").value;
        const passwordInput = document.getElementById("passwordInput").value;

        firebase.auth().signInWithEmailAndPassword(emailInput, passwordInput).then( res => {
            hideLoading();
            window.location.href= "pages/home.html"
        }).catch( error => {
            hideLoading();
            errorMessage.style.display = "block"
            console.log("erro", error)
        } )
    }
})()