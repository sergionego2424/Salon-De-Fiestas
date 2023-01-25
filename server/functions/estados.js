
const getEstados = (conn) => {
    let estados = [];    
    conn.connect((error) => {
        if(error) throw error;
        conn.query("SELECT * FROM estado",(e, result) => {
            if(e) throw e;
            for(let i = 0 ; i < result.length ; i++){
                const id = result[i].idEstado;
                const nombre = result[i].Nombre;
                
                estados.push({id,nombre});
            }  
            estados = estados;
        });
        
    });
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(estados);
        },200 )
    });
    
}

module.exports = {getEstados}