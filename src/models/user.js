const User = (sequelize, Sequelize) => {
  const model = sequelize.define('User', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    firstName: {
      type: Sequelize.STRING,
      allowNull: false
    },
    lastName: {
      type: Sequelize.STRING,
      allowNull: false
    },
    gender: {
      type: Sequelize.ENUM,
      values: ['masculino', 'femenino', 'otros']
    },
    birthday: {
      type: Sequelize.DATE,
      allowNull: false
    },
    email: {
      type: Sequelize.STRING,
      unique: true,
      allowNull: false
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false
    },
    lastConnection: {
      type: Sequelize.DATE,
      allowNull: false
    }
  })

  model.associate = models => {
    model.belongsTo(models.Role)

    model.belongsTo(models.School)

    model.hasMany(models.Course, {
      foreignKey: 'TeacherId'
    })
  }

  return model
}

export default User
