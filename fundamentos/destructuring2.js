const [a] = [10] // Criando uma arrays de uma posição.
console.log(a)

const [n1, n2, , n4, n5, n7 = 20] = [1, 2, 12 ,3]// Atribuindo valores ao arrays.
console.log(n1,n2,n4,n5,n7) // Exibe apenas as variáveis que receberam valores.

const [,[, nota]] = [[, 8, 9], [9, 6, 8]]
console.log(nota)