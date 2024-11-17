const promesa = new Promise ((resolve, reject) => {
    setTimeout(() => {
        reject("Rechazada");
    }, 2000);
});

promesa.catch(error => {
   console.error(error);
});