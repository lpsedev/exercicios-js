// Par Chave/Valor

// UMA MSM CONSTANTE PODE SER USADA E MODIFICADA PORÉM EM CONTEXTOS DIFERENTES.

const saudacao = 'Olá' // Contexto léxico

function exec(){
    const saudacao = 'fala'
    return saudacao
}

// Objetos são grupos aninhados de chaves/valor.
const cliente = {
    nome: 'Pedro',
    idade: 32,
    paso: 90,
    endereco: {
        logradouro: 'Travessa Rita de  Oliveira',
        nuemro: 17

    }
}
// Impressões em contextos diferentes.
console.log(saudacao)
console.log(exec())
console.log(cliente)