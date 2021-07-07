const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('fcLocBan', {
    CodLocBan: {
      type: DataTypes.STRING(11),
      allowNull: false,
      defaultValue: "",
      primaryKey: true
    },
    DescLocBan: {
      type: DataTypes.STRING(31),
      allowNull: false,
      defaultValue: ""
    },
    HorasClearing: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'fcLocBan',
    schema: 'dbo',
    hasTrigger: true,
    timestamps: false,
    indexes: [
      {
        name: "xCodLocBanco",
        unique: true,
        fields: [
          { name: "CodLocBan" },
        ]
      },
      {
        name: "xDescLocBan",
        fields: [
          { name: "DescLocBan" },
        ]
      },
    ]
  });
};
