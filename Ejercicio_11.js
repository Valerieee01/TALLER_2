let i = 0;
setTimeout(() => alert(i),100);
for (let j = 0; j < 100000000; j++) {
   i++; 
}

// Se ejecutara un alert donde muestra el valor de i que es 100000000