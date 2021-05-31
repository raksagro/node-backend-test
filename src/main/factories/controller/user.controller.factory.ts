import { UserService } from '../../../application/services/user.service';
import { UserController } from '../../../presentation/controllers/user.controller';
import { ControllerFactory } from '../protocols/controller.protocol.factory';
import { getCustomRepository } from 'typeorm';
import { UserRepository } from '../../../infra/repositories/user.repository';

export class UserControllerFactory implements ControllerFactory {
  create(): any {
    const userRepository = getCustomRepository(UserRepository);
    const userService = new UserService(userRepository);
    const userController = new UserController(userService);

    return userController;
  }
}
