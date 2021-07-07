const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('zcClaHac', {
    CodClasif: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: "",
      primaryKey: true
    },
    DesClasif: {
      type: DataTypes.STRING(21),
      allowNull: false,
      defaultValue: ""
    },
    Sexo: {
      type: DataTypes.STRING(7),
      allowNull: false,
      defaultValue: ""
    },
    KilosViviProm: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    Est_PorcGrasa: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    Est_PorcHueso: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    Est_PorcCarne: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    Est_PorcCuero: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    Est_PorcPreFaena: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    CodImpues: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    CodImpuesVent: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    CodCuenta: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    CodCuentaVta: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'zcClaHac',
    schema: 'dbo',
    hasTrigger: true,
    timestamps: false,
    indexes: [
      {
        name: "PorClasif_zClHa",
        unique: true,
        fields: [
          { name: "CodClasif" },
        ]
      },
      {
        name: "xCodImpues_zClHa",
        fields: [
          { name: "CodImpues" },
        ]
      },
      {
        name: "xCodImpVent_zClHa",
        fields: [
          { name: "CodImpuesVent" },
        ]
      },
      {
        name: "xCtaContable_zClHa",
        fields: [
          { name: "CodCuenta" },
        ]
      },
    ]
  });
};
