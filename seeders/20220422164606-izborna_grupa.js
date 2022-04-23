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
      "Izborna_grupas",
      [
        {
          naziv: "moja grupa 1",
          opstina_id: 1,
          koordinate: "test",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          naziv: "moja grupa 2",
          opstina_id: 1,
          koordinate: "test",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          naziv: "moja grupa 3",
          opstina_id: 1,
          koordinate: "test",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          naziv: "moja grupa 4",
          opstina_id: 2,
          koordinate: "test",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          naziv: "moja grupa 5",
          opstina_id: 2,
          koordinate: "test",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          naziv: "moja grupa 6",
          opstina_id: 3,
          koordinate: "test",
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
    await queryInterface.bulkDelete("Izborna_grupas", null, {});
  },
};
