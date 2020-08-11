// function declaration ==>> PODE SER CHAMADA ANTES DA FUNÇÃO
console.log(soma(3, 5))
function soma(x, y) {
    return x + y
}

// function expression
const sub = function (x, y) {
    return x - y
}

// named function expression  ====>>>>> POUCO USADA
const mult = function mult(x, y){
    return x * y
}

