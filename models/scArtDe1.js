const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('scArtDe1', {
    CodDet1: {
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
    tableName: 'scArtDe1',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "xCodDet1_sArD1",
        unique: true,
        fields: [
          { name: "CodDet1" },
        ]
      },
      {
        name: "xDescripcion_sArD1",
        unique: true,
        fields: [
          { name: "Descripcion" },
        ]
      },
    ]
  });
};
