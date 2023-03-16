// Ejercio3, temperatura media de la luna de Endor



function calcularTemperature(tpMaxima, tpMinima) {
   let tpMedia = (tpMaxima + tpMinima) / 2;
    return `Si la temperatura maxima es: ${tpMaxima} grados, y la tempura minima: ${tpMinima} grados la temperatura media de la luna de endor es de Endor es de: ${tpMedia} grados`
}

console.log(calcularTemperature(12,89))

const calcularTemperatureFlecha = (tpMaximaFlecha,tpMinimaFlecha) =>{
    let tpMediaFlecha = (tpMaximaFlecha+tpMinimaFlecha) / 2
    return `Si la temperatura maxima es ${tpMaximaFlecha} grados y la temperatura minima es ${tpMinimaFlecha} grados la temperatura media de la luna de endor es de: ${tpMediaFlecha} grados` 
}

console.log(calcularTemperatureFlecha(97,87))


