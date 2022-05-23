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
    await queryInterface.bulkInsert('Card', [{
      title: 'Название коко-е-то',
      description: 'Описание какое-то вот тут вот вооот',
      img: '../путь-картинки/картинка.jpeg',
      user_id: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title: 'Названа как-то коко-е-то',
      description: 'Описание вот вот воттт какое-то вот тут вот вооот',
      img: '../путь-картинки/картинка.jpeg',
      user_id: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title: 'Названа как-то tak',
      description: 'Описание VOT вот вот воттт какое-то вот тут вот вооот',
      img: '../путь-картинки/картинка.jpeg',
      user_id: 3,
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
