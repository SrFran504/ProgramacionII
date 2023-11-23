const express = require('express');
const router = express.Router();

const encabezado_ventaController = require('../Controller/encabezado_ventaController');
router.get('/', encabezado_ventaController.list);
router.post('/', encabezado_ventaController.save);
router.delete('/:num_venta  ', encabezado_ventaController.delete);
router.get('/:num_venta  ', encabezado_ventaController.edit);
router.post('/:num_venta  ', encabezado_ventaController.update);

module.exports = router;