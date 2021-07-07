const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('pcCenImp', {
    CodCenTra: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    CodImprod: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    Fecha: {
      type: DataTypes.DATE,
      allowNull: true
    },
    HorIni: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    HorFin: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    IdRegistro: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    }
  }, {
    sequelize,
    tableName: 'pcCenImp',
    schema: 'dbo',
    hasTrigger: true,
    timestamps: false,
    indexes: [
      {
        name: "xCodCenTra",
        unique: true,
        fields: [
          { name: "CodCenTra" },
          { name: "Fecha" },
          { name: "HorIni" },
          { name: "CodImprod" },
        ]
      },
      {
        name: "xCodCenTra_pCeIM",
        fields: [
          { name: "CodCenTra" },
        ]
      },
      {
        name: "xCodImprod",
        fields: [
          { name: "CodImprod" },
          { name: "CodCenTra" },
          { name: "Fecha" },
          { name: "HorIni" },
        ]
      },
      {
        name: "xCodImprod_pCeIm",
        fields: [
          { name: "CodImprod" },
        ]
      },
      {
        name: "xIdRegistro_pCeIm",
        unique: true,
        fields: [
          { name: "IdRegistro" },
        ]
      },
    ]
  });
};
