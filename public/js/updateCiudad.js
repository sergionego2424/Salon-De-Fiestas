const updateCiudad = (idCiudad, idEstado, nombre) => {
    console.log(idCiudad)
    console.log(idEstado)
    console.log(nombre);
    console.log('--------------')
    fetch('/updateCiudad/' + idCiudad +'/' +idEstado + '/' + nombre).then(response => {
        console.log('se ha eliminado')
    }).catch(error => {
        console.log(error);
    })
    location.reload();
};

export {updateCiudad};