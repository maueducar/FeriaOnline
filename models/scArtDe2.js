const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('scArtDe2', {
    CodDet2: {
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
    tableName: 'scArtDe2',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "xCodDet2_sArD2",
        unique: true,
        fields: [
          { name: "CodDet2" },
        ]
      },
      {
        name: "xDescripcion_sArD2",
        unique: true,
        fields: [
          { name: "Descripcion" },
        ]
      },
    ]
  });
};
