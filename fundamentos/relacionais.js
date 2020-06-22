console.log('01: ', '1' == 1) //Igualdade SIM
console.log('02 :', '1' === 1)//Estritamente igual NÃO
console.log('03 :', 1 === 1)//Estritamente igual SIM
console.log('04 :', '3' != 3)//Diferente NÃO  
console.log('04 :', '3' !== 3)//Estritamente diferente  SIM

console.log('05 :', 3 < 2) //Estritamente MENOR QUE
console.log('06 :', 3 > 2)//Estritamente MAIOR QUE
console.log('07 :', 3 <= 2) //MENOR IGUAL
console.log('08 :', 3 >= 2)//MAIOR IGUAL

const d1 = new Date(0)
const d2 = new Date(0)
console.log('09 :', d1 === d2) // FALSE pois ele usa referência de mémoria - alocada em diferentes partes.
console.log('10 :', d1 == d2)
console.log('11 :', d1.getTime() == d2.getTime()) // TRUECompara o valor do milléssimo de segundos.
console.log('11 :', undefined == null) // TRUE
console.log('12 :', undefined === null)//FALSE pois não são estritamente iguais.