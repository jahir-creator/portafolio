const express = require('express');
const app = express();


app.set('view engine', 'ejs');
app.use(express.static(__dirname));
app.use(express.urlencoded({extended:false}));
app.use(express.json());


const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));


app.use('/', require('./router'));

app.listen(5000, ()=>{
    console.log('SERVER corriendo en http://localhost:5000');   
});