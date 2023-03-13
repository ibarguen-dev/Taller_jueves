function recibirPalabra(){
	palabraNave = ["AFQ", "2554", "James Smith"];
	separarPalabra = palabraNave.splice(1);
	return "El nombre del conductor de la nave es: " + separarPalabra;
}

console.log(recibirPalabra());