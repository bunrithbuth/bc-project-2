// polls table w/ columns
// // type, user_id, is_private

module.exports = function(sequelize, DataTypes) {
    var polls = sequelize.define("polls", {
      type: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      user_name: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      is_private: {
        type: DataTypes.BOOLEAN,
        allowNull: false, 
      },
      expiration: {
          type: DataTypes.DATE,
          allowNull: false,
          defaultValue: DataTypes.NOW
      }
    });


    // polls.associate = models => {
    //     polls.hasMany(models.poll_options, {
    //         onDelete: "cascade"
    //     })

    //     polls.belongsTo(models.users, {
    //         foreignKey: {
    //             allowNull: true
    //         }
    //     })
    // }

    return polls;
  };
  