const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('zcTipCua', {
    CodTipCua: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: "",
      primaryKey: true
    },
    DesTipCua: {
      type: DataTypes.STRING(26),
      allowNull: false,
      defaultValue: ""
    },
    TipoCuarto: {
      type: DataTypes.STRING(2),
      allowNull: false,
      defaultValue: ""
    },
    CodCuentaC: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    CodCuentaV: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'zcTipCua',
    schema: 'dbo',
    hasTrigger: true,
    timestamps: false,
    indexes: [
      {
        name: "xCodigo_zTiCu",
        unique: true,
        fields: [
          { name: "CodTipCua" },
        ]
      },
      {
        name: "xDescripcion_zTiCu",
        fields: [
          { name: "DesTipCua" },
        ]
      },
    ]
  });
};
