module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('user', {
      name: {
        allowNull: false,
        type: DataTypes.STRING
      },
      dob: {
        allowNull: false,
        type: DataTypes.STRING
      },
      address: {
        allowNull: true,
        type: DataTypes.JSON
      },
      description: {
        allowNull: true,
        type: DataTypes.STRING
      }
    }, {underscored: true});
    User.associate = function(models) {
      //
    };
    return User;
  };
  