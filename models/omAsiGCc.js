const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('omAsiGCc', {
    VisTransa: {
      type: DataTypes.STRING(15),
      allowNull: false,
      defaultValue: "",
      primaryKey: true
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
      defaultValue: 0
    },
    NumAsient: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    IdeRegAsi: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    CodCenCos: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    FecContab: {
      type: DataTypes.DATE,
      allowNull: true
    },
    Importe: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    Porcentaje: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    DebeHaber: {
      type: DataTypes.STRING(6),
      allowNull: false,
      defaultValue: ""
    },
    IdCompro2: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    CodCuenta: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'omAsiGCc',
    schema: 'dbo',
    hasTrigger: true,
    timestamps: false,
    indexes: [
      {
        name: "xCodCen_FecCon_oAsGCc",
        fields: [
          { name: "CodCenCos" },
          { name: "FecContab" },
          { name: "VisTransa" },
          { name: "IdeRegAsi" },
        ]
      },
      {
        name: "xComprobante_oAsGCc",
        fields: [
          { name: "TipCompro" },
          { name: "LetCompro" },
          { name: "PunVenCom" },
          { name: "NumCompro" },
          { name: "IdCompro" },
        ]
      },
      {
        name: "xIDComprob_oAsGCc",
        fields: [
          { name: "IdCompro" },
        ]
      },
      {
        name: "xTransaccion_CodCen_oAsGCc",
        unique: true,
        fields: [
          { name: "VisTransa" },
          { name: "IdeRegAsi" },
          { name: "CodCenCos" },
        ]
      },
    ]
  });
};
