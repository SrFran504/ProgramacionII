const express = require('express');
const router = express.Router();

const encabezado_compraController = require('../Controller/encabezado_compraController');
router.get('/', encabezado_compraController.list);
router.post('/', encabezado_compraController.save);
router.delete('/:num_compra ', encabezado_compraController.delete);
router.get('/:num_compra ', encabezado_compraController.edit);
router.post('/:num_compra ', encabezado_compraController.update);

module.exports = router;
