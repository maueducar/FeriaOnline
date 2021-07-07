const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('wcVarUvXProd', {
    CodFinca: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    CodVarUva: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    Hectareas: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    INV: {
      type: DataTypes.STRING(16),
      allowNull: false,
      defaultValue: "",
      primaryKey: true
    }
  }, {
    sequelize,
    tableName: 'wcVarUvXProd',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "xFincaYVariedad_wcVarP",
        unique: true,
        fields: [
          { name: "INV" },
          { name: "CodVarUva" },
        ]
      },
      {
        name: "xVariDeUva_wcVarP",
        unique: true,
        fields: [
          { name: "CodVarUva" },
          { name: "INV" },
        ]
      },
    ]
  });
};
