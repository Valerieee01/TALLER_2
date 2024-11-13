const promesa_1 = new Promise ((resolve) => {
    setTimeout(() => {
        resolve(1);
    },1000);
})

const promesa_2 = new Promise ((resolve) => {
    setTimeout(() => {
        resolve(2);
    },2000);
});
const promesa_3 = new Promise ((resolve) => {
    setTimeout(() => {
        resolve(3);
    },3000);
})


promesa_1.then((resultado1) => {
        return promesa_2.then((resultado2) => {
            return promesa_3.then ((resultado3) => {
                return resultado1 + resultado2 + resultado3
            })
        });
    }).then((resultadoFinal) => {
        console.log(resultadoFinal)
    });
// promesa_2.then(resultado => {
//     console.log("Promesa 2 Ejecutada");
    
// })


// promesa_3.then(resultado => {
//     console.log("Promesa 3 Ejecutada"); 
// })