const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('vcAdmSto', {
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
    tableName: 'vcAdmSto',
    schema: 'dbo',
    hasTrigger: true,
    timestamps: false,
    indexes: [
      {
        name: "xCodigo_vAdSt",
        fields: [
          { name: "CodCenSto" },
        ]
      },
      {
        name: "xCodPunVen_vAdSt",
        fields: [
          { name: "CodPunVen" },
        ]
      },
      {
        name: "xPueCenSto_vAdSt",
        unique: true,
        fields: [
          { name: "CodPunVen" },
          { name: "CodCenSto" },
        ]
      },
    ]
  });
};
