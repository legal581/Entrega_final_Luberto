//Declaración de variables y arrays//
const siglas = ['AB', 'BC', 'CD', 'EF'];
const formasfarma = ['COR', 'COM', 'EMU', 'CPR']
let analista = prompt("Ingrese su sigla de Analista");

// Condiciones para datos válidos para Analista
while (analista != String) {
    if (siglas.includes(analista.toUpperCase())) {
        console.log(analista);
        break;
    } else {alert("Por favor, ingrese una sigla de Analista válida");}
    analista = prompt("Ingrese su sigla de Analista");
}
// Condiciones de datos válidos para moléculas
const productos = ['DICLO', 'IBU', 'PARA', 'OME']
let molecula = prompt("Ingrese un producto del siguiente listado: Diclo - Ibu - Para - Ome");
let i = molecula;
while (molecula !=String) {
    if (productos.includes(i.toUpperCase())) {
       console.log(i);
       break;
    } else {alert("Por favor, ingrese una Molecula Precargada");} 
    i = prompt("Ingrese un producto del siguiente listado: Diclo - Ibu - Para - Ome");
}

// Condiciones de datos válidos para la dosis en números
let dosis = parseFloat(prompt("Dosis en mg"));
let d = dosis
while (dosis != "ESC") {
    if (Number(d)==d && d > 0) {
       console.log(d);
       break;
   } else {alert("Por favor, ingrese un valor numérico positivo para la dosis") } 
    d = parseFloat(prompt("Dosis en mg"));
}

// Condiciones de datos válidos para Formas Farmacéuticas
let formaF = prompt("Forma Farmacéutica");
let f = formaF;
while (formaF != String) {
    if (formasfarma.includes(f.toUpperCase())) {
        console.log(f);
        break;
    } else {alert("Por favor, ingrese una Forma Farmacéutica válida");}
    f = prompt("Forma Farmacéutica");
}

console.log(siglas.indexOf(analista.toUpperCase()));
console.log(productos.indexOf(molecula.toUpperCase()));
console.log(formasfarma.indexOf(formaF.toUpperCase()));

//Funciones para generar el código//
function retornarstring(){
    return analista + molecula + formaF;}
let devuelvevalor = retornarstring();
console.log(devuelvevalor);

function generarcodigo(){
    return siglas.indexOf(analista.toUpperCase()) + '2023' + productos.indexOf(i.toUpperCase()) + formasfarma.indexOf(f.toUpperCase()) + "-" + dosis;
}
let codigosigla = generarcodigo();
console.log(codigosigla);
alert('El código de su producto es el' + ' ' + codigosigla)


//Función para guardar en localstorage y cargar el contenido
function guardar_localstorage() {

let producto_definido = {
    nombre: analista,
    proyecto: molecula,
    mg: dosis,
    form: formaF
};
let proyecto = codigosigla;

    localStorage.setItem(proyecto, JSON.stringify(producto_definido));
    let nuevo_producto = JSON.parse(localStorage.getItem(proyecto));
    console.log(nuevo_producto);
    
}

guardar_localstorage();








