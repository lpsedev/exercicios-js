function teste1(num){
    if(num > 7)
        console.log(num)
    console.log('Final')
    // Retornará em erro, pois apartir de 2 sentença é OBRIGATÓRIO O USO DAS CHAVES {}
}

// teste1(6)
// teste1(8)

function teste2(num){
    if(num > 7)
        ; // Retorna pois é uma sentença vazia || Não usar ; com o bloco de estrutura de controle.
    {
        console.log(num) // aqui é outra sentença fora do IF
    }
}
teste2(6)
teste2(8)