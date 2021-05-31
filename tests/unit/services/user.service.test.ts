import { UserRepository } from '../../../src/infra/repositories/user.repository';
import { UserService } from '../../../src/application/services/user.service';
import { User } from '../../../src/domain/entities/user.entity';

describe('User Service', () => {
  const userRepository = new UserRepository();
  const userService = new UserService(userRepository);

  it('should return a list of users', async () => {
    const usersMock: User = {
      id: 1,
      name: 'Bob',
      description: 'Any description',
      dob: new Date(),
      address: 'X street, 1234',
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    jest.spyOn(userRepository, 'findAll').mockResolvedValueOnce([usersMock]);

    expect(await userService.all()).toEqual([usersMock]);
  });

  it('should return the saved user', async () => {
    const userMock: User = {
      id: 2,
      name: 'Bob',
      description: 'Any description',
      dob: new Date(),
      address: 'X street, 1234',
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    jest.spyOn(userRepository, 'store').mockResolvedValueOnce(userMock);

    expect(await userService.store(userMock)).toEqual(userMock);
  });

  it('should return the updated user', async () => {
    const userMock: User = {
      id: 2,
      name: 'Bob',
      description: 'Any description',
      dob: new Date(),
      address: 'X street, 1234',
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    jest.spyOn(userRepository, 'updated').mockResolvedValueOnce(userMock);

    expect(await userService.update(userMock)).toEqual(userMock);
  });
});
