const _ = require('lodash');
const numbers = [1,2,3,4,5];
const resultados = _.takeWhile(numbers, (n) => n % 2 === 0);
console.log(resultados);
