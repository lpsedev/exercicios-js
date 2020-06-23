Number.prototype.entre = function (inicio, fim){
    return this >= inicio && this <= fim
}

const imprimiResultado = function (nota){
    if(nota.entre(9, 10)){  // Chama a função ENTRE  e faz a comparação.
        console.log('Quadro de Honra')
    } else if (nota.entre(7, 8.99)){ // Condição encadeada.
        console.log('Aprovado!')
    } else if (nota.entre(4, 6.99)){
        console.log('Recuperação')
    } else if (nota.entre(0 , 3.99)){
        console.log('Reprovado!')
    } else {
        console.log('Nota inválida!!!')
    }

    console.log('FIM')
}

imprimiResultado(6)
imprimiResultado(3)
imprimiResultado(11)
imprimiResultado(8.98)
imprimiResultado(10)