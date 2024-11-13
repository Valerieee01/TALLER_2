const promesa = new Promise ((resolve) => {
    setTimeout(() => {
        resolve()
    },3000)
})

promesa.then(() => {
    console.log("Promesa resuleta");
});