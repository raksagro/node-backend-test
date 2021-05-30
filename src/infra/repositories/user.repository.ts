import { EntityRepository, Repository } from 'typeorm';
import { User } from '../../domain/entities/user.entity';

EntityRepository(User);
export class UserRepository extends Repository<User> {
  constructor() {
    super();
  }

  findAll(): Promise<User[]> {
    return this.find();
  }
}
