 // ---------- Solución 1 ------------- //
 // iniciamos declarando la funcion imprimirNumeros donde se va a realizar todas las operaciones, esta funcion recibe dos parametros 
 function imprimirNumeros(desde, hasta) { 
     // Realizamos una condición que me va a permitir verificar si el desde que es el inicial es mayor al hasta que es el final 
     if(desde < hasta){
         // declaramos una variable interval, a la cual le asignamos un setInterval en el cual vamos a asignarle los diferentes procesos
        let interval = setInterval (() => {
             // creamos una condición que verifique si desde es igual a hasta 
             if (desde === hasta) {
                 // si se cumple la condición debemos limpiar el intervalo
                 console.log(desde);
                 clearInterval(interval);
                 // si la condición inicial no se cumple pasamos al no de la condición
            }else {    
                 // si no se cumple la condición vamos a imprimir por consola el desde con su post incremento          
                 console.log(desde++);
             }
         // asignamos el tiempo en el que se van a ejecutar las tareas 
         },1000);
      
     } else {
         // si la condicion inicial no se cumple imprimimos por consola un aviso del porque no se ejecuta la función
         console.log("El valor inicial debe ser menor al final");     }
 } 
 
 // Llamamos a la función imprimirNumeros y le damos los parametros iniciales
 let a = parseInt(prompt("Ingrese el inicial: "));
 let b = parseInt(prompt("Ingrese el final: "));
 imprimirNumeros(a,b);


// ---------- Solución 2 ------------- //

// Se declara la funcion impresionNumeros
function impresionNumeros(desde, hasta) {
    // Verificamos que hasta sea mayor que desde
    if (desde < hasta) {
        for (let i = desde; i <= hasta; i++) {
            // Usamos setTimeout para imprimir el número después del retraso correspondiente
            setTimeout(() => {
                console.log(i);
            }, (i - desde) * 1000); // Cada número se imprime con un segundo de diferencia
        }
    } else {
        // si la condicion inicial no se cumple imprimimos por consola un aviso del porque no se ejecuta la función
        console.log("El valor inicial debe ser menor al final");
    }
}

// Llamamos a la función
impresionNumeros(5, 10);