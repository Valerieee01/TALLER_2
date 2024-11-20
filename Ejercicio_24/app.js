// Definición de un objeto 'persona' con las propiedades 'nombre' y 'edad'
const persona = {
    nombre: "Valerie",  // Propiedad 'nombre' con valor "Valerie"
    edad: 18            // Propiedad 'edad' con valor 18
}

// Definición de un objeto 'manejador' que tiene métodos para interceptar operaciones sobre el objeto proxy
const manejador = {
    // Método 'get' que se activa cuando se accede a una propiedad del objeto a través del proxy
    get(objetivo, propiedad) {
        console.log(`Obteniendo la propiedad: ${propiedad}`);  // Imprime un mensaje en consola indicando qué propiedad se está accediendo
        return objetivo[propiedad];  // Devuelve el valor de la propiedad accedida en el objeto original 'objetivo'
    },
    
    // Método 'set' que se activa cuando se intenta modificar una propiedad del objeto a través del proxy
    set(objetivo, propiedad, valor) {
        // Verifica si la propiedad que se está modificando ya existe en el objeto original 'objetivo'
        if (Object.keys(objetivo).indexOf(propiedad) !== -1) {
            // Si la propiedad es 'nombre', verifica que el valor solo contenga letras y espacios
            if (propiedad === "nombre" && !/^[a-zA-Z\s]+$/.test(valor)) {
                // Si el valor no contiene solo letras y espacios, lanza un error
                throw new Error("Valor no permitido, solo letras");
            }

            if (propiedad === "edad" && !/^[0-9]+$/.test(valor)) {
                // Si el valor no contiene solo numeros, lanza un error
                throw new Error("Valor no permitido, solo numeros");
            }
            objetivo[propiedad] = valor;  // Si la propiedad es válida, asigna el nuevo valor a la propiedad en el objeto original
        } else {
            // Si la propiedad no existe en el objeto, lanza un error
            throw new Error("Valor no permitido");
        }
    }
}

// Creación de un 'proxy' que se utiliza para interceptar y controlar las interacciones con el objeto 'persona' 
const proxy  = new Proxy(persona, manejador);

// Intento de agregar una propiedad 'apellido' al objeto proxy (esto debería fallar, ya que 'apellido' no es una propiedad válida en 'persona')
proxy.nombre = "Valerie Afanador";  // Aquí se lanza un error ya que 'apellido' no está permitido

// Acceso a la propiedad 'nombre' del objeto 'proxy', esto ejecuta el método 'get' del manejador
console.log(proxy.nombre);  // Imprime "Obteniendo la propiedad: nombre" y luego el valor de 'nombre' que es "Valerie"

// Imprime el objeto 'persona' original para verificar si se ha modificado de alguna manera
console.log(persona);  // Muestra el objeto 'persona', con la propiedad 'nombre' que sigue siendo "Valerie" y 'edad' igual a 18

