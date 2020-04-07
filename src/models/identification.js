const Identification = (sequelize, Sequelize) => {
  const model = sequelize.define('Identification', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    type: {
      type: Sequelize.ENUM,
      values: ['dni', 'pasaporte', 'carnet-extranjeria', 'ruc']
    },
    value: {
      type: Sequelize.STRING,
      unique: true,
      allowNull: false
    },
    identificableType: {
      type: Sequelize.STRING,
      allowNull: false
    },
    identificableId: {
      type: Sequelize.INTEGER,
      allowNull: false
    }
  })

  model.associate = models => {
    model.belongsTo(models.School, {
      foreignKey: 'identificableId',
      constraints: false
    })

    model.belongsTo(models.User, {
      foreignKey: 'identificableId',
      constraints: false
    })
  }

  return model
}

export default Identification
