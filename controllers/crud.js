
const conexion = require('../database/db');

// exports.save = (req, res) => {
//     const nombre = req.body.nombre;
//     const apellidos = req.body.apellidos;
//     const empresa = req.body.empresa;
//     const telefono = req.body.telefono;
//     const telempresa = req.body.telempresa;
//     const correo = req.body.email;
//     const comentario = req.body.comentario;
//     const rating = req.body.rating;

//     console.log(nombre);
//     console.log(apellidos);
//     console.log(empresa);
//     console.log(telefono);
//     console.log(telempresa);
//     console.log(correo);
//     console.log(comentario);
//     console.log(rating);
// }


const multer = require('multer')
const path = require('path');


const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, '/public/imagenes/'); // Directorio donde se guardarán las imágenes
    },
    filename: (req, file, cb) => {
        const extname = path.extname(file.originalname);
        cb(null, Date.now() + extname); // Nombre del archivo con una marca de tiempo
    }
});

const upload = multer({ storage: storage });


exports.save = (req, res) => {
    // Acceder a los datos del formulario
    const nombre = req.body.nombre;
    const apellidos = req.body.apellidos;
    const empresa = req.body.empresa;
    const telefono = req.body.telefono;
    const telempresa = req.body.telempresa;
    const email = req.body.email;
    const comentario = req.body.comentario;
    const rating = req.body.rating;

    // Obtener la URL de la imagen cargada
    const imageUrl = req.file ? `/public/imagenes/${req.file.filename}` : ''; // Ruta a la imagen

    // Realizar acciones necesarias con la URL de la imagen (guardar en la base de datos, etc.)

    console.log(nombre);
    console.log(apellidos);
    console.log(empresa);
    console.log(telefono);
    console.log(telempresa);
    console.log(email);
    console.log(comentario);
    console.log(rating);
    console.log(imageUrl);

    conexion.query('INSERT INTO comentarios SET ?', {
        nombre: nombre, apellido: apellidos,empresa:empresa, telefono: telefono,
        telempresa: telempresa, comentario: comentario,
        calificacion: rating, email: email, url: imageUrl
    }, (error, results) => {
        if (error) {
            console.log(error);
        } else {
            res.redirect('/index')
        }
    })
};