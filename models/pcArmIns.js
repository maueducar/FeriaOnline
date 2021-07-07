const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('pcArmIns', {
    CodArtResul: {
      type: DataTypes.STRING(16),
      allowNull: false,
      defaultValue: "",
      primaryKey: true
    },
    CodInsuAsociado: {
      type: DataTypes.STRING(16),
      allowNull: false,
      defaultValue: "",
      primaryKey: true
    }
  }, {
    sequelize,
    tableName: 'pcArmIns',
    schema: 'dbo',
    hasTrigger: true,
    timestamps: false,
    indexes: [
      {
        name: "xCodArtResul_pArIn",
        unique: true,
        fields: [
          { name: "CodArtResul" },
          { name: "CodInsuAsociado" },
        ]
      },
      {
        name: "xInsuAsoArtResu_pArIn",
        unique: true,
        fields: [
          { name: "CodInsuAsociado" },
          { name: "CodArtResul" },
        ]
      },
    ]
  });
};
