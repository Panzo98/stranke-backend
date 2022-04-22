"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Podvrsta_izboras", {
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
      vrsta_izbora_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "Vrsta_izboras",
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
    await queryInterface.dropTable("Podvrsta_izboras");
  },
};
