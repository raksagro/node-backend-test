import { UserRepository } from '../../../src/infra/repositories/user.repository';
import { User } from '../../../src/domain/entities/user.entity';

describe('User Repository', () => {
  const userRepository = new UserRepository();

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

    jest.spyOn(userRepository, 'find').mockResolvedValueOnce([usersMock]);

    expect(await userRepository.findAll()).toEqual([usersMock]);
  });

  it('should store a new user model', async () => {
    const userModel = new User();
    [userModel.name, userModel.address, userModel.description, userModel.dob] =
      ['Robert', 'Y street, 8213', 'Any description', new Date()];

    jest.spyOn(userRepository, 'save').mockResolvedValueOnce(userModel);

    expect(await userRepository.store(userModel)).toEqual(userModel);
  });

  it('should update an user model', async () => {
    const userModel = new User();
    [
      userModel.name,
      userModel.address,
      userModel.description,
      userModel.dob,
      userModel.id,
    ] = ['Robert', 'Y street, 8213', 'Any description', new Date(), 1];

    jest.spyOn(userRepository, 'save').mockResolvedValueOnce(userModel);

    expect(await userRepository.updated(userModel)).toEqual(userModel);
  });

  it('should remove an user model', async () => {
    const userModel = new User();
    [
      userModel.name,
      userModel.address,
      userModel.description,
      userModel.dob,
      userModel.id,
    ] = ['Robert', 'Y street, 8213', 'Any description', new Date(), 1];

    jest.spyOn(userRepository, 'remove').mockResolvedValueOnce(userModel);

    expect(await userRepository.del(userModel)).toEqual(userModel);
  });
});
