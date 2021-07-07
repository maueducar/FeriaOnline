const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('rtLugarDesca', {
    CodLugDes: {
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
    },
    Puesto: {
      type: DataTypes.STRING(31),
      allowNull: false,
      defaultValue: ""
    },
    CodZona: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'rtLugarDesca',
    schema: 'dbo',
    hasTrigger: true,
    timestamps: false,
    indexes: [
      {
        name: "PorCodigo_rLDes",
        unique: true,
        fields: [
          { name: "CodLugDes" },
        ]
      },
      {
        name: "xEstablec_rLDes",
        fields: [
          { name: "Establecimiento" },
        ]
      },
      {
        name: "xLocalidad_rLDes",
        fields: [
          { name: "CodLocali" },
        ]
      },
      {
        name: "xProvincia_rLDes",
        fields: [
          { name: "CodProvin" },
        ]
      },
      {
        name: "xZona_rLDes",
        fields: [
          { name: "CodZona" },
          { name: "CodLugDes" },
        ]
      },
      {
        name: "xZonaOnly",
        fields: [
          { name: "CodZona" },
        ]
      },
    ]
  });
};
