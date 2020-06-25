//Função em JS  é Fisrt-Class Object (Citizens)
//Higher-order function

// Crinando uma função de forma literal
//1º - pode ou não receber um parametro(EXEMPLO) 
function func() {} // É necessário as chaves para qualquer

// Jogando a função para dentro de uma variável.
const func1 = function (){} // Função anônima para dentro da variável.

// Amazenando em um arrays.
const array = [function (a, b) { return a + b}, func, func1] // array recebendo funcões e variáveis.
// Executando a função:
console.log(array[0](2, 3))

// Armazenando em um atributo de Objeto.
const obj = {}
obj.falar = function () { return 'Opá'}
console.log(obj.falar()) // Para o objeto invocar a função é necessário colocar os parêntesis.

// Passar uma função como parâmetro.
function run(fun){
    fun()
}
run (function(){console.log('Executando...')})

// Uma função pode retornar / conter uma função.
function soma(a, b){
    return function (c) {
        console.log(a + b + c)
    }
}
soma(2, 5)(6) // Soma função soma(a , b) + função (b)
// Posso armazená-la em uma constante:
const total = soma(2, 5) // A variável total recebe a função soma(a + b)
total(4) // total armazena a soma da função soma + o valor da função(c), totalizando 11.