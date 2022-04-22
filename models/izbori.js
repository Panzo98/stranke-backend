"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Izbori extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Izbori.belongsTo(models.Vrsta_izbora, {
        foreignKey: "vrsta_izbora_id",
      });
      Izbori.hasMany(models.Rezultati_izbornog_mjesta, {
        foreignKey: "izbori_id",
      });
      Izbori.hasMany(models.Izlaznost_izbornog_mjesta, {
        foreignKey: "izbori_id",
      });
    }
  }
  Izbori.init(
    {
      godina: DataTypes.INTEGER,
      vrsta_izbora_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Izbori",
    }
  );
  return Izbori;
};
