const readline =  require('readline');



let numeros = []

function getNumeros(min, max) {

    for(i = 0; i <50; i++){
        numeros.push (Math.floor(Math.random() * (min - max) + max))
    }
}

getNumeros()
console.log()


