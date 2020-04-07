const Week = (sequelize, Sequelize) => {
  const model = sequelize.define('Week', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false
    },
    startDate: {
      type: Sequelize.DATE,
      allowNull: false
    },
    endDate: {
      type: Sequelize.DATE,
      allowNull: false
    }
  })

  model.associate = models => {
    model.belongsTo(models.Course)
  }

  return model
}

export default Week
