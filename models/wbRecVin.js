const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('wbRecVin', {
    NroRecono: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    Fecha: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    CodTipVino: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    CodVarUva: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    CodCliPro: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    TenAzucarino: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    TotKilos: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    TotLitros: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    LitVinoDedu: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    LitVinoRecono: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    ImpoUnitario: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    Subtotal: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    Comentario1: {
      type: DataTypes.STRING(31),
      allowNull: false,
      defaultValue: ""
    },
    Comentario2: {
      type: DataTypes.STRING(31),
      allowNull: false,
      defaultValue: ""
    },
    IngreEgre: {
      type: DataTypes.STRING(8),
      allowNull: false,
      defaultValue: ""
    },
    CodDeduccion: {
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
    CanDedVino: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    CanDedMosto: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    AlicuotaIVA: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    LitIvaVentas: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    LitIvaCompras: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    TotDeduFinal: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    Thread: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    IdRegistro: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    FactorParaVino: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    FactorParaMosto: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    KilosMosto: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    KilosVino: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    LitrosMosto: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    LitrosVino: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'wbRecVin',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "xCodDeduc_mbReVi",
        fields: [
          { name: "CodDeduccion" },
        ]
      },
      {
        name: "xFechaVino_mbReVi",
        fields: [
          { name: "Fecha" },
          { name: "CodTipVino" },
        ]
      },
      {
        name: "xIdRegistro_mbReVi",
        unique: true,
        fields: [
          { name: "IdRegistro" },
        ]
      },
      {
        name: "xNroRecono_mbReVi",
        fields: [
          { name: "NroRecono" },
        ]
      },
      {
        name: "xTipVinoFecha_mbReVi",
        fields: [
          { name: "CodTipVino" },
          { name: "Fecha" },
        ]
      },
    ]
  });
};
