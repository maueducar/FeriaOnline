const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('xgTablasPlaneon', {
    IdRegistro: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    Drive: {
      type: DataTypes.STRING(11),
      allowNull: false,
      defaultValue: ""
    },
    Tabla: {
      type: DataTypes.STRING(26),
      allowNull: false,
      defaultValue: ""
    },
    DescripcionTabla: {
      type: DataTypes.STRING(101),
      allowNull: false,
      defaultValue: ""
    },
    PrefijoCampo: {
      type: DataTypes.STRING(36),
      allowNull: false,
      defaultValue: ""
    },
    Campo: {
      type: DataTypes.STRING(31),
      allowNull: false,
      defaultValue: ""
    },
    DescripcionCampo: {
      type: DataTypes.STRING(101),
      allowNull: false,
      defaultValue: ""
    },
    Tipo: {
      type: DataTypes.STRING(21),
      allowNull: false,
      defaultValue: ""
    },
    Long: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    Decimales: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    FecVersion: {
      type: DataTypes.STRING(13),
      allowNull: false,
      defaultValue: ""
    }
  }, {
    sequelize,
    tableName: 'xgTablasPlaneon',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "xIdRegistro_xgPla",
        unique: true,
        fields: [
          { name: "IdRegistro" },
        ]
      },
    ]
  });
};
