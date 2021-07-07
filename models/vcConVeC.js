const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('vcConVeC', {
    CodConVen: {
      type: DataTypes.STRING(4),
      allowNull: false,
      defaultValue: "",
      primaryKey: true
    },
    TipCondi: {
      type: DataTypes.STRING(21),
      allowNull: false,
      defaultValue: ""
    },
    DesCondVend: {
      type: DataTypes.STRING(31),
      allowNull: false,
      defaultValue: ""
    },
    VigenDesde: {
      type: DataTypes.DATE,
      allowNull: true
    },
    VigenHasta: {
      type: DataTypes.DATE,
      allowNull: true
    },
    Habilitada: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: ""
    },
    DefComision: {
      type: DataTypes.STRING(2),
      allowNull: false,
      defaultValue: ""
    },
    PorComision: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    PorDtoMaximo: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    DiaUltVencim: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'vcConVeC',
    schema: 'dbo',
    hasTrigger: true,
    timestamps: false,
    indexes: [
      {
        name: "xCodigo_vCoVC",
        unique: true,
        fields: [
          { name: "CodConVen" },
        ]
      },
      {
        name: "xDescripcion_vCoVC",
        fields: [
          { name: "DesCondVend" },
        ]
      },
      {
        name: "xVigencia",
        fields: [
          { name: "VigenDesde", order: "DESC" },
        ]
      },
    ]
  });
};
