const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('fcModAsD', {
    CodModAsie: {
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
    CodCtaCaja: {
      type: DataTypes.STRING(4),
      allowNull: false,
      defaultValue: ""
    },
    ImpOConcepto: {
      type: DataTypes.STRING(5),
      allowNull: false,
      defaultValue: ""
    },
    ConImputar: {
      type: DataTypes.STRING(5),
      allowNull: false,
      defaultValue: ""
    },
    CodImpues: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    CodCuenta: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    DebHaber: {
      type: DataTypes.STRING(6),
      allowNull: false,
      defaultValue: ""
    }
  }, {
    sequelize,
    tableName: 'fcModAsD',
    schema: 'dbo',
    hasTrigger: true,
    timestamps: false,
    indexes: [
      {
        name: "xCodigo_fMoAd",
        unique: true,
        fields: [
          { name: "CodModAsie" },
          { name: "IdRegistro" },
        ]
      },
      {
        name: "xCodigoDebHab_fMoAd",
        fields: [
          { name: "CodModAsie" },
          { name: "DebHaber" },
        ]
      },
      {
        name: "xCodImpuesto_fMoAd",
        fields: [
          { name: "CodImpues" },
          { name: "CodModAsie" },
        ]
      },
      {
        name: "xCtaContable_fMoAd",
        fields: [
          { name: "CodCuenta" },
        ]
      },
    ]
  });
};
