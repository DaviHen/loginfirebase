const formElement = document.getElementById("formElement");
formElement.addEventListener("submit", (e) => { e.preventDefault() });

const recoverPasswordBtn = document.getElementById("recoverPassword");
recoverPasswordBtn.addEventListener("click", sendEmailToRecoverPassword);

const emailNotFoundMessage = document.getElementById("emailNotFound");
const emailInputValue = document.getElementById("recoverPasswordInput");

function sendEmailToRecoverPassword(){
    showLoading();

    firebase.auth().sendPasswordResetEmail(emailInputValue.value).then( res => {
        hideLoading();
        alert("Email enviado com sucesso!")
    }).catch(error => {
        hideLoading();
        emailNotFoundMessage.style.display = "block";
    })
}