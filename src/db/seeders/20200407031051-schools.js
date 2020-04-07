'use strict'

module.exports = {
  up: queryInterface => {
    const data = [
      {
        name: 'Trilce Trujillo',
        slug: 'trilce-trujillo'
      },
      {
        name: 'Flemming',
        slug: 'flemming'
      }
    ]

    const normalizeItem = item => ({
      ...item,
      createdAt: new Date(),
      updatedAt: new Date()
    })

    const payload = data.map(normalizeItem)

    return queryInterface.bulkInsert('Schools', payload)
  },

  down: queryInterface => {
    return queryInterface.bulkDelete('Schools', null, {})
  }
}
