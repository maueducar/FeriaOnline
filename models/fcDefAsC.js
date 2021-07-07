const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('fcDefAsC', {
    CodTalona: {
      type: DataTypes.STRING(4),
      allowNull: false,
      defaultValue: "",
      primaryKey: true
    },
    CodComCaja: {
      type: DataTypes.STRING(4),
      allowNull: false,
      defaultValue: "",
      primaryKey: true
    },
    CodSucurs: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    NroOrden: {
      type: DataTypes.STRING(2),
      allowNull: false,
      defaultValue: ""
    },
    TipoMovim: {
      type: DataTypes.STRING(8),
      allowNull: false,
      defaultValue: ""
    },
    DescDeCompr: {
      type: DataTypes.STRING(31),
      allowNull: false,
      defaultValue: ""
    },
    AfeVentas: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: ""
    },
    CodTalVenta: {
      type: DataTypes.STRING(4),
      allowNull: false,
      defaultValue: ""
    },
    CodComVenta: {
      type: DataTypes.STRING(4),
      allowNull: false,
      defaultValue: ""
    },
    AfeCompras: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: ""
    },
    CodTalCompras: {
      type: DataTypes.STRING(4),
      allowNull: false,
      defaultValue: ""
    },
    CodComCompras: {
      type: DataTypes.STRING(4),
      allowNull: false,
      defaultValue: ""
    }
  }, {
    sequelize,
    tableName: 'fcDefAsC',
    schema: 'dbo',
    hasTrigger: true,
    timestamps: false,
    indexes: [
      {
        name: "xCodComCaja",
        unique: true,
        fields: [
          { name: "CodComCaja" },
          { name: "CodTalona" },
        ]
      },
      {
        name: "xCodComCaja_fDeAs",
        fields: [
          { name: "CodComCaja" },
        ]
      },
      {
        name: "xCodTalona_fDeAs",
        fields: [
          { name: "CodTalona" },
        ]
      },
      {
        name: "xOrdenDescr",
        unique: true,
        fields: [
          { name: "CodSucurs" },
          { name: "NroOrden" },
          { name: "CodTalona" },
          { name: "CodComCaja" },
        ]
      },
      {
        name: "xSucTipo",
        unique: true,
        fields: [
          { name: "CodSucurs" },
          { name: "TipoMovim", order: "DESC" },
          { name: "DescDeCompr" },
          { name: "CodTalona" },
          { name: "CodComCaja" },
        ]
      },
      {
        name: "xTalonario_fDeAs",
        unique: true,
        fields: [
          { name: "CodTalona" },
          { name: "CodComCaja" },
        ]
      },
    ]
  });
};
