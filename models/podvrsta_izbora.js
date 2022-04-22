"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Podvrsta_izbora extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Podvrsta_izbora.belongsTo(models.Vrsta_izbora, {
        foreignKey: "vrsta_izbora_id",
      });
      Podvrsta_izbora.hasMany(models.Rezultati_izbornog_mjesta, {
        foreignKey: "podvrsta_izbora_id",
      });
      Podvrsta_izbora.hasMany(models.Izlaznost_izbornog_mjesta, {
        foreignKey: "podvrsta_izbora_id",
      });
    }
  }
  Podvrsta_izbora.init(
    {
      naziv: DataTypes.STRING,
      vrsta_izbora_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Podvrsta_izbora",
    }
  );
  return Podvrsta_izbora;
};
