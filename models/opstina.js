"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Opstina extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Opstina.belongsTo(models.Entitet, {
        foreignKey: "entitet_id",
      });
      Opstina.hasMany(models.Izborna_grupa, {
        foreignKey: "opstina_id",
      });
      Opstina.hasMany(models.Izborno_mjesto, {
        foreignKey: "opstina_id",
      });
    }
  }
  Opstina.init(
    {
      naziv: DataTypes.STRING,
      entitet_id: DataTypes.INTEGER,
      eksterni_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Opstina",
    }
  );
  return Opstina;
};
