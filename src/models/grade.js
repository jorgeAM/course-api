import SequelizeSlugify from 'sequelize-slugify'

const Grade = (sequelize, Sequelize) => {
  const model = sequelize.define('Grade', {
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
    model.belongsTo(models.School)

    model.hasMany(models.Course)
  }

  SequelizeSlugify.slugifyModel(model, {
    source: ['name']
  })

  return model
}

export default Grade
