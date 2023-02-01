const { getEstados, insertar } = require('../functions/estados');
const { insertarCiudad, getCiudades, deleteCiudad, updateCiudad, ciudadRepetida } = require('../functions/ciudad');

const express = require('express');
const mysql = require('mysql');

const router = express.Router();



const config = {
    host: "127.0.0.1",
    user: "root",
    password: "",
    database: "mydb",
    port: 3306
}
const conn = new mysql.createConnection(config);

conn.connect((error) => {
})

router.use('/error', (req, res) => {
    res.render('error')
})

router.get('/updateCiudad/:idCiudad/:idEstado/:nombre', (req, res) => {
    const idCiudad = req.params.idCiudad;
    const idEstado = req.params.idEstado;
    const nombre = req.params.nombre;
    updateCiudad(conn, idCiudad, idEstado, nombre);
    console.log("se mando este id : " + idCiudad);
    console.log(idEstado)
    console.log(nombre)
})

router.get('/eliminarCiudad/:id', (req, res) => {
    const id = req.params.id;
    deleteCiudad(conn, id);
    console.log("se mando este id : " + id);
})

router.use("/modificarCiudades", (req, res) => {
    getEstados(conn).then(estados => {
        getCiudades(conn).then(ciudades => {
            res.render('modificarCiudades', {
                estados,
                ciudades
            })
        })
    })
})

router.post('/ciudades', (req, res) => {
    const { ciudad, estado } = req.body;
    let contador = 0;

    console.log(ciudad)
    console.log(estado)

    ciudadRepetida(conn, ciudad).then((response) => {
        contador = response[0]["COUNT(nombreCiudad)"];


    })

    setTimeout(() => {
        let fallo = false;
        if (contador < 1) {
            const insertada = insertarCiudad(conn, ciudad, estado);
            if (insertada) {
                console.log('insertada')
            } else {
                console.log('has obtenido un error');
                fallo = true;
            }
        }else{
            fallo = true;
        }
        if(fallo){
            
        res.redirect("/error");
        return;
        }
        res.redirect('/insertarCiudades')
    }, 1000)


})



router.use('/insertarCiudades', (req, res) => {

    getEstados(conn).then(estados => {

        res.render('insertarCiudades', {
            estados
        })
    })

})

router.use('/', (req, res) => {
    res.render('index', {
        ok: true
    })
})
module.exports = router;