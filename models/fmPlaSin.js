const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('fmPlaSin', {
    CodSucurs: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    CodPunVen: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    NroDeLote: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    CodCuenta: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    CodCtaCaja: {
      type: DataTypes.STRING(4),
      allowNull: false,
      defaultValue: "",
      primaryKey: true
    },
    SalInicial: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    Debitos: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    Creditos: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    SalFinal: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    SalInicialConta: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    SalInicialPueTra: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    SalInicialSucur: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'fmPlaSin',
    schema: 'dbo',
    hasTrigger: true,
    timestamps: false,
    indexes: [
      {
        name: "xCtaContable_fPlSn",
        fields: [
          { name: "CodCuenta" },
        ]
      },
      {
        name: "xCuentaCaja",
        fields: [
          { name: "CodCtaCaja" },
        ]
      },
      {
        name: "xPlanillaCaja",
        unique: true,
        fields: [
          { name: "CodSucurs" },
          { name: "CodPunVen" },
          { name: "NroDeLote" },
          { name: "CodCuenta" },
          { name: "CodCtaCaja" },
        ]
      },
    ]
  });
};
