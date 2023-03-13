
let tierrax = 14
let tierray = 15 

function rutaComercial (tierrax, tierray){
    let naboox = 190
    let nabooy = 20
    let potencias = Math.pow((naboox - tierrax),2)*(Math.pow(nabooy - tierray),2)
    resultado = Math.sqrt(potencias)
    console.log(resultado)
}

rutaComercial(tierrax, tierray)