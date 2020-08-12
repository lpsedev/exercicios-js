const piloto = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
piloto.pop() // REMOVE O ULTIMO ELEMENTO DO ARRAY(MASSA)

piloto.push('Verstappen') // ADICIONA NOVO ELEMENTO NO ARRAY.

piloto.shift() // remove o primeiro!
console.log(piloto)

piloto.unshift('Hamilton') // Insere na primeira posição
console.log(piloto)

// splice pode adicionar ou remover elementos

// adicionar
piloto.splice(2, 0, 'Bottas', 'Massa')
console.log(piloto)

// remover
piloto.splice(3, 1)
console.log(piloto)

// slice ==>> retorna um novo array
const algunsPilotos1 = piloto.slice(2)
console.log(algunsPilotos1)

const algunsPilotos2 = piloto.slice(1, 4) // novo array do 1 ao 3(4 não entra)
console.log(algunsPilotos2)