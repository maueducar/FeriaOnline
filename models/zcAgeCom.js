const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('zcAgeCom', {
    CodAgen: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    Nombre: {
      type: DataTypes.STRING(31),
      allowNull: false,
      defaultValue: ""
    },
    Comision: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'zcAgeCom',
    schema: 'dbo',
    hasTrigger: true,
    timestamps: false,
    indexes: [
      {
        name: "xCodigo_zAgCo",
        unique: true,
        fields: [
          { name: "CodAgen" },
        ]
      },
      {
        name: "xNombre_zAgCo",
        fields: [
          { name: "Nombre" },
        ]
      },
    ]
  });
};
