const funcs = []

for(let i = 0; i < 10; i++){
    funcs.push(function(){
        console.log(i)
    })
}
funcs[2]()// Imprime o valor da posição estipulada, porq a função foi definida dentro de um escopo.
funcs[8]()