function criarProdutos(nome, preco, desconto = 0.1){
    return {
        nome,
        preco,
        desconto
    }
}

console.log(criarProdutos('Nootbook', 3500.50))
console.log(criarProdutos('Cama', 1500.50))