console.log('a = ', a)// Há hoisting em LET
var a = 2 // Variável será içada ou seja jogada para cima do primeiro console.log mas será UNDEFINED.
console.log('a = ', a)

function teste(){
    console.log('a = ', a) 
    var a = 2 // Variável será içada ou seja jogada para cima do primeiro console.log mas será UNDEFINED.
    console.log('a = ', a)
}
teste() // Ocorreria o msm problema acima.


// console.log('b = ', b)// não há hoisting em LET
let b = 3
console.log('b = ', b) // Nessa caso não a içamento em LET, ocorre um erro.