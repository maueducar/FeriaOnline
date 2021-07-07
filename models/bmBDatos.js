const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('bmBDatos', {
    IdRegistro: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    NombreBD: {
      type: DataTypes.STRING(21),
      allowNull: false,
      defaultValue: "",
      primaryKey: true
    },
    HaceBackup: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: ""
    },
    Descripcion: {
      type: DataTypes.STRING(41),
      allowNull: false,
      defaultValue: ""
    },
    Destino: {
      type: DataTypes.STRING(101),
      allowNull: false,
      defaultValue: ""
    },
    Incremental: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: ""
    },
    Frecuencia: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'bmBDatos',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "xNombreBD_bmBDat",
        unique: true,
        fields: [
          { name: "IdRegistro" },
          { name: "NombreBD" },
        ]
      },
    ]
  });
};
