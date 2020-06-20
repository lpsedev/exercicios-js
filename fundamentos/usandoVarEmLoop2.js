
const funcs = [] // Criada uma função com arrays vazio.
for(var i = 0; i < 10; i++){ //
    funcs.push(function(){ /* Função anonima recebe os valores 
        passados pelo i que por sua vez e 
        jogada para dentro do arrys funcs*/
        console.log(i)
    })
}
funcs[2]()//Imprime o valor 10 - Bug no JavaScrip com VAR
funcs[8]()
