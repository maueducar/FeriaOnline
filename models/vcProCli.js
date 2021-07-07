const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('vcProCli', {
    CodCliente: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    FecInicio: {
      type: DataTypes.DATE,
      allowNull: true
    },
    Fecfinal: {
      type: DataTypes.DATE,
      allowNull: true
    },
    ComPromocion: {
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
    tableName: 'vcProCli',
    schema: 'dbo',
    hasTrigger: true,
    timestamps: false,
    indexes: [
      {
        name: "xCliente",
        fields: [
          { name: "CodCliente" },
          { name: "FecInicio" },
        ]
      },
      {
        name: "xIdReg_cPrCl",
        unique: true,
        fields: [
          { name: "IdRegistro" },
        ]
      },
    ]
  });
};
