 // Usamos fetch() para cargar el archivo JSON
 fetch('datos.json')  // Ruta del archivo JSON
.then(response => {
   if (!response.ok) {
     throw new Error('No se pudo cargar el archivo JSON');
   }
   return response.json();  // Convertir la respuesta en JSON
 }).then(data => {
   // Mostrar los datos en consola
   console.log(data);
 }).catch(error => {
   console.error('Error al cargar el archivo:', error);
 });