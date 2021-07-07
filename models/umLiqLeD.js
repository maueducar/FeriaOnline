const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('umLiqLeD', {
    NroLiquidacion: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    IdLegajo: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    CodConLiquid: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    Cantidad: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    ValUnitario: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    ValGenerico: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    ImpoTotal: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    TempFec1: {
      type: DataTypes.DATE,
      allowNull: true
    },
    TempFec2: {
      type: DataTypes.DATE,
      allowNull: true
    },
    HabRemun: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    Retenciones: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    HabNoRemun: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    ImpPuente: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    Autos: {
      type: DataTypes.STRING(21),
      allowNull: false,
      defaultValue: ""
    },
    ConcParticular: {
      type: DataTypes.STRING(51),
      allowNull: false,
      defaultValue: ""
    }
  }, {
    sequelize,
    tableName: 'umLiqLeD',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "xConLiq",
        fields: [
          { name: "CodConLiquid" },
        ]
      },
      {
        name: "xConLiq_Leg_NLiq",
        fields: [
          { name: "CodConLiquid" },
          { name: "IdLegajo" },
          { name: "NroLiquidacion" },
        ]
      },
      {
        name: "xIdLegajo",
        fields: [
          { name: "IdLegajo" },
          { name: "NroLiquidacion" },
          { name: "CodConLiquid" },
        ]
      },
      {
        name: "xIdLegLiqOnly",
        fields: [
          { name: "IdLegajo" },
        ]
      },
      {
        name: "xNroLiqConLeg",
        fields: [
          { name: "NroLiquidacion" },
          { name: "CodConLiquid" },
          { name: "IdLegajo" },
        ]
      },
      {
        name: "xNroLiquida",
        unique: true,
        fields: [
          { name: "NroLiquidacion" },
          { name: "IdLegajo" },
          { name: "CodConLiquid" },
        ]
      },
      {
        name: "xNroLiquidOnly",
        fields: [
          { name: "NroLiquidacion" },
          { name: "IdLegajo" },
        ]
      },
    ]
  });
};
