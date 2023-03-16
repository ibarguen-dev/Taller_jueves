
let numeros = []
let numerosFlecha = []
function getNumeros(min, max) {

    for(i = 0; i <50; i++){
        numeros.push (Math.floor(Math.random() * (min - max) + max))
    }
}

getNumeros(-100,100)

let numeroMenor  = Math.abs(numeros[0])

for(i = 1; i < 49; i++){
    if ( numeroMenor > Math.abs(numeros[i])){
        numeroMenor = Math.abs(numeros[i])
    }
}
console.log(`El numero menor: ${numeroMenor}`)

const getNumerosFlecha = (minFlecha, maxFlecha) =>{
    
    for(i = 0; i < 50; i++){
        numerosFlecha.push(Math.floor(Math.random() * (maxFlecha - minFlecha) + maxFlecha));        
    }
}

let numeroMenorFlecha = Math.abs(numerosFlecha[0])

for(i= 1;i < 49; i++){
    
    if(numeroMenorFlecha > Math.abs(numerosFlecha[i])){
        numeroMenorFlecha = Math.abs(numerosFlecha[i])
    }
}
console.log(`El numero menor: ${numeroMenorFlecha}`)
