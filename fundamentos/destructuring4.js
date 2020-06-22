function rand([min = 0, max = 1000]){ // Arrays[ ]
    if (min > max) [min, max] = [max, min] 
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

console.log(rand([50, 40])) // imprimindo min e max
console.log(rand([956])) // imprimindo o min
console.log(rand([, 56])) // Imprimindo o max
console.log(rand([])) // Imprime de 0 a 1000
console.log(rand()) // Gera um erro.