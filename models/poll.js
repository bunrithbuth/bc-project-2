// polls table w/ columns
// // type, user_id, is_private

module.exports = function(sequelize, DataTypes) {
    var poll = sequelize.define("poll", {
      type: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      isPrivate: {
        type: DataTypes.BOOLEAN,
        allowNull: false, 
      },
      expiration: {
          type: DataTypes.DATE,
          allowNull: false,
          defaultValue: DataTypes.NOW
      },
      uId: {
        type: DataTypes.STRING,
        allowNull: true,
      }
    });


    poll.associate = function(models) {
        poll.hasMany(models.pollOption, {
            onDelete: "cascade",
        })
    }

    return poll;
  };
  