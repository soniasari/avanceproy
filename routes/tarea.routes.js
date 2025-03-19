const express = require('express');
const router = express.Router();
const { obtenerTareas, crearTarea } = require('../controllers/tarea.controller');
router.get('/tareas', obtenerTareas);
router.post('/tareas', crearTarea);
module.exports = router;