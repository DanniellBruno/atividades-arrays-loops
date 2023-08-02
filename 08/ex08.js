const array = [1, 10, 15, 18, 22, 27, 33, 42, 51, 88]

const pares = []
const impares = []

for (let i = 0; i < array.length; i++){
    if(array[i] % 2 === 0){
        pares.push(array[i])
    } else {
        impares.push(array[i])
    }
}

console.log("Os números pares são:", pares)
console.log("Os números impares são:", impares)