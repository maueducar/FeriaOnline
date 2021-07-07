const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ucCodZon', {
    CodZona: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: "",
      primaryKey: true
    },
    Desde: {
      type: DataTypes.DATE,
      allowNull: true
    },
    Hasta: {
      type: DataTypes.DATE,
      allowNull: true
    },
    DescZona: {
      type: DataTypes.STRING(31),
      allowNull: false,
      defaultValue: ""
    }
  }, {
    sequelize,
    tableName: 'ucCodZon',
    schema: 'dbo',
    hasTrigger: true,
    timestamps: false,
    indexes: [
      {
        name: "xCodZona_uCodZ",
        unique: true,
        fields: [
          { name: "CodZona" },
        ]
      },
      {
        name: "xDesZona_uCodZ",
        fields: [
          { name: "DescZona" },
        ]
      },
    ]
  });
};
