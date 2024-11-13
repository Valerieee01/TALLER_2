const EsNumero = (num) => (num) % 2 === 0;

let numeros = [1, 2 , 3, 4, 5];

let resultado = numeros.every(EsNumero);
console.log(resultado);
