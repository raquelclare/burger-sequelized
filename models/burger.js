// My Sequelize Burger model
module.exports = function(sequelize, DataTypes) {
    var Burger = sequelize.define("burgers", {
        burger_name: {
            type: DataTypes.STRING, 
            // Add a flag for the burger_name attribute to prevent this field from being null
            allowNull: false,
            // Add a validation for the burger_name attribute to make sure it's at least one character,
            // but no more than 140 characters
            validate: {
                len: [1, 140]
            }
        }, 
        devoured: {
            type: DataTypes.BOOLEAN,
            // Add a flag for devoured so that it's false by default if not given a value
            default: false
        }
    });
    return Burger;
}