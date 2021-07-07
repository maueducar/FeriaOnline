const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('wcART', {
    CodART: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    DesART: {
      type: DataTypes.STRING(31),
      allowNull: false,
      defaultValue: ""
    }
  }, {
    sequelize,
    tableName: 'wcART',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "xCodART_wART",
        unique: true,
        fields: [
          { name: "CodART" },
        ]
      },
      {
        name: "xDesART_wART",
        fields: [
          { name: "DesART" },
        ]
      },
    ]
  });
};
