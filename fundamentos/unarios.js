let num1 = 1
let num2 = 2

//Tanto faz usar o operador antes ou depois da variável.
num1++ // Operador pós fixado. ---> Acrescenta uma unidade 
console.log(num1)

--num1 // Operador pré fixado ---> subtrai uma unidade. OS PRÉ-FIXADOS TEM PRECEDÊNCIAS
console.log(num1)

console.log(++num1 === num2--) /*Retorna TRUE porq primeiro o num1 se 
torna 2 e o num2 cśo decrementa depois de comparado.*/

// OBSERVAÇÃO DEIXAR O CÓDIGO SIMPLES É ALGO MUITO DIFÍCIL.