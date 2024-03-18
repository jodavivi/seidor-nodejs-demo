const express    = require('express'); 
const path       = require('path');
const bodyParser = require('body-parser');
const fileUpload = require('express-fileupload');
const log4js     = require("log4js"); 
var cors				 = require('cors'); 
  

//crea un app de express
const app = express(); 
app.use(cors()); 
app.use(fileUpload());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true })) 
// parse requests of content-type - application/json
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb'}));
//uso de mildware 

//Inicia Routes
app.get('/', (req, res) => {
    res.send('Prueba Web 2')
  })
  
 
//Servidor y puerto
const port = 3000;
app.listen(process.env.PORT || port, () => {
    console.log(`Example app listening on port ${port}`)
  })