"use strict";
const { Model } = require("sequelize");
const opstina = require("./opstina");
module.exports = (sequelize, DataTypes) => {
  class Izborna_grupa extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Izborna_grupa.belongsTo(models.Opstina, {
        foreignKey: "opstina_id",
      });
      Izborna_grupa.hasMany(models.Izborno_mjesto, {
        foreignKey: "izborna_grupa_id",
      });
    }
  }
  Izborna_grupa.init(
    {
      naziv: DataTypes.STRING,
      opstina_id: DataTypes.INTEGER,
      koordinate: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Izborna_grupa",
    }
  );
  return Izborna_grupa;
};
