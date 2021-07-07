const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('pcEstPro', {
    IdFormula: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    CodArticu: {
      type: DataTypes.STRING(16),
      allowNull: false,
      defaultValue: ""
    },
    NumOrden: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    CodComponente: {
      type: DataTypes.STRING(16),
      allowNull: false,
      defaultValue: ""
    },
    CanUnidades: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    Nivel: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    PPPCalculado: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    PPPManual: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    PPPVariado: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    TipoReg: {
      type: DataTypes.STRING(11),
      allowNull: false,
      defaultValue: ""
    },
    CodCenStoOri: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    IdRegistro: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    IdCompro: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    EsComentario: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: ""
    },
    Comentario: {
      type: DataTypes.STRING(51),
      allowNull: false,
      defaultValue: ""
    }
  }, {
    sequelize,
    tableName: 'pcEstPro',
    schema: 'dbo',
    hasTrigger: true,
    timestamps: false,
    indexes: [
      {
        name: "xArtOrden",
        fields: [
          { name: "CodArticu" },
          { name: "NumOrden" },
        ]
      },
      {
        name: "xCodArticu_pEsPr",
        fields: [
          { name: "CodArticu" },
          { name: "CodComponente" },
        ]
      },
      {
        name: "xCodArticu_pEsPr_2",
        fields: [
          { name: "CodArticu" },
        ]
      },
      {
        name: "xCodComponente",
        fields: [
          { name: "CodComponente" },
          { name: "CodArticu" },
        ]
      },
      {
        name: "xCodComponente_pEsPr",
        fields: [
          { name: "CodComponente" },
        ]
      },
      {
        name: "xIdFormReg_pEsPr",
        unique: true,
        fields: [
          { name: "IdFormula" },
          { name: "IdRegistro" },
        ]
      },
      {
        name: "xIdFormula_pEsPr",
        unique: true,
        fields: [
          { name: "IdFormula" },
          { name: "TipoReg" },
          { name: "NumOrden" },
          { name: "IdRegistro" },
        ]
      },
      {
        name: "xIdFormula_pEsPr_2",
        fields: [
          { name: "IdFormula" },
        ]
      },
    ]
  });
};
