const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('scDefPun', {
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
    tableName: 'scDefPun',
    schema: 'dbo',
    hasTrigger: true,
    timestamps: false,
    indexes: [
      {
        name: "xCodigo_sDePu",
        unique: true,
        fields: [
          { name: "CodTalona" },
          { name: "CodPunVen" },
        ]
      },
      {
        name: "xCodTalona_sDePu",
        fields: [
          { name: "CodTalona" },
        ]
      },
      {
        name: "xPunto_sDePu",
        fields: [
          { name: "CodPunVen" },
        ]
      },
    ]
  });
};
