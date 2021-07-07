const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ccConFac', {
    CodConFac: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    Concepto: {
      type: DataTypes.STRING(41),
      allowNull: false,
      defaultValue: ""
    },
    CodCuenta: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    DesAbierta: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: ""
    },
    CodImpues: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    DebHaber: {
      type: DataTypes.STRING(6),
      allowNull: false,
      defaultValue: ""
    },
    ModImputacion: {
      type: DataTypes.STRING(10),
      allowNull: false,
      defaultValue: ""
    },
    ClasifGanancias: {
      type: DataTypes.STRING(11),
      allowNull: false,
      defaultValue: ""
    },
    CodRetGan: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    CodTipConcepto: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    CodCenCos: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    EsLocBienes: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: ""
    },
    CodRubro: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    PreUnitario: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    CodSubRub: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    EnUso: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: ""
    }
  }, {
    sequelize,
    tableName: 'ccConFac',
    schema: 'dbo',
    hasTrigger: true,
    timestamps: false,
    indexes: [
      {
        name: "xCodConcepto_cCoFa",
        unique: true,
        fields: [
          { name: "CodConFac" },
        ]
      },
      {
        name: "xCodTipoConcepto",
        fields: [
          { name: "CodTipConcepto" },
        ]
      },
      {
        name: "xConcepto",
        fields: [
          { name: "Concepto" },
        ]
      },
      {
        name: "xCtaConta",
        fields: [
          { name: "CodCuenta" },
        ]
      },
      {
        name: "xRubro_cCoFa",
        fields: [
          { name: "CodRubro" },
        ]
      },
    ]
  });
};
