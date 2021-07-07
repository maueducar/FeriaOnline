const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('omCtrlPer', {
    IdPeriControl: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    Calcular: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    FecInicial: {
      type: DataTypes.DATE,
      allowNull: true
    },
    FecFinal: {
      type: DataTypes.DATE,
      allowNull: true
    },
    TipDefPeriodos: {
      type: DataTypes.STRING(9),
      allowNull: false,
      defaultValue: ""
    },
    DesdeDia: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    HastaDia: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    UltCalFecha: {
      type: DataTypes.DATE,
      allowNull: true
    },
    UltCalHora: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'omCtrlPer',
    schema: 'dbo',
    hasTrigger: true,
    timestamps: false,
    indexes: [
      {
        name: "xFechaInicial_oCtPe",
        fields: [
          { name: "FecInicial" },
        ]
      },
      {
        name: "xIdPeriControl",
        unique: true,
        fields: [
          { name: "IdPeriControl" },
        ]
      },
    ]
  });
};
