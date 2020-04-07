'use strict'

const { map, keyBy } = require('lodash')

module.exports = {
  up: async queryInterface => {
    const { sequelize } = queryInterface

    const selectOptions = { type: sequelize.QueryTypes.SELECT }

    const schools = await sequelize.query('SELECT *FROM Schools', selectOptions)

    const data = [
      {
        type: 'ruc',
        value: '20483930390',
        identificableType: 'school',
        school: 'trilce-trujillo'
      },
      {
        type: 'ruc',
        value: '20452330390',
        identificableType: 'school',
        school: 'flemming'
      }
    ]

    const schoolsBySlug = keyBy(schools, 'slug')

    const normalize = item => {
      const { type, value, identificableType, school } = item

      return {
        type,
        value,
        identificableType,
        identificableId: schoolsBySlug[school].id,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    }

    const payload = map(data, normalize)

    return queryInterface.bulkInsert('Identifications', payload)
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Identifications', null, {})
  }
}
