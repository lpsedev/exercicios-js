function Aula(nome, videoID) {
    this.nome = nome
    this.videoID = videoID
}

const aula1 = new Aula('Bem Vindo', 001)
const aula2 = new Aula('Até breve', 002)

console.log(aula1)
console.log(aula2)