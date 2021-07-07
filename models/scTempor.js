const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('scTempor', {
    CodTempor: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    DesTempor: {
      type: DataTypes.STRING(31),
      allowNull: false,
      defaultValue: ""
    },
    EnUso: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: ""
    }
  }, {
    sequelize,
    tableName: 'scTempor',
    schema: 'dbo',
    hasTrigger: true,
    timestamps: false,
    indexes: [
      {
        name: "xCodTempor",
        unique: true,
        fields: [
          { name: "CodTempor" },
        ]
      },
      {
        name: "xDescTempo",
        fields: [
          { name: "DesTempor" },
        ]
      },
    ]
  });
};
