function recibirPalabra(){
	let palabraNave = "AFQ2554:James Smith";
	let separarPalabra = palabraNave.split(":");
	let nombre = separarPalabra[1] 
	return "El nombre del conductor de la nave es: " + nombre;
}
console.log(recibirPalabra());



const recibirPalabraFlecha = ()=> {
	let palabraNave = "AFT2564:James Smith";
	let separarPalabra = palabraNave.split(":");
	let nombre = separarPalabra[1] 
	return "El nombre del conductor de la nave es: " + nombre;
}

console.log(recibirPalabraFlecha)