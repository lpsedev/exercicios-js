let isAtivo = false // Valor booleano falso
console.log(isAtivo)

isAtivo = true
console.log(isAtivo) // Valor booleano verdadeiro

isAtivo = 1
console.log(!!isAtivo)// O uso de dupla !! retorna valor verdadeiro.
console.log(!isAtivo)//O uso de uma ! retorna o valor falso.

//As situções que a será verdeira ou falsa:
console.log('....Situações verdadeiras')
console.log(!!3)//Números inteiros
console.log(!!-1)//Númeors inteiros negativos
console.log(!!' ')//Espço vazio
console.log(!!'texto')//espaço ocupado retorna true.
console.log(!![])//Vetor(array) vazio
console.log(!!{})//Objetos literais.
console.log(!!Infinity)//retorna vazio tb é verdadeiro.
console.log(!!(isAtivo = true))//Valores atribuidos na variável tb é verdadeiro.

console.log('...Os falsos')
console.log(!!0)// 0 retorna vazio.
console.log(!!'')//string vazia s/ espaço.
console.log(!!null)//null retorna falso.
console.log(!!NaN)//NaN retorna falso.
console.log(!!undefined)//undefined retorna falso.
console.log(!!(isAtivo = false))

console.log('...para finalizar')
console.log(!!(null || "" || NaN || ' '))// Or tend o uma condição verdadeira toda a frase é verdadeira.
console.log((null || "" || NaN || 3 ||'Opa'))//Retorna o único/primeiro valor verdadeiro da condição, nesse caso o OPA.

let nome = ''
console.log(nome || 'Desconhecido')// Nesse caso se ele não achar 
//nada na variável nome ele imprime a segunda condição(desconhecido)