const leer  = async () => {
    try {
        return await fetch('./datos.json');
    } catch (error) {
        console.log(error);
    }
}
leer().then((respuesta) => {
     respuesta.json().then(data => {
        data.filter( elemento =>{
            if (elemento.nombre.startsWith("a")) {
                console.log(elemento.nombre);
            }
        })
     });
});





