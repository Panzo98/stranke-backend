"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Izborno_mjesto extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Izborno_mjesto.belongsTo(models.Izborna_grupa, {
        foreignKey: "izborna_grupa_id",
      });
      Izborno_mjesto.hasMany(models.Rezultati_izbornog_mjesta, {
        foreignKey: "izborno_mjesto_id",
      });
      Izborno_mjesto.hasMany(models.Predikcija_izbornog_mjesta, {
        foreignKey: "izborno_mjesto_id",
      });
      Izborno_mjesto.hasMany(models.Izlaznost_izbornog_mjesta, {
        foreignKey: "izborno_mjesto_id",
      });
    }
  }
  Izborno_mjesto.init(
    {
      naziv: DataTypes.STRING,
      izborna_grupa_id: DataTypes.INTEGER,
      koordinate: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Izborno_mjesto",
    }
  );
  return Izborno_mjesto;
};
