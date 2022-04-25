"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Predikcija_izbornog_mjesta", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      rezultati_izbornog_mjesta_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "Rezultati_izbornog_mjesta",
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
      broj_ocekivanih: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      izlaznost_izbornog_mjesta_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "Izlaznost_izbornog_mjesta",
          key: "id",
        },
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      },
      kreirao_user_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "Users",
          key: "id",
        },
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
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
    await queryInterface.dropTable("Predikcija_izbornog_mjesta");
  },
};
