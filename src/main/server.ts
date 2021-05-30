import { Server } from '@overnightjs/core';
import { Application } from 'express';
import * as http from 'http';
import bodyParser from 'body-parser';
import logger from './logger';
import { DatabaseConnection } from '../infra/database/protocols/connection.interface';
import { DatabaseClient } from '../infra/database/cliente.database';

export class SetupServer extends Server {
  private server?: http.Server;

  constructor(private port = 8000) {
    super();
  }

  public async init(): Promise<void> {
    await this.setupDatabase();
    this.setupExpress();
  }

  public getApp(): Application {
    return this.app;
  }

  private setupExpress(): void {
    this.app.use(bodyParser.json());
  }

  private async setupDatabase(): Promise<void> {
    const database: DatabaseConnection = new DatabaseClient();
    await database.connect();

    logger.info('Database connection handle success!');
  }

  public start(): void {
    this.server = this.app.listen(this.port, () => {
      logger.info('Server listening on port: ' + this.port);
    });
  }
}
