import { Sequelize, Model, DataTypes, Optional } from "sequelize";
import { sequelize } from '../instances/sequelize'

export interface UserAttributes {
    id: number;
    name: string;
    dot: string;
    address: string;
    description: string
}

interface UserCreationAttributes extends Optional<UserAttributes, "id"> { }

interface UserInstance
    extends Model<UserAttributes, UserCreationAttributes>,
    UserAttributes { }

export const UserModel = sequelize.define<UserInstance>("User", {
    id: {
        primaryKey: true,
        type: DataTypes.INTEGER.UNSIGNED,
    },
    name: {
        type: DataTypes.STRING,
    },
    dot: {
        type: DataTypes.STRING
    },
    address: {
        type: DataTypes.STRING
    },
    description: {
        type: DataTypes.STRING
    }
});
