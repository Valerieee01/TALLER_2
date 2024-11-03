let array = [5,8,10,30];

let ejecucion = array.filter(function(numero) {
    return numero % 2 === 0;
});

console.log(ejecucion);
