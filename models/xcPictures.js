const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('xcPictures', {
    Tipo: {
      type: DataTypes.STRING(2),
      allowNull: false,
      defaultValue: ""
    },
    DesTipo: {
      type: DataTypes.STRING(21),
      allowNull: false,
      defaultValue: ""
    },
    Picture: {
      type: DataTypes.STRING(21),
      allowNull: false,
      defaultValue: ""
    },
    Ejemplo: {
      type: DataTypes.STRING(51),
      allowNull: false,
      defaultValue: ""
    },
    IdRegistro: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    }
  }, {
    sequelize,
    tableName: 'xcPictures',
    schema: 'dbo',
    hasTrigger: true,
    timestamps: false,
    indexes: [
      {
        name: "xIdReg_xPict",
        unique: true,
        fields: [
          { name: "IdRegistro" },
        ]
      },
      {
        name: "xTipo_xPict",
        fields: [
          { name: "Tipo" },
        ]
      },
    ]
  });
};
