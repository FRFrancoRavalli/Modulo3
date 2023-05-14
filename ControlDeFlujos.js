function viajar(destino) {
    if (destino==="Brasil") {
        console.log("Gire a la IZQUIERDA")
    }else if (destino==="Argentina"){
        console.log("Gire a la DERECHA")
    }else {
        console.log("NOS PERDIMOS")
    }
}

viajar("Argentina")
viajar("Brasil")
viajar("Chaco")

function puedeManejar (edad) {
    if (edad>= 18) {
    console.log(true)
   } else {
    console.log(false)
    }
   }
   
   puedeManejar(20) 