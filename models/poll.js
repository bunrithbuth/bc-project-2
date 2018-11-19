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
      userName: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      isPrivate: {
        type: DataTypes.BOOLEAN,
        allowNull: false, 
      },
      expiration: {
          type: DataTypes.DATE,
          allowNull: false,
          defaultValue: DataTypes.NOW
      }
    });


    poll.associate = function(models) {
        poll.hasMany(models.pollOption, {
            onDelete: "cascade",
        })
    }

    return poll;
  };
  