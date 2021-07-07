const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('omBanInt', {
    CodCarpeta: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    NumLotInte: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    FecGenera: {
      type: DataTypes.DATE,
      allowNull: true
    },
    HorGenera: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    FecIntegra: {
      type: DataTypes.DATE,
      allowNull: true
    },
    HorIntegra: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    NomArchiv: {
      type: DataTypes.STRING(13),
      allowNull: false,
      defaultValue: ""
    },
    OriModulo: {
      type: DataTypes.STRING(8),
      allowNull: false,
      defaultValue: ""
    },
    OriCodSucurs: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    OriCodPunVen: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    OriNroDeLote: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    Estado: {
      type: DataTypes.STRING(11),
      allowNull: false,
      defaultValue: ""
    },
    Lot_CodSucurs: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    Lot_CodPunVen: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    Lot_NroDeLote: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    SumPorPartida: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    CantAsientos: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    DebTotGen: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    CreTotGen: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    DebTotInteg: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    CreTotInteg: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    BalanceOK: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: ""
    },
    CuentasOK: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: ""
    }
  }, {
    sequelize,
    tableName: 'omBanInt',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "xEjerNroLotInte",
        unique: true,
        fields: [
          { name: "CodCarpeta" },
          { name: "NumLotInte" },
        ]
      },
      {
        name: "xEstado_OrigLote",
        unique: true,
        fields: [
          { name: "Estado" },
          { name: "OriModulo" },
          { name: "Lot_CodSucurs" },
          { name: "Lot_CodPunVen" },
          { name: "Lot_NroDeLote" },
          { name: "NumLotInte" },
        ]
      },
      {
        name: "xEstadoIntegra",
        unique: true,
        fields: [
          { name: "Estado" },
          { name: "NumLotInte" },
        ]
      },
      {
        name: "xModGenerador",
        unique: true,
        fields: [
          { name: "OriModulo" },
          { name: "OriCodSucurs" },
          { name: "OriCodPunVen" },
          { name: "OriNroDeLote" },
          { name: "NumLotInte" },
        ]
      },
      {
        name: "xNroDeLote",
        unique: true,
        fields: [
          { name: "OriCodSucurs" },
          { name: "OriCodPunVen" },
          { name: "OriNroDeLote" },
          { name: "OriModulo" },
          { name: "NumLotInte" },
        ]
      },
      {
        name: "xNumLote",
        unique: true,
        fields: [
          { name: "NumLotInte", order: "DESC" },
        ]
      },
      {
        name: "xOrigLote",
        unique: true,
        fields: [
          { name: "OriModulo" },
          { name: "Lot_CodSucurs" },
          { name: "Lot_CodPunVen" },
          { name: "Lot_NroDeLote" },
          { name: "NumLotInte" },
        ]
      },
    ]
  });
};
