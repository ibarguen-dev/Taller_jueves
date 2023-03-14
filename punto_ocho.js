let mapas = [{
    nombre: 'GJ 422 b*',
    latitud: 14.987,
    longitud: 89.782,
    nivelOxigeno: 1,
    volumenAgua:78
},
{
    nombre: 'GJ 3293 c*',
    latitud: 18.895,
    longitud: 54.325,
    nivelOxigeno: 20,
    volumenAgua:1
},
{
    nombre: 'GJ 667C f*',
    latitud: 14.987,
    longitud: 89.782,
    nivelOxigeno: 90,
    volumenAgua:7
},
{
    nombre: 'GJ 180 c*',
    latitud: 72.697,
    longitud: 60.472,
    nivelOxigeno: 50,
    volumenAgua:78
},
{
    nombre: 'Kepler-422 a*',
    latitud: 65.150,
    longitud: 45.123,
    nivelOxigeno: 15,
    volumenAgua:8
},
{
    nombre: 'Kepler 422 g*',
    latitud: 13.987,
    longitud: 89.789,
    nivelOxigeno: 1,
    volumenAgua:78
},
{
    nombre: 'GJK-epler b*',
    latitud: 12.987,
    longitud: 81.785,
    nivelOxigeno: 1,
    volumenAgua:78
},
{
    nombre: 'Kepler-422 c*',
    latitud: 12.987,
    longitud: 89.783,
    nivelOxigeno: -10,
    volumenAgua:78
},
{
    nombre: 'Jh 422 b*',
    latitud: 11.987,
    longitud: 89.722,
    nivelOxigeno: 5,
    volumenAgua:0
}]

let catidadAgua = 0,catidadOxigeno = 0

function getPlanets(planetas){
    planetas.forEach(planeta => {
        catidadAgua = catidadAgua + planeta.volumenAgua
        if ( 0>= planeta.volumenAgua || planeta.catidadAgua === null ){
            console.log(`el planeta no tiene agua, su nombre es: ${planeta.nombre}, su latitud es: ${planeta.latitud}, su longitud es: ${planeta.longitud}, su nivel de oxigeno es ${planeta.nivelOxigeno} su volumen de agua es ${planeta.volumenAgua}`)
        }
        catidadOxigeno = catidadOxigeno + planeta.nivelOxigeno
        if(planeta.nivelOxigeno<0){
            console.log(`el nivel de oxigen del planeta es negativo: ${planeta.nombre}, su latitud es: ${planeta.latitud}, su longitud es: ${planeta.longitud}, su nivel de oxigeno es ${planeta.nivelOxigeno} su volumen de agua es ${planeta.volumenAgua}`)
        }
    });
    console.log(`La cantidad de oxieno total es de ${catidadOxigeno *100}`)
}

getPlanets(mapas)