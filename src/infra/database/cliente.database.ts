import { DatabaseConnection } from './protocols/connection.interface';
import { Connection, createConnection } from 'typeorm';

export class DatabaseClient implements DatabaseConnection {
  private connection: () => Promise<Connection>;

  constructor() {
    this.connection = createConnection;
  }

  async connect(): Promise<Connection> {
    return this.connection();
  }
}
