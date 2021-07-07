const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mmPSDet', {
    CodCliente: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    CodEdificio: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    CodUnidad: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    CodConFac: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    Observaciones1: {
      type: DataTypes.STRING(21),
      allowNull: false,
      defaultValue: ""
    },
    Observaciones2: {
      type: DataTypes.STRING(21),
      allowNull: false,
      defaultValue: ""
    },
    Presupuesto: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    Periodicidad: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    MesInicio: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'mmPSDet',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "xCodCliente_mPSd",
        unique: true,
        fields: [
          { name: "CodCliente" },
          { name: "CodEdificio" },
          { name: "CodUnidad" },
          { name: "CodConFac" },
        ]
      },
    ]
  });
};
