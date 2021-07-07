const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('vcModAsC', {
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
    },
    ImpuCenCosto: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: ""
    },
    ContIdReg: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'vcModAsC',
    schema: 'dbo',
    hasTrigger: true,
    timestamps: false,
    indexes: [
      {
        name: "xCodigo_vMoAc",
        unique: true,
        fields: [
          { name: "CodModAsie" },
        ]
      },
      {
        name: "xDescripcion_vMoAc",
        fields: [
          { name: "Descripcion" },
        ]
      },
    ]
  });
};
