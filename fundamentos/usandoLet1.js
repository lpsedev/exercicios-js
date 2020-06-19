let numero = 1
{
    let numero = 2 /* A precedência é a variável que está dentro do escopo. 
    Caso não ache ele procura fora do escopo.*/
    console.log('Dentro: ', numero)
}
console.log('Fora: ', numero)

/*  Palavra reservada VAR tem valor global e valor de função.
    Palavra reservada LET tem valor global, função e escopo de bloco. */