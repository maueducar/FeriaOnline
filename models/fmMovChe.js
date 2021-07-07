const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('fmMovChe', {
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
    FechaCaja: {
      type: DataTypes.DATE,
      allowNull: true
    },
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
    TipoMovim: {
      type: DataTypes.STRING(8),
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
    FechaCompr: {
      type: DataTypes.DATE,
      allowNull: true
    },
    NroPesent: {
      type: DataTypes.STRING(16),
      allowNull: false,
      defaultValue: ""
    },
    VisTransa: {
      type: DataTypes.STRING(15),
      allowNull: false,
      defaultValue: ""
    },
    IdeRegAsi: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    CodCtaCaja: {
      type: DataTypes.STRING(4),
      allowNull: false,
      defaultValue: ""
    },
    CodTipMovBan: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    NroChequera: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    NroValor: {
      type: DataTypes.STRING(9),
      allowNull: false,
      defaultValue: ""
    },
    NroInterno: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    FechaVto: {
      type: DataTypes.DATE,
      allowNull: true
    },
    Concepto: {
      type: DataTypes.STRING(31),
      allowNull: false,
      defaultValue: ""
    },
    DebeHaber: {
      type: DataTypes.STRING(6),
      allowNull: false,
      defaultValue: ""
    },
    Importe: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    Aplicado: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    ImpConciliado: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    Estado: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: ""
    }
  }, {
    sequelize,
    tableName: 'fmMovChe',
    schema: 'dbo',
    hasTrigger: true,
    timestamps: false,
    indexes: [
      {
        name: "PorComprobante_fMoCh",
        fields: [
          { name: "CodComCaja" },
          { name: "LetraComprob" },
          { name: "PtoVtaComprob" },
          { name: "NumeroComprob" },
          { name: "IdCompro" },
          { name: "DebeHaber" },
          { name: "IdeRegAsi" },
        ]
      },
      {
        name: "PorCtaNroInterno",
        fields: [
          { name: "CodCtaCaja" },
          { name: "NroInterno" },
        ]
      },
      {
        name: "PorNroChequera",
        fields: [
          { name: "CodCtaCaja" },
          { name: "NroChequera" },
          { name: "NroValor" },
        ]
      },
      {
        name: "PorNroChequera_2",
        fields: [
          { name: "CodCtaCaja" },
          { name: "NroChequera" },
        ]
      },
      {
        name: "PorValorEstado_fMoCh",
        fields: [
          { name: "CodCtaCaja" },
          { name: "NroValor" },
          { name: "Estado" },
        ]
      },
      {
        name: "xIdComprob_fMoCh",
        unique: true,
        fields: [
          { name: "IdCompro" },
          { name: "IdeRegAsi" },
        ]
      },
    ]
  });
};
