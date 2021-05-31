import { User } from '../../domain/entities/user.entity';
import { UserRepository } from '../../infra/repositories/user.repository';

export class UserService {
  private userRepository: UserRepository;

  constructor(_userRepository: UserRepository) {
    this.userRepository = _userRepository;
  }

  all(): Promise<User[]> {
    return this.userRepository.findAll();
  }

  store(model: User): Promise<User> {
    return this.userRepository.store(model);
  }

  update(model: User): Promise<User> {
    return this.userRepository.updated(model);
  }

  async delete(userId: number): Promise<User> {
    const user = new User();
    user.id = userId;

    const userDeleted = await this.userRepository.del(user);

    return userDeleted;
  }
}
