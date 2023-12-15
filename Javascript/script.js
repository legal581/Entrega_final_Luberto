//Declaración de variables y arrays//
const colaborador1 = 'juan';
const siglas = ['AB', 'BC', 'CD', 'EF'];
const formasfarma = ['COR', 'COM', 'EMU', 'CPR'];
const productos = ['DICLO', 'IBU', 'PARA', 'OME'];
const file = '../Datos/datos1.json';
//Evento submit y creación de array de producto definidos

const myForm = document.getElementById("myForm");
const productos_definidos = [];

myForm.addEventListener('submit', function(event){
    event.preventDefault();
// Condiciones para datos válidos para Analista
    const colaborador = document.getElementById('nombreanalista').value;
    while (colaborador != String) {
        if (siglas.includes(colaborador.toUpperCase())) {
            break;
        } else {alert("Por favor, ingrese una sigla de Analista válida");}
        colaborador = document.getElementById('nombreanalista').value;
    }
// Condiciones de datos válidos para moléculas
    const api = document.getElementById('nombremolecula').value;
    let i = api;
    while (api !=String) {
        if (productos.includes(i.toUpperCase())) {
           break;
        } else {alert("Por favor, ingrese una Molecula Precargada");} 
        api = document.getElementById('nombremolecula').value;
    }
// Condiciones de datos válidos para la dosis en números
    const carga = parseFloat(document.getElementById('dosismg').value);
    let d = carga
    while (carga != "ESC") {
        if (Number(d)==d && d > 0) {
           break;
       } else {alert("Por favor, ingrese un valor numérico positivo para la dosis") } 
       carga = parseFloat(document.getElementById('dosismg').value);
    }
// Condiciones de datos válidos para Formas Farmacéuticas
    const presentacion = document.getElementById('formato').value;
    let f = presentacion;
    while (presentacion != String) {
        if (formasfarma.includes(f.toUpperCase())) {

            break;
        } else {alert("Por favor, ingrese una Forma Farmacéutica válida");}
        presentacion = document.getElementById('formato').value;
    }
    const producto_definido = {};



    producto_definido.colaborador = colaborador;
    producto_definido.api = api;
    producto_definido.carga = carga;
    producto_definido.presentacion = presentacion;
    productos_definidos.push(producto_definido);

//Funciones para generar el código//
    function retornarstring(){
        return colaborador + api + presentacion;}
        let devuelvevalor = retornarstring();


    function generarcodigo(){
        return siglas.indexOf(colaborador.toUpperCase()) + '2023' + productos.indexOf(i.toUpperCase()) + formasfarma.indexOf(f.toUpperCase()) + "-" + carga;
}
    const codigosigla = generarcodigo();
    Swal.fire({
        title: 'El código de su producto es el' + ' ' + codigosigla,
        text: "You clicked the button!",
        icon: "success"
      });

//Guardar Localstorage
    function guardar_localstorage() {
        let proyecto = codigosigla;
        localStorage.setItem(proyecto, JSON.stringify(producto_definido));

        let nuevo_producto = JSON.parse(localStorage.getItem(proyecto));
        
         
        
    }
    guardar_localstorage();
//Almacenar datos en JSON
const postData = async () => {
    const newProduct = producto_definido;
    try {
        const response = await fetch(file,{
            method:'POST',
            mode: 'no-cors',
            headers: {'Contend-Type':'application/json'},
            body: JSON.stringify(newProduct)
        });
        if(response.ok){
            const jsonResponse = await response.json();
            //const {colaborador,api,carga,presentacion} = jsonResponse;
        }
    } catch (error) {
        console.log(error);
    }
    finally {
        alert('Producto cargado con éxito')
    }
}
postData();
    myForm.reset();

   
});

