module.exports = function(sequelize, DataTypes) {
    var poll_options = sequelize.define("poll_options", {
      poll_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING,
        allowNull: true, 
      },
      star_rating: {
        type: DataTypes.FLOAT(2,1),
        allowNull: true, 
      },
      star_rating_count: {
        type: DataTypes.INTEGER,
        allowNull: true, 
      },
      votes: {
        type: DataTypes.INTEGER,
        allowNull: true, 
      }
    });

    // poll_entry.associate = models => {
    //     poll_entry.belongsTo(models.polls, {
    //         foreignKey: {
    //             allowNull: false
    //         }
    //     })
    // }

    return poll_options;
  };
  