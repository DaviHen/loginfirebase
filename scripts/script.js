(function(){
    "use strict";
    //index
    const formElement = document.getElementById("formElement");
    const loginBtn = document.getElementById("loginBtn");
    const errorMessage = document.getElementById("errorMessageP");
    const goToRegisterBtn = document.getElementById("goToRegisterBtn");


    formElement.addEventListener("submit", (e) => { e.preventDefault() });
    goToRegisterBtn.addEventListener("click", goToRegisterPage);
    loginBtn.addEventListener("click", login)

    function goToRegisterPage(){
        window.location.href = "pages/register.html"
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