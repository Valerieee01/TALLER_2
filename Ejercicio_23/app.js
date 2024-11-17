const leer  = async () => {
    try {
        return await fetch('./datos.json');
    } catch (error) {
        console.log(error);
        
    }
}
leer().then((respuesta) => {
    respuesta.json().then(datos => {
        console.log(datos[0].nombre);
        console.log(datos[0].apellido);
        console.log(datos[0].ciudad);
    })
})