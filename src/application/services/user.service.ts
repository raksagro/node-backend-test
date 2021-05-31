import { User } from '../../domain/entities/user.entity';
import { UserRepository } from '../../infra/repositories/user.repository';

export class UserService {
  constructor(private userRepository: UserRepository) {}

  all(): Promise<User[]> {
    return this.userRepository.findAll();
  }

  store(model: User): Promise<User> {
    return this.userRepository.store(model);
  }

  update(model: User): Promise<User> {
    return this.userRepository.updated(model);
  }

  delete(userId: number): Promise<User> {
    const user = new User();
    user.id = userId;

    return this.userRepository.del(user);
  }
}
