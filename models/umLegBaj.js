const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('umLegBaj', {
    IdRegistro: {
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
    FecIngreso: {
      type: DataTypes.DATE,
      allowNull: true
    },
    FecEgreso: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    CodMotEgre: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    CantMeses: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'umLegBaj',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "xIdRegYLeg_uLeBa",
        unique: true,
        fields: [
          { name: "IdRegistro" },
          { name: "IdLegajo" },
        ]
      },
    ]
  });
};
