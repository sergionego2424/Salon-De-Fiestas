const deleteCiudad = (id) => {
    fetch('/eliminarCiudad/' + id).then(response => {
        console.log('se ha eliminado')
    }).catch(error => {
        console.log(error);
    })
    location.reload();
};

export {deleteCiudad};