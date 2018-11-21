module.exports = function(sequelize, DataTypes) {
    var user = sequelize.define("user", {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1, 30]
        }
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      photoURL: {
        type: DataTypes.STRING,
        allowNull: true,
      }
    });
    return user;
};
  