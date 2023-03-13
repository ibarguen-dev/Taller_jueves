// Ejercio3, temperatura media de la luna de Endor

let  tpMedia

function calcularTemperature(tpMaxima, tpMinima) {
    tpMedia = (tpMaxima + tpMinima) / 2;
    return `Si la temperatura maxima es: ${tpMaxima} grados y la tempura minima: ${tpMinima} la temperatura de la luna de endor es de Endor es: ${tpMedia} grados`
}

console.log(calcularTemperature(12,89))