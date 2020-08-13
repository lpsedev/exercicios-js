const produtos = [
    {nome: 'Notebook', preco: 2499, fragil: false},
    {nome: 'iPad', preco: 4199, fragil: true},
    {nome: 'Copo de Vidro', preco: 12.90, fregil: true},
    {nome: 'COpo de Plástico', preco: 18.90, fragil: false}
]


const caro = produtos => produtos.preco >= 500
const fragil = produtos => produtos.fragil
console.log(produtos.filter(caro).filter(fragil))