Array.prototype.map2 = function(callback) {
    const newArray = []
    for(let i = 0; i < this.length; i++){
        newArray .push(callback(this[i], i, this))
    }
    return newArray
}

const carrinho = [
    '{"nome": "borracha", "preco": 3.45}',
    '{"nome": "caderno", "preco": 13.90}',
    '{"nome": "kit de Lapis", "preco": 41.22}',
    '{"nome": "caneta", "preco": 7.50}'
]

// Retornar um arryz apenas com os preços

const paraObjeto = json => JSON.parse(json)
const apenasPreco = produto => produto.preco

const resultado = carrinho.map(paraObjeto).map2(apenasPreco)
console.log(resultado)