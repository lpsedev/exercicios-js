const imprimeResultado = function (nota){
    switch (Math.floor(nota)){ // switch recebe a função Math.floot() arredondando a nota para baixo.

        case 10: case 9: case 8: case 7:
            console.log('Aprovado!') // É possível utilizar na msm linhas os case.
            break // Caso o break não existisse aqui, ele imprimiria na tela todos os case abaixo.
        case 6: case 5:
            console.log('Recuperação!')
            break
        case 4: case 3: case 2: case 1:
            console.log('Reprovado!')
            break
        default:
            console.log('Nota inválida!')
    
    }
}
imprimeResultado(3)
imprimeResultado(9)
imprimeResultado(5)
imprimeResultado(0.9) // Arredonda para 0
