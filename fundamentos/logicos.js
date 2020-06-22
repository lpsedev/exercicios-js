function compras(trabalho1, trabalho2) { // Criando uma função
    const comprarSorvete = trabalho1 || trabalho2 /* Operador lógico OU (Se o primeiro for verdadeiro não serã necessário
    observar o trabalho2)*/
    const comprarTv50 = trabalho1 && trabalho2 /* Operador Lógico E (Se o primeiro for verdadeiro
    é tb necessário observar o trabalho2)*/
    //ESSA É UMA DAS OPÇÕES
    const comprarTv32 = !!(trabalho1 ^ trabalho2)// Operador OU EXCLUSIVO
    const comprarTv32p = trabalho1 != trabalho2 // Operador OU EXCLUSIVO
    const manterSaudavel = !comprarSorvete// ! é o operador de NEGAÇÃO -- Operador UNÁRIO.

    //Recurso novo no ES2015 você cria objetos inserindo os atributos sem chamar os valores.
    return {comprarSorvete, comprarTv50, comprarTv32, comprarTv32, manterSaudavel} // Crio um objeto para retornar os valores.
}

console.log(compras(true, true))
console.log(compras(true, false))
console.log(compras(false, true))
console.log(compras(false, false))
