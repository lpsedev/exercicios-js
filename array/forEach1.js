const aprovados = ['Agatha', 'Ana', 'Daniel', 'Raquel']

aprovados.forEach(function(nome, indice){
    console.log(`${indice + 1}) ${nome}`)
})

aprovados.forEach((nome, indice) => (console.log(indice + 1, nome)))

const exibirAprovados = aprovados => console.log(aprovados)

aprovados.forEach(exibirAprovados)

const dados = [
    nome = 'Ana',
    idade = 23,
    cidade = 'Salvador',
    estado = 'Bahia'
]

const pessoa = dados => console.log(dados)
dados.forEach(pessoa)