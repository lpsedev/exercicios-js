const notas = [2.5, 6.7, 8.9, 4.6, 3.0]

for(let i in notas){ // Percorre o arrays e retorna o índice.
    console.log(`Indice ${i} e notas ${notas[i]}`)
}

const pessoa = {
    Nome: 'Luiz Paulo',
    Endereco: 'Rua abc',
    numero: 17,
    bairro: "Castelo Branco"
}

for(let atributo in pessoa){ // Percorrendo os atributos do objeto.
    console.log(`${atributo}: ${pessoa[atributo]}`)
}

console.log(atributo) // Já não terei acesso ao atributo.