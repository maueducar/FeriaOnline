const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ocPreAsC', {
    CodModAsie: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    DescModAsie: {
      type: DataTypes.STRING(31),
      allowNull: false,
      defaultValue: ""
    },
    HabUso: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: ""
    }
  }, {
    sequelize,
    tableName: 'ocPreAsC',
    schema: 'dbo',
    hasTrigger: true,
    timestamps: false,
    indexes: [
      {
        name: "xCodigo_oPrAC",
        unique: true,
        fields: [
          { name: "CodModAsie" },
        ]
      },
      {
        name: "xDescripcion_oPrAC",
        fields: [
          { name: "DescModAsie" },
        ]
      },
    ]
  });
};
