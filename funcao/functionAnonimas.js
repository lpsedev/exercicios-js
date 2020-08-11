const soma = function (x, y) {
    return x + y
}

const imprimirResultado = function (a, b, operacao = soma) {
    console.log(operacao(a, b))
}

imprimirResultado(4, 5)
imprimirResultado(4, 5, soma)

imprimirResultado(4, 5, function (x, y) {
    return x - y
})

imprimirResultado(3, 4, (x, y ) => x * y)

const pessoa = {
    falar: function (){
        console.log('Opa')
    }
}

pessoa.falar()