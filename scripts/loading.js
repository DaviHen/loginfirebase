function showLoading(){
    let loaderContainer = document.createElement("div");
    loaderContainer.setAttribute("id", "loaderContainer")

    let ldsRing = document.createElement("div");
    ldsRing.classList.add("lds-ring");
    loaderContainer.appendChild(ldsRing);

    let div1 = document.createElement("div");
    let div2 = document.createElement("div");
    let div3 = document.createElement("div");
    let div4 = document.createElement("div");

    ldsRing.appendChild(div1, div2, div3, div4);

    document.body.appendChild(loaderContainer)
}

function hideLoading(){
    let loader = document.getElementById("loaderContainer")
    loader.remove();
}
