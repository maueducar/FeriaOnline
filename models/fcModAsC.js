const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('fcModAsC', {
    CodModAsie: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    Descripcion: {
      type: DataTypes.STRING(31),
      allowNull: false,
      defaultValue: ""
    }
  }, {
    sequelize,
    tableName: 'fcModAsC',
    schema: 'dbo',
    hasTrigger: true,
    timestamps: false,
    indexes: [
      {
        name: "xCodigo_fMoAc",
        unique: true,
        fields: [
          { name: "CodModAsie" },
        ]
      },
      {
        name: "xDescripcion_fMoAc",
        fields: [
          { name: "Descripcion" },
        ]
      },
    ]
  });
};
