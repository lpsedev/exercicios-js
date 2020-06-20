console.log(typeof Object) // Criando uma funcão.
console.log(typeof new Object()) // Criando um objeto.

const Cliente = function(){}
console.log(typeof Cliente) // Criando uma função Cliente.
console.log(typeof new Cliente()) // Criando um Objeto.

class Produtos{} // ES 2015 (ES6) - Criando uma classe.
console.log(typeof Produtos) // Ainda assim é uma função.
console.log(typeof new Produtos()) // Aqui está instânciando um objeto.


/**** NUNCA SELECIONE UMA LINHA E MANDE EXECUTAR POIS SÓ SERÁ EXECUTADO A LINHA SELECIONADA.*/