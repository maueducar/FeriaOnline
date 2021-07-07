const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('wcDeducc', {
    CodDeduccion: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    DesDeduccion: {
      type: DataTypes.STRING(31),
      allowNull: false,
      defaultValue: ""
    },
    DesdeTenorAz: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    HastaTenorAz: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    PorVino: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    PorMosto: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    Flag: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: ""
    },
    AlicuotaIVA: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'wcDeducc',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "xCodigo_cDedu",
        unique: true,
        fields: [
          { name: "CodDeduccion" },
        ]
      },
      {
        name: "xDescripcion_cDedu",
        fields: [
          { name: "DesDeduccion" },
        ]
      },
    ]
  });
};
