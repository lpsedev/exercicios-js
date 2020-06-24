function soBoaNoticias(notas){
    if( notas >= 7){
        console.log('Aprovada com ' + notas)
    }else{
        console.log('Reprovada com ' + notas)
    }
}

soBoaNoticias(8)
soBoaNoticias(6.1)

function seForVerdadeEuRespondo(falo){
    if(falo){
        console.log('Falo...')
    }
}

seForVerdadeEuRespondo(NaN) // false
seForVerdadeEuRespondo(undefined) // false
seForVerdadeEuRespondo(null) // false
seForVerdadeEuRespondo() // false
seForVerdadeEuRespondo('') // false
seForVerdadeEuRespondo(0) // false
seForVerdadeEuRespondo(-1) // true
seForVerdadeEuRespondo(' ') // true
seForVerdadeEuRespondo([]) // true
seForVerdadeEuRespondo('?')// true
seForVerdadeEuRespondo([1,2,3,'r']) // true 
seForVerdadeEuRespondo({}) // true