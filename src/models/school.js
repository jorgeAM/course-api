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
      allowNull: false
    }
  })

  model.associate = models => {
    model.hasMany(models.User)

    model.hasMany(models.Grade)

    model.hasMany(models.Course)
  }

  return model
}

export default School
