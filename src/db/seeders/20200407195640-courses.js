'use strict'

const { map, keyBy } = require('lodash')

module.exports = {
  up: async queryInterface => {
    const { sequelize } = queryInterface

    const selectOptions = { type: sequelize.QueryTypes.SELECT }

    const [grades, teachers, schools] = await Promise.all([
      sequelize.query('SELECT *FROM Grades', selectOptions),
      sequelize.query('SELECT *FROM Users', selectOptions),
      sequelize.query('SELECT *FROM Schools', selectOptions)
    ])

    const data = [
      {
        name: 'calculo I',
        slug: 'calculo-i',
        description: 'curso basico de calculo',
        grade: '5to-a',
        teacher: 'teacher@trilce.com',
        school: 'trilce-trujillo'
      },
      {
        name: 'calculo II',
        slug: 'calculo-ii',
        grade: '4to-a',
        teacher: 'teacher@trilce.com',
        school: 'trilce-trujillo'
      },
      {
        name: 'Historia',
        slug: 'historia',
        teacher: 'teacher@flemming.com',
        grade: '1ero-a',
        school: 'flemming'
      },
      {
        name: 'Arte',
        slug: 'arte',
        teacher: 'teacher@flemming.com',
        grade: '1ero-a',
        school: 'flemming'
      }
    ]

    const gradesBySlug = keyBy(grades, 'slug')
    const schoolsBySlug = keyBy(schools, 'slug')
    const teacherByEmail = keyBy(teachers, 'email')

    const normalize = item => {
      const { name, slug, school, teacher, grade } = item

      return {
        name,
        slug,
        GradeId: gradesBySlug[grade].id,
        TeacherId: teacherByEmail[teacher].id,
        SchoolId: schoolsBySlug[school].id,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    }

    const payload = map(data, normalize)

    return queryInterface.bulkInsert('Courses', payload)
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Courses', null, {})
  }
}
