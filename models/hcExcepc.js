const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('hcExcepc', {
    CodExcepcion: {
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
    TipoInforme: {
      type: DataTypes.STRING(11),
      allowNull: false,
      defaultValue: ""
    },
    CodConLiquid: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'hcExcepc',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "xCodigo_hExc",
        unique: true,
        fields: [
          { name: "CodExcepcion" },
        ]
      },
      {
        name: "xDescripcion_hExc",
        unique: true,
        fields: [
          { name: "Descripcion" },
        ]
      },
    ]
  });
};
