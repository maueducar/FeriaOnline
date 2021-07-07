const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('rgParametros', {
    NroAcceso: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    OrdenDeCarga: {
      type: DataTypes.STRING(4),
      allowNull: false,
      defaultValue: ""
    },
    IngresoDolphin: {
      type: DataTypes.STRING(4),
      allowNull: false,
      defaultValue: ""
    },
    EgresoDolphin: {
      type: DataTypes.STRING(4),
      allowNull: false,
      defaultValue: ""
    },
    GuiaDespacho: {
      type: DataTypes.STRING(4),
      allowNull: false,
      defaultValue: ""
    },
    DesgloseGuia: {
      type: DataTypes.STRING(4),
      allowNull: false,
      defaultValue: ""
    },
    Remito: {
      type: DataTypes.STRING(4),
      allowNull: false,
      defaultValue: ""
    },
    Rubro: {
      type: DataTypes.STRING(4),
      allowNull: false,
      defaultValue: ""
    },
    CodConDebEnv: {
      type: DataTypes.STRING(4),
      allowNull: false,
      defaultValue: ""
    },
    CodCompDebEnv: {
      type: DataTypes.STRING(4),
      allowNull: false,
      defaultValue: ""
    }
  }, {
    sequelize,
    tableName: 'rgParametros',
    schema: 'dbo',
    hasTrigger: true,
    timestamps: false,
    indexes: [
      {
        name: "xNroAcceso",
        unique: true,
        fields: [
          { name: "NroAcceso" },
        ]
      },
    ]
  });
};
