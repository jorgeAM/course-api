import SequelizeSlugify from 'sequelize-slugify'

const School = (sequelize, Sequelize) => {
  const model = sequelize.define('School', {
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
    }
  })

  model.associate = models => {
    model.hasMany(models.Course)

    model.hasMany(models.Grade)

    model.hasOne(models.Identification, {
      foreignKey: 'identificableId',
      constraints: false,
      scope: {
        imageableType: 'school'
      }
    })

    model.hasMany(models.User)
  }

  SequelizeSlugify.slugifyModel(model, {
    source: ['name']
  })

  return model
}

export default School
