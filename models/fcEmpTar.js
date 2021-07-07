const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('fcEmpTar', {
    CodEmpTarjeta: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    DesEmpTarjeta: {
      type: DataTypes.STRING(31),
      allowNull: false,
      defaultValue: ""
    },
    ModImpresion: {
      type: DataTypes.STRING(16),
      allowNull: false,
      defaultValue: ""
    }
  }, {
    sequelize,
    tableName: 'fcEmpTar',
    schema: 'dbo',
    hasTrigger: true,
    timestamps: false,
    indexes: [
      {
        name: "xCodigo_fEmTa",
        unique: true,
        fields: [
          { name: "CodEmpTarjeta" },
        ]
      },
      {
        name: "xDescripcion_fEmTa",
        fields: [
          { name: "DesEmpTarjeta" },
        ]
      },
    ]
  });
};
