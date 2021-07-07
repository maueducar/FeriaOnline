const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ccDefPun', {
    CodPunVen: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    CodTalona: {
      type: DataTypes.STRING(4),
      allowNull: false,
      defaultValue: "",
      primaryKey: true
    }
  }, {
    sequelize,
    tableName: 'ccDefPun',
    schema: 'dbo',
    hasTrigger: true,
    timestamps: false,
    indexes: [
      {
        name: "xPunto",
        unique: true,
        fields: [
          { name: "CodPunVen" },
          { name: "CodTalona" },
        ]
      },
      {
        name: "xTalonario_cDePu",
        unique: true,
        fields: [
          { name: "CodTalona" },
          { name: "CodPunVen" },
        ]
      },
    ]
  });
};
