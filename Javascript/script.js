//Declaración de variables y arrays//

let Analista = prompt("Ingrese su sigla de Analista");
let Molecula = prompt("Ingrese un producto del siguiente listado: Diclo - Ibu - Para - Ome");
let Dosis = parseFloat(prompt("Dosis en mg"));
let FormaF = prompt("Forma Farmacéutica");
const siglas = ['AB', 'BC', 'CD', 'EF'];
const productos = ['Diclo', 'Ibu', 'Para', 'Ome']

console.log(Analista);
console.log(Molecula);
console.log(Dosis);
console.log(FormaF);
console.log(siglas.indexOf(Analista));
console.log(productos.indexOf(Molecula));

//Funciones para generar el código//

function retornarstring(){
    return Analista + Molecula;
}
let devuelvevalor = retornarstring();

console.log(devuelvevalor);
 
function generarcodigo(){
    return siglas.indexOf(Analista) + '2023' + productos.indexOf(Molecula);
}
let codigosigla = generarcodigo();
console.log(codigosigla);
alert('El código de su producto es el' + ' ' + codigosigla)










