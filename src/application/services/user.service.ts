import { User } from '../../domain/entities/user.entity';
import { UserRepository } from '../../infra/repositories/user.repository';

export class UserService {
  constructor(private userRepository: UserRepository) {}

  all(): Promise<User[]> {
    return this.userRepository.findAll();
  }
}
