const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('vcDefPun', {
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
    tableName: 'vcDefPun',
    schema: 'dbo',
    hasTrigger: true,
    timestamps: false,
    indexes: [
      {
        name: "xCodTalona_vDePu",
        fields: [
          { name: "CodTalona" },
        ]
      },
      {
        name: "xPunto_vDePu",
        fields: [
          { name: "CodPunVen" },
        ]
      },
      {
        name: "xTalonario_vDePu",
        unique: true,
        fields: [
          { name: "CodTalona" },
          { name: "CodPunVen" },
        ]
      },
    ]
  });
};
