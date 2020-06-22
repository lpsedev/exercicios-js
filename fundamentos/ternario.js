//    resutado se torna uma função por receber a FUNÇÃO 'nota' -> COMPARA NOTA SE >= 7.0 RETORNA APROVADO SENÃO REPROVADO
const resultado = nota => nota >= 7.0 ? 'APROVADO' : 'REPROVADO' // Operador Ternário '?'(3 condições)
    //Operador TERNÁRIO    1ª PARTE  OP   2ª PARTE    3ª PARTE
 
console.log(resultado(6.0))
console.log(resultado(7.0))

const status = nota >= 7.0 ? 'APROVADO' : 'REPROVADO'
console.log(status(4.0))