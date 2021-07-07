const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('vcDefAsC', {
    CodSucurs: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    TipComCorresp: {
      type: DataTypes.STRING(4),
      allowNull: false,
      defaultValue: ""
    },
    CodTalona: {
      type: DataTypes.STRING(4),
      allowNull: false,
      defaultValue: "",
      primaryKey: true
    },
    NroOrden: {
      type: DataTypes.STRING(2),
      allowNull: false,
      defaultValue: ""
    },
    CodComVenta: {
      type: DataTypes.STRING(4),
      allowNull: false,
      defaultValue: "",
      primaryKey: true
    },
    Descripcion: {
      type: DataTypes.STRING(31),
      allowNull: false,
      defaultValue: ""
    },
    AfeFondos: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: ""
    },
    CodTalCaja: {
      type: DataTypes.STRING(4),
      allowNull: false,
      defaultValue: ""
    },
    CodComCaja: {
      type: DataTypes.STRING(4),
      allowNull: false,
      defaultValue: ""
    }
  }, {
    sequelize,
    tableName: 'vcDefAsC',
    schema: 'dbo',
    hasTrigger: true,
    timestamps: false,
    indexes: [
      {
        name: "xCodComVenta_vDeAs",
        fields: [
          { name: "CodComVenta" },
        ]
      },
      {
        name: "xCodTalona_vDeAs",
        fields: [
          { name: "CodTalona" },
        ]
      },
      {
        name: "xComprobante_vDeAs",
        unique: true,
        fields: [
          { name: "CodComVenta" },
          { name: "TipComCorresp" },
          { name: "CodTalona" },
        ]
      },
      {
        name: "xSucrusalDescr_vDeAs",
        fields: [
          { name: "CodSucurs" },
          { name: "TipComCorresp" },
          { name: "Descripcion" },
        ]
      },
      {
        name: "xSucursalOrden_vDeAs",
        unique: true,
        fields: [
          { name: "CodSucurs" },
          { name: "NroOrden" },
          { name: "CodTalona" },
          { name: "CodComVenta" },
        ]
      },
      {
        name: "xTalComCaja_vDeAs",
        fields: [
          { name: "CodTalCaja" },
          { name: "CodComCaja" },
        ]
      },
      {
        name: "xTalonario_vDeAs",
        unique: true,
        fields: [
          { name: "CodTalona" },
          { name: "CodComVenta" },
        ]
      },
    ]
  });
};
