import { User, UserModel } from '../models/user'

export class UserService {

    static get userAttributes() {
        return ['id', 'name', 'dot', 'address', 'description']
    }
    private static _user
    static get user() {
        return UserService._user
    }

    create({ name, dot, address, description }: UserModel) {
        return User.create({ name, dot, address, description })
            .then(u => this.read(u!.id))
    }

    read(id: number) {
        return User.findByPk(id, {
            attributes: UserService.userAttributes
        })
    }

    delete(id: number) {
        return User.destroy({
            where: { id: id }
        })
    }

    update(data: any, id: number) {
        return User.update(
            data, { where: { id }
        })
    }
}