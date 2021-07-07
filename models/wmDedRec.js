const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('wmDedRec', {
    NroRecono: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    CodDeduccion: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    CodVarUva: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    CodTipVino: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    CodCliPro: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    Fecha: {
      type: DataTypes.DATE,
      allowNull: true
    },
    PorVino: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    PorMosto: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    CanDedVino: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    CanDedMosto: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    Flag: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: ""
    },
    IvaAlicuota: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    IvaVenta: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    IvaCompras: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    DeducFinal: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    NroINV: {
      type: DataTypes.STRING(16),
      allowNull: false,
      defaultValue: "",
      primaryKey: true
    },
    LitrosElabora: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    Id_Registro: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    IdCompro: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'wmDedRec',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "xCodCliente_wDeRe",
        fields: [
          { name: "CodCliPro" },
          { name: "Fecha" },
        ]
      },
      {
        name: "xCodDeduccion_wDeRe",
        fields: [
          { name: "CodDeduccion" },
          { name: "Fecha" },
        ]
      },
      {
        name: "xIdCompro_wDeRe",
        unique: true,
        fields: [
          { name: "IdCompro" },
          { name: "Id_Registro" },
          { name: "CodVarUva" },
          { name: "CodTipVino" },
          { name: "CodDeduccion" },
          { name: "NroINV" },
        ]
      },
      {
        name: "xNroRecono_wDeRe",
        unique: true,
        fields: [
          { name: "NroRecono" },
          { name: "CodVarUva" },
          { name: "CodTipVino" },
          { name: "CodDeduccion" },
          { name: "NroINV" },
        ]
      },
    ]
  });
};
