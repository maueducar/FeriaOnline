const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('fmExtBaD', {
    IdExtracto: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
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
      defaultValue: 0,
      primaryKey: true
    },
    CodCtaCaja: {
      type: DataTypes.STRING(4),
      allowNull: false,
      defaultValue: ""
    },
    NroHoja: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    NroInterno: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    CodTipMov: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    Concepto: {
      type: DataTypes.STRING(31),
      allowNull: false,
      defaultValue: ""
    },
    ChequeNro: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    FecMovim: {
      type: DataTypes.DATE,
      allowNull: true
    },
    ImpDebe: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    ImpHaber: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    ImpGenerico: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    NoUser: {
      type: DataTypes.STRING(6),
      allowNull: false,
      defaultValue: ""
    },
    FecOperacion: {
      type: DataTypes.DATE,
      allowNull: true
    },
    HorOperacion: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    EstConciliado: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: ""
    },
    AplCompens: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    AplConcil: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    IdRegistro: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'fmExtBaD',
    schema: 'dbo',
    hasTrigger: true,
    timestamps: false,
    indexes: [
      {
        name: "XCodCtaNroHoja_fExBD",
        fields: [
          { name: "CodCuenta" },
          { name: "NroHoja" },
        ]
      },
      {
        name: "xCtaCajaIdMovim",
        fields: [
          { name: "CodCtaCaja" },
          { name: "NroInterno" },
        ]
      },
      {
        name: "xCtaCajHoja_Fecha",
        unique: true,
        fields: [
          { name: "CodCtaCaja" },
          { name: "NroHoja" },
          { name: "FecMovim" },
          { name: "IdRegistro" },
          { name: "IdExtracto" },
        ]
      },
      {
        name: "xCtaFecMovim",
        fields: [
          { name: "CodCuenta" },
          { name: "FecMovim" },
          { name: "CodTipMov" },
        ]
      },
      {
        name: "xCuentaNroMovim",
        unique: true,
        fields: [
          { name: "CodCuenta" },
          { name: "NroInterno" },
        ]
      },
      {
        name: "xEstadoConcil",
        fields: [
          { name: "CodCuenta" },
          { name: "EstConciliado" },
        ]
      },
      {
        name: "xHojaFecMovim",
        unique: true,
        fields: [
          { name: "CodCuenta" },
          { name: "NroHoja" },
          { name: "FecMovim" },
          { name: "NroInterno" },
        ]
      },
      {
        name: "xHojaImporte",
        unique: true,
        fields: [
          { name: "CodCuenta" },
          { name: "NroHoja" },
          { name: "ImpGenerico" },
          { name: "NroInterno" },
        ]
      },
      {
        name: "xIdExtracto_fExBD",
        fields: [
          { name: "IdExtracto" },
        ]
      },
      {
        name: "xIdNroInt_fExBD",
        unique: true,
        fields: [
          { name: "IdExtracto" },
          { name: "NroInterno" },
          { name: "CodCuenta" },
        ]
      },
      {
        name: "xNroLoteConcil",
        fields: [
          { name: "CodCuenta" },
          { name: "CodSucurs" },
          { name: "CodPunVen" },
          { name: "NroLotConcil" },
        ]
      },
      {
        name: "xTipMovBanc",
        fields: [
          { name: "CodTipMov" },
          { name: "CodCuenta" },
        ]
      },
    ]
  });
};
