// Função sem retorno.
//Não existe formalismo no JavaScript

function imprimirSoma(a, b){ // Função sem retorno.
    console.log(a + b)
}

imprimirSoma(2, 4) // Soma os 2 valores inserido na função
imprimirSoma(2) //Soma 2 + undefined = NaN , pois śo foi passado um valor.
imprimirSoma(2, 5, 6, 7, 9) // Soma os 2 primeiros números declarados e ignora os demais.
imprimirSoma() // Retorna NaN, pois não foi passado valores com paramêtro.

// Função com retorno.

function soma(a, b = 0){
    return a + b // Retorna a soma.
}

console.log(soma(2, 4))//Imprime a soma do retorno dos paramêtros.
console.log(soma(2))//Imprime 2 + b = 0 = 2.
console.log(soma())//Retorna NaN pois o primeiro paramêtro não foi passado.
