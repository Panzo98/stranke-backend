"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Predikcija_izbornog_mjesta extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Predikcija_izbornog_mjesta.belongsTo(models.Rezultati_izbornog_mjesta, {
        foreignKey: "rezultati_izbornog_mjesta_id",
      });
      Predikcija_izbornog_mjesta.belongsTo(models.Kandidat, {
        foreignKey: "kandidat_id",
      });
      Predikcija_izbornog_mjesta.belongsTo(models.Izborno_mjesto, {
        foreignKey: "izborno_mjesto_id",
      });
      Predikcija_izbornog_mjesta.belongsTo(models.Izlaznost_izbornog_mjesta, {
        foreignKey: "izlaznost_izbornog_mjesta_id",
      });
      Predikcija_izbornog_mjesta.belongsTo(models.User, {
        foreignKey: "kreirao_user_id",
      });
    }
  }
  Predikcija_izbornog_mjesta.init(
    {
      rezultati_izbornog_mjesta_id: DataTypes.INTEGER,
      kandidat_id: DataTypes.INTEGER,
      izborno_mjesto_id: DataTypes.INTEGER,
      broj_ocekivanih: DataTypes.INTEGER,
      izlaznost_izbornog_mjesta_id: DataTypes.INTEGER,
      kreirao_user_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Predikcija_izbornog_mjesta",
    }
  );
  return Predikcija_izbornog_mjesta;
};
