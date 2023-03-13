let edades = [];
let codigos = [];

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
    console.log(generarCodigos())
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