const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('PlanComision', {
    PlanComisionID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    PlanDescripcion: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    PlanTipoCalculo: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    CalculoSubordinados: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    PlanComisionBaja: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    Identity: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'PlanComision',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_PlanComision",
        unique: true,
        fields: [
          { name: "PlanComisionID" },
        ]
      },
    ]
  });
};
