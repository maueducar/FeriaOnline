const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('fmPreTar', {
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
    NroDeLote: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    CodEmpTarjeta: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    CodCtaCaja: {
      type: DataTypes.STRING(4),
      allowNull: false,
      defaultValue: ""
    },
    TipOrdTarj: {
      type: DataTypes.STRING(9),
      allowNull: false,
      defaultValue: ""
    },
    CodTalona: {
      type: DataTypes.STRING(4),
      allowNull: false,
      defaultValue: ""
    },
    CodComCaja: {
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
    NumeroComprob: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    IdCompro: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
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
    FecPresent: {
      type: DataTypes.DATE,
      allowNull: true
    },
    FecAcredit: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'fmPreTar',
    schema: 'dbo',
    hasTrigger: true,
    timestamps: false,
    indexes: [
      {
        name: "xFechaPresent_fPreT",
        fields: [
          { name: "FecPresent", order: "DESC" },
          { name: "CodEmpTarjeta" },
        ]
      },
      {
        name: "xIdComprob_fPreT",
        unique: true,
        fields: [
          { name: "IdCompro" },
          { name: "IdRegistro" },
        ]
      },
      {
        name: "xNroComprobante_fPreT",
        fields: [
          { name: "CodComCaja" },
          { name: "LetraComprob" },
          { name: "PtoVtaComprob" },
          { name: "NumeroComprob" },
          { name: "IdCompro" },
        ]
      },
      {
        name: "xSucPVtaLote_fPreT",
        fields: [
          { name: "CodSucurs" },
          { name: "CodPunVen" },
          { name: "NroDeLote" },
        ]
      },
      {
        name: "xTarjeta_fPreT",
        fields: [
          { name: "CodEmpTarjeta" },
        ]
      },
    ]
  });
};
