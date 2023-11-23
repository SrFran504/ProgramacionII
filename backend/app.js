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

const areastrabajoRoutes = require('./routes/areastrabajo');
const clientesRoutes = require('./routes/clientes');
const empresaRoutes = require('./routes/empresa');
const formapagoRoutes = require('./routes/formapago');
const empleadosRoutes = require('./routes/empleados');
const proveedorRoutes = require('./routes/proveedor');
const sucursalesRoutes = require('./routes/sucursales');
const tipoproductoRoutes = require('./routes/tipoproducto');
const tipousuarioRoutes = require('./routes/tipousuario');
const usuarioRoutes = require('./routes/usuario');
const productoRoutes = require('./routes/producto');
const encabezado_compraRoutes = require('./routes/encabezado_compra');
const detalle_compraRoutes = require('./routes/detalle_compra');
const encabezado_ventaRoutes = require('./routes/encabezado_venta');


app.set('port', process.env.PORT || 3000);// purto 3000

//Coneccion a base de datos 
app.use(morgan('dev'));
app.use(myConnection(mysql,{
    host:'localhost',
    user:'root',
    password:'Perrolola9671',
    port:3306,
    database:'facturacion'
}, 'single'));
app.use(express.urlencoded({extended: false}));

//Comunicaciones del Backend con el Frontend
var bodyParser = require('body-parser');
app.use(bodyParser.json());

//Rutas del Frontend
app.use('/api/empresa', empresaRoutes);
app.use('/api/producto', productoRoutes);
app.use('/api/areas-trabajo', areastrabajoRoutes);
app.use('/api/clientes', clientesRoutes);
app.use('/api/formapago', formapagoRoutes);
app.use('/api/proveedores', proveedorRoutes);
app.use('/api/empleados', empleadosRoutes);
app.use('/api/tipo-producto', tipoproductoRoutes);
app.use('/api/usuario', usuarioRoutes);


// archivos estaticos frontend
app.use(express.static(path.join(__dirname,'public')));



//inicializando el server
app.listen(app.get('port'), () =>{
    console.log("PUERTO 3000");
});

