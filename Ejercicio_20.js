
const verificarPositivos = async (num) => {
    return await num >= 0;
}

const recorreArray = async (...array) => {
    for (let i = 0; i < array.length; i++) {
        let rta = await verificarPositivos(array[i]); 
        console.log(rta);
    }
}

let array = [1, -2, 6, 5];
recorreArray(...array); 