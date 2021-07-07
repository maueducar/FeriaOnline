const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('scArtCat', {
    CodCatArticulo: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    Descripcion: {
      type: DataTypes.STRING(31),
      allowNull: false,
      defaultValue: ""
    },
    EnUso: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: ""
    }
  }, {
    sequelize,
    tableName: 'scArtCat',
    schema: 'dbo',
    hasTrigger: true,
    timestamps: false,
    indexes: [
      {
        name: "xCodCategoria_sArCa",
        unique: true,
        fields: [
          { name: "CodCatArticulo" },
        ]
      },
      {
        name: "xDescripcion_sArCa",
        fields: [
          { name: "Descripcion" },
        ]
      },
    ]
  });
};
