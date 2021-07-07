const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tcReferentes', {
    CodRefer: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    Descripcion: {
      type: DataTypes.STRING(41),
      allowNull: false,
      defaultValue: ""
    }
  }, {
    sequelize,
    tableName: 'tcReferentes',
    schema: 'dbo',
    hasTrigger: true,
    timestamps: false,
    indexes: [
      {
        name: "xCodRefer_tcRefe",
        unique: true,
        fields: [
          { name: "CodRefer" },
        ]
      },
      {
        name: "xDescrip_tcRefe",
        unique: true,
        fields: [
          { name: "Descripcion" },
        ]
      },
    ]
  });
};
