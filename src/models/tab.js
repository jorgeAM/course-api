const Tab = (sequelize, Sequelize) => {
  const model = sequelize.define('Tab', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false
    }
  })

  model.associate = models => {
    model.belongsTo(models.Week)
  }

  return model
}

export default Tab
