module.exports = function(sequelize, DataTypes) {
    var user_votes = sequelize.define("user_votes", {
        user_name: {
            type: DataTypes.STRING,
            // AllowNull is a flag that restricts a todo from being entered if it doesn't
            // have a text value
            allowNull: false,
            // len is a validation that checks that our todo is between 1 and 140 characters
            validate: {
                len: [1, 16]
            }
        },
        poll_entry_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        star_rating: {
            type: DataTypes.FLOAT(2,1),
            allowNull: true, 
        },
        vote: {
            type: DataTypes.INTEGER,
            allowNull: true, 
        }
        
    });
    return user_votes;
  };