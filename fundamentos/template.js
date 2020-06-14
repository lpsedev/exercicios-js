
const nome = 'Paulo'
const concatenacao = 'Ola ' + nome + '!'//Forma tradicional de concatenar.
const template =  `
    Olá
    ${nome} !`//Uso de template para concatenar

    console.log(concatenacao, template)

// Expressões...
console.log(`1 + 1 = ${1 + 1}`) // O $ interpreta a expressão dentro da chave.

const up = texto => texto.toUpperCase()//Criei uma função 'up' com o parâmetro 'texto'
console.log(`Ei...${up('cuidado')}!`)//Chamei a função dentro de console.log