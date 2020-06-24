function getInteiroAleatorioEntre(min, max){ // Criou uma function
    const valor = Math.random() * (max - min) + min  // Criou uma constante para receber o resutado do parâmetros.
    return Math.floor(valor) // Retorna o rsultado do parâmetro.
}

let opcao = 0

while(opcao != -1){
    opcao = getInteiroAleatorioEntre(-1, 10)
    console.log(`A opcao escolhida foi ${opcao}.`)
}
console.log('Até a próxima!')
