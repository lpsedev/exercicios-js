function rand({min = 0, max = 1000}){ //Destructuring
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

const obj = {max: 50, min: 40}//Objeto
console.log(rand(obj))
console.log(rand({min: 955})) // Gerando apenas o valor mínino.
console.log(rand({max: 3})) // Gerando apenas o valor máximo
console.log(rand({})) // Gerando valores entre 0 e 1000;
console.log(rand()) // Gerará um erro. UNDEFINED OU NULL.
