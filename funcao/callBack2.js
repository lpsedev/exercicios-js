const notas = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0]

//Sem callback

let notasBaixas = []
for(let i in notas){
    if(notas[i] < 7)
        notasBaixas.push(notas[i])
    
}
console.log(notasBaixas)


// com callback

notasBaixas1 = notas.filter(function(nota) {
    return nota < 7
})
console.log(notasBaixas1)

const notasBaixas3 = notas.filter(nota => nota < 7) // arrow function
console.log(notasBaixas3)

// mais reduzidas
const notasMenorQue7 = nota => nota < 7
const notasBaixa4 = notas.filter(notasMenorQue7)
console.log(notasBaixa4)