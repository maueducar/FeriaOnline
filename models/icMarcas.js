const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('icMarcas', {
    CodMarca: {
      type: DataTypes.STRING(4),
      allowNull: false,
      defaultValue: "",
      primaryKey: true
    },
    Descripcion: {
      type: DataTypes.STRING(16),
      allowNull: false,
      defaultValue: ""
    }
  }, {
    sequelize,
    tableName: 'icMarcas',
    schema: 'dbo',
    hasTrigger: true,
    timestamps: false,
    indexes: [
      {
        name: "PorCodigo_iMarc",
        unique: true,
        fields: [
          { name: "CodMarca" },
        ]
      },
      {
        name: "PorDescripcion_iMarc",
        unique: true,
        fields: [
          { name: "Descripcion" },
        ]
      },
    ]
  });
};
