const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('scCenEnt', {
    CodEnti: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    DescEnti: {
      type: DataTypes.STRING(31),
      allowNull: false,
      defaultValue: ""
    }
  }, {
    sequelize,
    tableName: 'scCenEnt',
    schema: 'dbo',
    hasTrigger: true,
    timestamps: false,
    indexes: [
      {
        name: "xCodigo_sCeEn",
        unique: true,
        fields: [
          { name: "CodEnti" },
        ]
      },
      {
        name: "xDecrip",
        fields: [
          { name: "DescEnti" },
        ]
      },
    ]
  });
};
