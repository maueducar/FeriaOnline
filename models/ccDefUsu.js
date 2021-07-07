const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ccDefUsu', {
    CodDefCom: {
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
    tableName: 'ccDefUsu',
    schema: 'dbo',
    hasTrigger: true,
    timestamps: false,
    indexes: [
      {
        name: "xComUsuario",
        unique: true,
        fields: [
          { name: "CodDefCom" },
          { name: "User_No" },
        ]
      },
      {
        name: "xUsuComprobante",
        unique: true,
        fields: [
          { name: "User_No" },
          { name: "CodDefCom" },
        ]
      },
    ]
  });
};
