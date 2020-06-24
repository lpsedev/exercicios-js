const imprimirResultado = function(nota){
    if(nota > 7){
        console.log('APROVADO')
    } else {
        console.log('REPROVADO')
    }
}

imprimirResultado(6) 
imprimirResultado(8)
imprimirResultado('Ola') // Cuidado pois ele fará a comparação string X nota e retornará false.