const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('fmTraXtC', {
    CodSucurs: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    CodPunVen: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    NroDeLote: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    CodComCaja: {
      type: DataTypes.STRING(4),
      allowNull: false,
      defaultValue: "",
      primaryKey: true
    },
    VisTransa: {
      type: DataTypes.STRING(15),
      allowNull: false,
      defaultValue: ""
    },
    IdeRegAsi: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'fmTraXtC',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "xPlaCajTipo_fTgPC",
        unique: true,
        fields: [
          { name: "CodSucurs" },
          { name: "CodPunVen" },
          { name: "NroDeLote" },
          { name: "CodComCaja" },
        ]
      },
      {
        name: "xPlaCajTipo_fTgPC_2",
        fields: [
          { name: "CodSucurs" },
          { name: "CodPunVen" },
          { name: "NroDeLote" },
        ]
      },
    ]
  });
};
