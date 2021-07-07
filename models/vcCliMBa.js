const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('vcCliMBa', {
    CodMotBaja: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    DesMotBaja: {
      type: DataTypes.STRING(31),
      allowNull: false,
      defaultValue: ""
    }
  }, {
    sequelize,
    tableName: 'vcCliMBa',
    schema: 'dbo',
    hasTrigger: true,
    timestamps: false,
    indexes: [
      {
        name: "xCodMotBaja_vClMB",
        unique: true,
        fields: [
          { name: "CodMotBaja" },
        ]
      },
      {
        name: "xDesMotBaja_vClMB",
        unique: true,
        fields: [
          { name: "DesMotBaja" },
          { name: "CodMotBaja" },
        ]
      },
    ]
  });
};
