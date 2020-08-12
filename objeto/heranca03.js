const pai = { nome: 'Pedro', corCabelo: 'preto'}

const filha1 = Object.create(pai)
filha1.nome = 'Ana'

console.log(filha1.corCabelo)

const filha2 = Object.create(pai, {
    nome: {value: 'Bia', writable: false, enumerable: true},
    idade: {value: 32, writable: false, enumerable: true}
})

console.log(`${filha2.nome} tem cabelo ${filha2.corCabelo} com a idade de ${filha2.idade} anos`)
console.log(Object.keys(filha1), Object.keys(filha2))

for(let key in filha2) {
    filha2.hasOwnProperty(key) ?
    console.log(key) : console.log(`Por herançã: ${key}`)
}