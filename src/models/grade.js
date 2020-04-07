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
      allowNull: false
    }
  })

  model.associate = models => {
    model.belongsTo(models.School)

    model.hasMany(models.Course)
  }

  return model
}

export default Grade
