const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('fmCuoLiq', {
    CodComCaja: {
      type: DataTypes.STRING(4),
      allowNull: false,
      defaultValue: ""
    },
    CodTalona: {
      type: DataTypes.STRING(4),
      allowNull: false,
      defaultValue: ""
    },
    LetraComprob: {
      type: DataTypes.STRING(2),
      allowNull: false,
      defaultValue: ""
    },
    PtoVtaComprob: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    NroInterno: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    NumeroComprob: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    IdCompro: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    IdRegistro: {
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
    FechaVto: {
      type: DataTypes.DATE,
      allowNull: true
    },
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
    FechaCaja: {
      type: DataTypes.DATE,
      allowNull: true
    },
    FechaCompr: {
      type: DataTypes.DATE,
      allowNull: true
    },
    CodCtaCaja: {
      type: DataTypes.STRING(4),
      allowNull: false,
      defaultValue: "",
      primaryKey: true
    },
    NroValor: {
      type: DataTypes.STRING(9),
      allowNull: false,
      defaultValue: ""
    },
    CodEmpTarjeta: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    CodMutual: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    CodCliCredito: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    NroCuota: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    ImpCuota: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    ImpCancel: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    FechaDePago: {
      type: DataTypes.DATE,
      allowNull: true
    },
    ImpSaldo: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    NroPresent: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    PreCodComCaja: {
      type: DataTypes.STRING(4),
      allowNull: false,
      defaultValue: ""
    },
    PreLetraComprob: {
      type: DataTypes.STRING(2),
      allowNull: false,
      defaultValue: ""
    },
    PrePtoVtaComprob: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    PreNroComprob: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    PreIdCompro: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    NumLiquid: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    LiqCodComCaja: {
      type: DataTypes.STRING(4),
      allowNull: false,
      defaultValue: ""
    },
    LiqLetraComprob: {
      type: DataTypes.STRING(2),
      allowNull: false,
      defaultValue: ""
    },
    LiqPtoVtaComprob: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    LiqNroComprob: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    LiqIdCompro: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    LiqIdRegistro: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    Observacion: {
      type: DataTypes.STRING(25),
      allowNull: false,
      defaultValue: ""
    },
    RazSocial: {
      type: DataTypes.STRING(31),
      allowNull: false,
      defaultValue: ""
    },
    EstLiquid: {
      type: DataTypes.STRING(11),
      allowNull: false,
      defaultValue: ""
    },
    AjuCuota: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'fmCuoLiq',
    schema: 'dbo',
    hasTrigger: true,
    timestamps: false,
    indexes: [
      {
        name: "xCliente_fCuLi",
        fields: [
          { name: "CodCliCredito" },
          { name: "FechaVto" },
        ]
      },
      {
        name: "xComprobante_fCuLi",
        unique: true,
        fields: [
          { name: "CodComCaja" },
          { name: "LetraComprob" },
          { name: "PtoVtaComprob" },
          { name: "NumeroComprob" },
          { name: "IdCompro" },
          { name: "IdRegistro" },
          { name: "LiqIdCompro" },
          { name: "LiqIdRegistro" },
        ]
      },
      {
        name: "xLiqFecVto_fCuLi",
        unique: true,
        fields: [
          { name: "LiqIdCompro" },
          { name: "FechaVto" },
          { name: "LiqIdRegistro" },
        ]
      },
      {
        name: "xLiqIdIdReg_fCuLi",
        unique: true,
        fields: [
          { name: "LiqIdCompro" },
          { name: "LiqIdRegistro" },
        ]
      },
      {
        name: "xLiqImporte",
        unique: true,
        fields: [
          { name: "LiqIdCompro" },
          { name: "ImpCuota" },
          { name: "LiqIdRegistro" },
        ]
      },
      {
        name: "xLiqRazSocial",
        unique: true,
        fields: [
          { name: "LiqIdCompro" },
          { name: "RazSocial" },
          { name: "LiqIdRegistro" },
        ]
      },
      {
        name: "xLiquidacion",
        fields: [
          { name: "LiqCodComCaja" },
          { name: "LiqLetraComprob" },
          { name: "LiqPtoVtaComprob" },
          { name: "LiqNroComprob" },
          { name: "LiqIdCompro" },
        ]
      },
      {
        name: "xLiquidEstLiq",
        unique: true,
        fields: [
          { name: "LiqIdCompro" },
          { name: "EstLiquid" },
          { name: "LiqIdRegistro" },
        ]
      },
      {
        name: "xLiquidNroValor",
        unique: true,
        fields: [
          { name: "LiqIdCompro" },
          { name: "NroValor" },
          { name: "LiqIdRegistro" },
        ]
      },
      {
        name: "xMutual",
        fields: [
          { name: "CodMutual" },
          { name: "FechaVto" },
          { name: "NroInterno" },
        ]
      },
      {
        name: "xNroInterno",
        unique: true,
        fields: [
          { name: "CodCtaCaja" },
          { name: "NroInterno" },
          { name: "NroCuota" },
          { name: "IdRegistro" },
          { name: "LiqIdCompro" },
          { name: "LiqIdRegistro" },
        ]
      },
      {
        name: "xPresentacion",
        fields: [
          { name: "PreCodComCaja" },
          { name: "PreLetraComprob" },
          { name: "PrePtoVtaComprob" },
          { name: "PreNroComprob" },
          { name: "PreIdCompro" },
        ]
      },
      {
        name: "xTarjeta",
        fields: [
          { name: "CodEmpTarjeta" },
          { name: "FechaVto" },
          { name: "NroInterno" },
        ]
      },
    ]
  });
};
