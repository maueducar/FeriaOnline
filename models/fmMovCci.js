const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('fmMovCci', {
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
    CodCenCos: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    FecContab: {
      type: DataTypes.DATE,
      allowNull: true
    },
    Importe: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    Porcentaje: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
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
    DebeHaber: {
      type: DataTypes.STRING(6),
      allowNull: false,
      defaultValue: ""
    },
    CodCuenta: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'fmMovCci',
    schema: 'dbo',
    hasTrigger: true,
    timestamps: false,
    indexes: [
      {
        name: "xCentroCosto",
        fields: [
          { name: "CodCenCos" },
          { name: "VisTransa" },
        ]
      },
      {
        name: "xCodCenCos_fMoCi",
        fields: [
          { name: "CodCenCos" },
        ]
      },
      {
        name: "xComprob",
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
        name: "xIdCompro_fMoCi",
        fields: [
          { name: "IdCompro" },
        ]
      },
      {
        name: "xIdComprob_fMoCi",
        fields: [
          { name: "IdCompro" },
          { name: "IdeRegAsi" },
          { name: "CodCenCos" },
        ]
      },
      {
        name: "xIdComprob_fMoCi_2",
        unique: true,
        fields: [
          { name: "IdCompro" },
          { name: "IdeRegAsi" },
        ]
      },
      {
        name: "xTransaccion_CodCen",
        fields: [
          { name: "VisTransa" },
          { name: "IdeRegAsi" },
          { name: "CodCenCos" },
        ]
      },
    ]
  });
};
