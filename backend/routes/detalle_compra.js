const express = require('express');
const router = express.Router();

const detalle_compraController = require('../Controller/detalle_compraController');
router.get('/', detalle_compraController.list);
router.post('/', detalle_compraController.save);
router.delete('/:iddetcomp', detalle_compraController.delete);
router.get('/:iddetcomp', detalle_compraController.edit);
router.post('/:iddetcomp', detalle_compraController.update);

module.exports = router;