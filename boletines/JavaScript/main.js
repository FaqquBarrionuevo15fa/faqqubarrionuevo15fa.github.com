//Obtener los elementos de la clase .close

let links = document.querySelectorAll(".close");

//Recorrerlos

links.forEach(function(link){

// Agregar un Evento click a cada uno de ellos
    link.addEventListener("click", function(ev){
        ev.preventDefault();
        let content = document.querySelector(".content");
        
        //Quitarle las clases de animacion que ya tiene
        content.classList.remove("animate__fadeInDown");
        content.classList.remove("animate__animated");

        //Agregar clases para animar su salida fadeOutUp
        content.classList.add("animate__fadeOutUp");
        content.classList.add("animate__animated");

        setTimeout(function(){
            location.href = "/";
        },600);
        
        return false;
    });
})

