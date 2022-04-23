"use strict";
const izbornaMjesta = require("../data/biracka_mjesta.json");
const izbornaMjestaFull = izbornaMjesta.map((elem) => {
  return {
    ...elem,
    createdAt: new Date(),
    updatedAt: new Date(),
  };
});
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
    await queryInterface.bulkInsert("Izborno_mjestos", izbornaMjestaFull, {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("Izborno_mjestos", null, {});
  },
};
