function sumaTres(x) {
    console.log(x + 3);
}
sumaTres(5);

//Primera manera
function sumaTres(x) {
    return sumaTres + 3;
}

//Segunda Manera
var sumaTres = function (x) {
    return x + 3
};

//Tercera Manera
var sumaTres = (x) => {
    return x + 3;
}
