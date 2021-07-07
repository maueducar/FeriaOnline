const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ocPreAsD', {
    CodModAsie: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    CodCuenta: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    DebeHaber: {
      type: DataTypes.STRING(6),
      allowNull: false,
      defaultValue: "",
      primaryKey: true
    }
  }, {
    sequelize,
    tableName: 'ocPreAsD',
    schema: 'dbo',
    hasTrigger: true,
    timestamps: false,
    indexes: [
      {
        name: "xCodCuenta_oPrAD",
        fields: [
          { name: "CodCuenta" },
        ]
      },
      {
        name: "xCodMod",
        unique: true,
        fields: [
          { name: "CodModAsie" },
          { name: "DebeHaber" },
          { name: "CodCuenta" },
        ]
      },
      {
        name: "xCodModAsie_oPrAD",
        fields: [
          { name: "CodModAsie" },
        ]
      },
    ]
  });
};
