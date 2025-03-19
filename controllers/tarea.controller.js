const { Tarea } = require('../models');
exports.obtenerTareas = async (req, res) => {
 const tareas = await Tarea.findAll();
 res.json(tareas);
};
exports.crearTarea = async (req, res) => {
 const nuevatarea = await Tarea.create(req.body);
 res.status(201).json(nuevatarea);
};