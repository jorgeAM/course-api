const Attribute = (sequelize, Sequelize) => {
  const model = sequelize.define('Attribute', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    typeItem: {
      type: Sequelize.STRING
    },
    title: {
      type: Sequelize.STRING,
      allowNull: false
    },
    resume: {
      type: Sequelize.TEXT
    },
    value: {
      type: Sequelize.STRING
    }
  })

  model.associate = models => {
    model.belongsTo(models.Tab)
  }

  return model
}

export default Attribute
