"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Izborno_mjestos", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      naziv: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      izborna_grupa_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "Izborna_grupas",
          key: "id",
        },
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      },
      opstina_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "Opstinas",
          key: "id",
        },
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      },
      koordinate: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      eksterni_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Izborno_mjestos");
  },
};
