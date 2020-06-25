function soma(){
    let soma = 0
    for(i in arguments){ // Arguments é um arrays
        soma += arguments[i]
    }
    return soma
}
console.log(soma(1, 4, 5,)) // Soma
console.log(soma(1.2, 7.8, 6.0, 4.1 )) // Soma os valores em cada posição
console.log(soma(1.2, 4.5, 'teste')) // Soma e concatena com a string 'teste
console.log(soma('a', 'b', 'c')) // Como a variável soma já havia recebido o valor 0 então ele concatena com 0.