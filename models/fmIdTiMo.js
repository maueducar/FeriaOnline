const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('fmIdTiMo', {
    CodCtaCaja: {
      type: DataTypes.STRING(4),
      allowNull: false,
      defaultValue: "",
      primaryKey: true
    },
    ContConc: {
      type: DataTypes.STRING(41),
      allowNull: false,
      defaultValue: ""
    },
    IdRegistro: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    CodTipMov: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    }
  }, {
    sequelize,
    tableName: 'fmIdTiMo',
    schema: 'dbo',
    hasTrigger: true,
    timestamps: false,
    indexes: [
      {
        name: "xCodigo_fIdTM",
        fields: [
          { name: "CodTipMov" },
        ]
      },
      {
        name: "xCtaTipo_fIdTM",
        unique: true,
        fields: [
          { name: "CodCtaCaja" },
          { name: "CodTipMov" },
          { name: "IdRegistro" },
        ]
      },
    ]
  });
};
