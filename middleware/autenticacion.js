const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();

// Middleware para proteger rutas
const autenticacion = (req, res, next) => {
  const token = req.header('x-auth-token'); // Obtenemos el token desde el encabezado

  if (!token) {
    return res.status(401).json({ message: 'Acceso no autorizado. Se requiere un token.' });
  }

  try {
    // Verificar el token JWT
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.usuario = decoded; // Guardamos la información del usuario en el objeto req
    next(); // Continuamos con la ejecución de la siguiente función
  } catch (error) {
    res.status(401).json({ message: 'Token inválido o expirado.' });
  }
};

module.exports = autenticacion;