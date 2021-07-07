const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('xgProvin', {
    CodProvin: {
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
    tableName: 'xgProvin',
    schema: 'dbo',
    hasTrigger: true,
    timestamps: false,
    indexes: [
      {
        name: "xCodigo_xProv",
        unique: true,
        fields: [
          { name: "CodProvin" },
        ]
      },
      {
        name: "xDescripcion_xProv",
        fields: [
          { name: "Descripcion" },
        ]
      },
    ]
  });
};
