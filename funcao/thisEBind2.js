function pessoa (){
    this.idade = 0

    const self = this // Artificio, uma forma de driblar o this levando ele a variar.
    setInterval(function (){ // Dispara uma outra função apartir de um intervalo que vc cria.
        self.idade++
        console.log(self.idade)

    }/*.bind(this)*/, 1000) // executando a função a cada 1 segundo.
    // bind(this) amarra a função para que seja executada.
}

new pessoa // Crtl + Alt + M para a execução.  / Crtl + Alt + N inicia a execução.

function aluno (){
    this.idade = 31

    const self = this

    setInterval(function(){
        self.idade += 3
        console.log(self.idade)
    }, 2000)
}

new aluno


function aluno (){
    this.idade = 31


    setInterval(function(){
        this.idade += 3
        console.log(this.idade)
    }.bind(this), 1000)
}
new aluno