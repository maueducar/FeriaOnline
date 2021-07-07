const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('fmRefCoB', {
    CodSucurs: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    CodPunVen: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    NroLotConcil: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    CodCuenta: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    CodCtaCaja: {
      type: DataTypes.STRING(4),
      allowNull: false,
      defaultValue: ""
    },
    NroIntExtHab: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    NroIntLibDeb: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    Importe: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    TipReferencia: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: ""
    },
    FecConcil: {
      type: DataTypes.DATE,
      allowNull: true
    },
    HorConcil: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    OperConcil: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    FecDesConcil: {
      type: DataTypes.DATE,
      allowNull: true
    },
    HorDesConcil: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    OperDesConcil: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    MotDesconcil: {
      type: DataTypes.STRING(41),
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
    tableName: 'fmRefCoB',
    schema: 'dbo',
    hasTrigger: true,
    timestamps: false,
    indexes: [
      {
        name: "xBancoLote",
        fields: [
          { name: "CodCuenta" },
          { name: "CodSucurs" },
          { name: "CodPunVen" },
          { name: "NroLotConcil" },
        ]
      },
      {
        name: "xBancoMovExtHab",
        unique: true,
        fields: [
          { name: "CodCuenta" },
          { name: "NroIntExtHab" },
          { name: "TipReferencia" },
          { name: "IdRegistro" },
        ]
      },
      {
        name: "xBancoMovLibDeb",
        unique: true,
        fields: [
          { name: "CodCuenta" },
          { name: "NroIntLibDeb" },
          { name: "TipReferencia" },
          { name: "IdRegistro" },
        ]
      },
      {
        name: "xBancoMovLibDeb_2",
        fields: [
          { name: "CodCuenta" },
          { name: "NroIntLibDeb" },
        ]
      },
      {
        name: "xCCajNroIntExtHab_fReCB",
        unique: true,
        fields: [
          { name: "CodCtaCaja" },
          { name: "NroIntExtHab" },
          { name: "IdRegistro" },
        ]
      },
      {
        name: "xCCajNroIntLibDeb_fReCB",
        unique: true,
        fields: [
          { name: "CodCtaCaja" },
          { name: "NroIntLibDeb" },
          { name: "IdRegistro" },
        ]
      },
      {
        name: "xIdReg_fReCB",
        unique: true,
        fields: [
          { name: "IdRegistro" },
        ]
      },
    ]
  });
};
