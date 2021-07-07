const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('fcCleChe', {
    Comentarios: {
      type: DataTypes.STRING(2000),
      allowNull: false,
      defaultValue: ""
    },
    IdCleCuentas: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    CodComercial: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    TitCuenta: {
      type: DataTypes.STRING(31),
      allowNull: false,
      defaultValue: ""
    },
    NroCuenta: {
      type: DataTypes.STRING(21),
      allowNull: false,
      defaultValue: ""
    },
    NroCuit1: {
      type: DataTypes.STRING(16),
      allowNull: false,
      defaultValue: ""
    },
    NroCuit2: {
      type: DataTypes.STRING(16),
      allowNull: false,
      defaultValue: ""
    },
    NroCuit3: {
      type: DataTypes.STRING(16),
      allowNull: false,
      defaultValue: ""
    },
    Bloqueada: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: ""
    }
  }, {
    sequelize,
    tableName: 'fcCleChe',
    schema: 'dbo',
    hasTrigger: true,
    timestamps: false,
    indexes: [
      {
        name: "xIDCuenta",
        unique: true,
        fields: [
          { name: "IdCleCuentas" },
        ]
      },
    ]
  });
};
