const fila = document.querySelector('.contenedor-carrusel');
const modules = document.querySelectorAll('.module_poster');
const flechaIzquierda = document.getElementById('flecha-izquierda');
const flechaDerecha = document.getElementById('flecha-derecha');

// event listener flecha derecha.
flechaDerecha.addEventListener('click', () => {
    fila.scrollLeft += fila.offsetWidth;

    const indicadorActivo = document.querySelector('.indicadores .activo');
    if(indicadorActivo.nextSibling){
        indicadorActivo.nextSibling.classList.add('activo');
        indicadorActivo.classList.remove('activo');
    }
});

// event listener flecha izquierda.
flechaIzquierda.addEventListener('click', () => {
    fila.scrollLeft -= fila.offsetWidth;

    const indicadorActivo = document.querySelector('.indicadores .activo');
    if(indicadorActivo.previousSibling){
        indicadorActivo.previousSibling.classList.add('activo');
        indicadorActivo.classList.remove('activo');
    }

});

const numeroPaginas = Math.ceil(modules.length / 4);
for(let i = 0; i < numeroPaginas; i++){
    const indicador = document.createElement('button');

    if(i === 0){
        indicador.classList.add('activo');
    }

    document.querySelector('.indicadores').appendChild(indicador);
    indicador.addEventListener ('click', (e) => {
    fila.scrollLeft = i * fila.offsetWidth;

    document.querySelector('.indicadores .activo').classList.remove('activo');
    e.target.classList.add('activo');
    });
}

