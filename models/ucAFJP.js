const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ucAFJP', {
    CodAFJP: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    DesAFJP: {
      type: DataTypes.STRING(31),
      allowNull: false,
      defaultValue: ""
    }
  }, {
    sequelize,
    tableName: 'ucAFJP',
    schema: 'dbo',
    hasTrigger: true,
    timestamps: false,
    indexes: [
      {
        name: "xCodAFJP_uAFJP",
        unique: true,
        fields: [
          { name: "CodAFJP" },
        ]
      },
      {
        name: "xDesAFJP_uAFJP",
        fields: [
          { name: "DesAFJP" },
        ]
      },
    ]
  });
};
