const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('xgPeriodos', {
    IdRegistro: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    TipoPeriodo: {
      type: DataTypes.STRING(10),
      allowNull: false,
      defaultValue: ""
    },
    Dia: {
      type: DataTypes.DATE,
      allowNull: true
    },
    NroMes: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    NroAnio: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'xgPeriodos',
    schema: 'dbo',
    hasTrigger: true,
    timestamps: false,
    indexes: [
      {
        name: "xIdRegistro_xgPer",
        unique: true,
        fields: [
          { name: "IdRegistro" },
        ]
      },
      {
        name: "xTipoDia_xgPer",
        unique: true,
        fields: [
          { name: "TipoPeriodo" },
          { name: "Dia" },
          { name: "IdRegistro" },
        ]
      },
    ]
  });
};
