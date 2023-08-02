const numeros = [1, 2, 7, 65, 44, 12, 30, 22]

let numPares = []
for (let i =0; i < numeros.length; i++){
  if (numeros[i] % 2 === 0){
    numPares.push(numeros[i])
  }
}

console.log(numPares)