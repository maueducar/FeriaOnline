const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('vmLiCCab', {
    IdLiquidacion: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    CodSucurs: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    NumLiquidacion: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    FecLiquidacion: {
      type: DataTypes.DATE,
      allowNull: true
    },
    PeriDesFecha: {
      type: DataTypes.DATE,
      allowNull: true
    },
    PeriHasFecha: {
      type: DataTypes.DATE,
      allowNull: true
    },
    EstLiquidacion: {
      type: DataTypes.STRING(2),
      allowNull: false,
      defaultValue: ""
    },
    HorLiquidacion: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    CodVended: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    Audit_CodUsuario: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    Audit_NomUsuario: {
      type: DataTypes.STRING(26),
      allowNull: false,
      defaultValue: ""
    },
    Audit_Fecha: {
      type: DataTypes.DATE,
      allowNull: true
    },
    Audit_Hora: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    TotalLiquidacion: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    TotalDebito: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    TotalCredito: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    TotBasImpDeb: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    TotBasImpCre: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    CantRecibos: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    CantCompALiq: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    CanRegCheq: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    ImpBruTotalChe: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    FacCantRegApli: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    FacImpBruAplic: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    FacImpNetoAplic: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    DetFacCanReg: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    DetFacBaseImp: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    DetFacComision: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'vmLiCCab',
    schema: 'dbo',
    hasTrigger: true,
    timestamps: false,
    indexes: [
      {
        name: "xEstadoVendedor",
        fields: [
          { name: "EstLiquidacion" },
          { name: "CodVended" },
          { name: "IdLiquidacion" },
        ]
      },
      {
        name: "xIdLiquidacion",
        unique: true,
        fields: [
          { name: "IdLiquidacion" },
        ]
      },
      {
        name: "xPeriLiqVendedor",
        fields: [
          { name: "PeriDesFecha" },
          { name: "CodVended" },
        ]
      },
      {
        name: "xSucNroLiq",
        fields: [
          { name: "CodSucurs" },
          { name: "NumLiquidacion" },
          { name: "IdLiquidacion" },
        ]
      },
      {
        name: "xVendFechaLiq",
        fields: [
          { name: "CodVended" },
          { name: "FecLiquidacion" },
        ]
      },
      {
        name: "xVendPeriLiq",
        fields: [
          { name: "CodVended" },
          { name: "PeriDesFecha" },
        ]
      },
    ]
  });
};
