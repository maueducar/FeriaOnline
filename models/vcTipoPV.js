const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('vcTipoPV', {
    TipSoloFact: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: ""
    },
    TipFacDetPagos: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: ""
    },
    TipCtaCte: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: ""
    },
    TipFondos: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: ""
    },
    TipStock: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: ""
    },
    TipProveedores: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: ""
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
    IdRegistro: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    IdCompro: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    }
  }, {
    sequelize,
    tableName: 'vcTipoPV',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "xIdCompro_vcTiPV",
        unique: true,
        fields: [
          { name: "IdCompro" },
          { name: "IdRegistro" },
        ]
      },
    ]
  });
};
