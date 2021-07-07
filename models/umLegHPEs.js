const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('umLegHPEs', {
    IdLegajo: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    IdRegistro: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    Fecha: {
      type: DataTypes.DATE,
      allowNull: false,
      primaryKey: true
    },
    Hora: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    Descripcion: {
      type: DataTypes.STRING(5001),
      allowNull: false,
      defaultValue: ""
    }
  }, {
    sequelize,
    tableName: 'umLegHPEs',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "xIdLegFech_uLePEs",
        unique: true,
        fields: [
          { name: "IdLegajo" },
          { name: "Fecha", order: "DESC" },
          { name: "Hora", order: "DESC" },
        ]
      },
      {
        name: "xIdLegYIdReg_uLePEs",
        unique: true,
        fields: [
          { name: "IdLegajo" },
          { name: "IdRegistro", order: "DESC" },
        ]
      },
    ]
  });
};
