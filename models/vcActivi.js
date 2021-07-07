const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('vcActivi', {
    CodActivi: {
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
    tableName: 'vcActivi',
    schema: 'dbo',
    hasTrigger: true,
    timestamps: false,
    indexes: [
      {
        name: "xCodigo_vActivi",
        unique: true,
        fields: [
          { name: "CodActivi" },
        ]
      },
      {
        name: "xDescripcion_vActi",
        fields: [
          { name: "Descripcion" },
        ]
      },
    ]
  });
};
