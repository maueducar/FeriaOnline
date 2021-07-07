const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('wcTipVino', {
    CodTipVino: {
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
    Precio: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    Clasificacion: {
      type: DataTypes.STRING(7),
      allowNull: false,
      defaultValue: ""
    }
  }, {
    sequelize,
    tableName: 'wcTipVino',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "xCodigo_wTipV",
        unique: true,
        fields: [
          { name: "CodTipVino" },
        ]
      },
      {
        name: "xDescri_wTipV",
        unique: true,
        fields: [
          { name: "Descripcion" },
        ]
      },
    ]
  });
};
