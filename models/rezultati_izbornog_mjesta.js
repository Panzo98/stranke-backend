"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Rezultati_izbornog_mjesta extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Rezultati_izbornog_mjesta.hasMany(models.Predikcija_izbornog_mjesta, {
        foreignKey: "rezultati_izbornog_mjesta_id",
      });
      Rezultati_izbornog_mjesta.belongsTo(models.Izborno_mjesto, {
        foreignKey: "izborno_mjesto_id",
      });
      Rezultati_izbornog_mjesta.belongsTo(models.Izbori, {
        foreignKey: "izbori_id",
      });
      Rezultati_izbornog_mjesta.belongsTo(models.Podvrsta_izbora, {
        foreignKey: "podvrsta_izbora_id",
      });
    }
  }
  Rezultati_izbornog_mjesta.init(
    {
      izbori_id: DataTypes.INTEGER,
      podvrsta_izbora_id: DataTypes.INTEGER,
      kandidat_id: DataTypes.INTEGER,
      izborno_mjesto_id: DataTypes.INTEGER,
      ostvarenih_glasova: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Rezultati_izbornog_mjesta",
    }
  );
  return Rezultati_izbornog_mjesta;
};
