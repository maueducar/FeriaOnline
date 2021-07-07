const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('umLiquid', {
    NroLiquidacion: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    EstCerrada: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: ""
    },
    Descripcion: {
      type: DataTypes.STRING(31),
      allowNull: false,
      defaultValue: ""
    },
    CodTipLiq: {
      type: DataTypes.STRING(4),
      allowNull: false,
      defaultValue: ""
    },
    TipePersonal: {
      type: DataTypes.STRING(11),
      allowNull: false,
      defaultValue: ""
    },
    PeriLiquidado: {
      type: DataTypes.STRING(4),
      allowNull: false,
      defaultValue: ""
    },
    FecRefCalculo: {
      type: DataTypes.DATE,
      allowNull: true
    },
    FecDePago: {
      type: DataTypes.DATE,
      allowNull: true
    },
    Estado: {
      type: DataTypes.STRING(16),
      allowNull: false,
      defaultValue: ""
    },
    MarcSeleccion: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: ""
    },
    TipoSeleccion: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: ""
    }
  }, {
    sequelize,
    tableName: 'umLiquid',
    schema: 'dbo',
    hasTrigger: true,
    timestamps: false,
    indexes: [
      {
        name: "xEstCerrada",
        fields: [
          { name: "EstCerrada" },
          { name: "NroLiquidacion" },
        ]
      },
      {
        name: "xFecRefCalc",
        fields: [
          { name: "FecRefCalculo" },
          { name: "NroLiquidacion" },
        ]
      },
      {
        name: "xNroLiq",
        unique: true,
        fields: [
          { name: "NroLiquidacion" },
        ]
      },
      {
        name: "xTipoLiq",
        fields: [
          { name: "CodTipLiq" },
          { name: "NroLiquidacion" },
        ]
      },
      {
        name: "xTipoLiqOnly",
        fields: [
          { name: "CodTipLiq" },
        ]
      },
    ]
  });
};
