const express = require('express');
const router = express.Router();

// IMPORTA CONSTANTES DE ROTAS
const officesRoute = require('./officesRoute');

// UTILIZA AS CONSTANTES DE ROTAS
router.use('/offices', officesRoute);

module.exports = router;