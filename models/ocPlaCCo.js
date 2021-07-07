const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ocPlaCCo', {
    CodCuenta: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    CodCenCos: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    }
  }, {
    sequelize,
    tableName: 'ocPlaCCo',
    schema: 'dbo',
    hasTrigger: true,
    timestamps: false,
    indexes: [
      {
        name: "xCodCen_CodCue",
        unique: true,
        fields: [
          { name: "CodCenCos" },
          { name: "CodCuenta" },
        ]
      },
      {
        name: "xCodCenCos_oPlCC",
        fields: [
          { name: "CodCenCos" },
        ]
      },
      {
        name: "xCodCue_CodCen",
        unique: true,
        fields: [
          { name: "CodCuenta" },
          { name: "CodCenCos" },
        ]
      },
      {
        name: "xCodCuenta_oPlCC",
        fields: [
          { name: "CodCuenta" },
        ]
      },
    ]
  });
};
