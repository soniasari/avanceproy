const express = require('express');
const router = express.Router();
const { obtenerUsuarios, crearUsuarios} = require('../controllers/usuario.controller');
const usuarioController = require('../controllers/login.controller');
const autenticacion = require('../middleware/autenticacion');
router.get('/usuario', obtenerUsuarios);
router.post('/usuario', crearUsuarios);
router.post('/login', usuarioController.loginUsuario);
router.get('/perfil', autenticacion, (req, res) => {
    res.json({
      message: 'Bienvenido a tu perfil',
      usuario: req.usuario
    });
  });
  
  module.exports = router;
module.exports = router;