const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('xcGenCoC', {
    IdRegConfig: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    IdRegComGenerar: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    TipComprobante: {
      type: DataTypes.STRING(21),
      allowNull: false,
      defaultValue: ""
    },
    CodTalona: {
      type: DataTypes.STRING(4),
      allowNull: false,
      defaultValue: ""
    },
    CodComVta: {
      type: DataTypes.STRING(4),
      allowNull: false,
      defaultValue: ""
    },
    Ejecucion: {
      type: DataTypes.STRING(20),
      allowNull: false,
      defaultValue: ""
    },
    CalcImpuesto: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: ""
    },
    ApliCredito: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: ""
    },
    ApliCuoResumen: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: ""
    },
    InvStock: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: ""
    }
  }, {
    sequelize,
    tableName: 'xcGenCoC',
    schema: 'dbo',
    hasTrigger: true,
    timestamps: false,
    indexes: [
      {
        name: "xIdCfgIdReg_xGeCoC",
        unique: true,
        fields: [
          { name: "IdRegConfig" },
          { name: "IdRegComGenerar" },
        ]
      },
    ]
  });
};
