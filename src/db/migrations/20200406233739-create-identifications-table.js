'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Identifications', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      type: {
        type: Sequelize.ENUM,
        values: ['dni', 'pasaporte', 'carnet-extranjeria', 'ruc']
      },
      value: {
        type: Sequelize.STRING,
        unique: true
      },
      identificableType: {
        type: Sequelize.STRING,
        allowNull: false
      },
      identificableId: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false
      }
    })
  },

  down: queryInterface => {
    return queryInterface.dropTable('Identifications')
  }
}
