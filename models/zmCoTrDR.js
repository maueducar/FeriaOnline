const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('zmCoTrDR', {
    CodComComp: {
      type: DataTypes.STRING(4),
      allowNull: false,
      defaultValue: ""
    },
    LetCompro: {
      type: DataTypes.STRING(2),
      allowNull: false,
      defaultValue: ""
    },
    PunVenCom: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    NumCompro: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    IdCompro: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    IdRegistro: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    VisCompro: {
      type: DataTypes.STRING(16),
      allowNull: false,
      defaultValue: ""
    },
    CantCabezas: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    CodClasif: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: ""
    },
    KgTotales: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    KgPromedio: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    PrecioKg: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    Subtotal: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    CantCabEnt: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    CantCabMort: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    KgPrefaena: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    CantCabRoma: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    CantCabPend: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    KgPendientes: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'zmCoTrDR',
    schema: 'dbo',
    hasTrigger: true,
    timestamps: false,
    indexes: [
      {
        name: "xIdComproIdReg_zCtDr",
        unique: true,
        fields: [
          { name: "IdCompro" },
          { name: "IdRegistro" },
        ]
      },
      {
        name: "xNroComprob_zCtDr",
        fields: [
          { name: "CodComComp" },
          { name: "LetCompro" },
          { name: "PunVenCom" },
          { name: "NumCompro" },
          { name: "IdCompro" },
        ]
      },
      {
        name: "xNroComprobYCodHacien_zCtDr",
        fields: [
          { name: "CodComComp" },
          { name: "LetCompro" },
          { name: "PunVenCom" },
          { name: "NumCompro" },
          { name: "IdCompro" },
          { name: "CodClasif" },
        ]
      },
    ]
  });
};
