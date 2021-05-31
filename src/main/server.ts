import { Server } from '@overnightjs/core';
import { Application } from 'express';
import * as http from 'http';
import bodyParser from 'body-parser';
import cors from 'cors';
import { OpenApiValidator } from 'express-openapi-validator';
import swaggerUi from 'swagger-ui-express';
import { OpenAPIV3 } from 'express-openapi-validator/dist/framework/types';
import apiSchema from './api-schema.json';
import logger from './logger';
import { DatabaseConnection } from '../infra/database/protocols/connection.interface';
import { DatabaseClient } from '../infra/database/cliente.database';
import { UserControllerFactory } from './factories/controller/user.controller.factory';

export class SetupServer extends Server {
  private server?: http.Server;

  constructor(private port = 8000) {
    super();
  }

  public async init(): Promise<void> {
    await this.setupDatabase();
    this.setupExpress();
    await this.docsSetup();
    this.setupControllers();
  }

  public getApp(): Application {
    return this.app;
  }

  private setupExpress(): void {
    this.app.use(bodyParser.json());
    this.app.use(
      cors({
        origin: '*',
      }),
    );
  }

  private async setupDatabase(): Promise<void> {
    const database: DatabaseConnection = new DatabaseClient();
    await database.connect();

    logger.info('Database connection handle success!');
  }

  private setupControllers(): void {
    const userController = new UserControllerFactory();
    this.addControllers([userController.create()]);
  }

  private async docsSetup(): Promise<void> {
    this.app.use('/docs', swaggerUi.serve, swaggerUi.setup(apiSchema));
    await new OpenApiValidator({
      apiSpec: apiSchema as OpenAPIV3.Document,
      validateRequests: true, //we do it
      validateResponses: true,
    }).install(this.app);
  }

  public start(): void {
    this.server = this.app.listen(this.port, () => {
      logger.info('Server listening on port: ' + this.port);
    });
  }
}
