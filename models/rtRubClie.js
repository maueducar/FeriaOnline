const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('rtRubClie', {
    CodRubro: {
      type: DataTypes.STRING(4),
      allowNull: false,
      defaultValue: "",
      primaryKey: true
    },
    Cliente: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    PrePromNoLiqui: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'rtRubClie',
    schema: 'dbo',
    hasTrigger: true,
    timestamps: false,
    indexes: [
      {
        name: "xCliente_rRCli",
        fields: [
          { name: "Cliente" },
        ]
      },
      {
        name: "xCliente_Rubro_rRCli",
        unique: true,
        fields: [
          { name: "Cliente" },
          { name: "CodRubro" },
        ]
      },
      {
        name: "xRubro_rRCli",
        fields: [
          { name: "CodRubro" },
        ]
      },
    ]
  });
};
