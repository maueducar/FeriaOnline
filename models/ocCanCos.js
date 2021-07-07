const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ocCanCos', {
    CodCanCos: {
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
    Habilitado: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: ""
    }
  }, {
    sequelize,
    tableName: 'ocCanCos',
    schema: 'dbo',
    hasTrigger: true,
    timestamps: false,
    indexes: [
      {
        name: "xCodigo_oCaCo",
        unique: true,
        fields: [
          { name: "CodCanCos" },
        ]
      },
      {
        name: "xDescripcion_oCaCo",
        fields: [
          { name: "Descripcion" },
        ]
      },
    ]
  });
};
