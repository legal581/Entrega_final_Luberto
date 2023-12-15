async function fetchData() {
    try {
        const response = await fetch('../Datos/datos1.json');
        
        if (!response.ok){
            throw new Error('Error en la carga');
        }

        const data = await response.json();
        console.log(data);
    
        document.getElementById("elem").innerHTML = 'codigo 1'
        document.getElementById("elem1").innerHTML = 'colaborador 1'
        document.getElementById("elem2").innerHTML = 'dosis 1'
        document.getElementById("elem3").innerHTML = 'codigo 2'
        document.getElementById("elem4").innerHTML = 'colaborador 2'
        document.getElementById("elem5").innerHTML = 'dosis 2'
        document.getElementById("elem6").innerHTML = 'FF 2'
        document.getElementById("elem7").innerHTML = 'FF 1'

    } catch (error) {
        console.error('Error')
        
    } finally {
        console.log('Carga exitosa');
    }
}
fetchData();
