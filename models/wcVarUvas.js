const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('wcVarUvas', {
    CodVarUva: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    DescVarUva: {
      type: DataTypes.STRING(31),
      allowNull: false,
      defaultValue: ""
    }
  }, {
    sequelize,
    tableName: 'wcVarUvas',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "xCodigo_cVaUv",
        unique: true,
        fields: [
          { name: "CodVarUva" },
        ]
      },
      {
        name: "xDescripcion_cVaUv",
        fields: [
          { name: "DescVarUva" },
        ]
      },
    ]
  });
};
