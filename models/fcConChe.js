const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('fcConChe', {
    Banco: {
      type: DataTypes.STRING(11),
      allowNull: false,
      defaultValue: ""
    },
    CodCtaCaja: {
      type: DataTypes.STRING(4),
      allowNull: false,
      defaultValue: ""
    },
    CodCuenta: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    NroChequera: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    TipoChequera: {
      type: DataTypes.STRING(14),
      allowNull: false,
      defaultValue: "",
      primaryKey: true
    },
    NroInicialCheque: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    NroFinalCheque: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    EstadoChequera: {
      type: DataTypes.STRING(11),
      allowNull: false,
      defaultValue: ""
    }
  }, {
    sequelize,
    tableName: 'fcConChe',
    schema: 'dbo',
    hasTrigger: true,
    timestamps: false,
    indexes: [
      {
        name: "PorBanco",
        unique: true,
        fields: [
          { name: "CodCuenta" },
          { name: "TipoChequera" },
          { name: "NroChequera" },
        ]
      },
      {
        name: "PorCheque",
        fields: [
          { name: "CodCuenta" },
          { name: "NroInicialCheque" },
        ]
      },
      {
        name: "PorChequera",
        fields: [
          { name: "CodCuenta" },
          { name: "NroChequera" },
          { name: "TipoChequera" },
        ]
      },
      {
        name: "xCodCuenta_fCoCh",
        fields: [
          { name: "CodCuenta" },
        ]
      },
      {
        name: "xCtaCaja_fCoCh",
        fields: [
          { name: "CodCtaCaja" },
          { name: "NroChequera" },
          { name: "TipoChequera" },
        ]
      },
    ]
  });
};
