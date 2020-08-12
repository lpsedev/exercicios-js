// Object.preventExtensions
// Premite exculir porém não permite adicionar keys/valeus
const Produto = Object.preventExtensions({
    nome: 'Luiz', preco: 50.00, tag: 'Promoção'
})
console.log('Extensiível: ', Object.isExtensible(Produto))
Produto.nome = 'Borracha'
Produto.descricao = 'Borracha escolar'
delete Produto.tag
console.log(Produto)

// Object.seal = SELAR ===>>> NÃO PERMITE ADICIONAR E NEM EXCLUIR
const pessoa = {nome: 'Juliana', idade: 30}
Object.seal(pessoa)
console.log('Selado? ', Object.isSealed(pessoa))
pessoa.sobrenome = 'Evans'
pessoa.idade = 42
delete pessoa.nome
console.log(pessoa)

// Object.freeze = selado + valores constantes
const pessoa1 = {nome: 'Carlos', idade: 30}
Object.freeze(pessoa1)
console.log('Congelado? ', Object.isFrozen(pessoa1))
pessoa1.sobrenome = 'Evans'
pessoa.idade = 42
delete pessoa.nome
console.log(pessoa1)