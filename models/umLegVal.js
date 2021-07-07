const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('umLegVal', {
    IdLegajo: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    FecVale: {
      type: DataTypes.DATE,
      allowNull: true
    },
    FecOperacion: {
      type: DataTypes.DATE,
      allowNull: true
    },
    NumVale: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    Importe: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    Concepto: {
      type: DataTypes.STRING(31),
      allowNull: false,
      defaultValue: ""
    }
  }, {
    sequelize,
    tableName: 'umLegVal',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "xFecha_uLeVa",
        fields: [
          { name: "FecVale" },
          { name: "NumVale" },
        ]
      },
      {
        name: "xIDLegajo_uLeVa",
        fields: [
          { name: "IdLegajo" },
          { name: "FecVale" },
        ]
      },
      {
        name: "xIDLegValOnly_uLeVa",
        fields: [
          { name: "IdLegajo" },
        ]
      },
      {
        name: "xNroVale_uLeVa",
        unique: true,
        fields: [
          { name: "NumVale" },
        ]
      },
    ]
  });
};
