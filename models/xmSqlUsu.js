const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('xmSqlUsu', {
    IdConSQL: {
      type: DataTypes.STRING(4),
      allowNull: false,
      defaultValue: "",
      primaryKey: true
    },
    User_No: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    TipRestriccion: {
      type: DataTypes.STRING(8),
      allowNull: false,
      defaultValue: ""
    },
    AltaAutorizada: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: ""
    },
    ModAutorizada: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: ""
    },
    BajAutorizada: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: ""
    }
  }, {
    sequelize,
    tableName: 'xmSqlUsu',
    schema: 'dbo',
    hasTrigger: true,
    timestamps: false,
    indexes: [
      {
        name: "xCodComprob_xSqUs",
        fields: [
          { name: "IdConSQL" },
        ]
      },
      {
        name: "xComUsuario_xSqUs",
        unique: true,
        fields: [
          { name: "IdConSQL" },
          { name: "User_No" },
        ]
      },
      {
        name: "xUsuComprobante_xSqUs",
        unique: true,
        fields: [
          { name: "User_No" },
          { name: "IdConSQL" },
        ]
      },
    ]
  });
};
