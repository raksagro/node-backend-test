import { DatabaseConnection } from './protocols/connection.interface';
import { Connection, createConnection } from 'typeorm';

export class DatabaseClient implements DatabaseConnection {
  connect(): Promise<Connection> {
    return createConnection();
  }
}
