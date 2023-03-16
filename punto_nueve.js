class Padawan { 
    
    constructor(nombre, planeta, edad, estatura){ 

	this.nombre = nombre; 
	this.planeta = planeta; 
	this.edad = edad; 
	this.estatura = estatura; 
	
    }


    entrenamientoPadawan(){ 
        this.edad < 15 ? 
        console.log(`${this.nombre} debe aprender manejo de la fuerza.`) : 
         console.log(`${this.nombre} debe aprender manejo del sable de luz.`);
    }   
} 

//Declaramos los objetos

Alumnos = [
    {

        nombre: 'Amterasu',
        planeta: 'sounche',
        edad: 14,
        estatura: 1.40

    },
    {

        nombre: 'Susano',
        planeta: 'lotoRojo',
        edad: 12,
        estatura:1.20
    },
    {

        nombre: 'gotwn',
        planeta: 'vegita',
        edad: 16,
        estatura: 1.30
    },

]

Alumnos.forEach(Alumno => {
    const padawan = new Padawan(Alumno.nombre, Alumno.planeta, Alumno.edad, Alumno.estatura)
    padawan.entrenamientoPadawan()
});


