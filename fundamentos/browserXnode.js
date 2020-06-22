let a = 3

/* THIS == WINDOWS NO BROWSER*/
console.log(this.a) // Retorna UNDEFINED
console.log(global.a) // Retorna UNDEFINED

global.b = 123 // Parece encontrar o valor declaramos na variável global.
console.log(global.b)
this.c = 456 // Parece encontrar o valor declaramos na variável this.
console.log(this.c)

console.log(a) // Retorna o valor de a
console.log(module.exports.c) // Aqui module.exports ele exporta o valor c de this.
console.log(module.exports === this) // module.exports é estritamente igual a this

this.d = 234
this.e = false
this.f = 'testo'

console.log(module.exports) // Você exporta para fora tudo que está em THIS
// É O MSM QUE FAZER ISSO:
module.exports = {d: 234, e: false, f: 'testo'}

abc = 23445 // não faça isso NUNCAAAAAAAAAAAA.
// sem VAR e sem LET vc cria uma variável global no NODE
console.log(global.abc)

/* NO NODE CADA ARQUIVO É UM MÓDULO */