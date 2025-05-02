const numeros = [1,2,3,4]
const numeros2 = numeros.map((n) => n*2)

console.log(numeros2)

const numeros4 = numeros.filter((n) => n > 1)

console.log(numeros4)

// Aqui não vai percorrer o primeiro item do array
const numeros5 = numeros.reduce((ac, n) => ac + n*2)
// Aqui vai percorrer todos os itens do array
const numeros6 = numeros.reduce((ac, n) => ac + n*2, 0)

console.log('Reduce 1', numeros5)
console.log('Reduce 2', numeros6)