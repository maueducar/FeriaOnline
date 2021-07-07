const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mmCoefCr', {
    TipCuenta: {
      type: DataTypes.STRING(21),
      allowNull: false,
      defaultValue: "",
      primaryKey: true
    },
    TipCuota: {
      type: DataTypes.STRING(20),
      allowNull: false,
      defaultValue: "",
      primaryKey: true
    },
    CanCuota: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    Coeficiente: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'mmCoefCr',
    schema: 'dbo',
    hasTrigger: true,
    timestamps: false,
    indexes: [
      {
        name: "xTipos_mCoef",
        unique: true,
        fields: [
          { name: "TipCuenta" },
          { name: "TipCuota" },
          { name: "CanCuota" },
        ]
      },
    ]
  });
};
