function tratarErroElancar(erro){
    //throw new Error('Estamos resolvendo o problema.')
    //throw 'MENSAGEM' // JOGA NA TELA O QUE VIER DEPOIS DELE.
    throw{ // throw significa LANÇAR
        nome: erro.name,
        id: erro.id,
        msg: erro.msg,
        date: new Date
    }
}

function imprimirGritos(obj){
    try{ // Siginifica TENTA ISSO: potencialmente pode gerar algun tipo de erro.
       console.log(obj.name.toUpperCase() + '!!!!')
    } catch (e){ // Capta o erro e joga en outra função.
        tratarErroElancar(e)
    }finally{ // Será executado msm que ocorra erro ou não
        console.log('final')
    }
}

const obj = {nome: 'Luiz'}
imprimirGritos(obj)