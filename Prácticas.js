//FUNCIONES
function cuidadoConSusanita() {
    return "Susana";
}

function elnombreEsDeMiMamaes() {
    return "Mi mama se llama " + cuidadoConSusanita()
}

function funcioncompuestasinreturn(noReturn) {
    console.log(noReturn)
}

function funcioncompuestasinreturn2() {
    return "el valor es " + funcioncompuestasinreturn("un string")
}

function funcioncompuestasinreturn2() {
    return "el valor es" + cuidadoConMarta("marta")
}

//FUNCIONES CON NÚMEROS
function sumaTres(x) {
    console.log(x + 3);
}
sumaTres(5);
sumaTres(15);
sumaTres(2);

function sumaCuatro(x) {
    return x + 4;
}

sumaCuatro(2)

function sumaCinco() {
    return sumaCuatro(5) + 5
}

function sonIguales(x, y) {
    console.log(x === y)
}

sonIguales()

//CONTROL DE FLUJO
function viajecito(lugarcito) {
    if (lugarcito==="Brasil") {
        console.log ("Gire a la IZQUIERDA")
        console.log ("Disfrute manito")
    }else if (lugarcito==="Argentina") {
        console.log("Gire a la DERECHA")
        console.log("Disfrutá boludo")
    } else [
        console.log("NOS PERDIMOS")
    ]
}

viajecito("Argentina")
console.log("-----------------")
viajecito("Brasil")
viajecito("Catamarca")