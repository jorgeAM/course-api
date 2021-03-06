import SequelizeSlugify from 'sequelize-slugify'

const Course = (sequelize, Sequelize) => {
  const model = sequelize.define('Course', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false
    },
    slug: {
      type: Sequelize.STRING,
      unique: true
    },
    description: {
      type: Sequelize.TEXT,
      allowNull: true
    },
    banner: {
      type: Sequelize.TEXT
    }
  })

  model.associate = models => {
    model.belongsTo(models.Grade)

    model.belongsTo(models.School)

    model.belongsTo(models.User, {
      as: 'Teacher',
      foreignKey: 'TeacherId'
    })

    model.hasMany(models.Week)
  }

  SequelizeSlugify.slugifyModel(model, {
    source: ['name']
  })

  return model
}

export default Course
