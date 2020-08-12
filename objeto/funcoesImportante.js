const pessoa = {
    nome: 'Receba',
    idade: 12,
    peso: 13
}

// Exibindo valores
console.log(Object.keys(pessoa))
console.log(Object.values(pessoa))
console.log(Object.entries(pessoa)) // retorna um array com keys/values

Object.entries(pessoa).forEach(e => {// Formas de percorrer o array
    console.log(`${e[0]}: ${e[1]}`)
})

Object.entries(pessoa).forEach(([chave, valor]) => {// Formas de percorrer o array
    console.log(`${chave}: ${valor}`)
})

Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable: true,
    writable: false, // (false) Não permite modificar os valores
    value: '01/01/2019'
})
pessoa.dataNascimento = '02/01/2019'
console.log(pessoa.dataNascimento)
console.log(Object.keys(pessoa))

// Object.assign (ECMAScript 2015)
const dest ={ a: 1}
const o1 = { b:22}
const o2 = {c: 3, a: 4}

const obj = Object.assign(dest, o1, o2)
console.log(dest)
console.log(obj)