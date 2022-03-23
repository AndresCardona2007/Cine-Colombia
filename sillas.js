let boton=document.getElementById ("boton")
boton.addEventListener("click", recibirDatos)
function recibirDatos (event){
    event.preventDefault()

    let cantidad=document.getElementById("Cantidad").value


    let asiento=document.getElementById("asiento").value

    if(asiento=="preferencial"){
        alert("El valor a pagar es de $" + cantidad*30000)
    }
    else{
        alert("El valor a pagar es de $" + cantidad*18000)
    }
}
