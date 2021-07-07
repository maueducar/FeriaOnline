const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('scRubCtas', {
    CodRubro: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    CodCenSto: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    CodCuentaVta: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    CodCuentaBieCam: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    CodCuentCosto: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'scRubCtas',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "xRubCStock_sRuCu",
        unique: true,
        fields: [
          { name: "CodRubro" },
          { name: "CodCenSto" },
        ]
      },
    ]
  });
};
