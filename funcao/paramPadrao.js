// 1ª Estratégia para gerar valor padrão
function soma(a, b, c){
    a = a || 1
    b = b || 1
    c = c || 1

    return a + b + c
}

console.log(soma(), soma(3), soma(1, 2 ,3), soma(0, 0, 0)) // Ao chamar essa última função haverá uma substituição
// dos por 1 retornando o valor 3.

function soma1(a, b, c){
    a = a !== undefined ? a : 1
    b = 1 in arguments ? b : 1
    c = isNaN(c) ? 1 : c // A mais segura para ser utilizada.
    return a + b + c
}

console.log(soma1(), soma1(2), soma1(1, 2 ,3), soma1(0, 0, 0)) // A última retorna 0


// Valor padrão do ES2015
function soma2(a = 1, b = 2, c = 3){ // Essa é a nova forma de atribuir valor no parâmetro da função.
    return a + b + c
}
console.log(soma2(), soma2(4), soma2(1, 2 ,3), soma2(0, 0, 0))