const express = require('express');

const routes = express.Router();

routes.get("/", (request, response) => {
    return response.json({
        message: "Isto é um get",
    });
});

module.exports = routes