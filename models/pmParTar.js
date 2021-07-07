const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('pmParTar', {
    IdParTareas: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    IdLegOpe: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    Fecha: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'pmParTar',
    schema: 'dbo',
    hasTrigger: true,
    timestamps: false,
    indexes: [
      {
        name: "xFechaOpe_pPaTa",
        unique: true,
        fields: [
          { name: "Fecha" },
          { name: "IdLegOpe" },
          { name: "IdParTareas" },
        ]
      },
      {
        name: "xIdRegistro_pPaTa",
        unique: true,
        fields: [
          { name: "IdParTareas" },
        ]
      },
      {
        name: "xLegOpe_pPata",
        unique: true,
        fields: [
          { name: "IdLegOpe" },
          { name: "IdParTareas" },
        ]
      },
    ]
  });
};
