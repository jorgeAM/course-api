const Role = (sequelize, Sequelize) => {
  const model = sequelize.define('Role', {
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
  }

  return model
}

export default Role
