window.onload =() => {
    document.querySelector('#generar').addEventListener("click", () => {
        document.querySelector('#excusa').innerHTML = generarExcusa();
    })
    console.log('hola mundo para la consola ');
};
let generarExcusa = () => {

    let pronombre = ['mi ', 'un '];
    let sujeto = ['primo ', 'socio ', 'amigo ', 'mujer '];
    let accion = ['quemó mi ', 'dañó mi ', 'robó mi ', 'pintó mi '];
    let objeto = ['carro ', 'celular ', 'tarea ', ' hijo ', ' zapatos '];
    let donde = ['en mi casa', 'en la noche', 'camino a casa', 'en el supermercado'];

    let pronIndx = Math.floor(Math.random() * pronombre.length);
    let sujIndx = Math.floor(Math.random() * sujeto.length);
    let accionIndx = Math.floor(Math.random() * accion.length);
    let objIndx = Math.floor(Math.random() * objeto.length);
    let dondeIndx = Math.floor(Math.random() * donde.length);

    return pronombre[pronIndx] + '' + sujeto[sujIndx] + '' + accion[accionIndx] + '' + objeto[objIndx] + '' + donde[dondeIndx];
};