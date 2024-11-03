// Se declara una variable i
let i  = 0;
// se inica una función setTimeout en la cual se muestre el alert en 100 ms
setTimeout(() => alert(i), 100);

// se crea un for que itere desde 0 hasta 10000000
for (let j = 0; j < 10000000; j++) {
    // en cada vuelta del ciclo se incrementa i
    i++
}

//RTA : A se ejecutara despues del bucle
//Se ejecuta primero por la forma en la que funciona JavaScript, ya que se define un setTimeout de 100ms que se ejecutara, 
//pero no en forma de cascada, si no 100ms despues de que se termien de ejecura el ciclo 
// El alert Muestra el incremento de i cuando ya paso por el bucle