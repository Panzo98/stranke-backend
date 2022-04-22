"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Rezultati_izbornog_mjesta", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      izbori_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "Izboris",
          key: "id",
        },
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      },
      podvrsta_izbora_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "Podvrsta_izboras",
          key: "id",
        },
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      },
      kandidat_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "Kandidats",
          key: "id",
        },
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      },
      izborno_mjesto_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "Izborno_mjestos",
          key: "id",
        },
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      },
      ostvarenih_glasova: {
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
    await queryInterface.dropTable("Rezultati_izbornog_mjesta");
  },
};
