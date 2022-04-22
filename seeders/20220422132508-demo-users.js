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
      "Users",
      [
        {
          username: "administrator",
          password:
            "$2a$12$zHrtK6Y1QczluWTolEz5VOTXRWuqn17uzrp2xs7PsBXbSeLuYeI4C",
          role_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: "pregledac",
          password:
            "$2a$12$zHrtK6Y1QczluWTolEz5VOTXRWuqn17uzrp2xs7PsBXbSeLuYeI4C",
          role_id: 2,
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
    await queryInterface.bulkDelete("Users", null, {});
  },
};
