const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('xcArchBin', {
    Archivo: {
      type: DataTypes.BLOB,
      allowNull: true
    },
    IdRegistro: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    Tabla: {
      type: DataTypes.STRING(20),
      allowNull: false,
      defaultValue: ""
    },
    CodRela: {
      type: DataTypes.STRING(21),
      allowNull: false,
      defaultValue: ""
    }
  }, {
    sequelize,
    tableName: 'xcArchBin',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "xIdRegistro_xArBi",
        unique: true,
        fields: [
          { name: "IdRegistro" },
        ]
      },
      {
        name: "xTablaCodigo_xArBi",
        unique: true,
        fields: [
          { name: "Tabla" },
          { name: "CodRela" },
          { name: "IdRegistro" },
        ]
      },
    ]
  });
};
