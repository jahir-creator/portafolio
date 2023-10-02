const mysql = require ('mysql');

const conexion = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'portafolio',
    port: 3307
});

conexion.connect((error)=>{
    if(error){
        console.error('El error de conexion es:' + error );
        return
    }
    console.log('¡CONECTADO AL BD EXISTOSAMENTE!');
})

module.exports = conexion;