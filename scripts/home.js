const logoutBtn = document.getElementById("logoutBtn");

logoutBtn.addEventListener("click", logout)

function logout(){
    firebase.auth().signOut().then( () => {
        window.location.href = "../index.html"
    }).catch(error => {
        alert("Não foi possível concluir a ação")
    })
}