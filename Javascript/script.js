//Declaración de variables y arrays//
const siglas = ['AB', 'BC', 'CD', 'EF'];
const formasfarma = ['COR', 'COM', 'EMU', 'CPR']
const productos = ['DICLO', 'IBU', 'PARA', 'OME']

//Evento submit y creación de array de producto definidos

const myForm = document.getElementById("myForm");
const productos_definidos = [];

myForm.addEventListener('submit', function(event){
    event.preventDefault();
// Condiciones para datos válidos para Analista
    const colaborador = document.getElementById('nombreanalista').value;
    while (colaborador != String) {
        if (siglas.includes(colaborador.toUpperCase())) {
            console.log(colaborador);
            break;
        } else {alert("Por favor, ingrese una sigla de Analista válida");}
        colaborador = document.getElementById('nombreanalista').value;
    }
// Condiciones de datos válidos para moléculas
    const api = document.getElementById('nombremolecula').value;
    let i = api;
    while (api !=String) {
        if (productos.includes(i.toUpperCase())) {
           console.log(i);
           break;
        } else {alert("Por favor, ingrese una Molecula Precargada");} 
        api = document.getElementById('nombremolecula').value;
    }
// Condiciones de datos válidos para la dosis en números
    const carga = parseFloat(document.getElementById('dosismg').value);
    let d = carga
    while (carga != "ESC") {
        if (Number(d)==d && d > 0) {
           console.log(d);
           break;
       } else {alert("Por favor, ingrese un valor numérico positivo para la dosis") } 
       carga = parseFloat(document.getElementById('dosismg').value);
    }
// Condiciones de datos válidos para Formas Farmacéuticas
    const presentacion = document.getElementById('formato').value;
    let f = presentacion;
    while (presentacion != String) {
        if (formasfarma.includes(f.toUpperCase())) {
            console.log(f);
            break;
        } else {alert("Por favor, ingrese una Forma Farmacéutica válida");}
        presentacion = document.getElementById('formato').value;
    }
    const producto_definido = {};

    console.log(colaborador);
    console.log(api);
    console.log(carga);
    console.log(presentacion);

    producto_definido.colaborador = colaborador;
    producto_definido.api = api;
    producto_definido.carga = carga;
    producto_definido.presentacion = presentacion;

    productos_definidos.push(producto_definido)
    console.log(producto_definido);
    console.log(productos_definidos);

    console.log(siglas.indexOf(colaborador.toUpperCase()));
    console.log(productos.indexOf(api.toUpperCase()));
    console.log(formasfarma.indexOf(presentacion.toUpperCase()));

    //Funciones para generar el código//
    function retornarstring(){
        return colaborador + api + presentacion;}
        let devuelvevalor = retornarstring();
        console.log(devuelvevalor);

    function generarcodigo(){
        return siglas.indexOf(colaborador.toUpperCase()) + '2023' + productos.indexOf(i.toUpperCase()) + formasfarma.indexOf(f.toUpperCase()) + "-" + carga;
}
    let codigosigla = generarcodigo();
    console.log(codigosigla);
    alert('El código de su producto es el' + ' ' + codigosigla)

//Guardar Localstorage
    function guardar_localstorage() {
        let proyecto = codigosigla;
        localStorage.setItem(proyecto, JSON.stringify(producto_definido));

        let nuevo_producto = JSON.parse(localStorage.getItem(proyecto));
        console.log(nuevo_producto); 
        
    }
    guardar_localstorage();

    myForm.reset();

    console.log('Evento ejecutado')
});






// //Función para guardar en localstorage y cargar el contenido
// function guardar_localstorage() {

// let producto_definido = {
//     nombre: colaborador,
//     proyecto: api,
//     mg: carga,
//     form: presentacion
// };
// let proyecto = codigosigla;

//     localStorage.setItem(proyecto, JSON.stringify(producto_definido));
//     let nuevo_producto = JSON.parse(localStorage.getItem(proyecto));
//     console.log(nuevo_producto);
    
// }

// guardar_localstorage();








