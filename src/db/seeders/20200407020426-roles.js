'use strict'

module.exports = {
  up: queryInterface => {
    const data = [
      {
        name: 'Profesor',
        slug: 'teacher'
      },
      {
        name: 'Administrador',
        slug: 'admin'
      }
    ]

    const normalizeItem = item => ({
      ...item,
      createdAt: new Date(),
      updatedAt: new Date()
    })

    const payload = data.map(normalizeItem)

    return queryInterface.bulkInsert('Roles', payload)
  },

  down: queryInterface => {
    return queryInterface.bulkDelete('Roles', null, {})
  }
}
