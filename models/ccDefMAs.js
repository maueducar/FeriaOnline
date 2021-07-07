const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ccDefMAs', {
    CodDefCom: {
      type: DataTypes.STRING(4),
      allowNull: false,
      defaultValue: "",
      primaryKey: true
    },
    IdCompro: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    IdRegistro: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    CodModAsie: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    ApliDesFec: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'ccDefMAs',
    schema: 'dbo',
    hasTrigger: true,
    timestamps: false,
    indexes: [
      {
        name: "xCodComp",
        unique: true,
        fields: [
          { name: "CodDefCom" },
          { name: "IdRegistro" },
        ]
      },
      {
        name: "xCodDefCom_cDeMa",
        fields: [
          { name: "CodDefCom" },
        ]
      },
      {
        name: "xModAsie",
        fields: [
          { name: "CodModAsie" },
        ]
      },
      {
        name: "xModAsiFecha",
        unique: true,
        fields: [
          { name: "CodModAsie" },
          { name: "ApliDesFec" },
        ]
      },
    ]
  });
};
