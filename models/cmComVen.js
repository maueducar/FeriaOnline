const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cmComVen', {
    CodTalona: {
      type: DataTypes.STRING(4),
      allowNull: false,
      defaultValue: ""
    },
    CodComComp: {
      type: DataTypes.STRING(4),
      allowNull: false,
      defaultValue: ""
    },
    LetCompro: {
      type: DataTypes.STRING(2),
      allowNull: false,
      defaultValue: ""
    },
    PunVenCom: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    NumCompro: {
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
    VisCompro: {
      type: DataTypes.STRING(16),
      allowNull: false,
      defaultValue: ""
    },
    FecComprob: {
      type: DataTypes.DATE,
      allowNull: true
    },
    Porcentaje: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    FecVencim: {
      type: DataTypes.DATE,
      allowNull: true
    },
    NroVencim: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    TotVencim: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    ImpTotVencim: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    PorcIntImplic: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    ImpIntImplic: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    ImpNetoSinInt: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'cmComVen',
    schema: 'dbo',
    hasTrigger: true,
    timestamps: false,
    indexes: [
      {
        name: "xComprobante_cCoVe",
        fields: [
          { name: "CodComComp" },
          { name: "LetCompro" },
          { name: "PunVenCom" },
          { name: "NumCompro" },
          { name: "IdCompro" },
          { name: "FecVencim" },
        ]
      },
      {
        name: "xComprobante_cCoVe_2",
        fields: [
          { name: "CodComComp" },
          { name: "LetCompro" },
          { name: "PunVenCom" },
          { name: "NumCompro" },
          { name: "IdCompro" },
        ]
      },
      {
        name: "xFecVencim",
        fields: [
          { name: "FecVencim" },
        ]
      },
      {
        name: "xIdComprob_cCoVe",
        unique: true,
        fields: [
          { name: "IdCompro" },
          { name: "IdRegistro" },
        ]
      },
    ]
  });
};
