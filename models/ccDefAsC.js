const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ccDefAsC', {
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
    CodComComp: {
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
    tableName: 'ccDefAsC',
    schema: 'dbo',
    hasTrigger: true,
    timestamps: false,
    indexes: [
      {
        name: "xCodComComp_cDeAs",
        fields: [
          { name: "CodComComp" },
        ]
      },
      {
        name: "xCodTalona_cDeAs",
        fields: [
          { name: "CodTalona" },
        ]
      },
      {
        name: "xComprobante_cDeAs",
        unique: true,
        fields: [
          { name: "CodComComp" },
          { name: "TipComCorresp" },
          { name: "CodTalona" },
        ]
      },
      {
        name: "xSucrusalDescr",
        fields: [
          { name: "CodSucurs" },
          { name: "TipComCorresp" },
          { name: "Descripcion" },
        ]
      },
      {
        name: "xSucursalOrden",
        unique: true,
        fields: [
          { name: "CodSucurs" },
          { name: "NroOrden" },
          { name: "CodTalona" },
          { name: "CodComComp" },
        ]
      },
      {
        name: "xTalComCaja",
        unique: true,
        fields: [
          { name: "CodTalCaja" },
          { name: "CodComCaja" },
          { name: "CodTalona" },
          { name: "CodComComp" },
        ]
      },
      {
        name: "xTalonario_cDeAs",
        unique: true,
        fields: [
          { name: "CodTalona" },
          { name: "CodComComp" },
        ]
      },
    ]
  });
};
