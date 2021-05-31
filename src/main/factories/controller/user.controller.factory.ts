import { UserService } from '../../../application/services/user.service';
import { UserController } from '../../../presentation/controllers/user.controller';
import { ControllerFactory } from '../protocols/controller.protocol.factory';

export class UserControllerFactory implements ControllerFactory {
  create(): any {
    const userService = new UserService();
    const userController = new UserController(userService);

    return userController;
  }
}
