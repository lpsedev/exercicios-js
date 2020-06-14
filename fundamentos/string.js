const escola = 'Cha3r'

console.log(escola.charAt(4)) // (charAt(4))Retorna a 4ª posição da palavra Cha3r
console.log(escola.charAt(5)) // Retorna vazio, pois não existe valor na posição 5.
console.log(escola.charCodeAt(3)) //Retorna o valor na tabela ASCII.
console.log(escola.indexOf('r')) //Retorna o índice ou a posição do caractere.
console.log(escola.substring(1)) //Retorna caracteres apartir no indice estipulado.
console.log(escola.substring(0, 3)) //Retorna do índice 0 até o 2 pois a 3ª posição ele não imprime.
console.log('Escola '.concat(escola).concat('!')) //Concatena as strings
console.log('Escola ' + escola + '!') //Concatena as strings utilizando osinal de '+'.
console.log(escola.replace(3, 'e')) //Substitui um valor por outro.
console.log(escola.replace(/\d/, 'e'))//Substitui todos os digitos númericos pela letra 'e'.
console.log(escola.replace(/\w/g, 'e'))//Substitui todas a letras e digitos pela letra 'e', a letra 'g' é uma flag global.
console.log('Ana, Maria, Paulo, José'.split(','))//Cria um vetor com string separado ppelo caractere estipulado, nesse caso ','.
console.log('Ana, Maria, Paulo, José'.split(/,/))//Cria um vetor com string separado ppelo caractere estipulado, nesse caso ','.
