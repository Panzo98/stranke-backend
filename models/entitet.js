"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Entitet extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Entitet.hasMany(models.Opstina, {
        foreignKey: "entitet_id",
      });
    }
  }
  Entitet.init(
    {
      naziv: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Entitet",
    }
  );
  return Entitet;
};
