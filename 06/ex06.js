const num = [0, 1, 11, 25, 29, 33, 65, 512]

let numMaior = num[0]

for (let i = 0; i < num.length; i++){
    if(num[i] > numMaior){
        numMaior = num[i]
    }
}

console.log("O número maior é:", numMaior)