//Criando uma função com parâmetros que retorna ou não.

function area(largura, altura){
    const area = altura * largura
    if (area > 20){
        console.log(`Valor acima de ${area}m2.`)
    }else{
        return area // Retorna o cálculo da área.

    }
}
area(3, 10)
console.log(area(2, 2)) // Retorna 4
console.log(area(2)) // Retorna NaN
console.log(area()) // Retorna NaN
console.log(area(5, 5)) // Retorna o valor de 25m2 e o valor undefined 