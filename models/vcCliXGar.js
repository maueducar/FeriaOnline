const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('vcCliXGar', {
    CodCliente: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    CodGarante: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    }
  }, {
    sequelize,
    tableName: 'vcCliXGar',
    schema: 'dbo',
    hasTrigger: true,
    timestamps: false,
    indexes: [
      {
        name: "xCliGar_vcCliXGar",
        unique: true,
        fields: [
          { name: "CodCliente" },
          { name: "CodGarante" },
        ]
      },
      {
        name: "xGarante_vcCliXGar",
        fields: [
          { name: "CodGarante" },
        ]
      },
      {
        name: "xGarClie_vcCliXGar",
        unique: true,
        fields: [
          { name: "CodGarante" },
          { name: "CodCliente" },
        ]
      },
    ]
  });
};
