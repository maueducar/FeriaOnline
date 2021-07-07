const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('omAsiCci', {
    VisTransa: {
      type: DataTypes.STRING(15),
      allowNull: false,
      defaultValue: "",
      primaryKey: true
    },
    IdeRegAsi: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    CodCenCos: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
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
    DebeHaber: {
      type: DataTypes.STRING(6),
      allowNull: false,
      defaultValue: ""
    },
    IdCompro: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    CodCuenta: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'omAsiCci',
    schema: 'dbo',
    hasTrigger: true,
    timestamps: false,
    indexes: [
      {
        name: "xCCosCodCta",
        fields: [
          { name: "CodCenCos" },
          { name: "CodCuenta" },
          { name: "FecContab" },
        ]
      },
      {
        name: "xCodCen_FecCon",
        fields: [
          { name: "CodCenCos" },
          { name: "FecContab" },
          { name: "VisTransa" },
          { name: "IdeRegAsi" },
        ]
      },
      {
        name: "xCodCenCos_oAsCi",
        fields: [
          { name: "CodCenCos" },
        ]
      },
      {
        name: "xCodCtaCenCos",
        fields: [
          { name: "CodCuenta" },
          { name: "CodCenCos" },
          { name: "FecContab" },
        ]
      },
      {
        name: "xTransaccion_CodCen_oAsCi",
        unique: true,
        fields: [
          { name: "VisTransa" },
          { name: "IdeRegAsi" },
          { name: "CodCenCos" },
        ]
      },
      {
        name: "xVisTransa_IdeRegAsi",
        fields: [
          { name: "VisTransa" },
          { name: "IdeRegAsi" },
        ]
      },
    ]
  });
};
