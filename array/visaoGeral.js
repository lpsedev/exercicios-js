let aprovados = new Array('Bia', 'Carlos', 'Ana')

aprovados = ['André', 'Carlos', 'José']

aprovados[3] = 'Paulo'

console.log(aprovados)
aprovados.push('Maria')
console.log(aprovados)
aprovados.sort() // Orena a lista
console.log(aprovados)
delete aprovados[2]
console.log(aprovados)

aprovados.splice(1, 3) // Excluindo elementos
console.log(aprovados)

aprovados.splice(1, 0, 'Carlão', 'João') // Não exclui nada, e adiciona na posição 1
console.log(aprovados)

console.log(aprovados.length)