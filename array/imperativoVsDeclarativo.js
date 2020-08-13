const alunos = [
    {nome: 'João', nota: 7.9},
    {nome: 'Maria', nota: 9.2}
]

//Imperativa

let total = 0
for(let i = 0; i < alunos.length; i++){
    total += alunos[i].nota
}
console.log(total / alunos.length)

// Declarativa
const getNota = (aluno) => aluno.nota
const soma = (soma, atual) => soma + atual

const notaTotal = alunos.map(getNota).reduce(soma)
console.log(notaTotal / alunos.length)
