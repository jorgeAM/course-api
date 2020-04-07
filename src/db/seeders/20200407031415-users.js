'use strict'

const { map, keyBy } = require('lodash')
const bcrypt = require('bcrypt')

module.exports = {
  up: async queryInterface => {
    const { sequelize } = queryInterface

    const selectOptions = { type: sequelize.QueryTypes.SELECT }

    const [schools, roles] = await Promise.all([
      sequelize.query('SELECT *FROM Schools', selectOptions),
      sequelize.query('SELECT *FROM Roles', selectOptions)
    ])

    const data = [
      {
        firstName: 'super',
        lastName: 'admin',
        gender: 'masculino',
        birthday: '1999-12-31',
        email: 'admin@trilce.com',
        password: bcrypt.hashSync('123456', 10),
        role: 'super-admin',
        school: 'trilce-trujillo'
      },
      {
        firstName: 'super',
        lastName: 'admin',
        gender: 'masculino',
        birthday: '1999-12-31',
        email: 'admin@flemming.com',
        password: bcrypt.hashSync('123456', 10),
        role: 'super-admin',
        school: 'flemming'
      },
      {
        firstName: 'some',
        lastName: 'teacher',
        gender: 'masculino',
        birthday: '1999-12-31',
        email: 'teacher@trilce.com',
        password: bcrypt.hashSync('123456', 10),
        role: 'super-admin',
        school: 'trilce-trujillo'
      },
      {
        firstName: 'some',
        lastName: 'teacher',
        gender: 'masculino',
        birthday: '1999-12-31',
        email: 'teacher@flemming.com',
        password: bcrypt.hashSync('123456', 10),
        role: 'super-admin',
        school: 'flemming'
      }
    ]

    const schoolsBySlug = keyBy(schools, 'slug')
    const rolesByslug = keyBy(roles, 'slug')

    const normalize = item => {
      const {
        firstName,
        lastName,
        gender,
        birthday,
        email,
        password,
        role,
        school
      } = item

      return {
        firstName,
        lastName,
        gender,
        birthday,
        email,
        password,
        RoleId: rolesByslug[role].id,
        SchoolId: schoolsBySlug[school].id,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    }

    const payload = map(data, normalize)

    return queryInterface.bulkInsert('Users', payload)
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {})
  }
}
