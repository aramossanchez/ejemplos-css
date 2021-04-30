window.onclick = function(){

    /*CAMBIO DE COLOR DEL BOTON CON BORDES DESIGUALES*/
    
    if (document.getElementById("Amarillo").checked) {
        var clase = document.getElementById("botonBordeDesigual");
        clase.removeAttribute("class");
        clase.classList.add("amarillo");        
    }
    if (document.getElementById("Rojo").checked) {
        var clase = document.getElementById("botonBordeDesigual");
        clase.removeAttribute("class");
        clase.classList.add("rojo");           
    }
    if (document.getElementById("Verde").checked) {
        var clase = document.getElementById("botonBordeDesigual");
        clase.removeAttribute("class");
        clase.classList.add("verde");           
    }
    if (document.getElementById("Azul").checked) {
        var clase = document.getElementById("botonBordeDesigual");
        clase.removeAttribute("class");
        clase.classList.add("azul");           
    }
}


