const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('vmComImp', {
    CodTalona: {
      type: DataTypes.STRING(4),
      allowNull: false,
      defaultValue: ""
    },
    CodComVta: {
      type: DataTypes.STRING(4),
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
    VisCompro: {
      type: DataTypes.STRING(16),
      allowNull: false,
      defaultValue: ""
    },
    FecComprob: {
      type: DataTypes.DATE,
      allowNull: true
    },
    CodImpues: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    TipImpues: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: ""
    },
    BasImponible: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    Importe: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    MonExtBasImponible: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    MonExtImporte: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    Id_Registro: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    }
  }, {
    sequelize,
    tableName: 'vmComImp',
    schema: 'dbo',
    hasTrigger: true,
    timestamps: false,
    indexes: [
      {
        name: "xCodImpues_vCoIm",
        fields: [
          { name: "CodImpues" },
        ]
      },
      {
        name: "xComprobante_vCoIm",
        fields: [
          { name: "CodComVta" },
          { name: "LetCompro" },
          { name: "PunVenCom" },
          { name: "NumCompro" },
          { name: "IdCompro" },
          { name: "CodImpues" },
        ]
      },
      {
        name: "xComprobante_vCoIm_2",
        fields: [
          { name: "CodComVta" },
          { name: "LetCompro" },
          { name: "PunVenCom" },
          { name: "NumCompro" },
          { name: "IdCompro" },
        ]
      },
      {
        name: "xIdCompro_vCoIm",
        unique: true,
        fields: [
          { name: "IdCompro" },
          { name: "Id_Registro" },
        ]
      },
      {
        name: "xIdComprob_vCoIm",
        fields: [
          { name: "IdCompro" },
        ]
      },
      {
        name: "xImpuesto_vCoIm",
        fields: [
          { name: "CodImpues" },
          { name: "FecComprob" },
        ]
      },
    ]
  });
};
