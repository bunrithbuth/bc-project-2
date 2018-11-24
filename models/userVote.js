module.exports = function(sequelize, DataTypes) {
    var userVote = sequelize.define("userVote", {
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        pollOptionId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        starRating: {
            type: DataTypes.INTEGER,
            allowNull: true, 
        },
        vote: {
            type: DataTypes.INTEGER,
            allowNull: true, 
        }
        
    });

    userVote.associate = models => {
        userVote.belongsTo(models.pollOption, {
            foreignKey: { 
              allowNull: false,
              name: "pollOptionId",
            }
        })
    }

    return userVote;
  };