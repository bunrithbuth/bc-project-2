module.exports = function(sequelize, DataTypes) {
    var pollOption = sequelize.define("pollOption", {
      pollId: {
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
      starRating: {
        type: DataTypes.FLOAT(2,1),
        allowNull: true, 
      },
      starRatingCount: {
        type: DataTypes.INTEGER,
        allowNull: true, 
      },
      votes: {
        type: DataTypes.INTEGER,
        allowNull: true, 
      }
    })

    pollOption.associate = models => {
        pollOption.belongsTo(models.poll, {
            foreignKey: { 
              allowNull: false,
              name: "pollId",
            }
        })

        pollOption.hasMany(models.userVote, {
            onDelete: "cascade",
        })
    }

    return pollOption;
  };
  