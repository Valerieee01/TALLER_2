const promesa_1 = new Promise ((resolve, reject) => {
    setTimeout(() => {
        resolve(1);
    },1000);
})

const promesa_2 = new Promise ((resolve, reject) => {
    setTimeout(() => {
        reject(2);
    },2000);
});
const promesa_3 = new Promise ((resolve, reject) => {
    setTimeout(() => {
        resolve(3);
    },3000);
})

Promise.allSettled([promesa_1,promesa_2,promesa_3]).then(menssage => {
    console.log(menssage); 
})