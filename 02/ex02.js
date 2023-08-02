const numeros = [5, 2, 8, 10, 15, 20, 3]

let posicao = -1

for (let i = 0; i < numeros.length; i++) {
  if (numeros[i] === 10) {
    posicao = i
    break
  }
}

if (posicao !== -1) {
  console.log("O número 10 foi encontrado na posição: ", posicao)
} else {
  console.log("Não existe o número 10 no array.")
}