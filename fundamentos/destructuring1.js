// Recurso novo no ES2015

const pessoa = {
    nome: 'Luiz',
    idade: 38,
    endereco: {
        logradouro: 'Travessa Rita de Oliveria',
        numero: 17
    }
}

// Desestruturando o Objeto Pessoa.
const {nome, idade} = pessoa
console.log(nome, idade)

// Extraindo e modificando.
const {nome: n, idade: i} = pessoa
console.log(n, i) // Fio passado os valores de nome --> n e idade --> i.

// Caso queira acessar algum atributo que não exista, ele retorna UNDEFINED
const {sobrenome, bemHumorada = true} = pessoa
console.log(sobrenome, bemHumorada)

// Extraindo valores de dentro de uma chave:
const {endereco: {logradouro, numero, cep}} = pessoa // Ele olha para dentro no objeto e extrai as cheves.
console.log(logradouro, numero, cep)