let contenedor=document.getElementById("contenedor")
let bandera=true
contenedor.addEventListener("click", function(event){
    if(bandera==true){ 
        if(event.target.classList.contains("w-100")){
            event.target.src="img/sillaroja.png"
            bandera=false
        }


    }else{
        if(event.target.classList.contains("w-100")){
            event.target.src="img/cinema-seat (1).png"
            bandera=true
        }

    }
    
})
