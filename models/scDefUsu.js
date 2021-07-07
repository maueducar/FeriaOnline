const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('scDefUsu', {
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
    tableName: 'scDefUsu',
    schema: 'dbo',
    hasTrigger: true,
    timestamps: false,
    indexes: [
      {
        name: "xComUsuario_sDeUs",
        unique: true,
        fields: [
          { name: "CodDefCom" },
          { name: "User_No" },
        ]
      },
      {
        name: "xUsuComprobante_sDeUs",
        fields: [
          { name: "User_No" },
          { name: "CodDefCom" },
        ]
      },
    ]
  });
};
