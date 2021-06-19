import { Sequelize, Model, DataTypes, Optional } from "sequelize";
import { sequelize } from '../instances/sequelize'

export interface UserModel {
    id: number;
    name: string;
    dot: string;
    address: string;
    description: string
}

interface UserCreationAttributes extends Optional<UserModel, "id"> { }

interface UserInstance
    extends Model<UserModel, UserCreationAttributes>,
    UserModel { }

export const User = sequelize.define<UserInstance>("User", {
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
