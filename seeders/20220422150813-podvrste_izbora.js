"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert(
      "Podvrsta_izboras",
      [
        {
          naziv: "Predsjedništvo BiH",
          vrsta_izbora_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          naziv: "Parlamentarna skupština BiH",
          vrsta_izbora_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          naziv: "Parlament FBiH",
          vrsta_izbora_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          naziv: "Predsjednik RS",
          vrsta_izbora_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          naziv: "Narodna skupština RS",
          vrsta_izbora_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          naziv: "Skupštine kantona u FBiH",
          vrsta_izbora_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          naziv: "Načelnik/Gradonačelnik",
          vrsta_izbora_id: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          naziv: "OV/SO/GV/SG/SD",
          vrsta_izbora_id: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("Podvrsta_izboras", null, {});
  },
};
