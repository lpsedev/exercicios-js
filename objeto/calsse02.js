class Avo {
    constructor(sobrenome) {
        this.sobrenome = sobrenome
    }
}

class pai extends Avo {
    constructor(sobrenome, profissao = 'Porfessor') {
        super(sobrenome)
        this.profissao = profissao
    }
}

class filho extends pai {
    constructor() {
        super('Silva')
    }
}

const Filho = new filho
console.log(Filho)