const botones =document.querySelectorAll(".boton")
botones.onclick=()=>{
    document.querySelector(".GaleryZoom").style.display="flex";

}

const Exit =document.querySelectorAll(".GaleryZoom span")
Exit.onclick=()=>{
    document.querySelector(".GaleryZoom").style.display="none";

}