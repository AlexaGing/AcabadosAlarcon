const express = require('express');
const ClienteController = require('../controllers/ClienteController');


const api = express.Router();

api.get( '/saludar', (req, res) => {
    console.log('Llegó a la ruta saludar...');
});

api.post('/', ClienteController.create);
api.put('/:idCliente', ClienteController.update);
api.delete('/:idCliente', ClienteController.remove);
api.get('/allClientes/:servicio', ClienteController.getAllClientes);


module.exports = api;
