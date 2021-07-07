const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('omEsConR', {
    IdEstConta: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    NroOrden: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    Descripcion: {
      type: DataTypes.STRING(41),
      allowNull: false,
      defaultValue: ""
    },
    Mes00: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    Mes01: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    Mes02: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    Mes03: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    Mes04: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    Mes05: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    Mes06: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    Mes07: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    Mes08: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    Mes09: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    Mes10: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    Mes11: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    Mes12: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    Mes99: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    Per_1: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    Per_2: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'omEsConR',
    schema: 'dbo',
    hasTrigger: true,
    timestamps: false,
    indexes: [
      {
        name: "xIdEstConta_oEsRe",
        unique: true,
        fields: [
          { name: "IdEstConta" },
          { name: "NroOrden" },
        ]
      },
      {
        name: "xIdEstConta_oEsRe_2",
        fields: [
          { name: "IdEstConta" },
        ]
      },
    ]
  });
};
