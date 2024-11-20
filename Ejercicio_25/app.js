const persona = {
    nombre: "Valerie",
    edad: 18,
    email : "valfa@gmail.com",
    fecha_nacimiento: "05-10-2006",
    contrasena: "Valpa996"
}

const manejador = {
    get(objetivo, propiedad) {
        console.log(`Obteniendo la propiedad: ${propiedad}`);
        return objetivo[propiedad];
    },
    set(objetivo, propiedad, valor) {
        if (Object.keys(objetivo).indexOf(propiedad) !== -1) {
            if ((propiedad === "nombre" || propiedad === "contrasena") && !/^[\D\s]+$/.test(valor)) {
                throw new Error("Valor no permitido, solo letras");
            }
            if (propiedad === "edad" && !/^[0-9]+$/.test(valor)) {
                throw new Error("Valor no permitido, solo numeros");
            }
            if (propiedad === "email" && !/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(valor)) {
                throw new Error("Valor no permitido, corre invalido");
            }

            if (propiedad === "fecha_nacimiento" && !/^([0-2][0-9]|3[0-1])(\/|-)(0[1-9]|1[0-2])\2(\d{4})$/.test(valor)) {
                throw new Error("Valor no permitido, fecha de nacimiento incorrecta");
            }
            objetivo[propiedad] = valor;
        } else {
            throw new Error("Valor no permitido");
        }
    }
}

const proxy  = new Proxy(persona, manejador);

proxy.nombre = "Valerie Afanador";
proxy.edad = 30;
proxy.email = "valerie.afa@gamil.com";
proxy.fecha_nacimiento = "06-10-2024";
proxy.contrasena = "valeñ";

console.log(proxy.nombre);

console.log(persona);