const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('xmProEst', {
    IdRegistro: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    Modulo: {
      type: DataTypes.STRING(11),
      allowNull: false,
      defaultValue: ""
    },
    MesPeriodo: {
      type: DataTypes.DATE,
      allowNull: true
    },
    Estado: {
      type: DataTypes.STRING(11),
      allowNull: false,
      defaultValue: ""
    },
    Procesar: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: ""
    },
    Promedios: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: ""
    },
    Clientes: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: ""
    },
    Vendedores: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: ""
    },
    Proveedores: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: ""
    },
    Articulos: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: ""
    }
  }, {
    sequelize,
    tableName: 'xmProEst',
    schema: 'dbo',
    hasTrigger: true,
    timestamps: false,
    indexes: [
      {
        name: "xIdRegistro_xPrEs",
        unique: true,
        fields: [
          { name: "IdRegistro" },
        ]
      },
      {
        name: "xModuloEstado",
        unique: true,
        fields: [
          { name: "Modulo" },
          { name: "Estado" },
          { name: "IdRegistro" },
        ]
      },
      {
        name: "xModuloMes",
        unique: true,
        fields: [
          { name: "Modulo" },
          { name: "MesPeriodo" },
          { name: "IdRegistro" },
        ]
      },
    ]
  });
};
