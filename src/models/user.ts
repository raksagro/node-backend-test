import Sequelize, { Model } from 'sequelize';
import database from '../database';

class User extends Model {
  public id!: number;

  public name!: string;

  public dob!: Date;

  public address: string;

  public description: string;

  public readonly createdAt!: Date;

  public readonly updatedAt!: Date;
}

User.init(
  {
    name: Sequelize.STRING,
    dob: Sequelize.DATE,
    address: Sequelize.STRING,
    description: Sequelize.STRING,
  },
  {
    sequelize: database,
  }
)

export default User;