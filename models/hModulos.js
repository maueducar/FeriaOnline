const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('hModulos', {
    IdModulo: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    Modulo: {
      type: DataTypes.STRING(20),
      allowNull: false,
      defaultValue: "",
      primaryKey: true
    },
    Descripcion: {
      type: DataTypes.STRING(30),
      allowNull: false,
      defaultValue: ""
    },
    Habilitado: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: ""
    }
  }, {
    sequelize,
    tableName: 'hModulos',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "xModulo_hMod",
        unique: true,
        fields: [
          { name: "IdModulo" },
          { name: "Modulo" },
        ]
      },
    ]
  });
};
