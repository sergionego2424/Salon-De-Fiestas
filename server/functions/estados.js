const insertar = (conn) => {
    const estados = "Aguascalientes,Baja California,Baja California Sur,Campeche,Chiapas,Chihuahua,Coahuila,Colima,Distrito Federal,Durango,Guanajuato,Guerrero,Hidalgo,Jalisco,México,Michoacán,Morelos,Nayarit,Nuevo León,Oaxaca,Puebla,Querétaro,Quintana Roo,San Luis Potosí,Sinaloa,Sonora,Tabasco,Tamaulipas,Tlaxcala,Veracruz,Yucatán,Zacatecas";
    const estadosArray = estados.split(",");
    const poder = false;
    conn.connect((error) => {
        if(error) throw error;
        if(poder){
            estadosArray.forEach(estado => {
                conn.query("INSERT INTO estado (nombre) VALUES ( '" + estado + "')",(e, result) => {
                    if(e) throw e;
                   console.log("insertados")
                   conn.end();
                });
            })
        }
        
    });
    
    console.log('si');
}

const getEstados = (conn) => {
    let estados = [];    

        conn.query("SELECT * FROM estado",(e, result) => {
            if(e) throw e;
            for(let i = 0 ; i < result.length ; i++){
                const id = result[i].idEstado;
                const nombre = result[i].nombre;
                
                estados.push({id,nombre});
            }  
            estados = estados;
            
        });

    
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(estados);
        },200 )
    });
    
}

module.exports = {getEstados, insertar}