const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('rtLugarCarga', {
    CodLugCar: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    Establecimiento: {
      type: DataTypes.STRING(31),
      allowNull: false,
      defaultValue: ""
    },
    CodLocali: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    CodProvin: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'rtLugarCarga',
    schema: 'dbo',
    hasTrigger: true,
    timestamps: false,
    indexes: [
      {
        name: "PorCodigo_rLuCa",
        unique: true,
        fields: [
          { name: "CodLugCar" },
        ]
      },
      {
        name: "xEstablec_rLuCa",
        fields: [
          { name: "Establecimiento" },
        ]
      },
      {
        name: "xLocalidad_rLuCa",
        fields: [
          { name: "CodLocali" },
        ]
      },
      {
        name: "xProvincia_rLuCa",
        fields: [
          { name: "CodProvin" },
        ]
      },
    ]
  });
};
