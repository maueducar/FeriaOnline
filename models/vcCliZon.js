const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('vcCliZon', {
    CodCliente: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    CodZona: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    }
  }, {
    sequelize,
    tableName: 'vcCliZon',
    schema: 'dbo',
    hasTrigger: true,
    timestamps: false,
    indexes: [
      {
        name: "xClieYZona_vClZo",
        unique: true,
        fields: [
          { name: "CodCliente" },
          { name: "CodZona" },
        ]
      },
      {
        name: "xCodCliente_vClZo",
        fields: [
          { name: "CodCliente" },
        ]
      },
      {
        name: "xCodZona_vClZo",
        fields: [
          { name: "CodZona" },
        ]
      },
      {
        name: "xCodZonaYClie_vClZo",
        unique: true,
        fields: [
          { name: "CodZona" },
          { name: "CodCliente" },
        ]
      },
    ]
  });
};
