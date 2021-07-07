const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('umLegFam', {
    IdLegajo: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    DocNumero: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    CodEscolarid: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    FecAlta: {
      type: DataTypes.DATE,
      allowNull: true
    },
    FecBaja: {
      type: DataTypes.DATE,
      allowNull: true
    },
    NroFamiliar: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    EsACargo: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: ""
    },
    CodParentes: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    Nombre: {
      type: DataTypes.STRING(41),
      allowNull: false,
      defaultValue: ""
    },
    Sexo: {
      type: DataTypes.STRING(10),
      allowNull: false,
      defaultValue: ""
    },
    FecNacim: {
      type: DataTypes.DATE,
      allowNull: true
    },
    DocTipo: {
      type: DataTypes.STRING(4),
      allowNull: false,
      defaultValue: ""
    },
    IngresoMensual: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'umLegFam',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "xCodEscolaridad_uLeFa",
        fields: [
          { name: "CodEscolarid" },
        ]
      },
      {
        name: "xCodParentesco_uLeFa",
        fields: [
          { name: "CodParentes" },
        ]
      },
      {
        name: "xIdLegDocum_uLeFa",
        unique: true,
        fields: [
          { name: "IdLegajo" },
          { name: "DocNumero" },
        ]
      },
      {
        name: "xIdLegFamOnly_uLeFa",
        fields: [
          { name: "IdLegajo" },
        ]
      },
    ]
  });
};
