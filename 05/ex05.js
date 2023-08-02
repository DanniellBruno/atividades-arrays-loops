const num = [2, 7, 11, 14, 21, 24, 37, 40]

let numSoma = 0

for(let i = 0; i < num.length; i++){
    if(num[i] % 2 === 0){
    numSoma += num[i]
    }
}

console.log("A soma dos números pares é: ", numSoma)