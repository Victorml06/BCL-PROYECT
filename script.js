document.addEventListener('DOMContentLoaded', () => {
    fetch('equipos.json')
        .then(respuesta => respuesta.json())
        .then(equipos => {
            equipos.forEach((equipo, indice) => {
                const idLabel = `carrusel${indice + 1}`;
                const labelElemento = document.getElementById(idLabel);

                if (labelElemento) {
                    const imagenElemento = labelElemento.querySelector('.imagen img');
                    const nombreElemento = labelElemento.querySelector('.nombre');

                    if (imagenElemento) {
                        imagenElemento.src = equipo.imagen;
                    }
                    if (nombreElemento) {
                        nombreElemento.textContent = equipo.nombre;
                    }
                }
            });
        })
        .catch(error => {
            console.error('¡Vaya! Ha habido un problema al cargar los equipos:', error);
        });
});