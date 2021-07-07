const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ccObsCal', {
    CodObsCal: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    Denomin: {
      type: DataTypes.STRING(31),
      allowNull: false,
      defaultValue: ""
    },
    TipObserva: {
      type: DataTypes.STRING(6),
      allowNull: false,
      defaultValue: ""
    }
  }, {
    sequelize,
    tableName: 'ccObsCal',
    schema: 'dbo',
    hasTrigger: true,
    timestamps: false,
    indexes: [
      {
        name: "xCodigo_cObCa",
        unique: true,
        fields: [
          { name: "CodObsCal" },
        ]
      },
      {
        name: "xDenominacion",
        fields: [
          { name: "Denomin" },
        ]
      },
      {
        name: "xTipObserv",
        fields: [
          { name: "TipObserva" },
        ]
      },
    ]
  });
};
