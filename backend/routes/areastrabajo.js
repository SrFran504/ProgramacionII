const express = require('express');
const router = express.Router();

const areastrabajoController = require('../Controller/areastrabajoController');
router.get('/', areastrabajoController.list);
router.post('/', areastrabajoController.save);
router.delete('/:idarea', areastrabajoController.delete);
router.get('/:idarea', areastrabajoController.edit);
router.post('/:idarea', areastrabajoController.update);

module.exports = router;