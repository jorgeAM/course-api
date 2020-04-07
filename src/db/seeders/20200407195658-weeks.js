'use strict'

const { map, keyBy } = require('lodash')
const moment = require('moment')

module.exports = {
  up: async queryInterface => {
    const { sequelize } = queryInterface

    const selectOptions = { type: sequelize.QueryTypes.SELECT }

    const courses = await sequelize.query('SELECT *FROM Courses', selectOptions)

    const startDate = moment()

    const endDate = startDate.clone().add(7, 'day')

    const data = [
      {
        name: 'semana 1',
        startDate: startDate.toDate(),
        endDate: endDate.toDate(),
        course: 'calculo-ii'
      },
      {
        name: 'semana 1',
        startDate: startDate.toDate(),
        endDate: endDate.toDate(),
        course: 'calculo-i'
      },
      {
        name: 'semana 1',
        startDate: startDate.toDate(),
        endDate: endDate.toDate(),
        course: 'arte'
      },
      {
        name: 'semana 1',
        startDate: startDate.toDate(),
        endDate: endDate.toDate(),
        course: 'historia'
      }
    ]

    const courseBySlug = keyBy(courses, 'slug')

    const normalize = item => {
      const { name, startDate, endDate, course } = item

      return {
        name,
        startDate,
        endDate,
        CourseId: courseBySlug[course].id,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    }

    const payload = map(data, normalize)

    return queryInterface.bulkInsert('Weeks', payload)
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Weeks', null, {})
  }
}
