"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Izlaznost_izbornog_mjesta", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      izborno_mjesto_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: "Izborno_mjestos",
          key: "id",
        },
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      },
      izbori_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: "Izboris",
          key: "id",
        },
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      },
      podvrsta_izbora_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: "Podvrsta_izboras",
          key: "id",
        },
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      },
      broj_glasaca: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      broj_obradjeniih_listica: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      broj_vazecih_listica: {
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
    await queryInterface.dropTable("Izlaznost_izbornog_mjesta");
  },
};
