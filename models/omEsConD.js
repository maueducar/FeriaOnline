const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('omEsConD', {
    IdEstConta: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    NroOrden: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    Tabulacion: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    Descripcion: {
      type: DataTypes.STRING(41),
      allowNull: false,
      defaultValue: ""
    },
    Expresion: {
      type: DataTypes.CHAR(250),
      allowNull: false,
      defaultValue: ""
    }
  }, {
    sequelize,
    tableName: 'omEsConD',
    schema: 'dbo',
    hasTrigger: true,
    timestamps: false,
    indexes: [
      {
        name: "xIdEstConta_oEsCd",
        unique: true,
        fields: [
          { name: "IdEstConta" },
          { name: "NroOrden" },
        ]
      },
      {
        name: "xIdEstConta_oEsDc_2",
        fields: [
          { name: "IdEstConta" },
        ]
      },
    ]
  });
};
