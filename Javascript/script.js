//Declaración de variables y arrays//
const siglas = ['AB', 'BC', 'CD', 'EF'];
const formasfarma = ['COR', 'COM', 'EMU', 'CPR']
let Analista = prompt("Ingrese su sigla de Analista");

// Condiciones para datos válidos para Analista
while (Analista != String) {
    if (siglas.includes(Analista.toUpperCase())) {
        console.log(Analista);
        break;
    } else {alert("Por favor, ingrese una sigla de Analista válida");}
    Analista = prompt("Ingrese su sigla de Analista");
}
// Condiciones de datos válidos para moléculas
const productos = ['DICLO', 'IBU', 'PARA', 'OME']
let Molecula = prompt("Ingrese un producto del siguiente listado: Diclo - Ibu - Para - Ome");
let i = Molecula;
while (Molecula !=String) {
    if (productos.includes(i.toUpperCase())) {
       console.log(i);
       break;
    } else {alert("Por favor, ingrese una Molecula Precargada");} 
    i = prompt("Ingrese un producto del siguiente listado: Diclo - Ibu - Para - Ome");
}

// Condiciones de datos válidos para la dosis en números
let Dosis = parseFloat(prompt("Dosis en mg"));
let d = Dosis
while (Dosis != "ESC") {
    if (Number(d)==d && d > 0) {
       console.log(d);
       break;
   } else {alert("Por favor, ingrese un valor numérico positivo para la dosis") } 
    d = parseFloat(prompt("Dosis en mg"));
}

// Condiciones de datos válidos para Formas Farmacéuticas
let FormaF = prompt("Forma Farmacéutica");
let f = FormaF;
while (FormaF != String) {
    if (formasfarma.includes(f.toUpperCase())) {
        console.log(f);
        break;
    } else {alert("Por favor, ingrese una Forma Farmacéutica válida");}
    f = prompt("Forma Farmacéutica");
}

console.log(siglas.indexOf(Analista.toUpperCase()));
console.log(productos.indexOf(Molecula.toUpperCase()));
console.log(formasfarma.indexOf(FormaF.toUpperCase()));

//Funciones para generar el código//
function retornarstring(){
    return Analista + Molecula + FormaF;}
let devuelvevalor = retornarstring();
console.log(devuelvevalor);

function generarcodigo(){
    return siglas.indexOf(Analista.toUpperCase()) + '2023' + productos.indexOf(i.toUpperCase()) + formasfarma.indexOf(f.toUpperCase());
}
let codigosigla = generarcodigo();
console.log(codigosigla);
alert('El código de su producto es el' + ' ' + codigosigla)











