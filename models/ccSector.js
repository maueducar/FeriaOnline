const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ccSector', {
    CodSector: {
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
    tableName: 'ccSector',
    schema: 'dbo',
    hasTrigger: true,
    timestamps: false,
    indexes: [
      {
        name: "xCodigo_cSect",
        unique: true,
        fields: [
          { name: "CodSector" },
        ]
      },
      {
        name: "xDescripcion_cSect",
        fields: [
          { name: "Descripcion" },
        ]
      },
    ]
  });
};
