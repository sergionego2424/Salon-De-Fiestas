const insertarCiudad = (conn, ciudad, estado) => {
    const sql = "INSERT INTO `ciudad` (`idCiudad`, `IdEstado`, `nombre`) VALUES (NULL, '" + estado + "', '" + ciudad + "')";
    console.log(sql)
    
        conn.query(sql, (e, result) => {
            if (e) throw e;
            console.log("insertada la ciudad")
            
        });
    
    console.log('si');
}

module.exports = { insertarCiudad };