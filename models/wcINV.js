const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('wcINV', {
    INV: {
      type: DataTypes.STRING(16),
      allowNull: false,
      defaultValue: "",
      primaryKey: true
    },
    Direccion: {
      type: DataTypes.STRING(61),
      allowNull: false,
      defaultValue: ""
    },
    UbicacionVinedo: {
      type: DataTypes.STRING(61),
      allowNull: false,
      defaultValue: ""
    },
    CUIT: {
      type: DataTypes.STRING(14),
      allowNull: false,
      defaultValue: ""
    },
    IIB: {
      type: DataTypes.STRING(16),
      allowNull: false,
      defaultValue: ""
    },
    CajaPrvSoc: {
      type: DataTypes.STRING(16),
      allowNull: false,
      defaultValue: ""
    }
  }, {
    sequelize,
    tableName: 'wcINV',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "xINV_wcINV",
        unique: true,
        fields: [
          { name: "INV" },
        ]
      },
    ]
  });
};
