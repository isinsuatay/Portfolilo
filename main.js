let buyutec = document.querySelector("#aramaKismi");
let acilacak = document.querySelector("#frameDiv");
let icon = document.querySelector(".search");

acilacak.style.display = "none" 

icon.addEventListener("click",function(){

    if(acilacak.style.display === "none"){
        acilacak.style.display = "block"
        icon.classList.add("moveSearch")
    }else{
        acilacak.style.display = "none"
        icon.classList.remove("moveSearch")
    }
})