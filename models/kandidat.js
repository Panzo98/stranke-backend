"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Kandidat extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Kandidat.hasMany(models.Predikcija_izbornog_mjesta, {
        foreignKey: "kandidat_id",
      });
      Kandidat.hasMany(models.Rezultati_izbornog_mjesta, {
        foreignKey: "kandidat_id",
      });
    }
  }
  Kandidat.init(
    {
      naziv: DataTypes.STRING,
      boja: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Kandidat",
    }
  );
  return Kandidat;
};
