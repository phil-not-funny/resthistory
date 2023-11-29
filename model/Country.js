const { DataTypes, Model } = require("sequelize");
const sequelize = require("../database");

class Country extends Model {}

Country.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },

}, {
    sequelize,
    modelName: "country"
});

module.exports = Country;