const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('fcTiMoBa', {
    CodTipMov: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    Desripcion: {
      type: DataTypes.STRING(21),
      allowNull: false,
      defaultValue: ""
    },
    DebCredito: {
      type: DataTypes.STRING(2),
      allowNull: false,
      defaultValue: ""
    },
    CodCuenta: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    AutConcil: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: ""
    },
    EsCheAnul: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: ""
    }
  }, {
    sequelize,
    tableName: 'fcTiMoBa',
    schema: 'dbo',
    hasTrigger: true,
    timestamps: false,
    indexes: [
      {
        name: "xCodigo_fTiMB",
        unique: true,
        fields: [
          { name: "CodTipMov" },
        ]
      },
      {
        name: "xDescripcion_fTiMB",
        fields: [
          { name: "Desripcion" },
        ]
      },
      {
        name: "xTipoDebCre",
        fields: [
          { name: "DebCredito" },
        ]
      },
    ]
  });
};
