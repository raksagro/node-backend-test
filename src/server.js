const express = require("express");
const routes = require('./routes');
require("dotenv").config();
require('./database');

const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(routes);

app.listen(port, () => console.log("Server is running on port ", + port));