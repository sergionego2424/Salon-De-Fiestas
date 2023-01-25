const {getEstados} = require('../functions/estados');

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

router.post('/ciudades' , (req, res) => {
    const {ciudad , estado} = req.body;    


    res.redirect('./ciudades')
})



router.use('/ciudades' , (req, res) => {
   
    getEstados(conn).then(estados => {
        console.log(estados);
        res.render('ciudades' , {
            estados
        })
    })
    
})

module.exports = router;