// Função construtora
function Pessoa(nome) {
        this.nome = nome
    this.falar = function () {
        console.log(`Meu nome é ${this.nome}`)
    }
}     
const nome = new Pessoa('João')
nome.falar()

// Factory
const criarPessoa = nome => {
    return {
        falar: () => console.log(`Meu nome é ${nome}`)
    }
}
const nome2 = criarPessoa('Luiz')
nome2.falar()
