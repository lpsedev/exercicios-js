//Armazenando função em uma variável.

const imprimirSoma = function (a, b){ // Uma constante recebendo uma função.
    console.log(a + b)

}

imprimirSoma(2, 3) // Imprimindo a variãvel.

//Armazendo uma função arrow  em uma variável.

const soma = (a, b) => { // Armazenando uma função arrow em uma variável.
    return a + b

}

console.log(soma(3, 5))

// Retorno implícito.

const subtracao = (a, b) => a - b // Só é válido quando a função só tem uma sentença de código.(arrow function)
console.log(subtracao(5, 2))

const imprime2 = a => console.log(a) // Redução de uma função Arrow com uma sentença de código.

imprime2('Olá mundo!') 