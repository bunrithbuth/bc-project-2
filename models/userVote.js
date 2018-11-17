module.exports = function(sequelize, DataTypes) {
    var userVote = sequelize.define("userVote", {
        userName: {
            type: DataTypes.STRING,
            // AllowNull is a flag that restricts a todo from being entered if it doesn't
            // have a text value
            allowNull: false,
            // len is a validation that checks that our todo is between 1 and 140 characters
            validate: {
                len: [1, 16]
            }
        },
        pollOptionId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        starRating: {
            type: DataTypes.FLOAT(2,1),
            allowNull: true, 
        },
        vote: {
            type: DataTypes.INTEGER,
            allowNull: true, 
        }
        
    });
    return userVote;
  };