const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('omAsiGCa', {
    VisTransa: {
      type: DataTypes.STRING(15),
      allowNull: false,
      defaultValue: ""
    },
    NumAsient: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    ModAsient: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    ConAsient: {
      type: DataTypes.STRING(31),
      allowNull: false,
      defaultValue: ""
    },
    TipCompro: {
      type: DataTypes.STRING(6),
      allowNull: false,
      defaultValue: ""
    },
    LetCompro: {
      type: DataTypes.STRING(2),
      allowNull: false,
      defaultValue: ""
    },
    PunVenCom: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    NumCompro: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    IdCompro: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    IdRegistro: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    VisCompro: {
      type: DataTypes.STRING(16),
      allowNull: false,
      defaultValue: ""
    },
    FecCompro: {
      type: DataTypes.DATE,
      allowNull: true
    },
    FecContab: {
      type: DataTypes.DATE,
      allowNull: true
    },
    NumLotInte: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    NroIDeMovim: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    Balanceado: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    ImpDebe: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    ImpHaber: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    Cliente: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    Proveedor: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'omAsiGCa',
    schema: 'dbo',
    hasTrigger: true,
    timestamps: false,
    indexes: [
      {
        name: "xBalanceado",
        fields: [
          { name: "Balanceado" },
        ]
      },
      {
        name: "xComprobante_oAsGCa",
        fields: [
          { name: "TipCompro" },
          { name: "LetCompro" },
          { name: "PunVenCom" },
          { name: "NumCompro" },
          { name: "IdCompro" },
        ]
      },
      {
        name: "xFecAsi_PerTra",
        fields: [
          { name: "FecContab" },
        ]
      },
      {
        name: "xIdCompro_oAsGca",
        unique: true,
        fields: [
          { name: "IdCompro" },
          { name: "IdRegistro" },
        ]
      },
      {
        name: "xIDComprob_oAsGCa",
        fields: [
          { name: "IdCompro" },
        ]
      },
      {
        name: "xTransaccion_oAsGCa",
        fields: [
          { name: "VisTransa" },
        ]
      },
    ]
  });
};
