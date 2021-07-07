const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ucProvincias', {
    CodProv: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    DesProv: {
      type: DataTypes.STRING(31),
      allowNull: false,
      defaultValue: ""
    }
  }, {
    sequelize,
    tableName: 'ucProvincias',
    schema: 'dbo',
    hasTrigger: true,
    timestamps: false,
    indexes: [
      {
        name: "xCodProv_uProv",
        unique: true,
        fields: [
          { name: "CodProv" },
        ]
      },
      {
        name: "xDesProv_uProv",
        fields: [
          { name: "DesProv" },
        ]
      },
    ]
  });
};
