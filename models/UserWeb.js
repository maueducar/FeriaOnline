const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('UserWeb', {
    IdRegistro: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    UsuLogin: {
      type: DataTypes.STRING(21),
      allowNull: false,
      defaultValue: ""
    },
    Estado: {
      type: DataTypes.STRING(24),
      allowNull: false,
      defaultValue: ""
    },
    DesUsuario: {
      type: DataTypes.STRING(51),
      allowNull: false,
      defaultValue: ""
    },
    NomFantasia: {
      type: DataTypes.STRING(51),
      allowNull: false,
      defaultValue: ""
    },
    Password: {
      type: DataTypes.STRING(46),
      allowNull: false,
      defaultValue: ""
    },
    TipoCuenta: {
      type: DataTypes.STRING(14),
      allowNull: false,
      defaultValue: ""
    },
    CodCliente: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    CodProveedor: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    CodVended: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    CodActivacion: {
      type: DataTypes.STRING(26),
      allowNull: false,
      defaultValue: ""
    },
    DirMail: {
      type: DataTypes.STRING(51),
      allowNull: false,
      defaultValue: ""
    }
  }, {
    sequelize,
    tableName: 'UserWeb',
    schema: 'dbo',
    hasTrigger: true,
    timestamps: false,
    indexes: [
      {
        name: "xCodCliente_usWe",
        fields: [
          { name: "CodCliente" },
        ]
      },
      {
        name: "xCodProveedor_usWe",
        fields: [
          { name: "CodProveedor" },
        ]
      },
      {
        name: "xDescUsuario_usWe",
        unique: true,
        fields: [
          { name: "DesUsuario" },
          { name: "IdRegistro" },
        ]
      },
      {
        name: "xEstado_usWe",
        unique: true,
        fields: [
          { name: "Estado" },
          { name: "IdRegistro" },
        ]
      },
      {
        name: "xIdRegistro_usWe",
        unique: true,
        fields: [
          { name: "IdRegistro" },
        ]
      },
      {
        name: "xNomUsuario_usWe",
        unique: true,
        fields: [
          { name: "UsuLogin" },
          { name: "IdRegistro" },
        ]
      },
      {
        name: "xVendedor_usWe",
        fields: [
          { name: "CodVended" },
        ]
      },
    ]
  });
};
