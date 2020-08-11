const fabricantes = ['Mercesdes', 'Audi', 'BMW']

function imprimir(nome, indice) {
    console.log(`${indice + 1}. ${nome}`)
}

fabricantes.forEach(imprimir)

fabricantes.forEach(function(fabricante){
    console.log(fabricante)
})

fabricantes.forEach(fabricante1 => console.log(fabricante1))