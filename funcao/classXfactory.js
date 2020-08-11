class Pessoa {
    constructor(nome){
        this.nome = nome
    }
    falar() {
        console.log(`Meu nome é ${this.nome}`)
    }
}

const nome1 = new Pessoa('João')

nome1.falar()

const criarPessoa = nome => {
    return {
        falar: () => console.log(`Meu nome é ${nome}`)
    }
}

const nome2 = criarPessoa('Luiz')
nome2.falar()