let dobro = function (a) {
    return 2 * a
}

dobro = (a) => 2 * a

console.log(dobro(2)) // Maneira reduzida da função (arrowFunction)

dobro = (a) => {
    return a * 3
}

console.log(dobro(Math.PI))