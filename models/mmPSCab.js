const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mmPSCab', {
    CodCliente: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    CodEdificio: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    CodUnidad: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    CodRenglon: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'mmPSCab',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "xCodCliente_mPSc",
        unique: true,
        fields: [
          { name: "CodCliente" },
          { name: "CodEdificio" },
          { name: "CodUnidad" },
        ]
      },
    ]
  });
};
