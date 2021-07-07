const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('omPeFCab', {
    IdRegistroCab: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    PerFiscal: {
      type: DataTypes.DATE,
      allowNull: true
    },
    Estado: {
      type: DataTypes.STRING(8),
      allowNull: false,
      defaultValue: ""
    },
    FecCierre: {
      type: DataTypes.DATE,
      allowNull: true
    },
    SalFavMesAnte: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    TotIvaDebito: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    PercepIvaCob: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    RetenIvaPag: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    VtaGravado: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    VtaNoGravado: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    VtaTotal: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    TotIvaCredito: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    PercepIvaPag: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    RetenIvaCob: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    ComGravado: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    ComNoGravado: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    ComTotal: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    SaldoFinal: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'omPeFCab',
    schema: 'dbo',
    hasTrigger: true,
    timestamps: false,
    indexes: [
      {
        name: "xIdReg_oPeFC",
        unique: true,
        fields: [
          { name: "IdRegistroCab" },
        ]
      },
      {
        name: "xPeriodoAsc",
        unique: true,
        fields: [
          { name: "PerFiscal" },
        ]
      },
      {
        name: "xPeriodoDes",
        unique: true,
        fields: [
          { name: "PerFiscal", order: "DESC" },
        ]
      },
    ]
  });
};
