const express= require('express');
const morgan = require('morgan');
const path= require('path'); // Para enlazar con el fronend
const mysql = require('mysql2');
const cors = require('cors');
const myConnection= require('express-myconnection');

const app = express();

const config = {
    application: {
        cors: {
            server: [
                {
                    origin: "localhost:3000", 
                    credentials: true
                }
            ]
        }
}
};

app.use(cors(
    config.application.cors.server
));
//rutas del backend
const empresaRoutes = require('./routes/empresa');
const empresaRoutes = require('./routes/areas_trabajo');
const empresaRoutes = require('./routes/formapago');
const empresaRoutes = require('./routes/proveedor');
const empresaRoutes = require('./routes/sucursales');

app.set('port', process.env.PORT || 3000);// purto 3000

//Coneccion a base de datos 
app.use(morgan('dev'));
app.use(myConnection(mysql,{
    host:'localhost',
    user:'root',
    password:'Perrolola4513',
    port:3306,
    database:'facturacion'
}, 'single'));
app.use(express.urlencoded({extended: false}));


//inicializando el server
app.listen(app.get('port'), () =>{
    console.log("PUERTO 3000");
});

