
let valor // não foi inicializada
console.log(valor)

valor = null // ausência de valor 'Não aponta para nenhum objeto na memória'.
console.log(valor) 
// console.log(valor.toString())// Irá retornar um erro!

const produto = {}
console.log(produto.preco)//Posso acessar o objeto produto, porém não consigo acessar o preco, pois nao foi definida.
console.log(produto) // Retorna objeto vazio {}
produto.preco = 3.30 // Produto recebe um atributo + valor;
console.log(produto)// Retorna a chave + produto.
produto.preco = undefined // Evite uma undefined para limpar um atributo. No lugar atribua 'null'.
console.log(!!produto.preco) // Retorna false
console.log(produto) // Retorna o atributo(preco): undefined.
delete produto.preco // deletando um atributo.
console.log(produto)
produto.preco = null // Significa que ainda não foi atribuido um valor.
console.log(!!produto.preco) // Saber se exite valor atribuido no atributo.
console.log(produto) 