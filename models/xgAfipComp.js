const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('xgAfipComp', {
    CodComp: {
      type: DataTypes.STRING(4),
      allowNull: false,
      defaultValue: "",
      primaryKey: true
    },
    Descripcion: {
      type: DataTypes.STRING(81),
      allowNull: false,
      defaultValue: ""
    },
    ListCodVen: {
      type: DataTypes.STRING(101),
      allowNull: false,
      defaultValue: ""
    },
    ListCodComp: {
      type: DataTypes.STRING(101),
      allowNull: false,
      defaultValue: ""
    },
    TipComCorresp: {
      type: DataTypes.STRING(4),
      allowNull: false,
      defaultValue: ""
    },
    Letra: {
      type: DataTypes.STRING(2),
      allowNull: false,
      defaultValue: ""
    },
    AfeLibIva: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: ""
    }
  }, {
    sequelize,
    tableName: 'xgAfipComp',
    schema: 'dbo',
    hasTrigger: true,
    timestamps: false,
    indexes: [
      {
        name: "xCodigo_xAfipCom",
        unique: true,
        fields: [
          { name: "CodComp" },
        ]
      },
    ]
  });
};
