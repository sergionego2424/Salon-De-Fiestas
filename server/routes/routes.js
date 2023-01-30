const {getEstados, insertar} = require('../functions/estados');
const {insertarCiudad} = require('../functions/ciudad');

const express = require('express');
const mysql = require('mysql');

const router = express.Router();



const config = {
    host : "127.0.0.1",
    user : "root",
    password : "",
    database : "mydb",
    port : 3306
}
const conn = new mysql.createConnection(config);

conn.connect((error) => {
})

router.post('/ciudades' , (req, res) => {
    const {ciudad , estado} = req.body;    

    console.log(ciudad)
    console.log(estado)

    setTimeout(() => {
        insertarCiudad(conn, ciudad, estado)
    },1000)

   res.redirect('/ciudades')
})



router.use('/ciudades' , (req, res) => {
   
    getEstados(conn).then(estados => {
        console.log(estados);
        res.render('ciudades' , {
            estados
        })
    })
    
})

router.use('/' , (req, res) => {
    res.render('index' , {
        ok: true
    })
})
module.exports = router;