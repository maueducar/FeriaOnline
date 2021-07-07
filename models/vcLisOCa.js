const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('vcLisOCa', {
    CodSucurs: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    NumLisPre: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    NumSubLis: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    DesLista: {
      type: DataTypes.STRING(41),
      allowNull: false,
      defaultValue: ""
    },
    PreConIVA: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: ""
    },
    VerIvaDis: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: ""
    },
    FecEntVig: {
      type: DataTypes.DATE,
      allowNull: true
    },
    HorEntVig: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    FecFinVig: {
      type: DataTypes.DATE,
      allowNull: true
    },
    HorFinVig: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    Vigente: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: ""
    }
  }, {
    sequelize,
    tableName: 'vcLisOCa',
    schema: 'dbo',
    hasTrigger: true,
    timestamps: false,
    indexes: [
      {
        name: "xNumero_vLiOC",
        fields: [
          { name: "CodSucurs" },
          { name: "NumLisPre" },
        ]
      },
      {
        name: "xSubLista",
        unique: true,
        fields: [
          { name: "CodSucurs" },
          { name: "NumLisPre" },
          { name: "NumSubLis" },
        ]
      },
    ]
  });
};
