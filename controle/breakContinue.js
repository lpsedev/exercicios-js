const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for(let i in num){
    if(i == 5){
        break // Quando ele encontrar o i = 5 ele sai do laço(Só é usado no for, while, switch)
    }
    console.log(`${i} : ${num[i]}`)
}

for(let x in num){
    if(x == 5){
        // Age apenas (for e while)
        continue // Quando ele encontra a posição 5 ele nao imprime, 
        //logo pula para o próximo nesse caso é 6...
    }
    console.log(`${x} = ${num[x]}`)
}

//CRIAR RÓTULO ex: Externo
externo: // NUNCA USE ESSE MÉTODO.
for(a in num){
    for(b in num){
        if(a == 2 && b == 3) break externo // ele sai do primeiro For de dentro para fora.
        console.log(`${a} : ${b}`)
    }
}
console.log('FIM')