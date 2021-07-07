const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('xmRegSes', {
    IdRegistro: {
      autoIncrement: true,
      type: DataTypes.DECIMAL,
      allowNull: false,
      primaryKey: true
    },
    SPID: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    NomUsuario: {
      type: DataTypes.STRING(15),
      allowNull: false,
      defaultValue: ""
    },
    Fecha: {
      type: DataTypes.DATE,
      allowNull: true
    },
    Hora: {
      type: DataTypes.STRING(11),
      allowNull: false,
      defaultValue: ""
    },
    UniOp: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    Indice: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    Modulo: {
      type: DataTypes.STRING(21),
      allowNull: false,
      defaultValue: ""
    }
  }, {
    sequelize,
    tableName: 'xmRegSes',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "xIdRegistro_xReSe",
        unique: true,
        fields: [
          { name: "IdRegistro" },
        ]
      },
      {
        name: "xSpId_xReSe",
        unique: true,
        fields: [
          { name: "SPID" },
          { name: "IdRegistro", order: "DESC" },
        ]
      },
    ]
  });
};
