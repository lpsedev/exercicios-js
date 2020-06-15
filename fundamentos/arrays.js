const valores = [1.14, 30.4, 2.4, 5.3]//Arrays(vetor) de 4 posições
console.log(valores[0])//Retorna o valor na posição 0
console.log(valores[5], valores[3])//Retorna undefinde na posição[5] e o valor da posição[3]= 5.3
valores[4] = 10.4//Adicoonando valor na posição 4 do arrays
console.log(valores)
valores[5] = 12.2//Adicionando valores no indice 10
console.log(valores)//Retornaria os valores preenchidos, porém com um aviso que da posição 5 ate a 9 está vazio.
console.log(valores.length)//Faz a contagem de quantos caracteres.
valores.push({id: 4}, 'Ola', false, null)//O arrays você pode misturar os tupos de variavéis, porém não é uma boa prática.
console.log(valores)
console.log(valores.pop())//Exclui o último valores do arrays.
delete valores[5]//Deleta o valor da posição escolhida.
console.log(valores)
console.log(typeof(valores))//Arrays é do tipo OBJETO.
