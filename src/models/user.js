const { Model, DataTypes } = require('sequelize');

class User extends Model {
  static init(sequelize) {
    super.init({
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty:{
            msg: "name field cannot be empty"
          }
        }      
      },
      dob: {
        type: DataTypes.DATEONLY,
        allowNull: false,
        validate: {
          notEmpty:{
            msg: "dob field cannot be empty"
          }
        }   
      },
      address: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty:{
            msg: "address field cannot be empty"
          }
        }   
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty:{
            msg: "description field cannot be empty"
          }
        }   
      }
    }, {
      sequelize
    });
  };
}
module.exports = User;