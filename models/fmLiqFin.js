const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('fmLiqFin', {
    CodSucurs: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    CodPunVen: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    NroCaja: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    CodComCaja: {
      type: DataTypes.STRING(4),
      allowNull: false,
      defaultValue: "",
      primaryKey: true
    },
    LetraComprob: {
      type: DataTypes.STRING(2),
      allowNull: false,
      defaultValue: "",
      primaryKey: true
    },
    PtoVtaComprob: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    NumeroComprob: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    IdCompro: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    NroPesent: {
      type: DataTypes.STRING(16),
      allowNull: false,
      defaultValue: ""
    },
    CodEmpFin: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    FecLiquid: {
      type: DataTypes.DATE,
      allowNull: true
    },
    CuoFecVen1: {
      type: DataTypes.DATE,
      allowNull: true
    },
    CuoFecVen2: {
      type: DataTypes.DATE,
      allowNull: true
    },
    TotDeCuotas: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    Comision: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    TotACobrar: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    Concepto: {
      type: DataTypes.STRING(41),
      allowNull: false,
      defaultValue: ""
    },
    CantCuotas: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    Estado: {
      type: DataTypes.STRING(11),
      allowNull: false,
      defaultValue: ""
    },
    CuotasCobradas: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    TotalCobrado: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'fmLiqFin',
    schema: 'dbo',
    hasTrigger: true,
    timestamps: false,
    indexes: [
      {
        name: "xEmpFinan",
        fields: [
          { name: "CodEmpFin" },
        ]
      },
      {
        name: "xEmpFinIdComp_fLiqF",
        unique: true,
        fields: [
          { name: "CodEmpFin" },
          { name: "IdCompro" },
        ]
      },
      {
        name: "xFechaLiquid_fLiqF",
        unique: true,
        fields: [
          { name: "FecLiquid", order: "DESC" },
          { name: "CodEmpFin" },
          { name: "IdCompro" },
        ]
      },
      {
        name: "xNroCaja_fLiqF",
        fields: [
          { name: "CodSucurs" },
          { name: "CodPunVen" },
          { name: "NroCaja" },
        ]
      },
      {
        name: "xNroLiquidacion_fLiqF",
        unique: true,
        fields: [
          { name: "CodComCaja" },
          { name: "LetraComprob" },
          { name: "PtoVtaComprob" },
          { name: "NumeroComprob" },
          { name: "IdCompro" },
        ]
      },
    ]
  });
};
