const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('scArtMar', {
    CodMarca: {
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
    tableName: 'scArtMar',
    schema: 'dbo',
    hasTrigger: true,
    timestamps: false,
    indexes: [
      {
        name: "xCodMarca_sArMa",
        unique: true,
        fields: [
          { name: "CodMarca" },
        ]
      },
      {
        name: "xDescripcion_sArMa",
        fields: [
          { name: "Descripcion" },
        ]
      },
    ]
  });
};
