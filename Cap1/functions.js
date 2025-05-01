function executar (funcao, a, b) {
    return funcao(a, b)
}

// Opção 1

function soma (a, b) {
    return a + b
}

function multiplicar (a, b) {
    return a * b
}

console.log(executar(soma, 1, 3))
console.log(executar(multiplicar, 1, 3))

// Opção 2 (Função anônima)

let resultado = executar(function (a, b) {return a + b}, 1, 3)

console.log("resultado", resultado)