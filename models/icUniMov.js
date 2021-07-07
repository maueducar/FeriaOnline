const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('icUniMov', {
    CodUni: {
      type: DataTypes.STRING(11),
      allowNull: false,
      defaultValue: "",
      primaryKey: true
    },
    CodTipUni: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    CodMarca: {
      type: DataTypes.STRING(4),
      allowNull: false,
      defaultValue: ""
    },
    Modelo: {
      type: DataTypes.STRING(51),
      allowNull: false,
      defaultValue: ""
    },
    Dominio: {
      type: DataTypes.STRING(16),
      allowNull: false,
      defaultValue: ""
    },
    AnioFab: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    EsUniMovil: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: ""
    },
    NroChasis: {
      type: DataTypes.STRING(41),
      allowNull: false,
      defaultValue: ""
    },
    NroMotor: {
      type: DataTypes.STRING(41),
      allowNull: false,
      defaultValue: ""
    },
    PropioTercero: {
      type: DataTypes.STRING(8),
      allowNull: false,
      defaultValue: ""
    },
    NroSerie: {
      type: DataTypes.STRING(31),
      allowNull: false,
      defaultValue: ""
    },
    Responsable: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    UniMedida: {
      type: DataTypes.STRING(6),
      allowNull: false,
      defaultValue: ""
    },
    IniciaHskm: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    HsKmRealXCamHor: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    FechaIni: {
      type: DataTypes.DATE,
      allowNull: true
    },
    FechaVen: {
      type: DataTypes.DATE,
      allowNull: true
    },
    Observaciones: {
      type: DataTypes.STRING(2000),
      allowNull: false,
      defaultValue: ""
    },
    Foto: {
      type: DataTypes.STRING(91),
      allowNull: false,
      defaultValue: ""
    }
  }, {
    sequelize,
    tableName: 'icUniMov',
    schema: 'dbo',
    hasTrigger: true,
    timestamps: false,
    indexes: [
      {
        name: "xCodMarca",
        unique: true,
        fields: [
          { name: "CodMarca" },
          { name: "CodUni" },
        ]
      },
      {
        name: "xCodMarcaOnly",
        fields: [
          { name: "CodMarca" },
        ]
      },
      {
        name: "xCodTipOnly_iUnMo",
        fields: [
          { name: "CodTipUni" },
        ]
      },
      {
        name: "xCodTipUni_iUnMo",
        unique: true,
        fields: [
          { name: "CodTipUni" },
          { name: "CodUni" },
        ]
      },
      {
        name: "xCodUni_iUnMo",
        unique: true,
        fields: [
          { name: "CodUni" },
        ]
      },
      {
        name: "xResponOnly",
        fields: [
          { name: "Responsable" },
        ]
      },
      {
        name: "xResponsable",
        fields: [
          { name: "Responsable" },
          { name: "CodUni" },
        ]
      },
    ]
  });
};
