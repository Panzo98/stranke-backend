"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Izlaznost_izbornog_mjesta extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Izlaznost_izbornog_mjesta.hasMany(models.Predikcija_izbornog_mjesta, {
        foreignKey: "izlaznost_izbornog_mjesta_id",
      });
      Izlaznost_izbornog_mjesta.belongsTo(models.Izborno_mjesto, {
        foreignKey: "izborno_mjesto_id",
      });
      Izlaznost_izbornog_mjesta.belongsTo(models.Izbori, {
        foreignKey: "izbori_id",
      });
      Izlaznost_izbornog_mjesta.belongsTo(models.Podvrsta_izbora, {
        foreignKey: "podvrsta_izbora_id",
      });
    }
  }
  Izlaznost_izbornog_mjesta.init(
    {
      izborno_mjesto_id: DataTypes.INTEGER,
      izbori_id: DataTypes.INTEGER,
      podvrsta_izbora_id: DataTypes.INTEGER,
      broj_glasaca: DataTypes.INTEGER,
      broj_obradjeniih_listica: DataTypes.INTEGER,
      broj_vazecih_listica: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Izlaznost_izbornog_mjesta",
    }
  );
  return Izlaznost_izbornog_mjesta;
};
