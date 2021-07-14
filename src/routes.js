const express = require('express');
const userController = require('./controllers/userController');

const routes = express.Router();

routes.get('/users', userController.getAll);
routes.get('/user:id', userController.get);
routes.post('/user', userController.create);
routes.put('/user:id', userController.update);
routes.delete('/user:id', userController.delete);

module.exports = routes