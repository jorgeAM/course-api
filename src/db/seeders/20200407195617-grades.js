'use strict'

const { map, keyBy } = require('lodash')

module.exports = {
  up: async queryInterface => {
    const { sequelize } = queryInterface

    const selectOptions = { type: sequelize.QueryTypes.SELECT }

    const schools = await sequelize.query('SELECT *FROM Schools', selectOptions)

    const data = [
      {
        name: '4to A',
        slug: '4to-a',
        school: 'trilce-trujillo'
      },
      {
        name: '5to A',
        slug: '5to-a',
        school: 'trilce-trujillo'
      },
      {
        name: '6to A',
        slug: '6to-a',
        school: 'trilce-trujillo'
      },
      {
        name: '1ero A',
        slug: '1ero-a',
        school: 'flemming'
      },
      {
        name: '3ero A',
        slug: '3ero-a',
        school: 'flemming'
      }
    ]

    const schoolsBySlug = keyBy(schools, 'slug')

    const normalize = item => {
      const { name, slug, school } = item

      return {
        name,
        slug,
        SchoolId: schoolsBySlug[school].id,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    }

    const payload = map(data, normalize)

    return queryInterface.bulkInsert('Grades', payload)
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Grades', null, {})
  }
}
