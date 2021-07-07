const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('vcModAsD', {
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
    ImpOConcepto: {
      type: DataTypes.STRING(5),
      allowNull: false,
      defaultValue: ""
    },
    ConImputar: {
      type: DataTypes.STRING(3),
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
    },
    CodCenCos: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'vcModAsD',
    schema: 'dbo',
    hasTrigger: true,
    timestamps: false,
    indexes: [
      {
        name: "xCodigo_vMoAd",
        unique: true,
        fields: [
          { name: "CodModAsie" },
          { name: "IdRegistro" },
        ]
      },
      {
        name: "xCodigoDebHab_vMoAd",
        unique: true,
        fields: [
          { name: "CodModAsie" },
          { name: "DebHaber" },
          { name: "IdRegistro" },
        ]
      },
      {
        name: "xCodImpues_vMoAd",
        fields: [
          { name: "CodImpues" },
        ]
      },
      {
        name: "xCodImpuesto_vMoAd",
        fields: [
          { name: "CodImpues" },
          { name: "CodModAsie" },
        ]
      },
      {
        name: "xCodModAsie_vMoAd",
        fields: [
          { name: "CodModAsie" },
        ]
      },
      {
        name: "xCtaContable_vMoAd",
        fields: [
          { name: "CodCuenta" },
        ]
      },
    ]
  });
};
