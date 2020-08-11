const pessoa = {
    saudacao: 'Bom dia!',
    falar(){ // No ECMA2015 foi permitido criar função dessa forma.(sem o function)
        console.log(this.saudacao)
    }
}
pessoa.falar() //Chamo a function apartir do obejto pessoa.

const falando = pessoa.falar // Não é possivel armazenar o tihs dentro de uam variável

falando() // Vai gerer um UNDEFINED

//Uma forma de resolver essa situação é chamando o obejto dentro do BIND
const falar = pessoa.falar.bind(pessoa)
falar() // O resultado da função bind foi armazenado na constante.


const homem = {
    genero: 'Masculino',
    cidade() {
        console.log(this.genero)
    }
}

const pessoas = homem.cidade.bind(homem)
pessoas()