const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('vcTraImp', {
    CodImpues: {
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
    TipImpues: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: ""
    },
    TipCalculo: {
      type: DataTypes.STRING(21),
      allowNull: false,
      defaultValue: ""
    },
    ValGeneri: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    MinGraSob: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    CodCuenta: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    Dependencia: {
      type: DataTypes.STRING(21),
      allowNull: false,
      defaultValue: ""
    },
    CodSitIVA: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    CodSitIngBr: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    ItemDeExclusion: {
      type: DataTypes.STRING(101),
      allowNull: false,
      defaultValue: ""
    }
  }, {
    sequelize,
    tableName: 'vcTraImp',
    schema: 'dbo',
    hasTrigger: true,
    timestamps: false,
    indexes: [
      {
        name: "xCodCuenta_vTrIm",
        fields: [
          { name: "CodCuenta" },
        ]
      },
      {
        name: "xCodigo_vTrIm",
        unique: true,
        fields: [
          { name: "CodImpues" },
        ]
      },
      {
        name: "xDescripcion_vTrIm",
        fields: [
          { name: "Descripcion" },
        ]
      },
      {
        name: "xTipImpues_vTrIm",
        fields: [
          { name: "TipImpues" },
        ]
      },
      {
        name: "xTipoImpu_vTrIm",
        fields: [
          { name: "TipImpues" },
          { name: "CodImpues" },
        ]
      },
    ]
  });
};
