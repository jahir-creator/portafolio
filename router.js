const express = require('express');
const router = express.Router();
const multer = require('multer'); // Importa Multer
// const upload = multer(); // Configura Multer
const conexion = require('./database/db');
const upload = multer({ dest: 'public/imagenes' })


//RUTA PARA EL LOADING
router.get('/loading.html', (req, res) => {
    // Define la ruta completa al archivo HTML que deseas enviar.
    const filePath = __dirname + '/loading.html';

    // Envía el archivo HTML al cliente.
    res.sendFile(filePath);
});

//RUTA PARA MOSTRAR LOS DATOS 
router.get('/index', (req, res) => {
    
     conexion.query('SELECT * FROM comentarios', (error,results)=> {
         if(error){
             throw error;
         }else{
             res.render('index', {results:results});
         }
     })
})

//RUTA PARA CREAR REGISTRO
router.get('/create', (req,res) =>{
    res.render('create');
})

const crud = require('./controllers/crud');
// router.post('/save',crud.save);
router.post('/save', upload.single('imagen'), crud.save);

module.exports = router;