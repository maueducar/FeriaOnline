const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('omAsiCab', {
    CodCarpeta: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    VisTransa: {
      type: DataTypes.STRING(15),
      allowNull: false,
      defaultValue: "",
      primaryKey: true
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
      defaultValue: 0
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
    Audit_CodUsuario: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    Audit_NomUsuario: {
      type: DataTypes.STRING(26),
      allowNull: false,
      defaultValue: ""
    },
    Audit_Fecha: {
      type: DataTypes.DATE,
      allowNull: true
    },
    Audit_Hora: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    OriModulo: {
      type: DataTypes.STRING(8),
      allowNull: false,
      defaultValue: ""
    },
    OriCodSucurs: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    OriCodPunVen: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    OriNroDeLote: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    IdRegDetalle: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    CodSucurs: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    CodPueTrab: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    MonExt_Cotizacion: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    TotDebe: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    TotHaber: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    MonExtTotDebe: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    MonExtTotHaber: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    TipoAsiento: {
      type: DataTypes.STRING(21),
      allowNull: false,
      defaultValue: ""
    },
    CodModAsie: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    CodCenCos: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    CodCanCos: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'omAsiCab',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "xEjerTransacc",
        unique: true,
        fields: [
          { name: "CodCarpeta" },
          { name: "VisTransa" },
        ]
      },
      {
        name: "xFecAsi_PerTra_oAsCa",
        fields: [
          { name: "CodCarpeta" },
          { name: "FecContab" },
        ]
      },
      {
        name: "xModuloOrigen",
        unique: true,
        fields: [
          { name: "OriModulo" },
          { name: "OriCodSucurs" },
          { name: "OriCodPunVen" },
          { name: "OriNroDeLote" },
          { name: "VisTransa" },
        ]
      },
      {
        name: "xNroLoteIntegra",
        unique: true,
        fields: [
          { name: "CodCarpeta" },
          { name: "NumLotInte" },
          { name: "VisTransa" },
        ]
      },
      {
        name: "xNumAsient",
        fields: [
          { name: "CodCarpeta" },
          { name: "NumAsient" },
        ]
      },
      {
        name: "xPueTraFecha",
        fields: [
          { name: "CodPueTrab" },
          { name: "FecContab" },
        ]
      },
      {
        name: "xSucFecha",
        fields: [
          { name: "CodSucurs" },
          { name: "FecContab" },
        ]
      },
      {
        name: "xTransaccion",
        unique: true,
        fields: [
          { name: "VisTransa" },
        ]
      },
      {
        name: "xUsuario_oAsCa",
        fields: [
          { name: "Audit_CodUsuario" },
          { name: "Audit_Fecha" },
          { name: "Audit_Hora" },
        ]
      },
    ]
  });
};
