const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ucLocalidad', {
    CodLoc: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    DesLoc: {
      type: DataTypes.STRING(31),
      allowNull: false,
      defaultValue: ""
    }
  }, {
    sequelize,
    tableName: 'ucLocalidad',
    schema: 'dbo',
    hasTrigger: true,
    timestamps: false,
    indexes: [
      {
        name: "xCodLoca_uLoca",
        unique: true,
        fields: [
          { name: "CodLoc" },
        ]
      },
      {
        name: "xDesLoca_uLoca",
        fields: [
          { name: "DesLoc" },
        ]
      },
    ]
  });
};
