
const obtenerDatos = async () => {
    try {
        const respuesta = await fetch('./datos.json');

        if (!respuesta.ok) {
            throw new Error('No se pudo cargar el archivo JSON');
        }
        const datos = await respuesta.json();

        return datos;
        
    } catch (error) {
        console.error('Hubo un error al cargar los datos:', error);
    }
    
} 

obtenerDatos().then((respuesta) => {
    const nombres = respuesta.map(item => item.nombre);
    console.log(nombres);

} )