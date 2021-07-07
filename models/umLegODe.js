const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('umLegODe', {
    CodOtDed: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    IdLegajo: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    PeriodoAfectacion: {
      type: DataTypes.DATE,
      allowNull: false,
      primaryKey: true
    },
    Importe: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'umLegODe',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "xIdLegYOtDed_uLeOD",
        unique: true,
        fields: [
          { name: "IdLegajo" },
          { name: "PeriodoAfectacion", order: "DESC" },
          { name: "CodOtDed" },
        ]
      },
    ]
  });
};
