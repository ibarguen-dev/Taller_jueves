let edades = [];
let codigos = [];

let edadesFechas = [];
let codigosFechas = [];

function generarCodigos() {
    const ramdom = "qwertyrtyuiopasdfghjklñzxcvbnm1234567890"
    let resultado = ""
    for (let i = 0; i < 5; i++){
        const IndexRamdom = Math.floor(Math.random() * ramdom.length)
        resultado += ramdom[IndexRamdom]
    }
    return resultado;
}


for (let i =0;i< 20; i++) {
    edades.push(Math.floor(Math.random() *100));
    codigos.push(generarCodigos())
}
let clonMayor = edades[0]
let clonRepetido = 0

for (let i =1; i< edades.length; i++) {
    if(edades[i]>clonMayor){
        clonMayor = edades[i]
    }else if(edades[i] === clonMayor){
        clonRepetido++;
    } 
}
console.log("Las edades aleatorias son: " + edades);
console.log("Los códigos aleatorios: " + codigos);
console.log("La edad mayor es " + clonMayor + " y se repite " + clonRepetido + " veces.");

const genararCodiigosFlecha =  () => {
    const ramdomFlecha = "1234567890qwertyuiopasdfghjklñzxcvbnm";
    let resultadoFlecha = "";
    for (let i = 0; i < 5; i++) {
        const IndexRamdomFlecha = Math.floor(Math.random() * ramdomFlecha.length)
        resultadoFlecha += ramdomFlecha[IndexRamdomFlecha]
    }
    return resultadoFlecha;
}

for (let i = 0;i<20; i++) {
    edadesFechas.push(Math.floor(Math.random() * 100))
    codigosFechas.push(genararCodiigosFlecha())
}
let clonMayorFlecha = edadesFechas[0]
let clonRepetidoFlecha = 0

for (let i = 0;i<edadesFechas.length;i++) {
    if(edadesFechas[i]>clonMayorFlecha){
        clonMayorFlecha = edadesFechas[i]
    }else if(edadesFechas[i] === clonMayorFlecha){
        clonRepetidoFlecha++
    }
}
console.log("Las edades aleatorias son: " + edadesFechas);
console.log("Los códigos aleatorios: " + codigosFechas);
console.log("La edad mayor es " + clonMayorFlecha + " y se repite " + clonRepetidoFlecha + " veces.");