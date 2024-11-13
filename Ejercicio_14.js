async function op() {
    await new Promise (resolve => setTimeout(resolve, 1000));
    return "Operacion Completada"
}

op().then(resultado => {
    console.log(resultado);  
})