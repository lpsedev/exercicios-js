//Acessando a NOTAÇÃO PONTO.

console.log(typeof console) // Console é um tipo de objeto dentro de JS.
console.log(Math.ceil(6.1))// Usando a função Math.ceil ele arredonda para +.

const obj1 = {}
obj1.nome = 'Luiz' // com o PONTO ele cria atributos dinamicamente.
// --> Essa lhe dá maior flaxibilidade  obj1['nome'] = 'Lycia'   // Essa é a segunda forma de criar atributos dinamicamente e subscreve a anterior.

console.log(obj1.nome)

function Obj(nome){
    this.nome = nome // È uma forma de vc dizer que essá função se tornará publica. Ela pode ser vista fora
    // da função Obj.
    this.exec = function(){ // Apartir do this vc pode criar funções e objetos. 
        console.log('EXEC...')
    }
}

const obj2 = new Obj('Cadeira')
const obj3 = new Obj('Mesa')

console.log(obj2.nome) // A notacao PONTO te dá acesso a função Obj.
console.log(obj3.nome)
obj3.exec()// Chamando a função de dentro da classe Obj.
obj2.exec()
//A funçao ponto te dá acesso aos atributos que estão dentro do objeto.
