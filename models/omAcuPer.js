const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('omAcuPer', {
    CodCarpeta: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    CodCuenta: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    Periodo: {
      type: DataTypes.DATE,
      allowNull: true
    },
    SalAntCantidad: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    SalAntImporte: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    UniEntradas: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    UniSalidas: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    ImpDebe: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    ImpHaber: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    SalFinCantidad: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    SalFinImporte: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    CodCenCos: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    CodCanCos: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    TipRegistro: {
      type: DataTypes.STRING(21),
      allowNull: false,
      defaultValue: ""
    },
    IdRegistro: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    }
  }, {
    sequelize,
    tableName: 'omAcuPer',
    schema: 'dbo',
    hasTrigger: true,
    timestamps: false,
    indexes: [
      {
        name: "xCodCuenta_oAcPe",
        unique: true,
        fields: [
          { name: "CodCuenta" },
          { name: "IdRegistro" },
        ]
      },
      {
        name: "xCodigo_oAcPe",
        unique: true,
        fields: [
          { name: "CodCuenta" },
          { name: "Periodo" },
          { name: "IdRegistro" },
        ]
      },
      {
        name: "xEjCtaCan_oAcPe",
        unique: true,
        fields: [
          { name: "CodCarpeta" },
          { name: "CodCuenta" },
          { name: "Periodo" },
          { name: "CodCanCos" },
          { name: "IdRegistro" },
        ]
      },
      {
        name: "xEjCtaCosCan_oAcPe",
        unique: true,
        fields: [
          { name: "CodCarpeta" },
          { name: "CodCuenta" },
          { name: "Periodo" },
          { name: "CodCenCos" },
          { name: "CodCanCos" },
          { name: "IdRegistro" },
        ]
      },
      {
        name: "xEjerCodCta",
        unique: true,
        fields: [
          { name: "CodCarpeta" },
          { name: "CodCuenta" },
          { name: "Periodo" },
          { name: "IdRegistro" },
        ]
      },
      {
        name: "xEjerCosCtaPer",
        unique: true,
        fields: [
          { name: "CodCarpeta" },
          { name: "CodCenCos" },
          { name: "CodCuenta" },
          { name: "Periodo" },
          { name: "IdRegistro" },
        ]
      },
      {
        name: "xEjerCtaCosPeri",
        unique: true,
        fields: [
          { name: "CodCarpeta" },
          { name: "CodCuenta" },
          { name: "CodCenCos" },
          { name: "Periodo" },
          { name: "IdRegistro" },
        ]
      },
      {
        name: "xEjerPeriCosCta",
        unique: true,
        fields: [
          { name: "CodCarpeta" },
          { name: "Periodo" },
          { name: "CodCenCos" },
          { name: "CodCuenta" },
          { name: "IdRegistro" },
        ]
      },
      {
        name: "xEjerPeriodo",
        unique: true,
        fields: [
          { name: "CodCarpeta" },
          { name: "Periodo" },
          { name: "CodCuenta" },
          { name: "IdRegistro" },
        ]
      },
      {
        name: "xIdRegistro_oAcPe",
        unique: true,
        fields: [
          { name: "IdRegistro" },
        ]
      },
      {
        name: "xPeriodo",
        unique: true,
        fields: [
          { name: "Periodo" },
          { name: "CodCuenta" },
          { name: "IdRegistro" },
        ]
      },
    ]
  });
};
