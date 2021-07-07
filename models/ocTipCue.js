const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ocTipCue', {
    CodTipo: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    DesTipoCuenta: {
      type: DataTypes.STRING(31),
      allowNull: false,
      defaultValue: ""
    }
  }, {
    sequelize,
    tableName: 'ocTipCue',
    schema: 'dbo',
    hasTrigger: true,
    timestamps: false,
    indexes: [
      {
        name: "xCodigo_oTiCu",
        unique: true,
        fields: [
          { name: "CodTipo" },
        ]
      },
      {
        name: "xDescripcion_oTiCu",
        fields: [
          { name: "DesTipoCuenta" },
        ]
      },
    ]
  });
};
