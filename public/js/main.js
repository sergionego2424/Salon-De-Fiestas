import { deleteCiudad } from "./deleteCiudad.js";
import { updateCiudad } from "./updateCiudad.js";

const btnsEliminar = document.getElementsByClassName("btn-eliminar");
const btnListo = document.getElementById('listo')


for(let i = 0 ; i < btnsEliminar.length ; i++){
    btnsEliminar[i].addEventListener('click' , () => {
       const idCiudad = btnsEliminar[i].getAttribute('value');

       deleteCiudad(idCiudad);
    })
}

btnListo.addEventListener('click' , () => {
    const idCiudadHTML = document.getElementsByClassName('idCiudad');
    const idEstadoHTML = document.getElementsByClassName('idEstado');
    const nombreCiudadHTML = document.getElementsByClassName('nombreCiudad');

    for(let i = 0 ; i < idCiudadHTML.length ; i++) {
        const idCiudad =  idCiudadHTML[i].innerHTML
        const idEstado = idEstadoHTML[i].value;
        const nombreCiudad = nombreCiudadHTML[i].value;

        updateCiudad(idCiudad, idEstado, nombreCiudad);

    }
})

