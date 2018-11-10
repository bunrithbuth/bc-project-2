// polls table w/ columns
// // type, user_id, is_private

module.exports = function(sequelize, DataTypes) {
    var polls = sequelize.define("polls", {
      type: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      user_id: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      is_private: {
        type: DataTypes.BOOLEAN,
        allowNull: false, 
      }
    });


    // polls.associate = models => {
    //     polls.hasMany(models.poll_entry, {
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
  