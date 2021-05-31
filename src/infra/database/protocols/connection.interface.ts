import { Connection } from 'typeorm';

export interface DatabaseConnection {
  connect(): Promise<Connection>;
}
