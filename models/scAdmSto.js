const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('scAdmSto', {
    CodCenSto: {
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
    }
  }, {
    sequelize,
    tableName: 'scAdmSto',
    schema: 'dbo',
    hasTrigger: true,
    timestamps: false,
    indexes: [
      {
        name: "xCodigo_sAdSt",
        fields: [
          { name: "CodCenSto" },
        ]
      },
      {
        name: "xCodPunVen_sAdSt",
        fields: [
          { name: "CodPunVen" },
        ]
      },
      {
        name: "xPueCenSto",
        unique: true,
        fields: [
          { name: "CodPunVen" },
          { name: "CodCenSto" },
        ]
      },
    ]
  });
};
