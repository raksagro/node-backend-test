'use strict';

import path from 'path';
import http from 'http';
import cors from 'cors'
import * as oas3Tools from 'oas3-tools';
import dotenv from 'dotenv';

const dotenvConfig = dotenv.config();
const serverPort = process.env.PORT;

// swaggerRouter configuration
let options = {
    routing: {
        controllers: path.join(__dirname, './controllers')
    },
};

let expressAppConfig = oas3Tools.expressAppConfig(path.join(__dirname, 'api/openapi.yaml'), options);
let app = expressAppConfig.getApp();

app.use(cors());
app.disable('x-powered-by');
//Authentication
app.use("^/$",(req, res, next) => {res.status(200).send({statusCode:200, message: "It's alive"})})
app.use((req, res, next) => {
    if(!req.headers["x-api-key"] || req.headers["x-api-key"].replace("Bearer ","") !== process.env.API_KEY){
      res.status(401).send({statusCode: 401, error: "Unauthorized", message: "Missing valid authentication"})
    }
    else
      next();
});
// Initialize the Swagger middleware
http.createServer(app).listen(serverPort, function () {
    console.log('Your server is listening on port %d (http://localhost:%d)', serverPort, serverPort);
    console.log('Swagger-ui is available on http://localhost:%d/docs', serverPort);
});

