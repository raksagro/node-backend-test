import { Server } from '@overnightjs/core';
import { Application } from 'express';
import * as http from 'http';
import logger from './logger';
import bodyParser from 'body-parser';

export class SetupServer extends Server {
  private server?: http.Server;

  constructor(private port = 8000) {
    super();
  }

  public init(): void {
    this.setupExpress();
  }

  public getApp(): Application {
    return this.app;
  }

  private setupExpress(): void {
    this.app.use(bodyParser.json());
  }

  public start(): void {
    this.server = this.app.listen(this.port, () => {
      logger.info('Server listening on port: ' + this.port);
    });
  }
}
