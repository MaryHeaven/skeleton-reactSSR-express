const bcrypt = require('bcrypt');

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
    await queryInterface.bulkInsert('Users', [{
      name: 'Admin',
      email: 'admin@skelet.ru',
      password: await bcrypt.hash('admin', 10),
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Boba',
      email: 'boba@skelet.ru',
      password: await bcrypt.hash('boba', 10),
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Hoba',
      email: 'hoba@skelet.ru',
      password: await bcrypt.hash('hoba', 10),
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Mary',
      email: 'mary@skelet.ru',
      password: await bcrypt.hash('mary', 10),
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
