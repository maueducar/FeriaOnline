const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tcDocumentacion', {
    CodDocum: {
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
    tableName: 'tcDocumentacion',
    schema: 'dbo',
    hasTrigger: true,
    timestamps: false,
    indexes: [
      {
        name: "xCodDocum_tcDocu",
        unique: true,
        fields: [
          { name: "CodDocum" },
        ]
      },
      {
        name: "xDescrip_tcDocu",
        unique: true,
        fields: [
          { name: "Descripcion" },
        ]
      },
    ]
  });
};
