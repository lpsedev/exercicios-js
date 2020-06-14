//Criando constantes:
const peso1 = 1.0
const peso2 = Number('2.0')

console.log(peso1, peso2)

console.log(Number.isInteger(peso1)) // isInterager verifica se o valor na variável é do tipo INTEIRO.
console.log(Number.isInteger(peso2))

const avalicao1 = 9.871
const avalicao2 = 7.871

const total = avalicao1 * peso1 + avalicao2 * peso2
const media = total / (peso1 + peso2)

console.log(media.toFixed(2)) // toFixed limita o números de casas decimáis
console.log(media.toString()) // toString modifica a media em texto mas não modifica o valor atribuido a ela.
console.log(media.toString(2)) // Inserindo o valor 2 dentro de toString ele retorna um valor binário.
console.log(typeof(media))
 