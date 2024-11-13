function impares(num) {
    return num % 2 !== 0;
}

let numeros = [5,3,7,4,1,9,5,3];
let resultado = numeros.some(impares);
console.log(resultado);
