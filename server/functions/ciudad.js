const insertarCiudad = (conn, ciudad, estado) => {
   
    if(ciudad === "" || estado == null) return false;

    ciudad = ciudad.trim();
    ciudad = ciudad.toUpperCase();
    
    const sql = "CALL insertCiudad (" + estado + ",'" + ciudad + "') ";
    console.log(sql)

    conn.query(sql, (e, result) => {
        if (e) throw e;
        console.log("insertada la ciudad")

    });

    return true;
}
const updateCiudad = (conn, idCiudad, idEstado, nombreCiudad) => {
    conn.query("CALL updateCiudad ("+idCiudad+", "+ idEstado+",'"+nombreCiudad +"')",(e, result) => {
        if(e) throw e;
    });
    console.log('eliminado la ciudad')

}
const deleteCiudad = (conn, id) => {
        conn.query("CALL deleteCiudad ("+id+")",(e, result) => {
            if(e) throw e;
        });
        console.log('eliminado la ciudad')
    
}
const ciudadRepetida = (conn, nombre) => {
    let contador = {};
    conn.query("CALL ciudadesRepetidas ('"+nombre+"')",(e, result) => {
        if(e) throw e;
        contador.resutado = result;
    });
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(...contador.resutado);
        },200 )
    });

}
const getCiudades = (conn) => {
    let ciudades = [];    

        conn.query("SELECT * FROM ciudad",(e, result) => {
            if(e) throw e;
            for(let i = 0 ; i < result.length ; i++){
                const idCiudad = result[i].idCiudad
                const idEstado = result[i].idEstado;
                const nombre = result[i].nombre;
                
                ciudades.push({idCiudad,idEstado,nombre});
            }  
            ciudades = ciudades;
            
        });

    
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(ciudades);
        },200 )
    });
    
}

module.exports = { insertarCiudad, getCiudades ,deleteCiudad, updateCiudad, ciudadRepetida};