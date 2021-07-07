const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('xcZonas', {
    CodZona: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    Descripcion: {
      type: DataTypes.STRING(31),
      allowNull: false,
      defaultValue: ""
    }
  }, {
    sequelize,
    tableName: 'xcZonas',
    schema: 'dbo',
    hasTrigger: true,
    timestamps: false,
    indexes: [
      {
        name: "xCodigo_xZona",
        unique: true,
        fields: [
          { name: "CodZona" },
        ]
      },
      {
        name: "xDescripcion_xZona",
        fields: [
          { name: "Descripcion" },
        ]
      },
    ]
  });
};
