const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('veCliAbc', {
    CodCliente: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    PeriDesde: {
      type: DataTypes.DATE,
      allowNull: true
    },
    PeriHasta: {
      type: DataTypes.DATE,
      allowNull: true
    },
    TotalSinIVA: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    TotalConIVA: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    CodArticu: {
      type: DataTypes.STRING(16),
      allowNull: false,
      defaultValue: ""
    },
    Cantidades: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    Bultos: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    Kilos: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    Litros: {
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
    tableName: 'veCliAbc',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "xArtCantidades",
        fields: [
          { name: "CodCliente" },
          { name: "CodArticu" },
          { name: "Cantidades", order: "DESC" },
        ]
      },
      {
        name: "xArtKilos",
        fields: [
          { name: "CodCliente" },
          { name: "CodArticu" },
          { name: "Kilos", order: "DESC" },
        ]
      },
      {
        name: "xArtLitros",
        fields: [
          { name: "CodCliente" },
          { name: "CodArticu" },
          { name: "Litros", order: "DESC" },
        ]
      },
      {
        name: "xIdCompro_vClAbc",
        unique: true,
        fields: [
          { name: "IdCompro" },
          { name: "IdRegistro" },
        ]
      },
      {
        name: "xTotSinIVa",
        fields: [
          { name: "TotalSinIVA", order: "DESC" },
        ]
      },
    ]
  });
};
