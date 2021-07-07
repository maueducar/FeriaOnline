const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('wcTanques', {
    CodTanque: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    Patente: {
      type: DataTypes.STRING(11),
      allowNull: false,
      defaultValue: ""
    },
    FecVigSeguro: {
      type: DataTypes.DATE,
      allowNull: true
    },
    FecVigTecnica: {
      type: DataTypes.DATE,
      allowNull: true
    },
    FecVigRUTA: {
      type: DataTypes.DATE,
      allowNull: true
    },
    FecVigenHabTan: {
      type: DataTypes.DATE,
      allowNull: true
    },
    FecVigenPruMan: {
      type: DataTypes.DATE,
      allowNull: true
    },
    FecVigenValSeg: {
      type: DataTypes.DATE,
      allowNull: true
    },
    FecVigenValExcFlu: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'wcTanques',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "xCodTanque_wTan",
        unique: true,
        fields: [
          { name: "CodTanque" },
        ]
      },
      {
        name: "xPatente_wTan",
        unique: true,
        fields: [
          { name: "Patente" },
          { name: "CodTanque" },
        ]
      },
    ]
  });
};
