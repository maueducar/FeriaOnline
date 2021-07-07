const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('pmOtELab', {
    NumOT: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    IdFormula: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    NroOrden: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    Descripcion: {
      type: DataTypes.STRING(31),
      allowNull: false,
      defaultValue: ""
    },
    ValorEsperado: {
      type: DataTypes.STRING(21),
      allowNull: false,
      defaultValue: ""
    },
    ValorObtenido: {
      type: DataTypes.STRING(21),
      allowNull: false,
      defaultValue: ""
    },
    IdRegistro: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    }
  }, {
    sequelize,
    tableName: 'pmOtELab',
    schema: 'dbo',
    hasTrigger: true,
    timestamps: false,
    indexes: [
      {
        name: "xNumOT_pOtLa",
        fields: [
          { name: "NumOT" },
        ]
      },
      {
        name: "xOtIdFormula",
        unique: true,
        fields: [
          { name: "NumOT" },
          { name: "IdFormula" },
          { name: "NroOrden" },
          { name: "IdRegistro" },
        ]
      },
      {
        name: "xOtIdReg_pOtLa",
        unique: true,
        fields: [
          { name: "NumOT" },
          { name: "IdRegistro" },
        ]
      },
    ]
  });
};
