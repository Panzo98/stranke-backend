"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Vrsta_izbora extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Vrsta_izbora.hasMany(models.Izbori, {
        foreignKey: "vrsta_izbora_id",
      });
      Vrsta_izbora.hasMany(models.Podvrsta_izbora, {
        foreignKey: "vrsta_izbora_id",
      });
    }
  }
  Vrsta_izbora.init(
    {
      naziv: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Vrsta_izbora",
    }
  );
  return Vrsta_izbora;
};
