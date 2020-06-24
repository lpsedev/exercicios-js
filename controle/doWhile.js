function getInteiroAleatorioEntre(min, max){
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

opcao = 0

do{ //Significa FAÇA TUDO QUE ESTÁ DENTRO DAS CHAVES...
    opcao = getInteiroAleatorioEntre(-1, 10)
    console.log(`A opção escolhida foi ${opcao}.`)
}while(opcao != -1) // Enquanto for VERDADEIRA a condição entre PARÊNTESIS.
console.log('FIM')