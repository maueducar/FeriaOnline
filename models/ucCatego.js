const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ucCatego', {
    CodCatego: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    DesCatego: {
      type: DataTypes.STRING(31),
      allowNull: false,
      defaultValue: ""
    },
    ImpBasico: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'ucCatego',
    schema: 'dbo',
    hasTrigger: true,
    timestamps: false,
    indexes: [
      {
        name: "xCodCateg",
        unique: true,
        fields: [
          { name: "CodCatego" },
        ]
      },
      {
        name: "xDesCateg",
        fields: [
          { name: "DesCatego" },
        ]
      },
    ]
  });
};
